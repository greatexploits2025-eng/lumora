"use client";

import { useCurrentUser } from "../hooks/useCurrentUser";
import { useAuth } from "../hooks/useAuth";

const PLAN_STYLES = {
  free:   "border-white/20 text-gray-400",
  pro:    "border-violet-500/50 text-violet-300 bg-violet-500/10",
  studio: "border-fuchsia-500/50 text-fuchsia-300 bg-fuchsia-500/10",
};

export default function UserProfile() {
  const user = useCurrentUser();
  const { logout } = useAuth();

  if (!user) return null;

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      {/* Avatar */}
      {user.avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={user.avatarUrl} alt={user.fullName ?? "Avatar"} className="h-20 w-20 rounded-full border-2 border-violet-500/40" />
      ) : (
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-3xl font-black text-white">
          {user.firstName?.[0] ?? "?"}
        </div>
      )}

      <div className="text-center">
        <p className="text-lg font-bold text-white">{user.fullName ?? "Creator"}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${PLAN_STYLES[user.plan]}`}>
        {user.plan} plan
      </span>

      <button
        onClick={logout}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-gray-400 transition hover:border-red-500/40 hover:text-red-400"
      >
        Sign Out
      </button>
    </div>
  );
}
