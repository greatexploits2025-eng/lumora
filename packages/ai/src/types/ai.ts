// ── Base ──────────────────────────────────────────────────────────────────────

export interface AIRequest {
  prompt: string;
}

export interface AIResponse<T = unknown> {
  success: boolean;
  data: T | null;
  error?: string;
  provider?: string;
  durationMs?: number;
}

// ── Image ─────────────────────────────────────────────────────────────────────

export interface ImageRequest extends AIRequest {
  style?: "cinematic" | "anime" | "pixar" | "documentary" | "hyper-realistic" | "ghibli";
  aspectRatio?: "16:9" | "9:16" | "1:1" | "21:9";
  resolution?: "720p" | "1080p" | "2K" | "4K";
}

export interface ImageResult {
  url: string;
  width: number;
  height: number;
}

// ── Video ─────────────────────────────────────────────────────────────────────

export interface VideoRequest extends AIRequest {
  imageUrl?: string;
  duration?: 30 | 60 | 180 | 300 | 600;
  aspectRatio?: "16:9" | "9:16" | "1:1";
}

export interface VideoResult {
  url: string;
  thumbnailUrl: string;
  durationSeconds: number;
}

// ── Script ────────────────────────────────────────────────────────────────────

export interface ScriptRequest extends AIRequest {
  genre?: "action" | "drama" | "comedy" | "documentary" | "animation" | "thriller";
  tone?: "cinematic" | "educational" | "commercial" | "emotional";
  targetLength?: "short" | "medium" | "long";
}

export interface ScriptResult {
  title: string;
  synopsis: string;
  scenes: ScriptScene[];
}

export interface ScriptScene {
  sceneNumber: number;
  heading: string;
  action: string;
  dialogue?: string;
}

// ── Voice ─────────────────────────────────────────────────────────────────────

export interface VoiceRequest {
  text: string;
  voiceId?: string;
  language?: string;
  emotion?: "neutral" | "dramatic" | "calm" | "excited";
}

export interface VoiceResult {
  audioUrl: string;
  durationSeconds: number;
}

// ── Orchestrator ──────────────────────────────────────────────────────────────

export type TaskType = "script" | "image" | "video" | "voice";

export interface OrchestratorTask {
  type: TaskType;
  request: AIRequest | ImageRequest | VideoRequest | ScriptRequest | VoiceRequest;
}

export interface OrchestratorResult {
  taskId: string;
  projectId?: string;
  results: Partial<Record<TaskType, AIResponse>>;
  completedAt: Date;
  totalDurationMs: number;
}
