import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractTokenPayload = (token: string) => JSON.parse(atob(token.split('.')[1]));

export const isTokenExpired = (token: string) => {
  const now = Math.floor(Date.now() / 1000);
  const payload = extractTokenPayload(token);

  if (!payload.exp) throw new Error('token is invalid');

  return payload.exp - 2 < now;
};
