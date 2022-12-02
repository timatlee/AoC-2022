import { ReadDataFile } from "../ReadDataFile/ReadDataFile"

// Opponent
// A: Rock.
// B: Paper
// C: Scissors

// Me
// X: Rock, 1
// Y: Paper, 2
// Z: Scissors, 3

// Win: 6
// Draw: 3
// Loss: 0
const part1WinState = (entry: string): number => {
    switch (entry) {
        case "A X": return 3 + 1
        case "A Y": return 6 + 2
        case "A Z": return 3 + 0
        case "B X": return 1 + 0
        case "B Y": return 2 + 3
        case "B Z": return 3 + 6
        case "C X": return 1 + 6
        case "C Y": return 2 + 0
        case "C Z": return 3 + 3
    }
    return -1
}

// Opponent
// A: Rock.
// B: Paper
// C: Scissors

// Me
// X: Lose, 0
// Y: Draw, 3
// Z: Win, 6
const part2WinState = (entry: string): number => {
    switch (entry) {
        case "A X": return 3 + 0
        case "A Y": return 1 + 3
        case "A Z": return 2 + 6
        case "B X": return 1 + 0
        case "B Y": return 2 + 3
        case "B Z": return 3 + 6
        case "C X": return 2 + 0
        case "C Y": return 3 + 3
        case "C Z": return 1 + 6
    }
    return -1
}

export function Day2p1(filename: string): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let totalScore: number = 0
    for (var i: number = 0; i < datas.length; i++) {
        let score = part1WinState(datas[i].trim())

        totalScore += score
    }
    return totalScore
}

export function Day2p2(filename: string): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let totalScore: number = 0
    for (var i: number = 0; i < datas.length; i++) {
        let score = part2WinState(datas[i].trim())

        totalScore += score
    }
    return totalScore
}

//console.log(Day2p1("demo.txt"))
//console.log(Day2p1("p1.txt"))

console.log(Day2p2("demo.txt"))
console.log(Day2p2("p1.txt"))
