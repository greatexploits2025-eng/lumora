// ElevenLabs provider — used for AI voice generation
// Replace stub with real implementation when ELEVENLABS_API_KEY is set

export interface ElevenLabsConfig {
  apiKey: string;
  voiceId?: string;
}

export async function elevenLabsSpeak(
  text: string,
  config: ElevenLabsConfig
): Promise<{ audioUrl: string; durationSeconds: number }> {
  // TODO: implement with ElevenLabs SDK
  // const { ElevenLabsClient } = require("elevenlabs");
  // const client = new ElevenLabsClient({ apiKey: config.apiKey });
  // const audio = await client.generate({ voice: config.voiceId, text });
  console.log("[ElevenLabs] generating voice for:", text.slice(0, 80));
  return { audioUrl: "https://placeholder.lumora.ai/audio.mp3", durationSeconds: 0 };
}
