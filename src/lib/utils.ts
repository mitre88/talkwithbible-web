import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const APP_NAME = "Talk with the Bible";
export const APP_STORE_URL =
  "https://apps.apple.com/search?term=Talk%20with%20the%20Bible";
export const CONTACT_EMAIL = "vamosmexico2018.ahm@gmail.com";
export const SITE_YEAR = new Date().getFullYear();
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://talkwithbible-web.vercel.app";
export const GITHUB_ISSUES =
  "https://github.com/mitre88/TalkWithBible/issues";
