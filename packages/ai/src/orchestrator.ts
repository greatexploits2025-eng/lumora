import { generateScript } from "./services/script.service";
import { generateImage } from "./services/image.service";
import { generateVideo } from "./services/video.service";
import { generateVoice } from "./services/voice.service";
import type {
  OrchestratorTask,
  OrchestratorResult,
  AIResponse,
  TaskType,
  ScriptRequest,
  ImageRequest,
  VideoRequest,
  VoiceRequest,
} from "./types/ai";

function taskId(): string {
  return `task_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * runTask — executes a single AI task through the correct service.
 * Swap the service implementation without touching this file or the UI.
 */
async function runTask(task: OrchestratorTask): Promise<AIResponse> {
  switch (task.type) {
    case "script":
      return generateScript(task.request as ScriptRequest);
    case "image":
      return generateImage(task.request as ImageRequest);
    case "video":
      return generateVideo(task.request as VideoRequest);
    case "voice":
      return generateVoice(task.request as VoiceRequest);
    default:
      return { success: false, data: null, error: `Unknown task type: ${(task as OrchestratorTask).type}` };
  }
}

/**
 * orchestrate — runs one or more AI tasks, collects results, and returns
 * a unified OrchestratorResult. Tasks run in parallel by default.
 *
 * Usage:
 *   const result = await orchestrate([
 *     { type: "script", request: { prompt: "A heist in space", genre: "thriller" } },
 *     { type: "image",  request: { prompt: "Space station at night", aspectRatio: "16:9" } },
 *   ]);
 */
export async function orchestrate(
  tasks: OrchestratorTask[],
  projectId?: string
): Promise<OrchestratorResult> {
  const start = Date.now();
  const id = taskId();

  console.log(`[Orchestrator] ${id} — running ${tasks.length} task(s)`, tasks.map((t) => t.type));

  const settled = await Promise.allSettled(tasks.map((t) => runTask(t)));

  const results: Partial<Record<TaskType, AIResponse>> = {};

  settled.forEach((outcome, i) => {
    const type = tasks[i]!.type;
    if (outcome.status === "fulfilled") {
      results[type] = outcome.value;
    } else {
      results[type] = { success: false, data: null, error: String(outcome.reason) };
    }
  });

  const totalDurationMs = Date.now() - start;
  console.log(`[Orchestrator] ${id} — completed in ${totalDurationMs}ms`);

  return {
    taskId: id,
    projectId,
    results,
    completedAt: new Date(),
    totalDurationMs,
  };
}
