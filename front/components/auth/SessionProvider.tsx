// components/SessionProvider.tsx
"use client";

import { sessionInfo } from "@/lib/sign-up";
import { useUserInfoStore } from "@/lib/Store";
import { useEffect } from "react";

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser, clearUser } = useUserInfoStore();

  useEffect(() => {
    const hydrate = async () => {
      const { session, error } = await sessionInfo();

      if(error) {
        console.log(error)
console.log(error.message)
      }

      if (session?.user) {
        setUser(session.user);
      } else {
        clearUser();
      }
    };
    hydrate();
  }, []);

  return <>{children}</>;
};