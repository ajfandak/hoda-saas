import { env } from "@/server/config/env";

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatCompletionResult {
  output: string;
  tokensInput: number;
  tokensOutput: number;
  rawProvider?: any;
}

export interface ModelIdentifier {
  key: string;
  provider: "BYTEZ";
  task: "chat" | "vision" | "audio" | "embedding";
}

export interface ModelParams {
  maxTokens?: number;
  temperature?: number;
  topP?: number;
}

export class BytezChatModelProvider {
  constructor(private apiKey: string = env.BYTEZ_API_KEY) {}

  async *chatCompletion(
    model: ModelIdentifier,
    messages: ChatMessage[],
    params: ModelParams = {},
    options?: { stream?: boolean }
  ): AsyncGenerator<ChatCompletionResult> {
    const response = await fetch(`https://api.bytez.com/v1/models/${encodeURIComponent(model.key)}/run`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        params,
        stream: options?.stream ?? true,
      }),
    });

    if (!options?.stream) {
      const json = await response.json();
      yield {
        output: json.output,
        tokensInput: json.tokens_input ?? 0,
        tokensOutput: json.tokens_output ?? 0,
        rawProvider: json,
      };
      return;
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error("Streaming not supported");

    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      const { value, done: doneChunk } = await reader.read();
      done = doneChunk;
      if (!value) continue;
      const chunkText = decoder.decode(value);

      // TODO: parse stream format based on real Bytez protocol
      yield {
        output: chunkText,
        tokensInput: 0,
        tokensOutput: 0,
      };
    }
  }
}
