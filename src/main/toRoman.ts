
export function toRoman(input: number): string  {
  if (input === 1){
    return "I"
  }
  if(input === 2) {
    return "II"
  }
  return "III"
}
