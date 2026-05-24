'use server';
/**
 * @fileOverview A professional logistics assistant chatbot flow for ZN Synergies.
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
You represent a high-end, enterprise-grade logistics company.

Your mission is to help businesses move cargo safely and efficiently. 

Knowledge Base & Specialties:
• We specialize in: Air Freight, Sea Freight, Road Transport, Warehousing, Customs Clearance, and Express Cargo Delivery.
• Tagline: "Reliable Logistics. Smarter Deliveries."
• We help businesses move cargo safely and efficiently with professional logistics support and on-time delivery services.
• Our focus: Providing fast, secure, and reliable logistics solutions for domestic and international markets.

Voice and Tone:
- Reliable, trustworthy, and expert.
- Supportive and proactive in simplifying shipping operations.

When asked about services or what we do, provide a structured list:
- Get a Freight Quote
- Explore Our Services
- Talk to a Logistics Expert
- Schedule a Pickup
- Business Shipping Support

Always reinforce the message: "Reliable Logistics. Smarter Deliveries."

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
