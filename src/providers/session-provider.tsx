"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

const SessionProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};

export default SessionProvider;
