const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/express-api', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

// request parser
app.use(bodyParser.json());
// routers
app.use('/api', routes);
// middleware
app.use(function(err, req, res, next) {
    res.status(422).send({err: err.message});
});

app.listen(process.env.port || 5000, function() {
    console.log('express running on port 5000');
});