import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { PORTFOLIO_INFO } from '@/lib/portfolio-info';

export const dynamic = 'force-dynamic';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a helpful AI assistant for a portfolio website. Your role is to answer questions about the person's background, skills, projects, and experience.

Here is the information about the person:

${PORTFOLIO_INFO}

Guidelines:
- Answer questions accurately based on the provided information. Keep answers as concise as possible.
- If asked about something not in the portfolio information, politely say you don't have that specific information
- Be professional, friendly, and concise
- Highlight relevant skills and experiences when appropriate
- If someone asks to contact them, provide the contact information from above

Formatting Instructions:
- Use markdown formatting for better readability
- When summarizing resume, projects, etc. or listing skills, use bullet points or numbers for easily readability!
- Use numbered lists (1., 2., 3.) when showing steps or sequential information
- Use **bold** for emphasis on key terms, names, or titles
- Use proper spacing between sections
- Use headings (## or ###) to organize longer responses into clear sections
- Keep responses well-structured and scannable
- Keep responses concise and to the point`,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const assistantMessage = completion.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response.';

    return NextResponse.json({ message: assistantMessage });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to generate response' },
      { status: 500 }
    );
  }
}
