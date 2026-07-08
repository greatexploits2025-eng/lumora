import type { ScriptRequest, ScriptResult, AIResponse } from "../types/ai";

export async function generateScript(
  request: ScriptRequest
): Promise<AIResponse<ScriptResult>> {
  const start = Date.now();
  try {
    // Provider call goes here — e.g. openAIComplete(request.prompt, config)
    // For now returns a structured stub so the UI contract is established
    const result: ScriptResult = {
      title: `Untitled — ${request.genre ?? "Drama"}`,
      synopsis: `A ${request.tone ?? "cinematic"} story based on: "${request.prompt}"`,
      scenes: [
        {
          sceneNumber: 1,
          heading: "EXT. CITY SKYLINE — DAWN",
          action: "The city awakens. Fog rolls between glass towers.",
          dialogue: undefined,
        },
        {
          sceneNumber: 2,
          heading: "INT. STUDIO — CONTINUOUS",
          action: "A creator sits before a glowing screen. The cursor blinks.",
          dialogue: "CREATOR: This is where the story begins.",
        },
      ],
    };

    return { success: true, data: result, provider: "openai", durationMs: Date.now() - start };
  } catch (err) {
    return { success: false, data: null, error: String(err), durationMs: Date.now() - start };
  }
}
