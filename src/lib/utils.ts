import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomId() {
  // Generate a random number and convert it to base 36
  // Then, remove the '0.' from the beginning and slice it to a desired length
  return Math.random().toString(36).substring(2);
}