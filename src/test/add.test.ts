import { Add } from "../main/add";

describe('Addition', () => {
    it("should receive an empty string as input and return 0", () => {
        let input = ""
        expect(Add(input)).toBe(0);
    })

    it("should receive '1' as input and return 1", () => {
        let input = "1"
        expect(Add(input)).toBe(1);
    })
})