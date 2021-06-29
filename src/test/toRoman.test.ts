import { idText } from 'typescript';
import { toRoman } from "../main/toRoman";

describe("To Roman", () => {
  it.each([
    [1,"I"],
    [2,"II"],
    [3,"III"],
    [4,"IV"],
    [5,"V"],
    [6,"VI"],
    [7,"VII"],
    [8,"VIII"],
    [9,"IX"],
    [10,"X"]
  ])
  ("should receive a number %i to be returned as Roman numeral %s", (num: any, roman: any) => {
    expect(toRoman(num)).toBe(roman);
  });
});
