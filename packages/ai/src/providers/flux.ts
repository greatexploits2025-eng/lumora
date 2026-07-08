// FLUX provider — used for image generation via Together AI or Fal.ai
// Replace stub with real implementation when FLUX_API_KEY is set

export interface FluxConfig {
  apiKey: string;
  model?: "flux-schnell" | "flux-dev" | "flux-pro";
}

export async function fluxGenerateImage(
  prompt: string,
  config: FluxConfig
): Promise<{ url: string }> {
  // TODO: implement with fal.ai or together.ai SDK
  // const fal = require("@fal-ai/serverless-client");
  // const result = await fal.run("fal-ai/flux", { input: { prompt } });
  console.log("[FLUX] generating image for:", prompt.slice(0, 80));
  return { url: "https://placeholder.lumora.ai/image.jpg" };
}
