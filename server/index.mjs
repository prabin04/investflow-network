import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 8787;

app.use(express.json());

const ensureDataFile = (filename) => {
  const filePath = path.join(__dirname, '..', 'data', filename);
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, '[]', 'utf8');
  }
  return filePath;
};

const EventSignupRequestSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().default(''),
  jobTitle: z.string().optional().default(''),
  consent: z.boolean()
});

app.post('/api/events/:eventId/signup', (req, res) => {
  const { eventId } = req.params;
  const parse = EventSignupRequestSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      ok: false,
      error: 'Invalid request body',
      details: parse.error.errors.map((e) => ({ field: e.path.join('.'), message: e.message }))
    });
  }
  const record = {
    id: `signup_${Date.now()}`,
    eventId,
    ...parse.data,
    createdAt: new Date().toISOString()
  };
  try {
    const file = ensureDataFile('signups.json');
    const existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    existing.push(record);
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    return res.json({ ok: true, id: record.id });
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
});

const SubscribeRequestSchema = z.object({ email: z.string().email() });

app.post('/api/subscribe', (req, res) => {
  const parse = SubscribeRequestSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({
      ok: false,
      error: 'Invalid request body',
      details: parse.error.errors.map((e) => ({ field: e.path.join('.'), message: e.message }))
    });
  }
  // External integrations disabled; document required config in README in later step
  try {
    const file = ensureDataFile('subscriptions.json');
    const existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    existing.push({ id: `sub_${Date.now()}`, email: parse.data.email, createdAt: new Date().toISOString() });
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
});

app.get('/health', (_req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
