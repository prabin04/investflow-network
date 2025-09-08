import { z } from "zod";

// Strict Company schema per spec. Do not add fields beyond the contract.
export const CompanySchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  logo_url: z.string().url().optional().nullable(),
  hero_image_url: z.string().url().optional().nullable(),
  tagline: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  website_url: z.string().url().optional().nullable(),
  location: z.string().optional().nullable(),
  industries: z.array(z.string()).optional().default([]),
  team: z.array(z.string()).optional().default([]),
  contact_email: z.string().email().optional().nullable(),
  social_links: z.array(z.string().url()).optional().default([]),
  metadata: z.record(z.unknown()).optional().default({}),
});

export type Company = z.infer<typeof CompanySchema>;

export const CompanyArraySchema = z.array(CompanySchema);
