import { idText } from 'typescript';
import { toRoman } from "../main/toRoman";

describe("To Roman", () => {
  it("should receive a number 1 to be returned as roman numeral I", () => {
    let number = 1;
    expect(toRoman(number)).toBe("I");
  });

});
