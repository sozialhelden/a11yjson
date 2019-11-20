const fs = require('fs');
const packageJSON = require('../package.json')
const intersperse = require('intersperse');
const { get, includes } = require('lodash');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const marked = require('marked');


function Markdown(props: { inline?: boolean, children: string }) {
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

  const html = props.inline ? marked.inlineLexer(lines, [], {}) : marked(lines);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}


function Header(props: any) {
  return <header style={{ marginBottom: '1rem' }}>{props.children}</header>
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
  return <>
    {<Type object={type} />}[]
  </>;
}

function ArrayType(props: { type: any, name: string, elementType: any }) {
  const type = props.elementType;
  if (!type) {
    return null;
  }
  return <>
    {<Type object={type} />}[]
  </>;
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
  return <>
    {intersperse(types, <code>&nbsp;|&nbsp;</code>)}
  </>;
}

function TupleType(props: { type: any, name: string, elements: any[] }) {
  const elements = props.elements
    .map((t, i) => <Type key={i} object={t} />);
  return <>
    [{intersperse(elements, <code>,&nbsp;</code>)}]
  </>;
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
        <Header><Markdown inline>{get(i, 'comment.shortText')}</Markdown></Header>
        <table>
          {i.children
            .filter((property: any) => get(property, 'comment.shortText') !== 'TODO')
            .map((property: any) => <tr key={property.name}>
            <td style={{ width: '15rem', maxWidth: '15rem', wordBreak: 'break-word' }}><code>{property.name}</code></td>
            <td style={{ width: '15rem', maxWidth: '15rem', wordBreak: 'break-word' }}><code><Type object={property.type} /></code></td>
            <td><Markdown inline>{get(property, 'comment.shortText')}</Markdown></td>
          </tr>)}
        </table>
      </section>;
    });
}

function TypeAliases() {
  return typeAliases.map((alias: any) => {
    return <section>
      <h3><a id={alias.name}>{alias.name}</a></h3>
      <Header><Markdown inline>{get(alias, 'comment.shortText')}</Markdown></Header>
      <section style={{ wordBreak: 'break-word' }}>
        Definition: <Type object={alias.type} />
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

      <meta property="og:title" content="A11yJSON" />
      <meta property="og:site_name" content="A11yJSON" />
      <meta property="og:url" content="https://sozialhelden.github.io/a11yjson/index.html" />
      <meta property="og:description" content="A harmonized data schema for describing the accessibility of physical places." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://raw.githubusercontent.com/sozialhelden/a11yjson/master/A11yJSON%20GitHub%20share%20pic.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sozialhelden" />
      <meta name="twitter:creator" content="@sozialhelden" />
      <meta name="twitter:title" content="A11yJSON" />
      <meta name="twitter:description" content="A harmonized data schema for describing the accessibility of physical places." />
      <meta name="twitter:image" content="https://raw.githubusercontent.com/sozialhelden/a11yjson/master/A11yJSON%20GitHub%20share%20pic.png" />

      <title>A11yJSON attribute documentation</title>
      <style dangerouslySetInnerHTML={{ __html: `
        code {
          font-size: 15px;
        }
      `}}></style>
    </head>
    <body style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      lineHeight: 1.25,
      margin: '3rem',
    }}>
      <code>Version {packageJSON.version}</code>

      <Markdown>{fs.readFileSync('./README.md').toString()}</Markdown>

      <h2>Interfaces</h2>
      <p>
        You can use the following interfaces in your own structured data formats to simplify sharing accessibility data with others.
      </p>
      <Interfaces />

      <h2>Type Aliases</h2>
      <TypeAliases />
    </body>
  </html>;
}


console.log(ReactDOMServer.renderToString(<HtmlRoot />));