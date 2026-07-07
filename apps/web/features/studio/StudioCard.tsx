"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PromptInput from "./PromptInput";
import OutputPreview from "./OutputPreview";

type Status = "idle" | "loading" | "done";

export type StudioCardProps = {
  icon: string;
  title: string;
  description: string;
  placeholder: string;
  gradient: string;
  border: string;
  accentColor: string;
  showVideoBar?: boolean;
  delay?: number;
  simulationMs?: number;
};

export default function StudioCard({
  icon, title, description, placeholder,
  gradient, border, accentColor,
  showVideoBar, delay = 0, simulationMs = 2200,
}: StudioCardProps) {
  const [status, setStatus]   = useState<Status>("idle");
  const [prompt, setPrompt]   = useState("");

  function handleGenerate(value: string) {
    setPrompt(value);
    setStatus("loading");
    setTimeout(() => setStatus("done"), simulationMs);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={`group relative flex flex-col gap-5 rounded-3xl border ${border} bg-gradient-to-br ${gradient} p-7 backdrop-blur-xl overflow-hidden`}
    >
      {/* Ambient glow */}
      <div className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full ${accentColor} blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          </div>
        </div>
        {status === "done" && (
          <span className="shrink-0 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-xs text-green-400">
            ✓ Ready
          </span>
        )}
      </div>

      {/* Output */}
      <OutputPreview
        status={status}
        gradient="from-black/60 to-black/20"
        label={title}
        prompt={prompt}
        showVideoBar={showVideoBar}
      />

      {/* Input */}
      <PromptInput
        placeholder={placeholder}
        onSubmit={handleGenerate}
        loading={status === "loading"}
      />
    </motion.div>
  );
}
