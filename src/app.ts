import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World');
});

app.get('/health', (_req, res) => {
  res.json({ message: 'Server is healthy' });
});

export default app;