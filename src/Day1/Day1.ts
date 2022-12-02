import { ReadDataFile } from "../ReadDataFile/ReadDataFile"

const sort = (x: number, y: number): number => {
    return (x - y)
}

const splitArrayByMarker = (objs: string[]): number[][] => {
    let object: number[] = []
    let result: number[][] = [object]
    for (var i: number = 0; i < objs.length; i++) {
        if (objs[i].trim().length === 0) {
            object = []
            result.push(object);
        } else {
            object.push(Number(objs[i]))
        }
    }
    return result
}

const getSums = (input: number[][]): number[] => {
    return input.map((i) => i.reduce((a, b) => a + b, 0));
}


export function Day1p1(filename: string): number {
    // Read the file
    let datas: Array<string> = ReadDataFile(__dirname + '/' + filename)
    let foo = splitArrayByMarker(datas)
    let bar = getSums(foo)

    return (Math.max(...bar))
}


export function Day1p2(filename: string): number {
    // Read the file
    let datas: Array<string> = ReadDataFile(__dirname + '/' + filename)
    let foo = splitArrayByMarker(datas)
    let bar = getSums(foo)

    return bar.sort(function (x, y): number { return x - y })
        .slice(-3)
        .reduce((accumulator, current) => {
            return accumulator + current;
        }, 0);
}

console.log(Day1p1("demo.txt"))
console.log(Day1p1("p1.txt"))

console.log(Day1p2("demo.txt"))
console.log(Day1p2("p1.txt"))
