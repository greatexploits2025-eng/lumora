"use client";

import { motion } from "framer-motion";

export type ShowcaseCardProps = {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  border: string;
  delay?: number;
};

export default function ShowcaseCard({
  title,
  description,
  icon,
  gradient,
  border,
  delay = 0,
}: ShowcaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative overflow-hidden rounded-3xl border ${border} bg-gradient-to-br ${gradient} p-7 backdrop-blur-xl flex flex-col gap-4 cursor-pointer`}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/[0.03]" />

      <span className="text-4xl">{icon}</span>

      <div>
        <h3 className="text-lg font-bold text-white mb-1.5">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>

      <button className="mt-auto self-start rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all group-hover:border-violet-500/60 group-hover:bg-violet-500/10 group-hover:text-violet-300">
        Explore →
      </button>
    </motion.div>
  );
}
