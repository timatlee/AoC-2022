import { Day2p1, Day2p2 } from "./Day2"

describe('Day 2', () => {
    it('Part 1 Demo Input', () => {
        expect(Day2p1("demo.txt")).toBe(15)
    })

    it('Part 1 input', () => {
        expect(Day2p1("p1.txt")).toBe(12586)
    })

    it('Part 2 Demo Input', () => {
        expect(Day2p2("demo.txt")).toBe(12)
    })

    it('P2 input', () => {
        expect(Day2p2("p1.txt")).toBe(13193)
    })
})
