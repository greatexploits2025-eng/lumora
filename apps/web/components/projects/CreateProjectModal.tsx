"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CreateProjectModal({
  open,
  onClose,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState("Adventure");
  const [style, setStyle] = useState("Cinematic");
  const [language, setLanguage] = useState("English");
  const [duration, setDuration] = useState("1 min");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          prompt,
          genre,
          style,
          language,
          duration,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error ?? "Unable to create project.");
        return;
      }

      // close modal
      onClose();

      // refresh the dashboard
      window.location.href = "/dashboard";

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0B1024] p-8">

        <h2 className="mb-6 text-3xl font-bold text-white">
          Create New Project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            rows={3}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <textarea
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
            placeholder="Describe the movie you want Lumora to create..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-4">

            <select
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option>Adventure</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Comedy</option>
              <option>Documentary</option>
            </select>

            <select
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Cinematic</option>
              <option>Realistic</option>
              <option>Anime</option>
              <option>Pixar</option>
              <option>3D Animation</option>
            </select>

            <select
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>Arabic</option>
            </select>

            <select
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option>30 sec</option>
              <option>1 min</option>
              <option>2 min</option>
              <option>5 min</option>
            </select>

          </div>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:bg-white/10"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Project"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}