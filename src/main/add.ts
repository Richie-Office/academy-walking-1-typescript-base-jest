export function Add(input: string): number {
  if (input.length === 0) {
    return 0;
  }
  let sum = 0;
  input.split(/[,\n]/).forEach((part) => {
    sum += parseInt(part);
  });
  return sum;
}