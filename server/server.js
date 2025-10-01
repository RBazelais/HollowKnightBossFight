import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bossesRouter from './routes/bosses.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Enable JSON parsing
app.use(express.json());

// API route for bosses
app.use('/api/bosses', bossesRouter);

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '../')));

// Simple test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
