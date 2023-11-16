# Stylelint v15 bug with styled-components

This repository contains a minimal example to reproduce a bug in `Error: Expected a pseudo-class or pseudo-element`
when using `styled-components` with `stylelint` `v15`.

## Steps to reproduce

- install dependencies with `yarn install`
- run `yarn lint:css` and see error

## Error

```
Error: Expected a pseudo-class or pseudo-element.
    at /stylelint-styled-components-debug/src/Container.Styled.ts:71:3
    at Root._error (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/parser.js:130:16)
    at Root.error (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/selectors/root.js:30:19)
    at Parser.error (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/parser.js:596:21)
    at Parser.expected (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/parser.js:922:19)
    at Parser.pseudo (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/parser.js:728:19)
    at Parser.parse (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/parser.js:884:14)
    at Parser.loop (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/parser.js:853:12)
    at new Parser (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/parser.js:123:10)
    at Processor._root (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/processor.js:40:18)
    at Processor._runSync (/stylelint-styled-components-debug/node_modules/postcss-selector-parser/dist/processor.js:78:21)
error Command failed with exit code 1.
```
