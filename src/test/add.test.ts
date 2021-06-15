import { Add } from "../main/add";

describe('Addition', () => {
    it("should receive an empty string as input and return 0", () => {
        let input = ""
        expect(Add(input)).toBe(0);
    })

    it.each([["1",1], ["2",2], ["3",3]])("Should receive %s and return %i", (input, output)=>{
        expect(Add(input)).toBe(output);
    })
})