'use server';
/**
 * @fileOverview A GenAI-powered smart freight calculator that provides dynamic and accurate price estimates
 * for complex supply chain solutions and global enterprise movements.
 *
 * - smartFreightQuoteGenerator - A function that handles the freight quote generation process.
 * - SmartFreightQuoteGeneratorInput - The input type for the smartFreightQuoteGenerator function.
 * - SmartFreightQuoteGeneratorOutput - The return type for the smartFreightQuoteGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartFreightQuoteGeneratorInputSchema = z.object({
  origin: z.string().describe('The origin location for the shipment (e.g., city, port, country).'),
  destination: z.string().describe('The destination location for the shipment (e.g., city, port, country).'),
  cargoDescription: z.string().describe('A brief description of the cargo (e.g., "Automotive parts", "Electronics", "Raw materials").'),
  weightKg: z.number().positive().describe('The total weight of the cargo in kilograms.'),
  volumeCbm: z.number().positive().describe('The total volume of the cargo in cubic meters.'),
  serviceType: z.enum(['Air Freight', 'Sea Freight', 'Road Transport', 'Rail Transport', 'Multimodal']).describe('The type of freight service required.'),
  urgency: z.enum(['Standard', 'Express', 'Critical']).default('Standard').describe('The urgency level of the shipment, impacting transit time and cost.'),
  hazardousMaterials: z.boolean().default(false).describe('Indicates if the cargo contains hazardous materials, which may incur additional costs and regulations.'),
  customsDeclarationRequired: z.boolean().default(true).describe('Indicates if customs declaration is required, typically for international shipments.'),
  insuranceRequired: z.boolean().default(false).describe('Indicates if cargo insurance is required.'),
  additionalNotes: z.string().optional().describe('Any additional notes or specific requirements for the shipment.'),
});
export type SmartFreightQuoteGeneratorInput = z.infer<typeof SmartFreightQuoteGeneratorInputSchema>;

const SmartFreightQuoteGeneratorOutputSchema = z.object({
  estimatedCostUsd: z.number().positive().describe('The estimated total cost of the freight in USD.'),
  currency: z.literal('USD').describe('The currency for the estimated cost.'),
  estimatedTransitTimeDays: z.number().positive().describe('The estimated transit time for the shipment in days.'),
  costBreakdown: z.string().describe('A detailed breakdown of the estimated costs, including base freight, fuel surcharge, customs, and other fees.'),
  notes: z.string().describe('Any specific considerations, disclaimers, or factors influencing the quote.'),
  optimizedRouteSuggestion: z.string().optional().describe('A suggestion for an optimized routing path.'),
});
export type SmartFreightQuoteGeneratorOutput = z.infer<typeof SmartFreightQuoteGeneratorOutputSchema>;

export async function smartFreightQuoteGenerator(input: SmartFreightQuoteGeneratorInput): Promise<SmartFreightQuoteGeneratorOutput> {
  return smartFreightQuoteGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartFreightQuoteGeneratorPrompt',
  input: {schema: SmartFreightQuoteGeneratorInputSchema},
  output: {schema: SmartFreightQuoteGeneratorOutputSchema},
  prompt: `You are an expert logistics and supply chain analyst for ZN Synergies, a luxury global logistics company.
Your task is to provide a dynamic and accurate price estimate for complex supply chain solutions and global enterprise movements.
Consider current global market rates, fuel costs, geopolitical factors, port congestion, customs regulations, and logistics efficiency.

Generate an estimated cost in USD, estimated transit time in days, a detailed cost breakdown, and any relevant notes or disclaimers.
If applicable, also suggest an optimized routing path.

Input Details:
Origin: {{{origin}}}
Destination: {{{destination}}}
Cargo Description: {{{cargoDescription}}}
Weight (kg): {{{weightKg}}}
Volume (CBM): {{{volumeCbm}}}
Service Type: {{{serviceType}}}
Urgency: {{{urgency}}}
Hazardous Materials: {{{hazardousMaterials}}}
Customs Declaration Required: {{{customsDeclarationRequired}}}
Insurance Required: {{{insuranceRequired}}}
{{#if additionalNotes}}
Additional Notes: {{{additionalNotes}}}
{{/if}}
`,
});

const smartFreightQuoteGeneratorFlow = ai.defineFlow(
  {
    name: 'smartFreightQuoteGeneratorFlow',
    inputSchema: SmartFreightQuoteGeneratorInputSchema,
    outputSchema: SmartFreightQuoteGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
