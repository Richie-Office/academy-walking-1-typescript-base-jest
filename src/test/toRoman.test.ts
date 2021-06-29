import { idText } from 'typescript';
import { toRoman } from "../main/toRoman";

describe("To Roman", () => {
  it("should receive a number 1 to be returned as roman numeral I", () => {
    let number = 1;
    expect(toRoman(number)).toBe("I");
  });

  it("should receive a number 2 to be returned as roman numeral II", () => {
    let number = 2;
    expect(toRoman(number)).toBe("II");
  });

  it("should receive a number 3 to be returned as roman numeral III", () => {
    let number = 2;
    expect(toRoman(number)).toBe("III");
  });

});
