// Require and connect mongoose to vichaar database
var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
// Reference mongoose.Schema
var Schema = mongoose.Schema;

// Create Vichaar Schema
var Vichaar = new Schema({
    sankhya: {
        type: Number,
        required: true,
        unique: true
    },
    vichaar: {
        type: String,
        required: true
    },
    vichaarak: {
        type: String,
        required: true
    },
    vishay: {
        type: String
    },
    bhaasha: {
        type: String
    }
});

// Create and export Vichaar Model
module.exports = mongoose.model('Vichaar', Vichaar);