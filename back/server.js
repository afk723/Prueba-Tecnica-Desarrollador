const weather = require('./weather.json');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  if (req.query.key == 123) {
    res.setHeader("Content-Type", "application/json");
    res.send(weather);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
