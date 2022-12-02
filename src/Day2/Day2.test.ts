import { Day2p1, Day2p2 } from "./Day2"

describe('Day 2 Part 1 Test', () => {
  it('Demo Input', () => {
    expect(Day2p1("demo.txt")).toBe(15)
  })

  it('P1 input', () => {
    expect(Day2p1("p1.txt")).toBe(12586)
  })
})

describe('Day 2 Part 2 Test', () => {
    it('Demo Input', () => {
      expect(Day2p2("demo.txt")).toBe(12)
    })

    it('P1 input', () => {
      expect(Day2p2("p1.txt")).toBe(13193)
    })
  })
