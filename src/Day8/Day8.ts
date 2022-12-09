import { ReadDataFile, isNumber } from "../ReadDataFile/ReadDataFile"

export function part1(filename: String): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let datass = datas.map((v)=>v.trim().split('').map(Number))
    console.log(datass)
    return -1
}

export function part2(filename: String): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    return -1;
}

console.log(part1("demo.txt"))
console.log(part1("p1.txt"))

//console.log(part2("demo.txt"))
//console.log(part2("p1.txt"))
