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
- Established: October 17, 2011.
- Headquarters: Chennai, Tamil Nadu, India.
- Founding Leadership: Sajjad Hussain Hashmi.
- Strategic Leadership: Siddique Hussain Hashmi.
- CIN: U74900TN2011PTC082769.
- Mission: Providing fast, secure, and reliable logistics solutions for domestic and international markets.

### SERVICE PROTOCOLS (EXPLAIN FULLY):
- **Air Freight**: Priority aviation for high-value cargo. IATA/ICAO secure supply chain. Lead time: 24-72 hours.
- **Sea Freight**: Maritime strategy for heavy assets. IMO 2024 / SOLAS certified. Lead time: 12-28 days.
- **Road Transport**: Terrestrial precision for last-mile. GPS geofencing & ADR/DOT compliance.
- **Warehousing**: Climate-controlled, TAPA FSR Level A / GDP Pharma certified. 24/7 AI-surveillance.
- **Customs Clearance**: AEO / C-TPAT Trusted Trader status. Expert navigation of trade barriers.
- **Express Cargo**: AI-optimized priority supply chain. Continuous asset monitoring.

### STRATEGIC NODES (LOCATIONS):
- **Delhi**: National Capital Hub (Aerocity, IGI Airport).
- **Mumbai**: Financial Terminal (Bandra Kurla Complex).
- **Bangalore**: Technology Hub (Outer Ring Road, Bellandur).
- **Chennai**: Maritime Strategy Hub (OMR, Karapakkam).

### CONTACT & GOVERNANCE:
- Email: ops@zn-synergies.com
- Status: System Online / Global Network Active.

### VOICE AND TONE:
- Reliable, trustworthy, and expert.
- Use uppercase headers for major topics like a terminal readout.
- Always reinforce: "Reliable Logistics. Smarter Deliveries."

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
