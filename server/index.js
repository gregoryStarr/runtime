const auth = require('./api/auth.js');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();

// Enable parsing of json bodies
app.use(express.json());

// Enable parsing of url encoded bodies
app.use(express.urlencoded({extended: true}));

// Enable parsing of cookies
app.use(require('cookie-parser')());

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/auth', auth);




app.use(morgan('combined'));
app.use(morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }));

  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
  }));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

  app.use(express.static('public'))

  // Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
  });
  
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Listening on port ${port}`));
  