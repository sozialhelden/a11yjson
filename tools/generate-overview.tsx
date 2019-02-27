const fs = require('fs');
const packageJSON = require('../package.json')
const intersperse = require('intersperse');
const { get, includes } = require('lodash');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const marked = require('marked');


function Markdown(props: { children: string }) {
  const firstLineWithContent = props.children && props.children
    .split(/\n/)
    .find(line => line.replace(/\s/, '').length > 0);

  if (!firstLineWithContent) {
    return null;
  }

  const firstIndentationMatches = firstLineWithContent.match(/^\s+/);
  const firstIndentation = firstIndentationMatches && firstIndentationMatches[0];

  const indentation = new RegExp(`^${firstIndentation}`);

  const lines = firstIndentation ? props.children && props.children
    .split(/\n/)
    .map(line => line.replace(indentation, ''))
    .join('\n') : props.children;

  return <span dangerouslySetInnerHTML={{ __html: marked.inlineLexer(lines, [], {}) }} />;
}

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
.filter((t: any) =>
  !includes([
    'AccessibilitySchemaExtension',
    'ForEachKeyInSchemasCallbackFunction',
    'QuestionFunction',
    'QuestionValue',
  ], t.name)
);

function ArrayLikeType(props: { type: any, name: string, typeArguments: any[] }) {
  const type = props.typeArguments[0];
  if (!type) {
    return null;
  }
  return <span>
    {<Type object={type} />}[]
  </span>;
}

function ArrayType(props: { type: any, name: string, elementType: any }) {
  const type = props.elementType;
  if (!type) {
    return null;
  }
  return <span>
    {<Type object={type} />}[]
  </span>;
}

function ReferenceType(props: { type: any, name: string, typeArguments: any[], elementType: any }) {
  if (props.name === 'ArrayLike' || props.name === 'Array') {
    return <ArrayLikeType {...props} />;
  }
  if (props.type === 'array') {
    return <ArrayType {...props} />;
  }
  return <a href={`#${props.name}`}>{props.name}</a>
}

function IntrinsicType(props: { type: any, name: string }) {
  return <code>{props.name}</code>
}

function ReflectionType(props: { type: any, declaration: string }) {
  return <pre>{JSON.stringify(props.declaration, null, 2)}</pre>;
}

function StringLiteralType(props: { type: any, value: string }) {
  return <code>"{props.value}"</code>
}


function UnionType(props: { type: any, name: string, types: any[] }) {
  const types = props.types
    .filter(t => t.name !== 'undefined')
    .map((t, i) => <Type key={i} object={t} />);
  return <span>
    {intersperse(types, <code>&nbsp;|&nbsp;</code>)}
  </span>;
}

function TupleType(props: { type: any, name: string, elements: any[] }) {
  const elements = props.elements
    .map((t, i) => <Type key={i} object={t} />);
  return <span>
    [{intersperse(elements, <code>,&nbsp;</code>)}]
  </span>;
}

function Type(props: { object: any }) {
  return {
    reference: <ReferenceType {...props.object} />,
    union: <UnionType {...props.object} />,
    intrinsic: <IntrinsicType {...props.object} />,
    stringLiteral: <StringLiteralType {...props.object} />,
    array: <ArrayType {...props.object} />,
    tuple: <TupleType {...props.object} />,
    reflection: <ReflectionType {...props.object} />,
  }[props.object.type] || <span>{JSON.stringify(props.object)}</span>;
}

function Interfaces() {
  return interfaces
    .map((i: any) => {
      return <section>
        <h3><a id={i.name}>{i.name}</a></h3>
        <header><Markdown>{get(i, 'comment.shortText')}</Markdown></header>
        <table>
          {i.children
            .filter((property: any) => get(property, 'comment.shortText') !== 'TODO')
            .map((property: any) => <tr key={property.name}>
            <td style={{ width: '15rem', maxWidth: '15rem' }}><code>{property.name}</code></td>
            <td style={{ width: '10rem', maxWidth: '10rem' }}><code><Type object={property.type} /></code></td>
            <td><Markdown>{get(property, 'comment.shortText')}</Markdown></td>
          </tr>)}
        </table>
      </section>;
    });
}

function TypeAliases() {
  return typeAliases.map((alias: any) => {
    return <section>
      <h3><a id={alias.name}>{alias.name}</a></h3>
      <header><Markdown>{get(alias, 'comment.shortText')}</Markdown></header>
      <section>
        Definition: <code><Type object={alias.type} /></code>
      </section>
    </section>;
  });
}

function HtmlRoot() {
  return <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>A11yJSON attribute documentation</title>
    </head>
    <body style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      lineHeight: 1.25,
    }}>
      <h1><code>A11yJSON</code> attribute documentation</h1>
      <h2>{packageJSON.version}</h2>
      <h2>Interfaces</h2>
      <Interfaces />
      <h2>Type Aliases</h2>
      <TypeAliases />
    </body>
  </html>;
}


console.log(ReactDOMServer.renderToString(<HtmlRoot />));