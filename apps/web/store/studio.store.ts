import { create } from "zustand";

export interface Scene {
  id: string;
  title: string | null;
  description: string | null;
  prompt: string | null;
  order: number;
}

type StudioStore = {
  scenes: Scene[];
  selectedSceneId: string | null;

  setScenes: (scenes: Scene[]) => void;

  addScene: (scene: Scene) => void;

  selectScene: (id: string) => void;

  updateScene: (
    id: string,
    data: Partial<Scene>
  ) => void;

  deleteScene: (id: string) => void;
};

export const useStudioStore =
  create<StudioStore>((set) => ({

    scenes: [],

    selectedSceneId: null,

    setScenes: (scenes) =>
      set({
        scenes,
      }),

    addScene: (scene) =>
      set((state) => ({
        scenes: [...state.scenes, scene],
      })),

    selectScene: (id) =>
      set({
        selectedSceneId: id,
      }),

    updateScene: (id, data) =>
      set((state) => ({
        scenes: state.scenes.map((scene) =>
          scene.id === id
            ? { ...scene, ...data }
            : scene
        ),
      })),

    deleteScene: (id) =>
      set((state) => ({
        scenes: state.scenes.filter(
          (scene) => scene.id !== id
        ),
      })),

  }));