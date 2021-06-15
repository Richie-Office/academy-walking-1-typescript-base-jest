import { idText } from 'typescript';
import { Add } from "../main/add";

describe("Addition", () => {
  it("should receive an empty string as input and return 0", () => {
    let input = "";
    expect(Add(input)).toBe(0);
  });

  it.each([
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["19", 19],
    ["1,2", 3],
    ["100,66", 166],
    ["200,1", 201],
  ])("Should receive %s and return %i", (input, output) => {
    expect(Add(input)).toBe(output);
  });

  it.each([
    ["100,200,300", 600],
    ["100,100,100,100", 400],
    ["100,100,100,100,1,1,1,1", 404],
  ])("Should receive %s and return %i", (input, output) => {
    expect(Add(input)).toBe(output);
  });

  it.each([
    ["1\n2,3", 6],
    ["100,100\n100\n100", 400],
    ["100\n100\n100\n100\n1\n1\n1\n1", 404],
  ])("Should receive %s and return %i", (input, output) => {
    expect(Add(input)).toBe(output);
  });

  it.each([
    ["//;\n1\n2,3;4", 10],
    ["//;\n1\n2,3;4;5", 15],
    ["//;\n1\n2,3;4;5;100", 115],
    ["//x\n1\n2,3x4x5x100x100", 215],
    ["//y\n1\n2,3y4,5,100y100y100", 315],
    ["//a\n1\n2,3\n4,5,100\n100a100\n100", 415],
  ])("Should receive %s and return %i", (input, output) => {
    expect(Add(input)).toBe(output);
  });

  it.each([
    ["-1"],
    ["-100"]
  ])("should throw an exception 'negatives not allowed %s' in case of %s as input", (input) => {
    expect(() => {Add(input)}).toThrow(`negatives not allowed ${input}`);
  });

//   it("should throw an exception 'negatives not allowed -1' in case of '-1,-2,5' as input", ()=> {
//     let input = "-1";
//     expect(() => {Add(input)}).toThrow('negatives not allowed -1');
//   })
});
