//mongoose
var link = require('./linkDB.js');
var mongoose = link.mongoose;
var db = link.db;

/*
 *  Schema of User
 */
var User = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    pwd: {
        type: String
    },
    phone: {
        type: String
    }
});

//exports model
module.exports = db.model('user', User);
