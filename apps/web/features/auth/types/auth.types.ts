export type SubscriptionPlan = "free" | "pro" | "studio";

export type UserProfile = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string | null;
  email: string;
  avatarUrl: string | null;
  plan: SubscriptionPlan;
  createdAt: Date;
};

export type AuthState =
  | { status: "loading" }
  | { status: "unauthenticated" }
  | { status: "authenticated"; user: UserProfile };
