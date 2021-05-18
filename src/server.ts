import express from 'express';
import './database';

const app = express();

app.get('/', (req, res) => {
  return res.json({
    message: 'test',
  });
});

app.listen(3333, () => {
  console.log('Running...');
});
