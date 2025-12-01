// src/server/integrations/bytez/bytez-provider.ts

import { env } from "@/server/config/env";

export type ModelIdentifier = string;

export type BytezChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export interface ChatCompletionChunk {
  id: string;
  model: string;
  createdAt: string;
  delta: string;
  done: boolean;
}

/**
 * Stub Bytez provider for Phase 0.
 *
 * - در حال حاضر فقط برای اینکه TypeScript و Build بدون نیاز به BYTEZ_API_KEY پاس شوند.
 * - در Phase 3 این قسمت را با اتصال واقعی به Bytez Model API جایگزین می‌کنیم.
 */
export class BytezChatModelProvider {
  private apiKey?: string;

  constructor(apiKey?: string) {
    // env.BYTEZ_API_KEY: string | undefined
    this.apiKey = apiKey ?? env.BYTEZ_API_KEY;
  }

  async *chatCompletion(
    model: ModelIdentifier,
    messages: BytezChatMessage[],
  ): AsyncGenerator<ChatCompletionChunk, void, unknown> {
    const effectiveKey = this.apiKey ?? env.BYTEZ_API_KEY;

    if (!effectiveKey) {
      // فعلاً اگر کلید ست نشده باشد، فقط یک پیام راهنما برمی‌گردانیم و تمام؛
      // این اجازه می‌دهد Build/Deploy بدون تنظیم BYTEZ_API_KEY هم انجام شود.
      yield {
        id: "stub",
        model,
        createdAt: new Date().toISOString(),
        delta:
          "Bytez API key (BYTEZ_API_KEY) is not configured yet. This is a stub response from BytezChatModelProvider.",
        done: true,
      };
      return;
    }

    // TODO (Phase 3):
    // در اینجا اتصال واقعی به Bytez Model API را پیاده‌سازی می‌کنیم (Chat / Vision / Audio / Embeddings).
    const combinedUserContent = messages
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");

    yield {
      id: "stub",
      model,
      createdAt: new Date().toISOString(),
      delta: `Stub Bytez response for model "${model}" with ${messages.length} messages.\n\n${combinedUserContent}`,
      done: true,
    };
  }
}
