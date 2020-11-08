const express = require('express');
const dotenv = require('dotenv');
const request = require('request');

const auth = require('./middleware/auth');
const ratelimit = require('./middleware/ratelimit');

dotenv.config({ path: '../../.env' });

const app = express();
const port = process.env.PORT || 4000;

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

app.use(ratelimit);
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
