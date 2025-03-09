import OpenAI from 'openai';
import { env } from "~/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY
});

export async function summarizeText(text: string): Promise<string> {
  const response = await fetch('/api/summarize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
  
  const data = await response.json();
  return data.result;
}
