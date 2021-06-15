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
    ["-1", "-1"],
    ["-8", "-8"],
    ["-100", "-100"],
    ["-999", "-999"],
    ["-13435", "-13435"],
    ["-45435345", "-45435345"],
    ["-56,65", "-56"],
    ["-56,-65", "-56,-65"],
  ])("given the input is %s should throw an exception 'negatives not allowed %s'", (input, output) => {
    try{
      Add(input)
      fail('should not reach here')
    }catch(error){
      expect(error.message).toBe(`negatives not allowed ${output}`)
    }
  });


});
