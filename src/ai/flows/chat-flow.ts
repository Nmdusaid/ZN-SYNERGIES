'use server';
/**
 * @fileOverview A professional logistics assistant chatbot flow.
 *
 * - chatAssistant - A function that handles user queries about logistics.
 * - ChatInput - The input type for the chatAssistant function.
 * - ChatOutput - The return type for the chatAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The user message or question.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).optional().describe('The conversation history.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The assistant response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

const chatAssistantPrompt = ai.definePrompt({
  name: 'chatAssistantPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are the ZN Synergies AI Assistant. You are professional, concise, and helpful. 
You represent a high-end, monochrome, enterprise-grade logistics company.

Your goal is to answer questions about global shipping, supply chain architecture, and ZN Synergies services.

Context:
ZN Synergies provides:
- Aviation Express (24h global hubs)
- Maritime Strategy (Hydrogen powered ships)
- Overland Logistics (Autonomous electric trucks)
- Vault Storage (Climate controlled)

User Message: {{{message}}}`,
});

const chatAssistantFlow = ai.defineFlow(
  {
    name: 'chatAssistantFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await chatAssistantPrompt(input);
    return output!;
  }
);

export async function chatAssistant(input: ChatInput): Promise<ChatOutput> {
  return chatAssistantFlow(input);
}
