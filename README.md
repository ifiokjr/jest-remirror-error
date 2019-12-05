# RangeError in jest-remirror

This is an attempt at a minimal remirror setup to test extensions. An error is thrown from `jest-remirror` when 
attempting to use the demo spec from its [readme](https://github.com/ifiokjr/remirror/tree/canary/packages/jest-remirror#example).

```bash
yarn
yarn test
```

yields the following error:
```
RangeError: Schema is missing its top node type ('doc')

import { renderEditor } from "jest-remirror"
        | ^
      2 | import { EmojiExtension } from "@remirror/extension-emoji"
      3 | 
      4 | test("emoticons replaced with emoji", () => {

      at Function.compile (node_modules/prosemirror-model/src/schema.js:208:33)
      at Object.<anonymous> (example.spec.ts:1:1)
```

Created for [issue #180](https://github.com/ifiokjr/remirror/issues/180).
