// Require and create an instance of express
var express = require('express');
var app = express();

// Require Vichaar schema
var Vichaar = require('./schemas/Vichaar.js');

// GET method route for requests to /random
app.get('/random', (req, res) => {
    // Count the number of documents
    Vichaar.count((err, count) => {
        if (err) {
            // Log error, if any
            console.log(err);
        } else {
            // Find a random number in [0, count]
            var random = Math.floor(Math.random() * count);
            // Find the relevant document
            Vichaar.findOne({ sankhya: random }, {_id: 0, bhaasha: 0}, (err, vichaar) => {
                if (err) {
                    // Log error, if any
                    console.log(err);
                } else {
                    // Send response as json
                    res.json(vichaar);
                }
            });
        }
    });
});

// GET method for requests to /
app.get('/', (req, res) => {
    // If sankhya parameter specified
    if (req.query.sankhya) {
        // Find the relevant document
        Vichaar.findOne({ sankhya: req.query.sankhya }, {_id: 0, bhaasha: 0}, (err, vichaar) => {
            if (err) {
                // Log error, if any
                console.log(err);
            } else {
                // Send response as json
                res.json(vichaar);
            }
        });
    } else {
        // TODO: Display homepage
        res.send('Homepage');
    }
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('(vichaar): Listening on port 3000');
});