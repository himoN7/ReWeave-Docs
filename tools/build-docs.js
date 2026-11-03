const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const srcDir = process.argv[2];
const outDir = process.argv[3];

marked.setOptions({ gfm: true, breaks: false });

function chrome(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} · ReWeave</title>
  <link rel="icon" href="assets/images/app_icon.png" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <a class="brand" href="./"><img class="mark" src="assets/brand/rezephyr-mark.svg" alt="" /> ReZephyr</a>
    <span class="rule" aria-hidden="true"></span>
    <a class="brand" href="./"><img src="media/logo.png" alt="" width="28" height="28" /> ReWeave</a>
    <nav aria-label="Documentation">
      <a href="00-INDEX.html">Docs</a>
      <a href="privacy-policy.html">Privacy</a>
      <a href="support.html">Support</a>
    </nav>
    <span class="spacer"></span>
    <a class="soon" href="./">Home</a>
  </header>
  <main class="page">
${body}
  </main>
  <footer>
    <a href="00-INDEX.html">Documentation</a>
    <span><a href="privacy-policy.html">Privacy</a> · <a href="data-disclosure.html">Data</a> · <a href="support.html">Support</a> · <a href="license.html">License</a></span>
  </footer>
</body>
</html>
`;
}

const files = fs.readdirSync(srcDir).filter((name) => name.endsWith(".md") && !name.startsWith("_"));
for (const name of files) {
  let md = fs.readFileSync(path.join(srcDir, name), "utf8");
  if (name === "00-INDEX.md") {
    md += `

## On this site

- [Privacy policy](privacy-policy.md)
- [Data disclosure](data-disclosure.md)
- [Support](support.html)
- [License terms](license.html)
- [Export formats](14-EXPORT-FORMATS.md)
- [Settings](15-SETTINGS-REFERENCE.md)
- [Keyboard shortcuts](16-KEYBOARD-SHORTCUTS.md)
- [Physics models](17-PHYSICS-MODELS.md)
- [Features](13-FEATURES-COMPLETE.md)
- [Platform deployment](19-PLATFORM-DEPLOYMENT.md)
`;
  }
  md = md.replace(/\]\(([^)\s]+)\.md(#[^)\s]*)?\)/g, "]($1.html$2)");
  const heading = md.match(/^#\s+(.+)$/m);
  const title = heading ? heading[1].replace(/[*_`]/g, "") : name.replace(/\.md$/, "");
  const html = chrome(title, marked.parse(md));
  const outName = name.replace(/\.md$/, ".html");
  fs.writeFileSync(path.join(outDir, outName), html);
  console.log(outName);
}
