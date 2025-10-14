import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToNewsletter() {
  const newsletterSection = document.getElementById('newsletter')
  if (newsletterSection) {
    newsletterSection.scrollIntoView({ behavior: 'smooth' })
  }
}
