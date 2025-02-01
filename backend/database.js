const { Client } = require('pg');
const config = require('./config');

async function initDB() {
  const client = new Client(config.DATABASE_URL);
  try {
    await client.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS token_activity (
        id SERIAL PRIMARY KEY,
        token_address VARCHAR(255),
        volume FLOAT,
        liquidity FLOAT,
        timestamp TIMESTAMP,
        data JSONB
      )
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await client.end();
  }
}

if (require.main === module) {
  initDB();
}
