import { createClient } from 'next-sanity';

// import { apiVersion, dataset, projectId } from '../env'

// Sanity client configuration
export const client = createClient({
  projectId: 'ic24o36o',
  dataset: 'production',
  apiVersion: '2025-01-18',  // Update to the correct API version for your use case
  useCdn: false,  // Set to false for real-time updates during development
});