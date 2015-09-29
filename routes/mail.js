var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'chenpoanandrew@gmail.com',
        pass: 'andrew20asdf@'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'AndrewChen✔ <chenpoanandrew@gmail.com>', // sender address 寄件人
    to: 'chenpoanandrew@gmail.com', // list of receivers  寄給誰
    subject: '[INFO]測試信  ✔', // Subject line 信件標題
    text: '證照好棒棒', // plaintext body  ??
    html: '<h1>!~ 證照好棒棒 ~!</h1>' // html body  內容 可以用html
};


//送拉
//
router.get('/send', function(req, res, next) {


    for (var i = 1; i <= 10; i++) {
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

        });
    }

    res.render('index', {
        title: 'Send Mail'
    });
});


module.exports = router;
