import { createClient } from '@sanity/client';
export const client = createClient({
  projectId: 'gn7lyod9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-04-21',
});