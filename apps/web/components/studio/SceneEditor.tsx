"use client";

import { useState } from "react";

type Props = {
  title: string | null;
  description: string | null;
  prompt: string | null;
};

export default function SceneEditor({
  title,
  description,
  prompt,
}: Props) {
  const [sceneTitle, setSceneTitle] = useState(title ?? "");
  const [sceneDescription, setSceneDescription] = useState(description ?? "");
  const [scenePrompt, setScenePrompt] = useState(prompt ?? "");

  return (
    <div className="space-y-6 rounded-2xl border border-white/10 bg-[#0B1024] p-6">

      <h2 className="text-2xl font-bold text-white">
        Scene Editor
      </h2>

      <input
        value={sceneTitle}
        onChange={(e) => setSceneTitle(e.target.value)}
        placeholder="Scene Title"
        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white"
      />

      <textarea
        rows={3}
        value={sceneDescription}
        onChange={(e) => setSceneDescription(e.target.value)}
        placeholder="Description"
        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white"
      />

      <textarea
        rows={8}
        value={scenePrompt}
        onChange={(e) => setScenePrompt(e.target.value)}
        placeholder="Describe this scene..."
        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white"
      />

    </div>
  );
}