var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var app          = express();

var routes       = require('./routes/index');

var em       = require('./routes/em');
var img      = require('./routes/img');
var face     = require('./routes/face');
var user     = require('./routes/user');
var order    = require('./routes/order');
var product  = require('./routes/product');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//set haeder
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/img', img);

app.use('/product', product);
app.use('/order', order);
app.use('/user', user);
app.use('/face', face);
app.use('/em', em);

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var config = {
  ip: 'http://1.172.108.234:80/',
  port: 80,
  dev: {
    ip: 'http://localhost:8080/',
    port: 8080,
  },
};

var port = config.port;

console.log('config', config);

app.listen(port, function(){
    console.log('FruitBuy server is listening -> http://localhost:' + port);
});

module.exports = app;
