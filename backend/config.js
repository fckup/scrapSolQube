const config = {
  SOLANA_RPC_ENDPOINT: process.env.SOLANA_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com',
  WHITELIST_WALLETS: (process.env.WHITELIST_WALLETS || '').split(','),
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/solana_app',
  PORT: process.env.PORT || 5000
};

module.exports = config;
