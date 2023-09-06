import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// allows conditionally joining one or more tailwind classes
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};
