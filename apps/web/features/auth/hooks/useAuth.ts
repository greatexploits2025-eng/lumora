"use client";

import { useAuth as useClerkAuth, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { isLoaded, isSignedIn, userId } = useClerkAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  async function logout() {
    await signOut();
    router.push("/");
  }

  return {
    isLoaded,
    isSignedIn: !!isSignedIn,
    userId,
    logout,
  };
}
