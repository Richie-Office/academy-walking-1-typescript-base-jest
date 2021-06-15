export function Add(input: string): number {
  if (input.length === 0) {
    return 0;
  }
  let sum = 0;
  let delimitter = "";
  if(input.startsWith("//")){
      delimitter = input.split("\n")[0].charAt(2)
      input = input.substr(4)

  }
  let regex = `[,\n${delimitter}]`

  input.split(new RegExp(regex)).forEach((part) => {
    sum += parseInt(part);
  });
  return sum;
}