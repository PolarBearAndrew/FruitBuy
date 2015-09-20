//mongoose
var link = require('./linkDB.js');
var mongoose = link.mongoose;
var db = link.db;

/*
 *  Schema of Home
 */
var myAd = new mongoose.Schema({
    url: {
        type: String
    },
    index: {
        type: String
    }
});

//exports model
module.exports = db.model('myAd', myAd);
