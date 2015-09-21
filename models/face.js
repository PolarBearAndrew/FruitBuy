//mongoose
var link = require('./linkDB.js');
var mongoose = link.mongoose;
var db = link.db;

/*
 *  Schema of User
 */
var Face = new mongoose.Schema({
    img: {
        type: String
    },
    imgIndex: {
        type: String
    },
    note : {
        type: String
    }
});

//exports model
module.exports = db.model('face', Face);
