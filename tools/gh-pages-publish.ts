const { cd, exec, echo, touch } = require("shelljs")
const { readFileSync } = require("fs")
const url = require("url")

let repoUrl
let pkg = JSON.parse(readFileSync("package.json") as any)
if (typeof pkg.repository === "object") {
  if (!pkg.repository.hasOwnProperty("url")) {
    throw new Error("URL does not exist in repository section")
  }
  repoUrl = pkg.repository.url
} else {
  repoUrl = pkg.repository
}

let parsedUrl = url.parse(repoUrl)
let repository = (parsedUrl.host || "") + (parsedUrl.path || "")
let ghToken = process.env.GH_TOKEN

echo("Deploying docs!!!")
cd("dist/docs")
touch(".nojekyll")
exec("git init")
exec("git add .")
// exec('git config user.name "Henrik Hinrichs"')
// exec('git config user.email "henrik.hinrichs@framefield.com"')
exec('git commit -m "docs(docs): update gh-pages"')
exec(
  `git push --force --quiet git@github.com:sozialhelden/a11yjson.git master:gh-pages`
)
echo("Docs deployed!!")
