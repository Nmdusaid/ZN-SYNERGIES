import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {config} from 'dotenv';

// Load environment variables from .env file
config();

/**
 * ZN Synergies AI Core
 * Using gemini-1.5-flash for stable production-grade logistics intelligence.
 * Optimized model identifier for Genkit 1.x.
 */
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-1.5-flash',
});
