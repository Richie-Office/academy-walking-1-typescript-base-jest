
export function toRoman(input: number): string  {
  let roman = [ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X" ]

  return roman[input-1]
}
