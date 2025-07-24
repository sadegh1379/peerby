import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      phone: string | number | null;
      accessToken: string | null;
      image?: string | null;
    };
  }

  interface JWT {
    id: string;
  }
}
