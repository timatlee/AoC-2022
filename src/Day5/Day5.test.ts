import * as AoC from "./Day5"

let part1Demo = 0
let part1Real = 0
let part2Demo = 0
let part2Real = 0

describe("This Day's Tests", () => {
    it('Part 1 Demo Input', () => {
        expect(AoC.part1("demo.txt")).toBe(part1Demo)
    })

    it('Part 1 input', () => {
        expect(AoC.part1("p1.txt")).toBe(part1Real)
    })

    it('Part 2 Demo Input', () => {
        expect(AoC.part2("demo.txt")).toBe(part2Demo)
    })

    it('P2 input', () => {
        expect(AoC.part2("p1.txt")).toBe(part2Real)
    })
})
