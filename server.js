const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const PORT = process.env.PORT || 8080
const axios = require('axios').default;

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/data', function (req, res) {
    axios.get("https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=1")
    .then(data => res.status(200).send(data.data))
    .catch(err => res.send(err));
});

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });