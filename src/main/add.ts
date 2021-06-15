export function Add(input: string): number {
  if (input.includes(',')) {
      let arr = input.split(',');
      return Add(arr[0]) + Add(arr[1]);
  }
  if (input.length === 0) {
    return 0;
  }
  return parseInt(input);
}
