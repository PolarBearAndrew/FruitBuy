//mongoose
var link = require('./linkDB.js');
var mongoose = link.mongoose;
var db = link.db;

/*
 *  Schema of Em
 */
var Em = new mongoose.Schema({
    account: {
        type: String
    },
    pwd: {
        type: String
    },
    auth: {
        type: String
    }
});

//exports model
module.exports = db.model('em', Em);
