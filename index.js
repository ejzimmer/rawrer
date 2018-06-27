const express = require('express')
const Twit = require('twit')

const app = express()

app.use(express.static('.'))

const client = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
});

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/tweets', (req, res) => {
  client.get('statuses/user_timeline', { screen_name: 'erinjzimmer' }, (err, data) => {
    res.send(data);
  })  
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))