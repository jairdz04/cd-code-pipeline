const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/test', (req, res) => res.send({ message: 'connected' }));

app.listen(3000, () => {
  console.log('API IS RUNNING ON PORT 3000');
});
