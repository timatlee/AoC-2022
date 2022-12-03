# Advent of Code 2022

This is my Advent of Code repo for 2022.

This year, I think I'm trying it in Typescript. There's a lot of leaning on Node.js here, which I'm not familiar with.

I am using VSCode as my IDE of choice.

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

## Notes!

### Reading Files

Last AoC, we had to read data from files, then do something with it. So..  it's time to learn how to make a small function / module to handle that for me.  That's what `ReadDataFile` does.

### Unit Testing

When I did this in Go last year (and Powershell a few years back), I also took it as an opportunity to learn the unit testing framework for the language.

This year, with TypeScript, the unit testing framework that's common used is Jest. The syntax is pretty clear, and carries some similar language as PowerShell's Pester, so it's ..  not too foreign.  Sort of.

### Walk-throughs, tutorials, etc.

L asked about doing AoC. I sent a reference to setting up VSCode with Python, and found https://www.competitivecoders.com/ProgrammingCompetitions/advent-of-code/advent-of-code/2022/ which lists YouTube solutions and webcasts of the problems.  I wound up referring him to https://www.youtube.com/channel/UCrPkSmMdTzd4E1E3S7pCxjg, which seemed to be more of a walkthrough to solve the problem.



