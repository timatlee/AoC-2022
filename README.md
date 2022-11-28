# Advent of Code 2022

This is my Advent of Code repo for 2022.

This year, I think I'm trying it in Typescript. There's a lot of leaning on Node.js here, which I'm not familiar with.

I am using VSCode as my IDE of choice. I have added the `Jest`, `Jest Test Explorer`, `Test Explorer UI` and the `JavaSCript and TypeScript` extensions.

## Initial Setup
- Install node: `cup nodejs -y` (when using [Chocolatey](https://docs.chocolatey.org))
- `npm init -y`
- `npm i -D typescript`
- `npm i -D jest ts-jest @types/jest`
- `npx ts-jest config:init`
- Set `package.json` scripts property:
```json
  "scripts": {
    "build": "tsc",
    "test": "jest"
  }
```

## Subsequent Setup
- Clone the repo
- `npm install`
- Start Jest runners - VSCode command pallet `Jest: Start All Runners`
- Start tsc watch - VSCode command pallet `Tasks: Configure Tasks`, choose `tsc watch`.
