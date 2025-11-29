import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
