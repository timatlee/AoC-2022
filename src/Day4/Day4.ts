import { ReadDataFile } from "../ReadDataFile/ReadDataFile"

export function part1(filename: String): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let returnCounter: number = 0
    datas.map((value) => {
        let [e1, e2] = value.split(",").map((val2) => {
            return val2.trim().split("-").map(Number)
        })

        if ((e1[0] <= e2[0] && e1[1] >= e2[1]) || (e2[0] <= e1[0] && e2[1] >= e1[1])) {
            returnCounter++
        }
    })

    return returnCounter
}

export function part2(filename: string): number {
    let datas = ReadDataFile(__dirname + '/' + filename)

    let returnCounter: number = 0
    datas.map((value) => {
        let [e1, e2] = value.split(",").map((val2) => {
            return val2.trim().split("-").map(Number)
        })

       if (!(e1[0] > e2[1] || e2[0] > e1[1])) {
           returnCounter++
       }
    })

    return returnCounter
}


console.log(part1("demo.txt"))
console.log(part1("p1.txt"))

console.log(part2("demo.txt"))
console.log(part2("p1.txt"))
