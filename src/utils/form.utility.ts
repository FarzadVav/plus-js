import { ChangeEvent } from "react"

import { numbersRegex } from "./regex.utility"

export const faNumbersToEnglish = (input: string) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  let result = input
  persianDigits.forEach((_, index) => {
    result = result.split(persianDigits[index]).join(englishDigits[index])
  })

  return result
}

export const checkNumericInputs = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { value } = ev.target
  if (numbersRegex.test(value)) {
    ev.target.value = faNumbersToEnglish(value)
  } else {
    ev.target.value = value.slice(0, -1)
  }

  return ev.target.value
}