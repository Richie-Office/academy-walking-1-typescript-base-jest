export function Add(input: string) {
  if (input.length === 0) {
    return 0;
  }

  if (input.includes(',')) {
      let arr = input.split(',');
      let a = parseInt(arr[0]);
      let b = parseInt(arr[1]);

      return a + b;
  }

  return parseInt(input);
}
