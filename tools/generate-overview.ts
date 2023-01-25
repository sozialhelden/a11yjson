import fs from "fs";
import packageJSON from "../package.json";
import lodashPackage from "lodash";
import { marked } from "marked";

const { get, includes, isEqual } = lodashPackage;

const json = JSON.parse(fs.readFileSync("./dist/typedoc-output.json").toString());
const prefix = 'docs/describing-objects/';

type ConjunctionType = "and" | "or";

type ConjunctionMap<T> = {
  and?: {
    withSerialComma: T;
    withoutSerialComma: T;
  };
  or?: {
    withSerialComma: T;
    withoutSerialComma: T;
  };
};

const conjunctionMap: ConjunctionMap<string> = {
  or: {
    // translator: In a comma-separated serial enumeration, this string is the ', or' conjunction before the last word, with a serial comma at the beginning if the language has a serial comma (https://en.wikipedia.org/wiki/Serial_comma).
    withSerialComma: `, or `,
    // translator: Conjunction between two words (like the ‘or’ in ‘humans or animals’). Please don't forget to include necessary spaces.
    withoutSerialComma: ` or `,
  },
  and: {
    // translator: In a comma-separated serial enumeration, this string is the ', and' conjunction before the last word, with a serial comma at the beginning if the language has a serial comma (https://en.wikipedia.org/wiki/Serial_comma).
    withSerialComma: `, and`,
    // translator: Conjunction between two words (like the ‘and’ in ‘humans and animals’). Please don't forget to include necessary spaces.
    withoutSerialComma: ` and `,
  },
};

function getHumanEnumeration(
  elements: string[],
  conjunctionType: ConjunctionType = "and"
): string {
  if (!elements) return "";

  const count = elements.length;

  if (count === 0) {
    return "";
  }

  if (count === 1) {
    return elements[0];
  }

  if (count === 2) {
    const firstElement = elements[0];
    const secondElement = elements[1];
    const conjunction = conjunctionMap[conjunctionType]!.withoutSerialComma;
    return [firstElement, conjunction, secondElement].join(" ");
  }

  const lastElement = elements[elements.length - 1];
  const elementsBeforeLastElement = elements.slice(0, elements.length - 1);
  const commaJoinedElements = elementsBeforeLastElement.reverse().join(", ");
  const conjunction = conjunctionMap[conjunctionType]!.withSerialComma;
  return [commaJoinedElements, conjunction, lastElement].join(" ");
}


const childrenById = new Map(
  json.children.map((i: any) => {
    return [i.id, i];
  })
);

function isInterface(object: any) {
  return object.kindString === "Interface";
}

function isTypeAlias(object: any) {
  return object.kindString === "Type alias";
}

function isConstant(object: any) {
  return object.kindString === "Variable" && object.flags.isConst;
}

const interfaces = json.children
  .filter(isInterface);

const typeAliases = json.children
  .filter(isTypeAlias)
  .filter((t: any) => {
    if (
      includes(
        [
          "AccessibilitySchemaExtension",
          "ForEachKeyInSchemasCallbackFunction",
        ],
        t.name
      )
    ) {
      return false;
    }
    return true;
  });

const constants = json.children
  .filter(isConstant);

function convertLinkTagsToAnchors(text: string): string {
  return text.replace(/\{@link (.*?)\}/g, (match, p1) => {
    return `<a href="#${p1}">${p1}</a>`;
  });
}

function TableFromArray(array: string[][], columnClasses: string[]) {
  let result = "<table>";
  for (let i = 0; i < array.length; i++) {
    result += "<tr>";
    const tag = i === 0 ? "th" : "td";
    for (let j = 0; j < array[i].length; j++) {
      result += `<${tag} class="${columnClasses[j]}">${array[i][j]}</${tag}>`;
    }
    result += "</tr>";
  }
  result += "</table>";

  return result;
}

function GenericType(props: { type: any; name: string; typeArguments: any[] }): string {
  if (!props.typeArguments[0]) {
    return "";
  }

  if (props.name === 'Partial') {
    // Objects that are partial are undocumented, it's enough that the type checker works for them.
    return Type({ object: props.typeArguments[0] });
  }
  if (props.name === 'Record') {
    const keysAreUnionOfLiteralStrings = props.typeArguments[0].type === 'union' &&
      props.typeArguments[0].types?.every((type: any) => type.type === 'literal' && typeof type.value === 'string');

    const keyMarkdown = keysAreUnionOfLiteralStrings
      ? props.typeArguments[0].types.map((t: any) => t.value).sort().map((t: any) => `<code>${t}</code>`).join('\n\n')
      : Type({ object: props.typeArguments[0] });
    return `
Object with one or more of these keys:

<p class="grid">
${keyMarkdown}
</p>

Values must be of type ${Type({ object: props.typeArguments[1] })}.
`;
  }
  return `${props.name}&lt;${props.typeArguments.map(type => Type({ object: type }))}&gt;`;
}

function ArrayType(props: { type: any; name: string; elementType: any }): string {
  if (!props.elementType) {
    return "";
  }
  const elementsAreUnionOfLiteralStrings = props.elementType.type === 'union' && props.elementType.types?.every((type: any) => type.type === 'literal' && typeof type.value === 'string');
  if (elementsAreUnionOfLiteralStrings) {
    return `Array of one or more of these strings:

<p class='grid'>
${props.elementType.types.map((t: any) => t.value).sort().map((s: any) => `<code>${s}</code>`).join('\n\n')}
</p>
`;
  }
  return `${Type({ object: props.elementType })}[]`;
}

function ReferenceType(props: {
  type: any;
  name: string;
  typeArguments: any[];
  elementType: any;
  package: string;
  qualifiedName: string;
}): string {
  if (props.typeArguments) {
    return GenericType(props);
  }
  if (props.type === "array") {
    return ArrayType(props);
  }

  if (props.name === 'LocalizedString') {
    return `<a href="../i18n">LocalizedString</a>`;
  }

  if (props.package && props.package !== packageJSON.name && props.package !== 'typescript') {
    return `\`${props.qualifiedName}\` from the [\`${props.package}\` NPM package](https://www.npmjs.com/package/${props.package}).`;
  }

  if (isConstant(props)) {
    return `<a href="../constants/#${props.name}">${props.name}</a>`;
  }

  if (isTypeAlias(props)) {
    return `<a href="../type-aliases/#${props.name}">${props.name}</a>`;
  }

  if (isInterface(props)) {
    return `<a href="../interfaces/#${props.name}">${props.name}</a>`;
  }

  return `<a href="#${props.name}">${props.name}</a>`;
}

function QueryType(props: {
  queryType: any;
}) {
  const child = childrenById.get(props?.queryType?.id);
  if (!child) {
    return `Could not query type from \`${JSON.stringify(props)}\`.`;
  }

  return Type({ object: (child as any).type });
}

function TypeOperator(props: {
  type: any;
  operator: string;
  target: any;
}): string {
  try {
    if (props.target) {
      const typeMarkdown = Type({ object: props.target });
      const operatorName = {
        "keyof": "Key of",
        "readonly": "Read-only"
      }[props.operator] || props.operator;
      return `${operatorName} ${typeMarkdown}`;
    }

    return `
      <div class="admonition admonition-warning">
        <p class="admonition-title">Don't know how to parse this</p>
        <pre>${JSON.stringify(props, null, 2)}</pre>
      </div>
    `;
  }
  catch (e) {
    console.log('Error while trying to render type operator', props, ':');
    console.log(e);
    console.log('\n');
    return `
    <pre>${JSON.stringify(e, null, 2)}</pre> ${JSON.stringify(props)}
    `;
  }
}

function IntrinsicType(props: { type: any; name: string }): string {
  return `<code>${props.name}</code>`;
}

function ReflectionType(props: { type: any; declaration: string }): string {
  return `<pre>${JSON.stringify(props.declaration, null, 2)}</pre>`;
}

function StringLiteralType(props: { type: any; value: string }): string {
  return `<code>"${props.value}"</code>`;
}

function LiteralType(props: { type: any; value: string }): string {
  return `<code>${props.value === null ? "undefined" : JSON.stringify(props.value)}</code>`;
}

function BooleanType(props: { type: any; declaration: string }): string {
  return `<code>boolean</code>`;
}

function UnionType(props: { type: any; name: string; types: any[] }): string {
  if (!props.types) {
    return "";
  }
  const types = props.types.map((t, i) => Type({ object: t }));
  const elementsAreUnionOfLiteralStrings = props.types.every((type: any) => type.type === 'literal' && typeof type.value === 'string');
  if (elementsAreUnionOfLiteralStrings) {
    return `One of the following strings:

<p class='grid'>
${props.types.map((t: any) => t.value).sort().map((t: any) => `<code>${t}</code>`).join('\n\n')}
</p>
`;
  }
  return types.join(`&nbsp;|&nbsp;`);
}

function TupleType(props: { type: any; name: string; elements: any[] }): string {
  if (!props.elements) {
    return "";
  }
  const allElementsAreLiteralStrings = props.elements.every((e: any) => e.type === "literal" && typeof e.value === 'string');
  const elements = allElementsAreLiteralStrings ?
    props.elements.map((t, i) => `<code>${t.value}</code>`) :
    props.elements.map((t, i) => Type({ object: t }));
  const elementList = elements.map(element => `<li>${element}</li>`).join('\n\n');
  const allElementsAreTheSameType = elements.every((e, i) => isEqual(e, elements[0]));
  if (allElementsAreTheSameType) {
    return `tuple with ${elements.length} ${elements[0]} elements`;
  }
  return `tuple with ${elements.length} ${allElementsAreLiteralStrings ? 'strings' : 'elements'}:
<ul>
${elementList}
</ul>
`;
}

function IndexedAccessType(props: { type: any; name: string; indexType: any; objectType: any }): string {
  if (!props.indexType || !props.objectType) {
    return "";
  }

  if (props.indexType.type === 'intrinsic' && props.indexType.name === 'number') {
    if (props.objectType.type === 'query') {
      const object = childrenById.get(props.objectType?.queryType?.id) as { type?: { type: string, operator?: string, target?: { elements?: any[], type?: string } } };
      if (object && isConstant(object)) {
        if (object.type?.type === 'typeOperator' && object.type.operator === 'readonly' && object.type.target) {
          if (object.type.target.type === 'tuple' && object.type.target.elements) {
            const allElementsAreLiteralStrings = object.type.target.elements.every((e: any) => e.type === "literal" && typeof e.value === 'string');
            const elements = allElementsAreLiteralStrings ?
              object.type.target.elements.map((t) => `\`${t.value}\``) :
              object.type.target.elements.map((t) => Type({ object: t }));
            const elementList = elements.map(element => `- ${element}`).join('\n\n');
            return `one of the following ${allElementsAreLiteralStrings ? 'strings' : 'elements'}:\n\n${elementList}`;
          }
        }
      }
    }
  }

  return `${Type({ object: props.objectType })}[${Type({ object: props.indexType })}]`;
}

function Type(props: { object: any, property?: any, queryType?: any }): string {
  try {
    return (
      {
        reference: ReferenceType(props.object),
        union: UnionType(props.object),
        intrinsic: IntrinsicType(props.object),
        stringLiteral: StringLiteralType(props.object),
        literal: LiteralType(props.object),
        array: ArrayType(props.object),
        tuple: TupleType(props.object),
        reflection: ReflectionType(props.object),
        boolean: BooleanType(props.object),
        indexedAccess: IndexedAccessType(props.object),
        typeOperator: TypeOperator(props.object),
        query: QueryType(props.object),
      }[props.object.type] || (props.property ? JSON.stringify(props.property) : JSON.stringify(props.object))
    );
  } catch(e) {
    console.error('Error while building docs for type with props:', props);
    throw e;
  }
}

function PropertyName(property: any) {
  const firstDeprecationTag = get(property, "comment.tags")?.find((t: any) => t.tag === "deprecated");
  return firstDeprecationTag ? `{--${property.name}--}` : `${property.name}${property.flags?.isOptional ? '' : '*'}`;
}

function Tags(tags: any) {
  if (!tags || tags.length === 0) {
    return null;
  }

  const tagTypes = {
    "deprecated": {
      type: "warning",
      name: "Deprecated",
    },
    "see": {
      type: "info",
      name: "See also",
    },
    "example": {
      type: "info",
      name: "Example",
    },
  };

  const tagsMarkdown = tags.map((tag: any) => {
    const tagType = tagTypes[tag.tag];
    const markdown = `
      <div class="admonition ${tagType.type}">
        <p class="admonition-title">${tagType.name}</p>
        ${marked(convertLinkTagsToAnchors(tag.text))}
      </div>
    `;
    return markdown;
  });

  return tagsMarkdown.filter(Boolean).join(`\n\n`);
}

function Summary(summary: any[]) {
// summary has a form like this:
  // {
  //   "kind": "text",
  //   "text": "An object that indicates how the object can be interacted with.\n\nThe keys of this object are the interaction types, and the values are "
  // },
  // {
  //   "kind": "code",
  //   "text": "someCodeElement"
  // },
  // {
  //   "kind": "inline-tag",
  //   "tag": "@link",
  //   "text": "InteractionMode",
  //   "target": 361
  // },
  // {
  //   "kind": "text",
  //   "text": "\nobjects."
  // }

  // Concatenate the text from code/text elements and and create links for inline-tag elements.
  const summaryText = summary?.map((s: any) => {
    if (s.kind === 'text' || s.kind === 'code') {
      return s.text;
    } else if (s.kind === 'inline-tag' && s.tag === '@link') {
      const linkTarget = childrenById.get(s.target) as any;
      if (linkTarget) {
        return ReferenceType(linkTarget);
        // return `[${s.text}](${linkTarget.sources[0].fileName}#${linkTarget.name})`;
      }
    }
    return '';
  }).join('');

  return summaryText && marked(summaryText);
}

function PropertyDescription(property: any) {
  const summary = get(property, "comment.summary");
  const tagMarkdown = Tags(get(property, "comment.tags"));
  const summaryText = Summary(summary);
  return [summaryText, tagMarkdown].filter(Boolean).join(`\n\n`);
}

function Interface(i: any): string {
  const count = i.children.length;
  const optionalCount = i.children.filter((child: any) => child.flags?.isOptional).length;
  const requiredCount = count - optionalCount;
  const requiredProperties = i.children.filter((child: any) => !child.flags?.isOptional);

  return `### <a id="${i.name}">${i.name}</a>

  ${i.sources?.length && `${SourceLinkList(i.sources)}`}

  ${Summary(get(i, "comment.summary")) || ""}

  ${requiredCount === 1 ? `The \`${requiredProperties[0].name}\` property is required.` : ""}
  ${requiredCount > 1 ? `${getHumanEnumeration(requiredProperties.map((c: any) => `\`${c.name}\``), 'and')} properties are required.` : ""}

  ${TableFromArray(
    [["Name", "Type", ""]].concat(
      i.children
        .filter((property: any) => get(property, "comment.summary") !== "TODO")
        .map((property: any) => [
          PropertyName(property),
          `${Type({ object: property.type, property })}`,
          PropertyDescription(property),
          // JSON.stringify(property),
        ])
    ),
    ["property-name", "property-type", "property-docs"]
  )}

  `;
}

function Styles() {
  return `<style>
    .source-link {
      float: right;
    }
  </style>`;
}
function SourceLink(source: any) {
  return `<span class='source-link'>[:fontawesome-solid-code:](https://github.com/sozialhelden/a11yjson/blob/main/src/${source.fileName}#L${source.line})</span>`;
}

function SourceLinkList(sources: any) {
  return sources.map(SourceLink).join(", ");
}

function JSONSummary(object: any) {
  return `
<details>
<summary>JSON</summary>
\`\`\`json
${JSON.stringify(object, null, 2)}
\`\`\`
</details>
`;
}

function Interfaces() {
  return `# Interfaces

${Styles()}

This is a list of data structures that A11yJSON specifies.

They are meant to be interfaces in the software development sense: This means you can either use
them as they are, or mix them into your own entity definitions.

${interfaces.map(Interface).join("\n\n")}
`;
}

function TypeAliases() {
  return (
    `# Type Aliases

${Styles()}

Besides [interfaces](./interfaces.md) and [constants](./constants.md), A11yJSON defines the following bare types.

Some lack proper formatting in the documentation. Fixes in [\`tools/generate-overview.ts\`](https://github.com/sozialhelden/a11yjson/blob/master/tools/generate-overview.ts) are welcome!

` +
    typeAliases
      .map(
        (alias: any) =>
          `### <a id="${alias.name}">${alias.name}</a>

${alias.sources?.length && `${SourceLinkList(alias.sources)}`}

${Summary(get(alias, "comment.summary")) || ""}

Definition: ${Type({ object: alias.type })}

`
      )
      .join("\n\n")
  );
}



function Constants() {
  return (
    `# Constants

${Styles()}

Besides [interfaces](./interfaces.md) and [bare types](./type-aliases.md), A11yJSON defines the following constants.

Some lack proper formatting in the documentation. Fixes in [\`tools/generate-overview.ts\`](https://github.com/sozialhelden/a11yjson/blob/master/tools/generate-overview.ts) are welcome!

` +
    constants
      .map(
        (alias: any) =>
          `### <a id="${alias.name}">${alias.name}</a>

${alias.sources?.length && `${SourceLinkList(alias.sources)}`}

${Summary(get(alias, "comment.summary")) || ""}

${Type({ object: alias.type })}
`
      )
      .join("\n\n")
  );
}


fs.writeFileSync(`${prefix}interfaces.md`, Interfaces());

fs.writeFileSync(`${prefix}type-aliases.md`, TypeAliases());

fs.writeFileSync(`${prefix}constants.md`, Constants());
