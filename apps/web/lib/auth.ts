import { auth } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export async function getCurrentUser() {

  const { userId } = await auth();

  const users = await prisma.user.findMany();

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId!,
    },
  });

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}