import { Day1p1, Day1p2 } from "./Day1"

describe('Day 1 Part 1 Test', () => {
  it('Demo Input', () => {
    expect(Day1p1("demo.txt")).toBe(24000)
  })

  it('P1 input', () => {
    expect(Day1p1("p1.txt")).toBe(69289)
  })
})


describe('Day 1 Part 2 Test', () => {
    it('Demo Input', () => {
      expect(Day1p2("demo.txt")).toBe(45000)
    })

    it('P1 input', () => {
      expect(Day1p2("p1.txt")).toBe(205615)
    })
  })
