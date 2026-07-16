"use client";

import { useState } from "react";
import { useStudioStore } from "@/store/studio.store";

type Props = {
  open: boolean;
  onClose: () => void;
  projectId: string;
};

export default function CreateSceneModal({
  open,
  onClose,
  projectId,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const addScene = useStudioStore(
  (state) => state.addScene
);

  if (!open) return null;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `/api/projects/${projectId}/scenes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            prompt,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        alert(error.error ?? "Unable to create scene.");
        return;
      }

      const scene = await response.json();

      addScene(scene);

      setTitle("");
      setDescription("");
      setPrompt("");

      onClose();

      return;

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0B1024] p-8">

        <h2 className="mb-6 text-3xl font-bold text-white">
          Create Scene
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
            placeholder="Scene Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            rows={3}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <textarea
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
            placeholder="Scene prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-6 py-3 text-white hover:bg-white/10"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 font-semibold text-white disabled:opacity-50"
            >
              {loading
                ? "Creating..."
                : "Create Scene"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}