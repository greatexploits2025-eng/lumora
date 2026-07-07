import { auth, currentUser } from "@clerk/nextjs/server";
import type { UserProfile } from "../types/auth.types";

export async function getServerUser(): Promise<UserProfile | null> {
  const user = await currentUser();
  if (!user) return null;

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    email: user.emailAddresses[0]?.emailAddress ?? "",
    avatarUrl: user.imageUrl,
    plan: "free",
    createdAt: new Date(user.createdAt),
  };
}

export async function requireAuth(): Promise<string> {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthenticated");
  return userId;
}
