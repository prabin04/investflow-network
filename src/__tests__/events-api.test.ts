import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../../server/index.mjs';

describe('Events API', () => {
  it('rejects invalid signup', async () => {
    const res = await request(app).post('/api/events/1/signup').send({ name: '', email: 'bad', consent: false });
    expect(res.status).toBe(400);
    expect(res.body.ok).toBe(false);
  });

  it('accepts valid signup', async () => {
    const res = await request(app).post('/api/events/1/signup').send({ name: 'Test', email: 'test@example.com', consent: true });
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.id).toMatch(/^signup_/);
  });

  it('accepts newsletter subscribe', async () => {
    const res = await request(app).post('/api/subscribe').send({ email: 'user@example.com' });
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
