const express = require('express');
const router = express.Router();
const scraper = require('../dex_scraper');

router.get('/', (req, res) => {
  res.json({ message: 'Solana DEX Scraper & Whale Wallet Watcher API' });
});

router.get('/alerts', async (req, res) => {
  try {
    const alerts = await scraper.getRecentAlerts();
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch alerts' });
  }
});

module.exports = router;
