# Advent of Code 2022

This is my Advent of Code repo for 2022.

This year, I think I'm trying it in Typescript. There's a lot of leaning on Node.js here, which I'm not familiar with.

I am using VSCode as my IDE of choice.

## Initial Setup
- Install node: `cup nodejs -y` (when using [Chocolatey](https://docs.chocolatey.org))
- Install tsc: `npm install -g typescript`
- Set a VSCode task for transpiling TS: https://code.visualstudio.com/docs/typescript/typescript-compiling#_transpile-typescript-into-javascript
- Set `tsconfig.json` to watch the directory tree so that we don't have to keep rebuilding (Add `watch: true` to `compilerOptions`. This may be an old property since it's not so simple [in the tsconfig docs](https://www.typescriptlang.org/tsconfig))
