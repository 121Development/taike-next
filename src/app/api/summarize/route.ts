import { NextResponse } from 'next/server'; // for App Router
import OpenAI from 'openai';
import { env } from '~/env.js';

// app/api/summarize/route.js (App Router)
// OR: pages/api/summarize.js (Pages Router)

export async function POST(request) {
  // Get the content to summarize from the request
  const { content } = await request.json();
  
  // Initialize OpenAI with your API key (stored in environment variables)
  const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY,
  });
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo", // or your preferred model
      messages: [
        { role: "system", content: "You are a helpful assistant that summarizes text." },
        { role: "user", content: `Summarize the following text: ${content}` }
      ],
    });
    
    return NextResponse.json({ 
      summary: response.choices[0].message.content 
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate summary' },
      { status: 500 }
    );
  }
}