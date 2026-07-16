"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Clapperboard } from "lucide-react";

import CreateSceneModal from "./CreateSceneModal";
import { useStudioStore } from "@/store/studio.store";

type Props = {
  projectId: string;
  selectedSceneId?: string;
};

export default function SceneSidebar({
  projectId,
  selectedSceneId,
}: Props) {
  const [open, setOpen] = useState(false);

  const scenes = useStudioStore(
    (state) => state.scenes
  );

  return (
    <>
      <aside className="flex w-72 flex-col border-r border-white/10 bg-[#090D1D]">

        <div className="border-b border-white/10 p-5">
          <h2 className="text-lg font-bold text-white">
            Scenes
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto">

          {scenes.length === 0 ? (
            <div className="p-5 text-sm text-gray-400">
              No scenes yet.
            </div>
          ) : (
            scenes.map((scene, index) => (
              <Link
                key={scene.id}
                href={`/studio/${projectId}?scene=${scene.id}`}
                className={`flex items-center gap-3 border-b border-white/5 px-5 py-4 transition ${
                  selectedSceneId === scene.id
                    ? "border-l-4 border-violet-500 bg-violet-600/20"
                    : "hover:bg-white/5"
                }`}
              >
                <Clapperboard
                  size={18}
                  className="text-violet-400"
                />

                <span className="text-sm text-white">
                  {scene.title ?? `Scene ${index + 1}`}
                </span>
              </Link>
            ))
          )}

        </div>

        <div className="border-t border-white/10 p-4">

          <button
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <Plus size={18} />
            Add Scene
          </button>

        </div>

      </aside>

      <CreateSceneModal
        open={open}
        onClose={() => setOpen(false)}
        projectId={projectId}
      />
    </>
  );
}