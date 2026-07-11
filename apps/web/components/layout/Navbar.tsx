"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-md bg-black/20">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        <Link href="/" className="text-2xl font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          LumoraAI
        </Link>

        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Studio</a>
          <a href="#" className="hover:text-white transition">About</a>
        </div>

        <div className="flex items-center gap-3">
          {!isLoaded ? (
            <div className="h-8 w-8 rounded-full bg-white/10 animate-pulse" />
          ) : isSignedIn ? (
            <>
              <Link
                href="/dashboard"
                className="hidden sm:block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Dashboard
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="hidden sm:block text-sm font-medium text-gray-400 hover:text-white transition"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}
