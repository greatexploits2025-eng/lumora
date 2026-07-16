"use client";

import { useEffect } from "react";

import { useStudioStore } from "@/store/studio.store";

type Scene = {
  id: string;
  title: string | null;
  description: string | null;
  prompt: string | null;
  order: number;
};

type Props = {
  scenes: Scene[];
};

export default function StudioInitializer({
  scenes,
}: Props) {
  const setScenes = useStudioStore(
    (state) => state.setScenes
  );

  useEffect(() => {
    setScenes(scenes);
  }, [scenes, setScenes]);

  return null;
}