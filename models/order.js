//mongoose
var link = require('./linkDB.js');
var mongoose = link.mongoose;
var db = link.db;

/*
 *  Schema of User
 */
var Order = new mongoose.Schema({
    time: {
        type: String
    },
    userId: {
        type: String
    },
    buy: {
        type: Array
    },
    address: {
        type: String
    },
    cost: {
        type: String
    }
});

//exports model
module.exports = db.model('order', Order);
