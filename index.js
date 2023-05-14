const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! from Express');
});

app.get('/health', (req, res) => {
  res.send('test response is working');
});

app.get('/repeat', (req, res) => {
  res.send('Hi there: ' + req.query.name);
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
