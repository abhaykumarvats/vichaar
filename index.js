// Require and create an instance of express
var express = require('express');
var app = express();

// Require Vichaar schema
var Vichaar = require('./schemas/Vichaar.js');

// Assign port number
var PORT = process.env.PORT || 3000;

// GET method route for requests to /random
app.get('/random', (req, res) => {
    // If vishay parameter specified
    if (req.query.vishay) {
        // Count the number of relevant documents
        Vichaar.count({ vishay: req.query.vishay }, (err, count) => {
            if (err) {
                // Log error, if any
                console.log(err);
            } else {
                // Find a random number in [0, count]
                var random = Math.floor(Math.random() * count);
                // Find the relevant document by skipping 'random' documents
                Vichaar.find({ vishay: req.query.vishay }, { _id: 0, __v: 0 }).skip(random).limit(1).exec((err, vichaar) => {
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
    } else {
        // Count total number of documents
        Vichaar.count((err, count) => {
            if (err) {
                // Log error, if any
                console.log(err);
            } else {
                // Find a random number in [0, count]
                var random = Math.floor(Math.random() * count);
                // Find the relevant document
                Vichaar.findOne({ sankhya: random }, { _id: 0, __v: 0 }, (err, vichaar) => {
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
    }
});

// GET method for requests to /
app.get('/', (req, res) => {
    // If sankhya parameter specified
    if (req.query.sankhya) {
        // Find the relevant document
        Vichaar.findOne({ sankhya: req.query.sankhya }, { _id: 0, __v: 0 }, (err, vichaar) => {
            if (err) {
                // Log error, if any
                console.log(err);
            } else {
                // Send response as json
                res.json(vichaar);
            }
        });
    } else {
        // Redirect to repo page
        res.redirect('https://github.com/abhaykv04/vichaar');
    }
});

// Listen on PORT
app.listen(PORT, () => {
    console.log('(vichaar): Listening on port', PORT);
});