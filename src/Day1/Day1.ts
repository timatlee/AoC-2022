import { ReadDataFile } from "../ReadDataFile/ReadDataFile"

export function Day1p1(filename:string):number {
    // Read the file
    let datas:Array<string> = ReadDataFile(__dirname + '/' + filename)

    let lastMax = -1
    let elfNumber = 0
    let elfCalorie = 0
    for (let data of datas) {
        if (data.trim().length > 0) {
            let calCount = Number(data)
            elfCalorie += calCount
        } else {
            // Next elf...
            if (elfCalorie > lastMax) {
                lastMax = elfCalorie
            }
            elfCalorie = 0

        }
    }

    return lastMax
}


export function Day1p2(filename:string):number {
    // Read the file
    let datas:Array<string> = ReadDataFile(__dirname + '/' + filename)

    let maxes:number[] = []
    let elfNumber = 0
    let elfCalorie = 0
    for (let data of datas) {
        if (data.trim().length > 0) {
            let calCount = Number(data)
            elfCalorie += calCount
        } else {
            // Next elf...
            maxes.push(elfCalorie)
            elfCalorie = 0
        }
    }
    // edge case - last elf needs ot be added.
    maxes.push(elfCalorie)

    maxes.sort((x, y) => x > y ? 1 : x < y ? -1 : 0)

    const result = maxes.slice(-3).reduce((accumulator, current) => {
        return accumulator + current;
      }, 0);

    return result
}

console.log(Day1p1("demo.txt"))
console.log(Day1p1("p1.txt"))

console.log(Day1p2("demo.txt"))
console.log(Day1p2("p1.txt"))
