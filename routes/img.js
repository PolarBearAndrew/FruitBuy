var express = require("express");
var router = express.Router();
var multer = require('multer');
var done = false;

//- set multer
router.use(multer({
    dest: './public/uploads/',
    rename: function(fieldname, filename) {
        // return filename + Date.now();
        return filename;
    },
    onFileUploadStart: function(file) {
        console.log(file.originalname + ' tis starting ...')
    },
    onFileUploadComplete: function(file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
        done = true;
    }
}));

router.post('/new', function(req, res) {

    console.log('upload img');

    if (done == true) {
        console.log(req.files);
        console.log(req.files.userPhoto.path);

        res.status(204).json({ path: req.files.userPhoto.path.replace(/public\//g, '') });
    }else{
        res.status(204).end();
    }
});

module.exports = router;
