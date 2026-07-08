// OpenAI provider — used for script generation and prompt enhancement
// Replace stub with real implementation when OPENAI_API_KEY is set

export interface OpenAIConfig {
  apiKey: string;
  model?: string;
}

export async function openAIComplete(
  prompt: string,
  config: OpenAIConfig
): Promise<string> {
  // TODO: implement with openai SDK
  // const openai = new OpenAI({ apiKey: config.apiKey });
  // const res = await openai.chat.completions.create({ ... });
  console.log("[OpenAI] prompt:", prompt.slice(0, 80));
  return `[OpenAI stub] Response for: ${prompt.slice(0, 60)}`;
}
