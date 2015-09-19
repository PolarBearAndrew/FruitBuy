//mongoose
var link = require('./linkDB.js');
var mongoose = link.mongoose;
var db = link.db;

/*
 *  Schema of User
 */
var Product = new mongoose.Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    cost: {
        type: String
    },
    info: {
        type: String
    },
    status: {
        type: String
    }
});

//exports model
module.exports = db.model('product', Product);
