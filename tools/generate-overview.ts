const fs = require('fs');
const packageJSON = require('../package.json')
const intersperse = require('intersperse');
const { get, includes } = require('lodash');
const table = require('markdown-table')
const marked = require('marked');

const json = JSON.parse(fs.readFileSync('./dist/typedoc-output.json').toString())

const interfaces = json.children.filter((c: any) => {
  return c.kindString === 'Interface';
})
.filter((t: any) =>
  !includes([
    'AccessibilitySchemaExtension',
    'EvaluatedAccessibilitySchemaExtension',
  ], t.name)
);


const typeAliases = json.children.filter((c: any) => {
  return c.kindString === 'Type alias';
})
.filter((t: any) => {
  if (includes([
    'AccessibilitySchemaExtension',
    'ForEachKeyInSchemasCallbackFunction',
    'QuestionFunction',
    'QuestionValue',
  ], t.name)) {
    return false;
  }
  return true;
}

);

function TableFromArray(array: Array<Array<string>>) {
  let result = "<table>";
  for(let i=0; i<array.length; i++) {
      result += "<tr>";
      for(let j=0; j<array[i].length; j++){
          result += `<td>${array[i][j]}</td>`;
      }
      result += "</tr>";
  }
  result += "</table>";

  return result;
}

function ArrayLikeType(props: { type: any, name: string, typeArguments: any[] }): string {
  const type = props.typeArguments[0];
  if (!type) {
    return '';
  }
  return `${Type({ object: type })}[]`;
}

function ArrayType(props: { type: any, name: string, elementType: any }): string {
  const type = props.elementType;
  if (!type) {
    return '';
  }
  return `${Type({ object: type })}[]`;
}

function ReferenceType(props: { type: any, name: string, typeArguments: any[], elementType: any }): string {
  if (props.name === 'ArrayLike' || props.name === 'Array') {
    return ArrayLikeType(props);
  }
  if (props.type === 'array') {
    return ArrayType(props);
  }
  return `<a href="#${props.name}">${props.name}</a>`;
}

function IntrinsicType(props: { type: any, name: string }): string {
  return `<code>${props.name}</code>`;
}

function ReflectionType(props: { type: any, declaration: string }): string {
  return `<pre>${JSON.stringify(props.declaration, null, 2)}</pre>`;
}

function StringLiteralType(props: { type: any, value: string }): string {
  return `<code>"${props.value}"</code>`
}

function UnionType(props: { type: any, name: string, types: any[] }): string {
  if (!props.types) {
    return '';
  }
  const types = props.types.filter(t => t.name !== 'undefined')
    .map((t, i) => Type({ object: t }));
  return types.join(`&nbsp;|&nbsp;`);
}

function TupleType(props: { type: any, name: string, elements: any[] }): string {
  if (!props.elements) {
    return '';
  }
  const elements = props.elements.map((t, i) => Type({ object: t }));
  return elements.join(`,&nbsp;`);
}

function Type(props: { object: any }): string {
  return {
    reference: ReferenceType(props.object),
    union: UnionType(props.object),
    intrinsic: IntrinsicType(props.object),
    stringLiteral: StringLiteralType(props.object),
    array: ArrayType(props.object),
    tuple: TupleType(props.object),
    reflection: ReflectionType(props.object),
  }[props.object.type] || JSON.stringify(props.object);
}

function Interface(i: any): string {
  return `### <a id="${i.name}">${i.name}</a>

  ${get(i, 'comment.shortText') || ''}

  ${TableFromArray(
    [['Name', 'Type', '']].concat(i.children
      .filter((property: any) => get(property, 'comment.shortText') !== 'TODO')
      .map((property: any) => [
        `${property.name}`,
        `${Type({object: property.type})}`,
        marked(get(property, 'comment.shortText') || '')
      ]))
  )}
  `
}

function Interfaces() {
  return `# Interfaces - things you can describe with A11yJSON

This is a list of data structures that A11yJSON specifies.

They are meant to be interfaces in the software development sense: This means you can either use
them as they are, or mix them into your own entity definitions.

  ${interfaces.map(Interface).join('\n\n')}
`;
}

function TypeAliases() {
  return `# Type Aliases

Besides [interfaces](./3-interfaces.md], A11yJSON defines the following bare types.

Some lack proper formatting in the documentation. Fixes in [\`tools/generate-overview.ts\`](https://github.com/sozialhelden/a11yjson/blob/master/tools/generate-overview.ts) are welcome!

` + typeAliases.map((alias: any) =>

`### <a id="${alias.name}">${alias.name}</a>

${get(alias, 'comment.shortText') || ''}

Definition: ${Type({ object: alias.type })}

`).join('\n\n');
}

fs.writeFileSync('docs/3-interfaces.md', Interfaces());

fs.writeFileSync('docs/4-type-aliases.md', TypeAliases());
