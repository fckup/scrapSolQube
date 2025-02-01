const express = require('express');
const router = require('./routes');
const config = require('./config');

const app = express();
const port = config.PORT || 5000;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
