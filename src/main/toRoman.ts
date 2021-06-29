
export function toRoman(input: number): string  {
  let roman = [ "I", "II", "III", "IV" ]

  return roman[input-1]
}
