"use client";

import { useUser } from "@clerk/nextjs";
import type { UserProfile } from "../types/auth.types";

export function useCurrentUser(): UserProfile | null {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return null;

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    email: user.primaryEmailAddress?.emailAddress ?? "",
    avatarUrl: user.imageUrl,
    plan: "free", // will come from DB in future sprints
    createdAt: user.createdAt ?? new Date(),
  };
}
