import OpenAI from 'openai'
import { env } from '@/lib/validation'

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
})

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface KnowledgeBaseEntry {
  title: string
  content: string
}

export class OpenAIService {
  async generateResponse(
    messages: ChatMessage[],
    knowledgeBase: KnowledgeBaseEntry[],
    userApiKey?: string
  ): Promise<string> {
    // Use user's API key if provided, otherwise use system key
    const client = userApiKey
      ? new OpenAI({ apiKey: userApiKey })
      : openai

    // Prepare context from knowledge base
    const context = knowledgeBase
      .map(kb => `Title: ${kb.title}\nContent: ${kb.content}`)
      .join('\n\n')

    const systemPrompt = `You are a helpful AI assistant for a business website. Use the following knowledge base information to answer customer questions accurately. If the question cannot be answered using the provided information, politely say so and suggest contacting the business directly.

Knowledge Base:
${context}

Guidelines:
- Be helpful and friendly
- Keep responses concise but informative
- Use the business's own content to inform your answers
- If unsure, ask for clarification or suggest contacting support`

    try {
      const completion = await client.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map(msg => ({
            role: msg.role as 'user' | 'assistant',
            content: msg.content
          }))
        ],
        max_tokens: 500,
        temperature: 0.7,
      })

      return completion.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response. Please try again.'
    } catch (error) {
      console.error('OpenAI API error:', error)
      throw new Error('Failed to generate AI response')
    }
  }

  async validateApiKey(apiKey: string): Promise<boolean> {
    try {
      const client = new OpenAI({ apiKey })
      await client.models.list()
      return true
    } catch (error) {
      return false
    }
  }
}

export const openaiService = new OpenAIService()