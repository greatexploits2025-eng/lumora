import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-purple-500 to-violet-700 text-white hover:opacity-90"
      : "border border-white/20 text-white hover:bg-white/10";

  return (
    <button
      className={`rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 ${styles}`}
    >
      {children}
    </button>
  );
}