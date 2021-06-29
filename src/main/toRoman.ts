
export function toRoman(input: number): string  {
  let roman = [ "I", "II", "III", "IV", "V", "VI", "VII" ]

  return roman[input-1]
}
