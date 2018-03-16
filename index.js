// Require and create an instance of express
var express = require('express');
var app = express();

// Require Vichaar schema
var Vichaar = require('./schemas/Vichaar.js');

// Assign port number
var PORT = process.env.PORT || 3000;

// GET method route for requests to /random
app.get('/random', (req, res) => {
    // Initialise n
    var n = req.query.n ? Number(req.query.n) : 1;

    // If vishay parameter specified
    if (req.query.vishay) {
        // Assign vishay
        var vishay = req.query.vishay.replace(/^\w/, (char) => { return char.toUpperCase(); });

        // Count the number of relevant documents
        Vichaar.count({ vishay: vishay })
        .exec((err, count) => {
            if (err) {
                // Log error, if any
                console.log(err);
            } else {
                // Find a random number in [1, count]
                var random = Math.floor(Math.random() * (count - 1)) + 1;

                // Find relevant document(s) after skipping 'random' documents
                Vichaar.find({ vishay: vishay }, { _id: 0, __v: 0 })
                .skip(random)
                .limit(n || 1)
                .exec((err, vichaar) => {
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
                // Find random number(s) in [1, count]
                var randomArray = [];
                for (var i = 0; i < n; i++) {
                    randomArray.push(Math.floor(Math.random() * (count - 1)) + 1);
                }
                
                // Find the relevant document(s)
                Vichaar.find({ sankhya: { $in: randomArray } }, { _id: 0, __v: 0 })
                .limit(n || 1)
                .exec((err, vichaar) => {
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
        Vichaar.find({ sankhya: req.query.sankhya }, { _id: 0, __v: 0 })
        .exec((err, vichaar) => {
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