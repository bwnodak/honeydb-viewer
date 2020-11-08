const express = require('express');
const dotenv = require('dotenv');
const request = require('request');
const auth = require('./middleware/auth');

dotenv.config({ path: '../../.env' });

const app = express();
const port = process.env.PORT || 4000;

app.use(auth);

app.get('*', (req, res) => {
  request.get(`${process.env.HONEYDB_API}${req.path}`, {
    json: true,
    method: 'GET',
    headers: {
      "X-HoneyDb-ApiId": process.env.HONEYDB_API_ID,
      "X-HoneyDb-ApiKey": process.env.HONEYDB_API_KEY,
    }
  }, (e, r, data) => {
    if (e) {
      res.status(500);
      res.json({
        data: null,
        success: false
      })
    } else {
      res.json({
        data,
        success: true
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
