import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {config} from 'dotenv';

// Load environment variables from .env file
config();

/**
 * ZN Synergies AI Core
 * Using gemini-1.5-flash with the standard plugin-based model reference.
 * Optimized for stable production-grade logistics intelligence.
 */
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-1.5-flash',
});
