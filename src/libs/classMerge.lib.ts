import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"

export const classMerge = (...inputs: ClassValue[]) => twMerge(clsx(inputs))