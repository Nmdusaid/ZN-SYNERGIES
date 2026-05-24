'use server';
/**
 * @fileOverview An AI-powered logistics tracker that provides intelligent ETAs and optimized routing paths.
 *
 * - predictiveLogisticsEta - A function that calculates predictive ETAs and optimizes routing.
 * - PredictiveLogisticsEtaInput - The input type for the predictiveLogisticsEta function.
 * - PredictiveLogisticsEtaOutput - The return type for the predictiveLogisticsEta function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictiveLogisticsEtaInputSchema = z.object({
  currentLocation: z
    .string()
    .describe(
      'The current location of the shipment (e.g., coordinates, port name, city).' 
    ),
  destination: z
    .string()
    .describe(
      'The final destination of the shipment (e.g., coordinates, port name, city).' 
    ),
  shipmentDetails: z
    .string()
    .describe(
      'Details about the cargo, such as type, weight, size, or special handling instructions.' 
    ),
  liveEnvironmentalVariables: z
    .string()
    .describe('Live environmental data (e.g., weather, sea conditions, traffic).'),
  portStatus: z
    .string()
    .describe(
      'Real-time status of relevant ports (e.g., congestion levels, delays, operational status).' 
    ),
});
export type PredictiveLogisticsEtaInput = z.infer<
  typeof PredictiveLogisticsEtaInputSchema
>;

const PredictiveLogisticsEtaOutputSchema = z.object({
  estimatedArrivalTime: z
    .string()
    .describe('The calculated estimated time of arrival in a human-readable format.'),
  optimizedRoute: z
    .string()
    .describe('A description of the optimized routing path recommended for the shipment.'),
  potentialDelays: z
    .string()
    .describe('Any identified potential delays or disruptions and their causes.'),
  confidenceScore: z
    .number()
    .min(0)
    .max(1)
    .describe(
      'A confidence score (0-1) indicating the reliability of the estimated arrival time.'
    ),
});
export type PredictiveLogisticsEtaOutput = z.infer<
  typeof PredictiveLogisticsEtaOutputSchema
>;

const predictiveLogisticsEtaPrompt = ai.definePrompt({
  name: 'predictiveLogisticsEtaPrompt',
  input: {schema: PredictiveLogisticsEtaInputSchema},
  output: {schema: PredictiveLogisticsEtaOutputSchema},
  prompt: `You are an advanced AI-powered logistics tracker capable of predicting estimated times of arrival (ETAs) and optimizing routing paths.

Your task is to analyze the provided shipment details, current location, destination, live environmental variables, and port statuses to determine the most accurate ETA and an optimized route.
Also, identify any potential delays and provide a confidence score for your ETA.

Provide your response in a structured JSON format matching the output schema, ensuring all fields are populated.

Input Details:
Current Location: {{{currentLocation}}}
Destination: {{{destination}}}
Shipment Details: {{{shipmentDetails}}}
Live Environmental Variables: {{{liveEnvironmentalVariables}}}
Port Status: {{{portStatus}}}`,
});

const predictiveLogisticsEtaFlow = ai.defineFlow(
  {
    name: 'predictiveLogisticsEtaFlow',
    inputSchema: PredictiveLogisticsEtaInputSchema,
    outputSchema: PredictiveLogisticsEtaOutputSchema,
  },
  async input => {
    const {output} = await predictiveLogisticsEtaPrompt(input);
    return output!;
  }
);

export async function predictiveLogisticsEta(
  input: PredictiveLogisticsEtaInput
): Promise<PredictiveLogisticsEtaOutput> {
  return predictiveLogisticsEtaFlow(input);
}
