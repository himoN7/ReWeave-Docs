# ReWeave public site

GitHub Pages publishes the preview and the user documentation from `docs/`.

Store listing URLs:

- Website: https://himon7.github.io/ReWeave-Docs/
- Privacy policy: https://himon7.github.io/ReWeave-Docs/privacy-policy.html
- Data disclosure: https://himon7.github.io/ReWeave-Docs/data-disclosure.html
- Support: https://himon7.github.io/ReWeave-Docs/support.html
- License terms: https://himon7.github.io/ReWeave-Docs/license.html

Regenerate the guide pages from the app manuals with:

```
npm install marked
node tools/build-docs.js "<app>\docs\user" docs
```
