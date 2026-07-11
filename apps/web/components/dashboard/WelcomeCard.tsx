import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomeCard() {
  const user = await currentUser();

  const name = user?.firstName ?? "Creator";

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good morning"
      : hour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/60 via-blue-950/40 to-black p-8">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-600/20 blur-[80px]" />

      <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-blue-600/15 blur-[60px]" />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="mb-1 text-sm font-medium text-violet-400">
            {greeting} ✦
          </p>

          <h1 className="text-3xl font-black text-white">
            Welcome back, {name} 👋
          </h1>

          <p className="mt-2 text-gray-400">
            Let&apos;s create something incredible today.
          </p>
        </div>

        <div className="flex gap-3">

          <button
            className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
          >
            + New Project
          </button>

          <button
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View All
          </button>

        </div>

      </div>

    </div>
  );
}