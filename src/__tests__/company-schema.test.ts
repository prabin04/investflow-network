import { describe, it, expect } from 'vitest';
import { CompanySchema } from '@/lib/schemas/company';

describe('CompanySchema', () => {
  it('accepts minimal valid company', () => {
    const data = { id: '1', slug: 'x', name: 'X' };
    const parsed = CompanySchema.parse(data);
    expect(parsed.name).toBe('X');
  });

  it('rejects invalid email', () => {
    const data = { id: '1', slug: 'x', name: 'X', contact_email: 'not-an-email' } as any;
    expect(() => CompanySchema.parse(data)).toThrow();
  });
});
