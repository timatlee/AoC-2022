import { foo } from "./HelloWorld"

describe("test foo function", () => {
    it("should return 'bar'", () => {
        expect(foo("nada")).toBe("bar");
    });
});
