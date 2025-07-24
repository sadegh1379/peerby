export const envResolver = {
  serverBaseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  frontURL:
    process.env.NEXT_PUBLIC_FRONT_URL ||
    (process.env.NODE_ENV === 'production' ? 'https://app.skenas.io' : 'http://localhost:3000')
};
