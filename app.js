const express = require('express');
const routes = require('./route');

const app = express();
app.use(express.json());

app.use('/functions', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});