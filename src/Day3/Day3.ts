import { ReadDataFile } from "../ReadDataFile/ReadDataFile"
import * as _ from "lodash"

function getNumberFromChar(char: string): number {
    let code = char.charCodeAt(0);
    let offset = 96
    // If uppercase, different offset.
    if (char == char.toUpperCase()) { offset = 65 - 27 }

    return code - offset
}

export function part1(filename: string): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let sumPriorities = datas.map(function (entry: string) {
        let splitEntry = _.chunk(entry.trim(), entry.length / 2)
        let commonElements = _.intersection(splitEntry[0], splitEntry[1])

        let sumPrior = commonElements.
            map(function (value: string) {
                let priority = getNumberFromChar(value)
                return priority
            })
            .reduce((accumulator, current) => { return accumulator + current }, 0)
        return sumPrior
    }).reduce((a, c) => { return a + c }, 0)

    return sumPriorities

}

export function part2(filename: string): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let groupSacks = _.chunk(datas, 3)
    let sumPriorities = groupSacks.map(function (value: string[]) {
        let commonElements = _.intersection(
            value[0].trim().split(''),
            value[1].trim().split(''),
            value[2].trim().split(''))
        let sumPrior = commonElements.
            map(function (value: string) {
                let priority = getNumberFromChar(value)
                return priority
            })
            .reduce((accumulator, current) => { return accumulator + current }, 0)
        return sumPrior
    }).reduce((accumulator, current) => { return accumulator + current }, 0)

    return sumPriorities
}


console.log(part1("demo.txt"))
console.log(part1("p1.txt"))

console.log(part2("demo.txt"))
console.log(part2("p1.txt"))
