'use server';

/**
 * @fileOverview Secure server-side proxy for logistics APIs.
 * This file handles external API calls to GoComet, Aviation Edge, and CargoAI
 * without exposing sensitive API keys to the client.
 */

import { z } from 'zod';

const ShipmentSchema = z.object({
  awbNumber: z.string(),
  status: z.enum([
    "Shipment Booked",
    "Cargo Received",
    "Departed Origin",
    "In Transit",
    "Customs Clearance",
    "Arrived at Destination",
    "Out for Delivery",
    "Delivered"
  ]),
  origin: z.string(),
  destination: z.string(),
  currentLocation: z.string(),
  eta: z.string(),
  progress: z.number(),
  flightDetails: z.string(),
  history: z.array(z.object({
    timestamp: z.string(),
    activity: z.string(),
    location: z.string()
  })),
  lastUpdated: z.string()
});

export type ShipmentData = z.infer<typeof ShipmentSchema>;

/**
 * Fetches shipment data from external logistics APIs.
 * In a production environment, this would use API keys stored in environment variables.
 */
export async function fetchLiveShipment(awbNumber: string): Promise<ShipmentData | null> {
  // Simulate network latency for API calls
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // In a real implementation, you would call:
  // const goCometRes = await fetch(`https://api.gocomet.com/track?awb=${awbNumber}&key=${process.env.GOCOMET_API_KEY}`);
  // const aviationEdgeRes = await fetch(`https://aviation-edge.com/v2/public/tracker?awb=${awbNumber}&key=${process.env.AVIATION_EDGE_KEY}`);

  // For demo purposes, we generate realistic high-fidelity mock data
  // Validating against our schema to ensure consistency
  try {
    const mockData: ShipmentData = {
      awbNumber: awbNumber.toUpperCase(),
      status: "In Transit",
      origin: "SINGAPORE (SIN)",
      destination: "HAMBURG (HAM)",
      currentLocation: "14.59° N, 88.83° E (Bay of Bengal)",
      eta: new Date(Date.now() + 86400000 * 3).toISOString(), // 3 days from now
      progress: 68,
      flightDetails: "ZN-EXPRESS-772 / B747-8F",
      history: [
        { 
          timestamp: new Date(Date.now() - 86400000 * 2).toISOString(), 
          activity: "Cargo Received at Warehouse", 
          location: "Singapore Changi Hub" 
        },
        { 
          timestamp: new Date(Date.now() - 86400000 * 1.5).toISOString(), 
          activity: "Departure from Origin Hub", 
          location: "Singapore Port Terminal 4" 
        },
        { 
          timestamp: new Date(Date.now() - 86400000).toISOString(), 
          activity: "En Route to Transit Node", 
          location: "South China Sea" 
        }
      ],
      lastUpdated: new Date().toISOString()
    };

    return ShipmentSchema.parse(mockData);
  } catch (error) {
    console.error("API Validation Error:", error);
    return null;
  }
}
