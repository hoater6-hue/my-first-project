// src/api/server.js
const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

// serve frontend static files
app.use('/static', express.static(path.join(__dirname, '..', 'frontend')));

// GET /api/token -> returns data/token.json
app.get('/api/token', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, '..', '..', 'data', 'token.json');
    const raw = await fs.readFile(dataPath, 'utf8');
    const json = JSON.parse(raw);
    res.json(json);
  } catch (err) {
    console.error('Failed to read token.json', err);
    res.status(500).json({ error: 'failed to read token metadata' });
  }
});

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// serve frontend index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
