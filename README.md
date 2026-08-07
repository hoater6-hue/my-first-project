# my-first-project

This repository contains metadata, API and a simple frontend for the TRC20 token.

## Token
- Contract: TPHjxcwuDiAJtnySMo99ou7Rbqo8cqVhsh
- Logo: assets/logo/token.png (raw URL: https://raw.githubusercontent.com/hoater6-hue/my-first-project/main/assets/logo/token.png)

## Structure
- assets/logo/token.png — (upload your 256x256 PNG here)
- data/token.json — token metadata
- src/api/server.js — Express API (GET /api/token)
- src/frontend/index.html — simple UI that fetches /api/token

## Run locally
1. Install dependencies:

```bash
npm install
```

2. Start server:

```bash
npm start
```

3. Open http://localhost:3000/ (frontend) or http://localhost:3000/api/token (API)

## Notes
- I did not overwrite your existing token.png; you confirmed you uploaded it to assets/logo/token.png.
