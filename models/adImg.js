//mongoose
var link = require('./linkDB.js');
var mongoose = link.mongoose;
var db = link.db;

/*
 *  Schema of Home
 */
var AdImg = new mongoose.Schema({
    img: {
        type: String
    },
    imgIndex: {
        type: String
    }
});

//exports model
module.exports = db.model('adImg', AdImg);
