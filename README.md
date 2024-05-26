# eslint-plugin-import-x missed parser repro

1. Install packages with `pnpm install`
2. Run eslint with `pnpm lint`

You will see an error like this:

```
.../epix-parser/src/main.ts
  1:21  error  Parse errors in imported module '@/example': parserPath or languageOptions.parser is required! (undefined:undefined)  import-x/namespace
```
