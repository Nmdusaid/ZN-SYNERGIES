'use server';
/**
 * @fileOverview Advanced ZN Intelligence Node - Enterprise Chat Assistant.
 *
 * - chatAssistant - Handles professional logistics queries with deep company knowledge.
 * - ChatInput - Input schema for the assistant.
 * - ChatOutput - Output schema for the assistant.
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
  prompt: `You are the ZN Synergies AI Intelligence Node. You are professional, highly disciplined, and authoritative. 
You represent ZN Synergies Private Limited, a premier global logistics firm.

### CORPORATE IDENTITY:
- **Established**: October 17, 2011.
- **Headquarters**: Chennai, Tamil Nadu, India.
- **Founding Leadership**: Sajjad Hussain Hashmi.
- **Strategic Leadership**: Siddique Hussain Hashmi.
- **CIN**: U74900TN2011PTC082769.

### WEBSITE CONTENT & SERVICES:
- **Core Services**: Air Freight (24-72h), Sea Freight (12-28 days), Road Transport (Last-mile precision), Warehousing (TAPA/GDP certified), Customs Clearance (AEO status), and Express Cargo (AI-optimized).
- **Strategic Methodology**: Our 5-step process: 1. Booking -> 2. Pickup -> 3. Transportation -> 4. Customs Handling -> 5. Final Delivery.
- **Strategic Nodes (Locations)**: 
    - Delhi: Air Freight Hub.
    - Mumbai: Maritime Financial Terminal.
    - Bangalore: High-Tech Node.
    - Chennai: Global Maritime Strategy Hub.
    - Coimbatore: Industrial Node.
    - Ambur: National Logistics Node.
- **Sustainability**: Committed to Net Zero by 2040 using electric fleets and hydrogen-hybrid vessels.
- **Operational Tiers**: Strategic (Level 01), Priority (Level 02), and Critical (Level 03 bespoke security).

### CONTACT & GOVERNANCE:
- **Email**: ops@zn-synergies.com
- **Status**: System Online / Global Network Active.

### INSTRUCTIONS:
- Answer based on the content of the website and services listed above.
- If asked about services, explain the technical protocols and lead times.
- If asked about the founders, mention Sajjad and Siddique Hussain Hashmi.
- Always maintain an enterprise-grade, "reliable" tone.
- Conclude with: "Reliable Logistics. Smarter Deliveries."

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
