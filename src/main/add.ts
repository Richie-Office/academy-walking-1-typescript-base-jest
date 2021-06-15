export function Add(input: string): number {
    if (input === undefined || input.length === 0) {
        return 0;
    }
  if (input.includes(',')) {
      let arr = input.split(',');
      return Add(arr[0]) + Add(arr[1]) + Add(arr[2]) ;
  }

  return parseInt(input);
}
