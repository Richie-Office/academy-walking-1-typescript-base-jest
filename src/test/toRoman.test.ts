import { idText } from 'typescript';
import { toRoman } from "../main/toRoman";

describe("To Roman", () => {
  test.each([[1,"I"],[2,"II"],[3,"III"],[4,"IV"],[5,"V"],[6,"VI"],[7,"VII"]])("should receive a number %i to be returned as roman numeral %s", (num: any, roman: any) => {
    expect(toRoman(num)).toBe(roman);
  });
});
