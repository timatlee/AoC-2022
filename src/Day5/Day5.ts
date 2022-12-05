import { initial } from "lodash"
import { ReadDataFile } from "../ReadDataFile/ReadDataFile"

function parseDiagram(datas: string[]): [string[][], number[][]]{
    let instructions: number[][] = []
    let state: string[][] = []

    let instructionRegex: RegExp = /^move (\d*) from (\d*) to (\d*)/g

    datas.map((data) => {
        if (data.trim().startsWith("move")) {
            // Instructions
            let instruction: number[] = []
            if (data.trim().length > 0) {
                for (const match of data.matchAll(instructionRegex)) {
                    instruction.push(parseInt(match[1]))
                    instruction.push(parseInt(match[2]))
                    instruction.push(parseInt(match[3]))
                }
                instructions.push(instruction)
            }
        } else {
            // Initial state
            for (var i = 0; i <= data.length; i += 4) {
                if (data[i + 1] !== ' ') {
                    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
                    state[i / 4] = state[i / 4] ?? []
                    if (data[i + 1] !== undefined) {
                        if (!data[i + 1].match(/[0-9]/i)) {
                            state[i / 4].unshift(data[i + 1])
                        }
                    }
                }
            }
        }
    })

    return [state, instructions]
}

export function part1(filename: String): string {
    let datas = ReadDataFile(__dirname + '/' + filename)
    let [initialState, instructions] = parseDiagram(datas)

    instructions.forEach((instruction) => {
        let qty = instruction[0]
        let src = Number(instruction[1])
        let dest = Number(instruction[2])

        // Get the crates we're moving.  -qty gets the number of elements from the end of the array, not the beginning.
        let crates:string[] = initialState[src - 1].slice(-qty)

        // PUsh the crates on to the target queue
        initialState[dest -1].push(...crates.reverse())

        // remove the crate from the source. Array.pop can't accept a value and will only pop 1. This works instead.
        initialState[src-1].length -= qty
    })

    return initialState.map((stack) => stack[stack.length-1]).join('')
}

export function part2(filename: String): string {
    let datas = ReadDataFile(__dirname + '/' + filename)
    let [initialState, instructions] = parseDiagram(datas)

    instructions.forEach((instruction) => {
        let qty = instruction[0]
        let src = Number(instruction[1])
        let dest = Number(instruction[2])

        // Get the crates we're moving.  -qty gets the number of elements from the end of the array, not the beginning.
        let crates:string[] = initialState[src - 1].slice(-qty)

        // PUsh the crates on to the target queue
        initialState[dest -1].push(...crates)

        // remove the crate from the source. Array.pop can't accept a value and will only pop 1. This works instead.
        initialState[src-1].length -= qty
    })

    return initialState.map((stack) => stack[stack.length-1]).join('')
}

console.log(part1("demo.txt"))
console.log(part1("p1.txt"))

console.log(part2("demo.txt"))
console.log(part2("p1.txt"))
