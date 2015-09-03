module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var express = __webpack_require__(/*! express */ 1);
	var path = __webpack_require__(/*! path */ 20);
	var favicon = __webpack_require__(/*! serve-favicon */ 85);
	var logger = __webpack_require__(/*! morgan */ 100);
	var cookieParser = __webpack_require__(/*! cookie-parser */ 111);
	var bodyParser = __webpack_require__(/*! body-parser */ 115);
	var app = express();
	
	var routes = __webpack_require__(/*! ./routes/index */ 152);
	
	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	
	//set haeder
	app.use(function (req, res, next) {
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
	app.use(express['static'](path.join(__dirname, 'public')));
	
	app.use('/', routes);
	
	// catch 404 and forward to error handler
	app.use(function (req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    next(err);
	});
	
	// error handlers
	
	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	    app.use(function (err, req, res, next) {
	        res.status(err.status || 500);
	        res.render('error', {
	            message: err.message,
	            error: err
	        });
	    });
	}
	
	// production error handler
	// no stacktraces leaked to user
	app.use(function (err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	        message: err.message,
	        error: {}
	    });
	});
	
	var port = 8080;
	
	app.listen(port, function () {
	    console.log('FruitBuy server is listening -> http://localhost:' + port);
	});
	
	module.exports = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./~/express/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(/*! ./lib/express */ 2);


/***/ },
/* 2 */
/*!**********************************!*\
  !*** ./~/express/lib/express.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var EventEmitter = __webpack_require__(/*! events */ 3).EventEmitter;
	var mixin = __webpack_require__(/*! merge-descriptors */ 4);
	var proto = __webpack_require__(/*! ./application */ 5);
	var Route = __webpack_require__(/*! ./router/route */ 57);
	var Router = __webpack_require__(/*! ./router */ 56);
	var req = __webpack_require__(/*! ./request */ 68);
	var res = __webpack_require__(/*! ./response */ 80);
	
	/**
	 * Expose `createApplication()`.
	 */
	
	exports = module.exports = createApplication;
	
	/**
	 * Create an express application.
	 *
	 * @return {Function}
	 * @api public
	 */
	
	function createApplication() {
	  var app = function(req, res, next) {
	    app.handle(req, res, next);
	  };
	
	  mixin(app, proto);
	  mixin(app, EventEmitter.prototype);
	
	  app.request = { __proto__: req, app: app };
	  app.response = { __proto__: res, app: app };
	  app.init();
	  return app;
	}
	
	/**
	 * Expose the prototypes.
	 */
	
	exports.application = proto;
	exports.request = req;
	exports.response = res;
	
	/**
	 * Expose constructors.
	 */
	
	exports.Route = Route;
	exports.Router = Router;
	
	/**
	 * Expose middleware
	 */
	
	exports.query = __webpack_require__(/*! ./middleware/query */ 65);
	exports.static = __webpack_require__(/*! serve-static */ 84);
	
	/**
	 * Replace removed middleware with an appropriate error message.
	 */
	
	[
	  'json',
	  'urlencoded',
	  'bodyParser',
	  'compress',
	  'cookieSession',
	  'session',
	  'logger',
	  'cookieParser',
	  'favicon',
	  'responseTime',
	  'errorHandler',
	  'timeout',
	  'methodOverride',
	  'vhost',
	  'csrf',
	  'directory',
	  'limit',
	  'multipart',
	  'staticCache',
	].forEach(function (name) {
	  Object.defineProperty(exports, name, {
	    get: function () {
	      throw new Error('Most middleware (like ' + name + ') is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.');
	    },
	    configurable: true
	  });
	});


/***/ },
/* 3 */
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 4 */
/*!************************************************!*\
  !*** ./~/express/~/merge-descriptors/index.js ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = function (dest, src) {
	  Object.getOwnPropertyNames(src).forEach(function (name) {
	    var descriptor = Object.getOwnPropertyDescriptor(src, name)
	    Object.defineProperty(dest, name, descriptor)
	  })
	
	  return dest
	}

/***/ },
/* 5 */
/*!**************************************!*\
  !*** ./~/express/lib/application.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var finalhandler = __webpack_require__(/*! finalhandler */ 6);
	var flatten = __webpack_require__(/*! ./utils */ 18).flatten;
	var Router = __webpack_require__(/*! ./router */ 56);
	var methods = __webpack_require__(/*! methods */ 60);
	var middleware = __webpack_require__(/*! ./middleware/init */ 64);
	var query = __webpack_require__(/*! ./middleware/query */ 65);
	var debug = __webpack_require__(/*! debug */ 7)('express:application');
	var View = __webpack_require__(/*! ./view */ 66);
	var http = __webpack_require__(/*! http */ 15);
	var compileETag = __webpack_require__(/*! ./utils */ 18).compileETag;
	var compileQueryParser = __webpack_require__(/*! ./utils */ 18).compileQueryParser;
	var compileTrust = __webpack_require__(/*! ./utils */ 18).compileTrust;
	var deprecate = __webpack_require__(/*! depd */ 21)('express');
	var merge = __webpack_require__(/*! utils-merge */ 61);
	var resolve = __webpack_require__(/*! path */ 20).resolve;
	var slice = Array.prototype.slice;
	
	/**
	 * Application prototype.
	 */
	
	var app = exports = module.exports = {};
	
	/**
	 * Initialize the server.
	 *
	 *   - setup default configuration
	 *   - setup default middleware
	 *   - setup route reflection methods
	 *
	 * @api private
	 */
	
	app.init = function(){
	  this.cache = {};
	  this.settings = {};
	  this.engines = {};
	  this.defaultConfiguration();
	};
	
	/**
	 * Initialize application configuration.
	 *
	 * @api private
	 */
	
	app.defaultConfiguration = function(){
	  // default settings
	  this.enable('x-powered-by');
	  this.set('etag', 'weak');
	  var env = process.env.NODE_ENV || 'development';
	  this.set('env', env);
	  this.set('query parser', 'extended');
	  this.set('subdomain offset', 2);
	  this.set('trust proxy', false);
	
	  debug('booting in %s mode', env);
	
	  // inherit protos
	  this.on('mount', function(parent){
	    this.request.__proto__ = parent.request;
	    this.response.__proto__ = parent.response;
	    this.engines.__proto__ = parent.engines;
	    this.settings.__proto__ = parent.settings;
	  });
	
	  // setup locals
	  this.locals = Object.create(null);
	
	  // top-most app is mounted at /
	  this.mountpath = '/';
	
	  // default locals
	  this.locals.settings = this.settings;
	
	  // default configuration
	  this.set('view', View);
	  this.set('views', resolve('views'));
	  this.set('jsonp callback name', 'callback');
	
	  if (env === 'production') {
	    this.enable('view cache');
	  }
	
	  Object.defineProperty(this, 'router', {
	    get: function() {
	      throw new Error('\'app.router\' is deprecated!\nPlease see the 3.x to 4.x migration guide for details on how to update your app.');
	    }
	  });
	};
	
	/**
	 * lazily adds the base router if it has not yet been added.
	 *
	 * We cannot add the base router in the defaultConfiguration because
	 * it reads app settings which might be set after that has run.
	 *
	 * @api private
	 */
	app.lazyrouter = function() {
	  if (!this._router) {
	    this._router = new Router({
	      caseSensitive: this.enabled('case sensitive routing'),
	      strict: this.enabled('strict routing')
	    });
	
	    this._router.use(query(this.get('query parser fn')));
	    this._router.use(middleware.init(this));
	  }
	};
	
	/**
	 * Dispatch a req, res pair into the application. Starts pipeline processing.
	 *
	 * If no _done_ callback is provided, then default error handlers will respond
	 * in the event of an error bubbling through the stack.
	 *
	 * @api private
	 */
	
	app.handle = function(req, res, done) {
	  var router = this._router;
	
	  // final handler
	  done = done || finalhandler(req, res, {
	    env: this.get('env'),
	    onerror: logerror.bind(this)
	  });
	
	  // no routes
	  if (!router) {
	    debug('no routes defined on app');
	    done();
	    return;
	  }
	
	  router.handle(req, res, done);
	};
	
	/**
	 * Proxy `Router#use()` to add middleware to the app router.
	 * See Router#use() documentation for details.
	 *
	 * If the _fn_ parameter is an express app, then it will be
	 * mounted at the _route_ specified.
	 *
	 * @api public
	 */
	
	app.use = function use(fn) {
	  var offset = 0;
	  var path = '/';
	
	  // default path to '/'
	  // disambiguate app.use([fn])
	  if (typeof fn !== 'function') {
	    var arg = fn;
	
	    while (Array.isArray(arg) && arg.length !== 0) {
	      arg = arg[0];
	    }
	
	    // first arg is the path
	    if (typeof arg !== 'function') {
	      offset = 1;
	      path = fn;
	    }
	  }
	
	  var fns = flatten(slice.call(arguments, offset));
	
	  if (fns.length === 0) {
	    throw new TypeError('app.use() requires middleware functions');
	  }
	
	  // setup router
	  this.lazyrouter();
	  var router = this._router;
	
	  fns.forEach(function (fn) {
	    // non-express app
	    if (!fn || !fn.handle || !fn.set) {
	      return router.use(path, fn);
	    }
	
	    debug('.use app under %s', path);
	    fn.mountpath = path;
	    fn.parent = this;
	
	    // restore .app property on req and res
	    router.use(path, function mounted_app(req, res, next) {
	      var orig = req.app;
	      fn.handle(req, res, function (err) {
	        req.__proto__ = orig.request;
	        res.__proto__ = orig.response;
	        next(err);
	      });
	    });
	
	    // mounted an app
	    fn.emit('mount', this);
	  }, this);
	
	  return this;
	};
	
	/**
	 * Proxy to the app `Router#route()`
	 * Returns a new `Route` instance for the _path_.
	 *
	 * Routes are isolated middleware stacks for specific paths.
	 * See the Route api docs for details.
	 *
	 * @api public
	 */
	
	app.route = function(path){
	  this.lazyrouter();
	  return this._router.route(path);
	};
	
	/**
	 * Register the given template engine callback `fn`
	 * as `ext`.
	 *
	 * By default will `require()` the engine based on the
	 * file extension. For example if you try to render
	 * a "foo.jade" file Express will invoke the following internally:
	 *
	 *     app.engine('jade', require('jade').__express);
	 *
	 * For engines that do not provide `.__express` out of the box,
	 * or if you wish to "map" a different extension to the template engine
	 * you may use this method. For example mapping the EJS template engine to
	 * ".html" files:
	 *
	 *     app.engine('html', require('ejs').renderFile);
	 *
	 * In this case EJS provides a `.renderFile()` method with
	 * the same signature that Express expects: `(path, options, callback)`,
	 * though note that it aliases this method as `ejs.__express` internally
	 * so if you're using ".ejs" extensions you dont need to do anything.
	 *
	 * Some template engines do not follow this convention, the
	 * [Consolidate.js](https://github.com/tj/consolidate.js)
	 * library was created to map all of node's popular template
	 * engines to follow this convention, thus allowing them to
	 * work seamlessly within Express.
	 *
	 * @param {String} ext
	 * @param {Function} fn
	 * @return {app} for chaining
	 * @api public
	 */
	
	app.engine = function(ext, fn){
	  if ('function' != typeof fn) throw new Error('callback function required');
	  if ('.' != ext[0]) ext = '.' + ext;
	  this.engines[ext] = fn;
	  return this;
	};
	
	/**
	 * Proxy to `Router#param()` with one added api feature. The _name_ parameter
	 * can be an array of names.
	 *
	 * See the Router#param() docs for more details.
	 *
	 * @param {String|Array} name
	 * @param {Function} fn
	 * @return {app} for chaining
	 * @api public
	 */
	
	app.param = function(name, fn){
	  this.lazyrouter();
	
	  if (Array.isArray(name)) {
	    name.forEach(function(key) {
	      this.param(key, fn);
	    }, this);
	    return this;
	  }
	
	  this._router.param(name, fn);
	  return this;
	};
	
	/**
	 * Assign `setting` to `val`, or return `setting`'s value.
	 *
	 *    app.set('foo', 'bar');
	 *    app.get('foo');
	 *    // => "bar"
	 *
	 * Mounted servers inherit their parent server's settings.
	 *
	 * @param {String} setting
	 * @param {*} [val]
	 * @return {Server} for chaining
	 * @api public
	 */
	
	app.set = function(setting, val){
	  if (arguments.length === 1) {
	    // app.get(setting)
	    return this.settings[setting];
	  }
	
	  // set value
	  this.settings[setting] = val;
	
	  // trigger matched settings
	  switch (setting) {
	    case 'etag':
	      debug('compile etag %s', val);
	      this.set('etag fn', compileETag(val));
	      break;
	    case 'query parser':
	      debug('compile query parser %s', val);
	      this.set('query parser fn', compileQueryParser(val));
	      break;
	    case 'trust proxy':
	      debug('compile trust proxy %s', val);
	      this.set('trust proxy fn', compileTrust(val));
	      break;
	  }
	
	  return this;
	};
	
	/**
	 * Return the app's absolute pathname
	 * based on the parent(s) that have
	 * mounted it.
	 *
	 * For example if the application was
	 * mounted as "/admin", which itself
	 * was mounted as "/blog" then the
	 * return value would be "/blog/admin".
	 *
	 * @return {String}
	 * @api private
	 */
	
	app.path = function(){
	  return this.parent
	    ? this.parent.path() + this.mountpath
	    : '';
	};
	
	/**
	 * Check if `setting` is enabled (truthy).
	 *
	 *    app.enabled('foo')
	 *    // => false
	 *
	 *    app.enable('foo')
	 *    app.enabled('foo')
	 *    // => true
	 *
	 * @param {String} setting
	 * @return {Boolean}
	 * @api public
	 */
	
	app.enabled = function(setting){
	  return !!this.set(setting);
	};
	
	/**
	 * Check if `setting` is disabled.
	 *
	 *    app.disabled('foo')
	 *    // => true
	 *
	 *    app.enable('foo')
	 *    app.disabled('foo')
	 *    // => false
	 *
	 * @param {String} setting
	 * @return {Boolean}
	 * @api public
	 */
	
	app.disabled = function(setting){
	  return !this.set(setting);
	};
	
	/**
	 * Enable `setting`.
	 *
	 * @param {String} setting
	 * @return {app} for chaining
	 * @api public
	 */
	
	app.enable = function(setting){
	  return this.set(setting, true);
	};
	
	/**
	 * Disable `setting`.
	 *
	 * @param {String} setting
	 * @return {app} for chaining
	 * @api public
	 */
	
	app.disable = function(setting){
	  return this.set(setting, false);
	};
	
	/**
	 * Delegate `.VERB(...)` calls to `router.VERB(...)`.
	 */
	
	methods.forEach(function(method){
	  app[method] = function(path){
	    if ('get' == method && 1 == arguments.length) return this.set(path);
	
	    this.lazyrouter();
	
	    var route = this._router.route(path);
	    route[method].apply(route, slice.call(arguments, 1));
	    return this;
	  };
	});
	
	/**
	 * Special-cased "all" method, applying the given route `path`,
	 * middleware, and callback to _every_ HTTP method.
	 *
	 * @param {String} path
	 * @param {Function} ...
	 * @return {app} for chaining
	 * @api public
	 */
	
	app.all = function(path){
	  this.lazyrouter();
	
	  var route = this._router.route(path);
	  var args = slice.call(arguments, 1);
	  methods.forEach(function(method){
	    route[method].apply(route, args);
	  });
	
	  return this;
	};
	
	// del -> delete alias
	
	app.del = deprecate.function(app.delete, 'app.del: Use app.delete instead');
	
	/**
	 * Render the given view `name` name with `options`
	 * and a callback accepting an error and the
	 * rendered template string.
	 *
	 * Example:
	 *
	 *    app.render('email', { name: 'Tobi' }, function(err, html){
	 *      // ...
	 *    })
	 *
	 * @param {String} name
	 * @param {String|Function} options or fn
	 * @param {Function} fn
	 * @api public
	 */
	
	app.render = function(name, options, fn){
	  var opts = {};
	  var cache = this.cache;
	  var engines = this.engines;
	  var view;
	
	  // support callback function as second arg
	  if ('function' == typeof options) {
	    fn = options, options = {};
	  }
	
	  // merge app.locals
	  merge(opts, this.locals);
	
	  // merge options._locals
	  if (options._locals) {
	    merge(opts, options._locals);
	  }
	
	  // merge options
	  merge(opts, options);
	
	  // set .cache unless explicitly provided
	  opts.cache = null == opts.cache
	    ? this.enabled('view cache')
	    : opts.cache;
	
	  // primed cache
	  if (opts.cache) view = cache[name];
	
	  // view
	  if (!view) {
	    view = new (this.get('view'))(name, {
	      defaultEngine: this.get('view engine'),
	      root: this.get('views'),
	      engines: engines
	    });
	
	    if (!view.path) {
	      var dirs = Array.isArray(view.root) && view.root.length > 1
	        ? 'directories "' + view.root.slice(0, -1).join('", "') + '" or "' + view.root[view.root.length - 1] + '"'
	        : 'directory "' + view.root + '"'
	      var err = new Error('Failed to lookup view "' + name + '" in views ' + dirs);
	      err.view = view;
	      return fn(err);
	    }
	
	    // prime the cache
	    if (opts.cache) cache[name] = view;
	  }
	
	  // render
	  try {
	    view.render(opts, fn);
	  } catch (err) {
	    fn(err);
	  }
	};
	
	/**
	 * Listen for connections.
	 *
	 * A node `http.Server` is returned, with this
	 * application (which is a `Function`) as its
	 * callback. If you wish to create both an HTTP
	 * and HTTPS server you may do so with the "http"
	 * and "https" modules as shown here:
	 *
	 *    var http = require('http')
	 *      , https = require('https')
	 *      , express = require('express')
	 *      , app = express();
	 *
	 *    http.createServer(app).listen(80);
	 *    https.createServer({ ... }, app).listen(443);
	 *
	 * @return {http.Server}
	 * @api public
	 */
	
	app.listen = function(){
	  var server = http.createServer(this);
	  return server.listen.apply(server, arguments);
	};
	
	/**
	* Log error using console.error.
	*
	* @param {Error} err
	* @api private
	*/
	
	function logerror(err){
	  if (this.get('env') !== 'test') console.error(err.stack || err.toString());
	}


/***/ },
/* 6 */
/*!*******************************************!*\
  !*** ./~/express/~/finalhandler/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * finalhandler
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(/*! debug */ 7)('finalhandler')
	var escapeHtml = __webpack_require__(/*! escape-html */ 14)
	var http = __webpack_require__(/*! http */ 15)
	var onFinished = __webpack_require__(/*! on-finished */ 16)
	
	/**
	 * Variables.
	 */
	
	/* istanbul ignore next */
	var defer = typeof setImmediate === 'function'
	  ? setImmediate
	  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }
	var isFinished = onFinished.isFinished
	
	/**
	 * Module exports.
	 */
	
	module.exports = finalhandler
	
	/**
	 * Final handler:
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @param {Object} [options]
	 * @return {Function}
	 * @api public
	 */
	
	function finalhandler(req, res, options) {
	  options = options || {}
	
	  // get environment
	  var env = options.env || process.env.NODE_ENV || 'development'
	
	  // get error callback
	  var onerror = options.onerror
	
	  return function (err) {
	    var msg
	
	    // ignore 404 on in-flight response
	    if (!err && res._header) {
	      debug('cannot 404 after headers sent')
	      return
	    }
	
	    // unhandled error
	    if (err) {
	      // default status code to 500
	      if (!res.statusCode || res.statusCode < 400) {
	        res.statusCode = 500
	      }
	
	      // respect err.status
	      if (err.status) {
	        res.statusCode = err.status
	      }
	
	      // production gets a basic error message
	      var msg = env === 'production'
	        ? http.STATUS_CODES[res.statusCode]
	        : err.stack || err.toString()
	      msg = escapeHtml(msg)
	        .replace(/\n/g, '<br>')
	        .replace(/  /g, ' &nbsp;') + '\n'
	    } else {
	      res.statusCode = 404
	      msg = 'Cannot ' + escapeHtml(req.method) + ' ' + escapeHtml(req.originalUrl || req.url) + '\n'
	    }
	
	    debug('default %s', res.statusCode)
	
	    // schedule onerror callback
	    if (err && onerror) {
	      defer(onerror, err, req, res)
	    }
	
	    // cannot actually respond
	    if (res._header) {
	      return req.socket.destroy()
	    }
	
	    send(req, res, res.statusCode, msg)
	  }
	}
	
	/**
	 * Send response.
	 *
	 * @param {IncomingMessage} req
	 * @param {OutgoingMessage} res
	 * @param {number} status
	 * @param {string} body
	 * @api private
	 */
	
	function send(req, res, status, body) {
	  function write() {
	    res.statusCode = status
	
	    // security header for content sniffing
	    res.setHeader('X-Content-Type-Options', 'nosniff')
	
	    // standard headers
	    res.setHeader('Content-Type', 'text/html; charset=utf-8')
	    res.setHeader('Content-Length', Buffer.byteLength(body, 'utf8'))
	
	    if (req.method === 'HEAD') {
	      res.end()
	      return
	    }
	
	    res.end(body, 'utf8')
	  }
	
	  if (isFinished(req)) {
	    write()
	    return
	  }
	
	  // unpipe everything from the request
	  unpipe(req)
	
	  // flush the request
	  onFinished(req, write)
	  req.resume()
	}
	
	/**
	 * Unpipe everything from a stream.
	 *
	 * @param {Object} stream
	 * @api private
	 */
	
	/* istanbul ignore next: implementation differs between versions */
	function unpipe(stream) {
	  if (typeof stream.unpipe === 'function') {
	    // new-style
	    stream.unpipe()
	    return
	  }
	
	  // Node.js 0.8 hack
	  var listener
	  var listeners = stream.listeners('close')
	
	  for (var i = 0; i < listeners.length; i++) {
	    listener = listeners[i]
	
	    if (listener.name !== 'cleanup' && listener.name !== 'onclose') {
	      continue
	    }
	
	    // invoke the listener
	    listener.call(stream)
	  }
	}


/***/ },
/* 7 */
/*!*************************!*\
  !*** ./~/debug/node.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var tty = __webpack_require__(/*! tty */ 8);
	var util = __webpack_require__(/*! util */ 9);
	
	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(/*! ./debug */ 10);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	
	/**
	 * Colors.
	 */
	
	exports.colors = [6, 2, 3, 4, 5, 1];
	
	/**
	 * The file descriptor to write the `debug()` calls to.
	 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
	 *
	 *   $ DEBUG_FD=3 node script.js 3>debug.log
	 */
	
	var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
	var stream = 1 === fd ? process.stdout :
	             2 === fd ? process.stderr :
	             createWritableStdioStream(fd);
	
	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */
	
	function useColors() {
	  var debugColors = (process.env.DEBUG_COLORS || '').trim().toLowerCase();
	  if (0 === debugColors.length) {
	    return tty.isatty(fd);
	  } else {
	    return '0' !== debugColors
	        && 'no' !== debugColors
	        && 'false' !== debugColors
	        && 'disabled' !== debugColors;
	  }
	}
	
	/**
	 * Map %o to `util.inspect()`, since Node doesn't do that out of the box.
	 */
	
	var inspect = (4 === util.inspect.length ?
	  // node <= 0.8.x
	  function (v, colors) {
	    return util.inspect(v, void 0, void 0, colors);
	  } :
	  // node > 0.8.x
	  function (v, colors) {
	    return util.inspect(v, { colors: colors });
	  }
	);
	
	exports.formatters.o = function(v) {
	  return inspect(v, this.useColors)
	    .replace(/\s*\n\s*/g, ' ');
	};
	
	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	  var name = this.namespace;
	
	  if (useColors) {
	    var c = this.color;
	
	    args[0] = '  \u001b[3' + c + ';1m' + name + ' '
	      + '\u001b[0m'
	      + args[0] + '\u001b[3' + c + 'm'
	      + ' +' + exports.humanize(this.diff) + '\u001b[0m';
	  } else {
	    args[0] = new Date().toUTCString()
	      + ' ' + name + ' ' + args[0];
	  }
	  return args;
	}
	
	/**
	 * Invokes `console.error()` with the specified arguments.
	 */
	
	function log() {
	  return stream.write(util.format.apply(this, arguments) + '\n');
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete process.env.DEBUG;
	  } else {
	    process.env.DEBUG = namespaces;
	  }
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  return process.env.DEBUG;
	}
	
	/**
	 * Copied from `node/src/node.js`.
	 *
	 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
	 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
	 */
	
	function createWritableStdioStream (fd) {
	  var stream;
	  var tty_wrap = process.binding('tty_wrap');
	
	  // Note stream._type is used for test-module-load-list.js
	
	  switch (tty_wrap.guessHandleType(fd)) {
	    case 'TTY':
	      stream = new tty.WriteStream(fd);
	      stream._type = 'tty';
	
	      // Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;
	
	    case 'FILE':
	      var fs = __webpack_require__(/*! fs */ 12);
	      stream = new fs.SyncWriteStream(fd, { autoClose: false });
	      stream._type = 'fs';
	      break;
	
	    case 'PIPE':
	    case 'TCP':
	      var net = __webpack_require__(/*! net */ 13);
	      stream = new net.Socket({
	        fd: fd,
	        readable: false,
	        writable: true
	      });
	
	      // FIXME Should probably have an option in net.Socket to create a
	      // stream from an existing fd which is writable only. But for now
	      // we'll just add this hack and set the `readable` member to false.
	      // Test: ./node test/fixtures/echo.js < /etc/passwd
	      stream.readable = false;
	      stream.read = null;
	      stream._type = 'pipe';
	
	      // FIXME Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;
	
	    default:
	      // Probably an error on in uv_guess_handle()
	      throw new Error('Implement me. Unknown stream file type!');
	  }
	
	  // For supporting legacy API we put the FD here.
	  stream.fd = fd;
	
	  stream._isStdio = true;
	
	  return stream;
	}
	
	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */
	
	exports.enable(load());


/***/ },
/* 8 */
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = require("tty");

/***/ },
/* 9 */
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 10 */
/*!**************************!*\
  !*** ./~/debug/debug.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(/*! ms */ 11);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 11 */
/*!*******************************!*\
  !*** ./~/debug/~/ms/index.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 12 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 13 */
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = require("net");

/***/ },
/* 14 */
/*!******************************************!*\
  !*** ./~/express/~/escape-html/index.js ***!
  \******************************************/
/***/ function(module, exports) {

	/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {String} html
	 * @return {String}
	 * @api private
	 */
	
	module.exports = function(html) {
	  return String(html)
	    .replace(/&/g, '&amp;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;');
	}


/***/ },
/* 15 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 16 */
/*!******************************************!*\
  !*** ./~/express/~/on-finished/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * on-finished
	 * Copyright(c) 2013 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = onFinished;
	module.exports.isFinished = isFinished;
	
	/**
	* Module dependencies.
	*/
	
	var first = __webpack_require__(/*! ee-first */ 17)
	
	/**
	* Variables.
	*/
	
	/* istanbul ignore next */
	var defer = typeof setImmediate === 'function'
	  ? setImmediate
	  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }
	
	/**
	 * Invoke callback when the response has finished, useful for
	 * cleaning up resources afterwards.
	 *
	 * @param {object} msg
	 * @param {function} listener
	 * @return {object}
	 * @api public
	 */
	
	function onFinished(msg, listener) {
	  if (isFinished(msg) !== false) {
	    defer(listener, null, msg)
	    return msg
	  }
	
	  // attach the listener to the message
	  attachListener(msg, listener)
	
	  return msg
	}
	
	/**
	 * Determine if message is already finished.
	 *
	 * @param {object} msg
	 * @return {boolean}
	 * @api public
	 */
	
	function isFinished(msg) {
	  var socket = msg.socket
	
	  if (typeof msg.finished === 'boolean') {
	    // OutgoingMessage
	    return Boolean(msg.finished || (socket && !socket.writable))
	  }
	
	  if (typeof msg.complete === 'boolean') {
	    // IncomingMessage
	    return Boolean(!socket || !socket.readable || (msg.complete && !msg.readable))
	  }
	
	  // don't know
	  return undefined
	}
	
	/**
	 * Attach a finished listener to the message.
	 *
	 * @param {object} msg
	 * @param {function} callback
	 * @private
	 */
	
	function attachFinishedListener(msg, callback) {
	  var eeMsg
	  var eeSocket
	  var finished = false
	
	  function onFinish(error) {
	    eeMsg.cancel()
	    eeSocket.cancel()
	
	    finished = true
	    callback(error)
	  }
	
	  // finished on first message event
	  eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish)
	
	  function onSocket(socket) {
	    // remove listener
	    msg.removeListener('socket', onSocket)
	
	    if (finished) return
	    if (eeMsg !== eeSocket) return
	
	    // finished on first socket event
	    eeSocket = first([[socket, 'error', 'close']], onFinish)
	  }
	
	  if (msg.socket) {
	    // socket already assigned
	    onSocket(msg.socket)
	    return
	  }
	
	  // wait for socket to be assigned
	  msg.on('socket', onSocket)
	
	  if (msg.socket === undefined) {
	    // node.js 0.8 patch
	    patchAssignSocket(msg, onSocket)
	  }
	}
	
	/**
	 * Attach the listener to the message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @api private
	 */
	
	function attachListener(msg, listener) {
	  var attached = msg.__onFinished
	
	  // create a private single listener with queue
	  if (!attached || !attached.queue) {
	    attached = msg.__onFinished = createListener(msg)
	    attachFinishedListener(msg, attached)
	  }
	
	  attached.queue.push(listener)
	}
	
	/**
	 * Create listener on message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @api private
	 */
	
	function createListener(msg) {
	  function listener(err) {
	    if (msg.__onFinished === listener) msg.__onFinished = null
	    if (!listener.queue) return
	
	    var queue = listener.queue
	    listener.queue = null
	
	    for (var i = 0; i < queue.length; i++) {
	      queue[i](err, msg)
	    }
	  }
	
	  listener.queue = []
	
	  return listener
	}
	
	/**
	 * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
	 *
	 * @param {ServerResponse} res
	 * @param {function} callback
	 * @private
	 */
	
	function patchAssignSocket(res, callback) {
	  var assignSocket = res.assignSocket
	
	  if (typeof assignSocket !== 'function') return
	
	  // res.on('socket', callback) is broken in 0.8
	  res.assignSocket = function _assignSocket(socket) {
	    assignSocket.call(this, socket)
	    callback(socket)
	  }
	}


/***/ },
/* 17 */
/*!*****************************************************!*\
  !*** ./~/express/~/on-finished/~/ee-first/index.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	
	module.exports = function first(stuff, done) {
	  if (!Array.isArray(stuff))
	    throw new TypeError('arg must be an array of [ee, events...] arrays')
	
	  var cleanups = []
	
	  for (var i = 0; i < stuff.length; i++) {
	    var arr = stuff[i]
	
	    if (!Array.isArray(arr) || arr.length < 2)
	      throw new TypeError('each array member must be [ee, events...]')
	
	    var ee = arr[0]
	
	    for (var j = 1; j < arr.length; j++) {
	      var event = arr[j]
	      var fn = listener(event, callback)
	
	      // listen to the event
	      ee.on(event, fn)
	      // push this listener to the list of cleanups
	      cleanups.push({
	        ee: ee,
	        event: event,
	        fn: fn,
	      })
	    }
	  }
	
	  function callback() {
	    cleanup()
	    done.apply(null, arguments)
	  }
	
	  function cleanup() {
	    var x
	    for (var i = 0; i < cleanups.length; i++) {
	      x = cleanups[i]
	      x.ee.removeListener(x.event, x.fn)
	    }
	  }
	
	  function thunk(fn) {
	    done = fn
	  }
	
	  thunk.cancel = cleanup
	
	  return thunk
	}
	
	function listener(event, done) {
	  return function onevent(arg1) {
	    var args = new Array(arguments.length)
	    var ee = this
	    var err = event === 'error'
	      ? arg1
	      : null
	
	    // copy args to prevent arguments escaping scope
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i]
	    }
	
	    done(err, ee, event, args)
	  }
	}


/***/ },
/* 18 */
/*!********************************!*\
  !*** ./~/express/lib/utils.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var contentDisposition = __webpack_require__(/*! content-disposition */ 19);
	var deprecate = __webpack_require__(/*! depd */ 21)('express');
	var mime = __webpack_require__(/*! send */ 25).mime;
	var basename = __webpack_require__(/*! path */ 20).basename;
	var etag = __webpack_require__(/*! etag */ 31);
	var proxyaddr = __webpack_require__(/*! proxy-addr */ 45);
	var qs = __webpack_require__(/*! qs */ 49);
	var querystring = __webpack_require__(/*! querystring */ 54);
	var typer = __webpack_require__(/*! media-typer */ 55);
	
	/**
	 * Return strong ETag for `body`.
	 *
	 * @param {String|Buffer} body
	 * @param {String} [encoding]
	 * @return {String}
	 * @api private
	 */
	
	exports.etag = function (body, encoding) {
	  var buf = !Buffer.isBuffer(body)
	    ? new Buffer(body, encoding)
	    : body;
	
	  return etag(buf, {weak: false});
	};
	
	/**
	 * Return weak ETag for `body`.
	 *
	 * @param {String|Buffer} body
	 * @param {String} [encoding]
	 * @return {String}
	 * @api private
	 */
	
	exports.wetag = function wetag(body, encoding){
	  var buf = !Buffer.isBuffer(body)
	    ? new Buffer(body, encoding)
	    : body;
	
	  return etag(buf, {weak: true});
	};
	
	/**
	 * Check if `path` looks absolute.
	 *
	 * @param {String} path
	 * @return {Boolean}
	 * @api private
	 */
	
	exports.isAbsolute = function(path){
	  if ('/' == path[0]) return true;
	  if (':' == path[1] && '\\' == path[2]) return true;
	  if ('\\\\' == path.substring(0, 2)) return true; // Microsoft Azure absolute path
	};
	
	/**
	 * Flatten the given `arr`.
	 *
	 * @param {Array} arr
	 * @return {Array}
	 * @api private
	 */
	
	exports.flatten = function(arr, ret){
	  ret = ret || [];
	  var len = arr.length;
	  for (var i = 0; i < len; ++i) {
	    if (Array.isArray(arr[i])) {
	      exports.flatten(arr[i], ret);
	    } else {
	      ret.push(arr[i]);
	    }
	  }
	  return ret;
	};
	
	/**
	 * Normalize the given `type`, for example "html" becomes "text/html".
	 *
	 * @param {String} type
	 * @return {Object}
	 * @api private
	 */
	
	exports.normalizeType = function(type){
	  return ~type.indexOf('/')
	    ? acceptParams(type)
	    : { value: mime.lookup(type), params: {} };
	};
	
	/**
	 * Normalize `types`, for example "html" becomes "text/html".
	 *
	 * @param {Array} types
	 * @return {Array}
	 * @api private
	 */
	
	exports.normalizeTypes = function(types){
	  var ret = [];
	
	  for (var i = 0; i < types.length; ++i) {
	    ret.push(exports.normalizeType(types[i]));
	  }
	
	  return ret;
	};
	
	/**
	 * Generate Content-Disposition header appropriate for the filename.
	 * non-ascii filenames are urlencoded and a filename* parameter is added
	 *
	 * @param {String} filename
	 * @return {String}
	 * @api private
	 */
	
	exports.contentDisposition = deprecate.function(contentDisposition,
	  'utils.contentDisposition: use content-disposition npm module instead');
	
	/**
	 * Parse accept params `str` returning an
	 * object with `.value`, `.quality` and `.params`.
	 * also includes `.originalIndex` for stable sorting
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function acceptParams(str, index) {
	  var parts = str.split(/ *; */);
	  var ret = { value: parts[0], quality: 1, params: {}, originalIndex: index };
	
	  for (var i = 1; i < parts.length; ++i) {
	    var pms = parts[i].split(/ *= */);
	    if ('q' == pms[0]) {
	      ret.quality = parseFloat(pms[1]);
	    } else {
	      ret.params[pms[0]] = pms[1];
	    }
	  }
	
	  return ret;
	}
	
	/**
	 * Compile "etag" value to function.
	 *
	 * @param  {Boolean|String|Function} val
	 * @return {Function}
	 * @api private
	 */
	
	exports.compileETag = function(val) {
	  var fn;
	
	  if (typeof val === 'function') {
	    return val;
	  }
	
	  switch (val) {
	    case true:
	      fn = exports.wetag;
	      break;
	    case false:
	      break;
	    case 'strong':
	      fn = exports.etag;
	      break;
	    case 'weak':
	      fn = exports.wetag;
	      break;
	    default:
	      throw new TypeError('unknown value for etag function: ' + val);
	  }
	
	  return fn;
	}
	
	/**
	 * Compile "query parser" value to function.
	 *
	 * @param  {String|Function} val
	 * @return {Function}
	 * @api private
	 */
	
	exports.compileQueryParser = function compileQueryParser(val) {
	  var fn;
	
	  if (typeof val === 'function') {
	    return val;
	  }
	
	  switch (val) {
	    case true:
	      fn = querystring.parse;
	      break;
	    case false:
	      fn = newObject;
	      break;
	    case 'extended':
	      fn = qs.parse;
	      break;
	    case 'simple':
	      fn = querystring.parse;
	      break;
	    default:
	      throw new TypeError('unknown value for query parser function: ' + val);
	  }
	
	  return fn;
	}
	
	/**
	 * Compile "proxy trust" value to function.
	 *
	 * @param  {Boolean|String|Number|Array|Function} val
	 * @return {Function}
	 * @api private
	 */
	
	exports.compileTrust = function(val) {
	  if (typeof val === 'function') return val;
	
	  if (val === true) {
	    // Support plain true/false
	    return function(){ return true };
	  }
	
	  if (typeof val === 'number') {
	    // Support trusting hop count
	    return function(a, i){ return i < val };
	  }
	
	  if (typeof val === 'string') {
	    // Support comma-separated values
	    val = val.split(/ *, */);
	  }
	
	  return proxyaddr.compile(val || []);
	}
	
	/**
	 * Set the charset in a given Content-Type string.
	 *
	 * @param {String} type
	 * @param {String} charset
	 * @return {String}
	 * @api private
	 */
	
	exports.setCharset = function(type, charset){
	  if (!type || !charset) return type;
	
	  // parse type
	  var parsed = typer.parse(type);
	
	  // set charset
	  parsed.parameters.charset = charset;
	
	  // format type
	  return typer.format(parsed);
	};
	
	/**
	 * Return new empty object.
	 *
	 * @return {Object}
	 * @api private
	 */
	
	function newObject() {
	  return {};
	}


/***/ },
/* 19 */
/*!**************************************************!*\
  !*** ./~/express/~/content-disposition/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * content-disposition
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = contentDisposition
	module.exports.parse = parse
	
	/**
	 * Module dependencies.
	 */
	
	var basename = __webpack_require__(/*! path */ 20).basename
	
	/**
	 * RegExp to match non attr-char, *after* encodeURIComponent (i.e. not including "%")
	 */
	
	var encodeUriAttrCharRegExp = /[\x00-\x20"'\(\)*,\/:;<=>?@\[\\\]\{\}\x7f]/g
	
	/**
	 * RegExp to match percent encoding escape.
	 */
	
	var hexEscapeRegExp = /%[0-9A-Fa-f]{2}/
	var hexEscapeReplaceRegExp = /%([0-9A-Fa-f]{2})/g
	
	/**
	 * RegExp to match non-latin1 characters.
	 */
	
	var nonLatin1RegExp = /[^\x20-\x7e\xa0-\xff]/g
	
	/**
	 * RegExp to match quoted-pair in RFC 2616
	 *
	 * quoted-pair = "\" CHAR
	 * CHAR        = <any US-ASCII character (octets 0 - 127)>
	 */
	
	var qescRegExp = /\\([\u0000-\u007f])/g;
	
	/**
	 * RegExp to match chars that must be quoted-pair in RFC 2616
	 */
	
	var quoteRegExp = /([\\"])/g
	
	/**
	 * RegExp for various RFC 2616 grammar
	 *
	 * parameter     = token "=" ( token | quoted-string )
	 * token         = 1*<any CHAR except CTLs or separators>
	 * separators    = "(" | ")" | "<" | ">" | "@"
	 *               | "," | ";" | ":" | "\" | <">
	 *               | "/" | "[" | "]" | "?" | "="
	 *               | "{" | "}" | SP | HT
	 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
	 * qdtext        = <any TEXT except <">>
	 * quoted-pair   = "\" CHAR
	 * CHAR          = <any US-ASCII character (octets 0 - 127)>
	 * TEXT          = <any OCTET except CTLs, but including LWS>
	 * LWS           = [CRLF] 1*( SP | HT )
	 * CRLF          = CR LF
	 * CR            = <US-ASCII CR, carriage return (13)>
	 * LF            = <US-ASCII LF, linefeed (10)>
	 * SP            = <US-ASCII SP, space (32)>
	 * HT            = <US-ASCII HT, horizontal-tab (9)>
	 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
	 * OCTET         = <any 8-bit sequence of data>
	 */
	
	var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g
	var textRegExp = /^[\x20-\x7e\x80-\xff]+$/
	var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/
	
	/**
	 * RegExp for various RFC 5987 grammar
	 *
	 * ext-value     = charset  "'" [ language ] "'" value-chars
	 * charset       = "UTF-8" / "ISO-8859-1" / mime-charset
	 * mime-charset  = 1*mime-charsetc
	 * mime-charsetc = ALPHA / DIGIT
	 *               / "!" / "#" / "$" / "%" / "&"
	 *               / "+" / "-" / "^" / "_" / "`"
	 *               / "{" / "}" / "~"
	 * language      = ( 2*3ALPHA [ extlang ] )
	 *               / 4ALPHA
	 *               / 5*8ALPHA
	 * extlang       = *3( "-" 3ALPHA )
	 * value-chars   = *( pct-encoded / attr-char )
	 * pct-encoded   = "%" HEXDIG HEXDIG
	 * attr-char     = ALPHA / DIGIT
	 *               / "!" / "#" / "$" / "&" / "+" / "-" / "."
	 *               / "^" / "_" / "`" / "|" / "~"
	 */
	
	var extValueRegExp = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+\-\.^_`|~])+)$/
	
	/**
	 * RegExp for various RFC 6266 grammar
	 *
	 * disposition-type = "inline" | "attachment" | disp-ext-type
	 * disp-ext-type    = token
	 * disposition-parm = filename-parm | disp-ext-parm
	 * filename-parm    = "filename" "=" value
	 *                  | "filename*" "=" ext-value
	 * disp-ext-parm    = token "=" value
	 *                  | ext-token "=" ext-value
	 * ext-token        = <the characters in token, followed by "*">
	 */
	
	var dispositionTypeRegExp = /^([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *(?:$|;)/
	
	/**
	 * Create an attachment Content-Disposition header.
	 *
	 * @param {string} [filename]
	 * @param {object} [options]
	 * @param {string} [options.type=attachment]
	 * @param {string|boolean} [options.fallback=true]
	 * @return {string}
	 * @api public
	 */
	
	function contentDisposition(filename, options) {
	  var opts = options || {}
	
	  // get type
	  var type = opts.type || 'attachment'
	
	  // get parameters
	  var params = createparams(filename, opts.fallback)
	
	  // format into string
	  return format(new ContentDisposition(type, params))
	}
	
	/**
	 * Create parameters object from filename and fallback.
	 *
	 * @param {string} [filename]
	 * @param {string|boolean} [fallback=true]
	 * @return {object}
	 * @api private
	 */
	
	function createparams(filename, fallback) {
	  if (filename === undefined) {
	    return
	  }
	
	  var params = {}
	
	  if (typeof filename !== 'string') {
	    throw new TypeError('filename must be a string')
	  }
	
	  // fallback defaults to true
	  if (fallback === undefined) {
	    fallback = true
	  }
	
	  if (typeof fallback !== 'string' && typeof fallback !== 'boolean') {
	    throw new TypeError('fallback must be a string or boolean')
	  }
	
	  if (typeof fallback === 'string' && nonLatin1RegExp.test(fallback)) {
	    throw new TypeError('fallback must be ISO-8859-1 string')
	  }
	
	  // restrict to file base name
	  var name = basename(filename)
	
	  // determine if name is suitable for quoted string
	  var isQuotedString = textRegExp.test(name)
	
	  // generate fallback name
	  var fallbackName = typeof fallback !== 'string'
	    ? fallback && getlatin1(name)
	    : basename(fallback)
	  var hasFallback = typeof fallbackName === 'string' && fallbackName !== name
	
	  // set extended filename parameter
	  if (hasFallback || !isQuotedString || hexEscapeRegExp.test(name)) {
	    params['filename*'] = name
	  }
	
	  // set filename parameter
	  if (isQuotedString || hasFallback) {
	    params.filename = hasFallback
	      ? fallbackName
	      : name
	  }
	
	  return params
	}
	
	/**
	 * Format object to Content-Disposition header.
	 *
	 * @param {object} obj
	 * @param {string} obj.type
	 * @param {object} [obj.parameters]
	 * @return {string}
	 * @api private
	 */
	
	function format(obj) {
	  var parameters = obj.parameters
	  var type = obj.type
	
	  if (!type || typeof type !== 'string' || !tokenRegExp.test(type)) {
	    throw new TypeError('invalid type')
	  }
	
	  // start with normalized type
	  var string = String(type).toLowerCase()
	
	  // append parameters
	  if (parameters && typeof parameters === 'object') {
	    var param
	    var params = Object.keys(parameters).sort()
	
	    for (var i = 0; i < params.length; i++) {
	      param = params[i]
	
	      var val = param.substr(-1) === '*'
	        ? ustring(parameters[param])
	        : qstring(parameters[param])
	
	      string += '; ' + param + '=' + val
	    }
	  }
	
	  return string
	}
	
	/**
	 * Decode a RFC 6987 field value (gracefully).
	 *
	 * @param {string} str
	 * @return {string}
	 * @api private
	 */
	
	function decodefield(str) {
	  var match = extValueRegExp.exec(str)
	
	  if (!match) {
	    throw new TypeError('invalid extended field value')
	  }
	
	  var charset = match[1].toLowerCase()
	  var encoded = match[2]
	  var value
	
	  // to binary string
	  var binary = encoded.replace(hexEscapeReplaceRegExp, pdecode)
	
	  switch (charset) {
	    case 'iso-8859-1':
	      value = getlatin1(binary)
	      break
	    case 'utf-8':
	      value = new Buffer(binary, 'binary').toString('utf8')
	      break
	    default:
	      throw new TypeError('unsupported charset in extended field')
	  }
	
	  return value
	}
	
	/**
	 * Get ISO-8859-1 version of string.
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */
	
	function getlatin1(val) {
	  // simple Unicode -> ISO-8859-1 transformation
	  return String(val).replace(nonLatin1RegExp, '?')
	}
	
	/**
	 * Parse Content-Disposition header string.
	 *
	 * @param {string} string
	 * @return {object}
	 * @api private
	 */
	
	function parse(string) {
	  if (!string || typeof string !== 'string') {
	    throw new TypeError('argument string is required')
	  }
	
	  var match = dispositionTypeRegExp.exec(string)
	
	  if (!match) {
	    throw new TypeError('invalid type format')
	  }
	
	  // normalize type
	  var index = match[0].length
	  var type = match[1].toLowerCase()
	
	  var key
	  var names = []
	  var params = {}
	  var value
	
	  // calculate index to start at
	  index = paramRegExp.lastIndex = match[0].substr(-1) === ';'
	    ? index - 1
	    : index
	
	  // match parameters
	  while (match = paramRegExp.exec(string)) {
	    if (match.index !== index) {
	      throw new TypeError('invalid parameter format')
	    }
	
	    index += match[0].length
	    key = match[1].toLowerCase()
	    value = match[2]
	
	    if (names.indexOf(key) !== -1) {
	      throw new TypeError('invalid duplicate parameter')
	    }
	
	    names.push(key)
	
	    if (key.indexOf('*') + 1 === key.length) {
	      // decode extended value
	      key = key.slice(0, -1)
	      value = decodefield(value)
	
	      // overwrite existing value
	      params[key] = value
	      continue
	    }
	
	    if (typeof params[key] === 'string') {
	      continue
	    }
	
	    if (value[0] === '"') {
	      // remove quotes and escapes
	      value = value
	        .substr(1, value.length - 2)
	        .replace(qescRegExp, '$1')
	    }
	
	    params[key] = value
	  }
	
	  if (index !== -1 && index !== string.length) {
	    throw new TypeError('invalid parameter format')
	  }
	
	  return new ContentDisposition(type, params)
	}
	
	/**
	 * Percent decode a single character.
	 *
	 * @param {string} str
	 * @param {string} hex
	 * @return {string}
	 * @api private
	 */
	
	function pdecode(str, hex) {
	  return String.fromCharCode(parseInt(hex, 16))
	}
	
	/**
	 * Percent encode a single character.
	 *
	 * @param {string} char
	 * @return {string}
	 * @api private
	 */
	
	function pencode(char) {
	  var hex = String(char)
	    .charCodeAt(0)
	    .toString(16)
	    .toUpperCase()
	  return hex.length === 1
	    ? '%0' + hex
	    : '%' + hex
	}
	
	/**
	 * Quote a string for HTTP.
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */
	
	function qstring(val) {
	  var str = String(val)
	
	  return '"' + str.replace(quoteRegExp, '\\$1') + '"'
	}
	
	/**
	 * Encode a Unicode string for HTTP (RFC 5987).
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */
	
	function ustring(val) {
	  var str = String(val)
	
	  // percent encode as UTF-8
	  var encoded = encodeURIComponent(str)
	    .replace(encodeUriAttrCharRegExp, pencode)
	
	  return 'UTF-8\'\'' + encoded
	}
	
	/**
	 * Class for parsed Content-Disposition header for v8 optimization
	 */
	
	function ContentDisposition(type, parameters) {
	  this.type = type
	  this.parameters = parameters
	}


/***/ },
/* 20 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 21 */
/*!***********************************!*\
  !*** ./~/express/~/depd/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var callSiteToString = __webpack_require__(/*! ./lib/compat */ 22).callSiteToString
	var EventEmitter = __webpack_require__(/*! events */ 3).EventEmitter
	var relative = __webpack_require__(/*! path */ 20).relative
	
	/**
	 * Module exports.
	 */
	
	module.exports = depd
	
	/**
	 * Get the path to base files on.
	 */
	
	var basePath = process.cwd()
	
	/**
	 * Get listener count on event emitter.
	 */
	
	/*istanbul ignore next*/
	var eventListenerCount = EventEmitter.listenerCount
	  || function (emitter, type) { return emitter.listeners(type).length }
	
	/**
	 * Determine if namespace is contained in the string.
	 */
	
	function containsNamespace(str, namespace) {
	  var val = str.split(/[ ,]+/)
	
	  namespace = String(namespace).toLowerCase()
	
	  for (var i = 0 ; i < val.length; i++) {
	    if (!(str = val[i])) continue;
	
	    // namespace contained
	    if (str === '*' || str.toLowerCase() === namespace) {
	      return true
	    }
	  }
	
	  return false
	}
	
	/**
	 * Convert a data descriptor to accessor descriptor.
	 */
	
	function convertDataDescriptorToAccessor(obj, prop, message) {
	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
	  var value = descriptor.value
	
	  descriptor.get = function getter() { return value }
	
	  if (descriptor.writable) {
	    descriptor.set = function setter(val) { return value = val }
	  }
	
	  delete descriptor.value
	  delete descriptor.writable
	
	  Object.defineProperty(obj, prop, descriptor)
	
	  return descriptor
	}
	
	/**
	 * Create arguments string to keep arity.
	 */
	
	function createArgumentsString(arity) {
	  var str = ''
	
	  for (var i = 0; i < arity; i++) {
	    str += ', arg' + i
	  }
	
	  return str.substr(2)
	}
	
	/**
	 * Create stack string from stack.
	 */
	
	function createStackString(stack) {
	  var str = this.name + ': ' + this.namespace
	
	  if (this.message) {
	    str += ' deprecated ' + this.message
	  }
	
	  for (var i = 0; i < stack.length; i++) {
	    str += '\n    at ' + callSiteToString(stack[i])
	  }
	
	  return str
	}
	
	/**
	 * Create deprecate for namespace in caller.
	 */
	
	function depd(namespace) {
	  if (!namespace) {
	    throw new TypeError('argument namespace is required')
	  }
	
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	  var file = site[0]
	
	  function deprecate(message) {
	    // call to self as log
	    log.call(deprecate, message)
	  }
	
	  deprecate._file = file
	  deprecate._ignored = isignored(namespace)
	  deprecate._namespace = namespace
	  deprecate._traced = istraced(namespace)
	  deprecate._warned = Object.create(null)
	
	  deprecate.function = wrapfunction
	  deprecate.property = wrapproperty
	
	  return deprecate
	}
	
	/**
	 * Determine if namespace is ignored.
	 */
	
	function isignored(namespace) {
	  /* istanbul ignore next: tested in a child processs */
	  if (process.noDeprecation) {
	    // --no-deprecation support
	    return true
	  }
	
	  var str = process.env.NO_DEPRECATION || ''
	
	  // namespace ignored
	  return containsNamespace(str, namespace)
	}
	
	/**
	 * Determine if namespace is traced.
	 */
	
	function istraced(namespace) {
	  /* istanbul ignore next: tested in a child processs */
	  if (process.traceDeprecation) {
	    // --trace-deprecation support
	    return true
	  }
	
	  var str = process.env.TRACE_DEPRECATION || ''
	
	  // namespace traced
	  return containsNamespace(str, namespace)
	}
	
	/**
	 * Display deprecation message.
	 */
	
	function log(message, site) {
	  var haslisteners = eventListenerCount(process, 'deprecation') !== 0
	
	  // abort early if no destination
	  if (!haslisteners && this._ignored) {
	    return
	  }
	
	  var caller
	  var callFile
	  var callSite
	  var i = 0
	  var seen = false
	  var stack = getStack()
	  var file = this._file
	
	  if (site) {
	    // provided site
	    callSite = callSiteLocation(stack[1])
	    callSite.name = site.name
	    file = callSite[0]
	  } else {
	    // get call site
	    i = 2
	    site = callSiteLocation(stack[i])
	    callSite = site
	  }
	
	  // get caller of deprecated thing in relation to file
	  for (; i < stack.length; i++) {
	    caller = callSiteLocation(stack[i])
	    callFile = caller[0]
	
	    if (callFile === file) {
	      seen = true
	    } else if (callFile === this._file) {
	      file = this._file
	    } else if (seen) {
	      break
	    }
	  }
	
	  var key = caller
	    ? site.join(':') + '__' + caller.join(':')
	    : undefined
	
	  if (key !== undefined && key in this._warned) {
	    // already warned
	    return
	  }
	
	  this._warned[key] = true
	
	  // generate automatic message from call site
	  if (!message) {
	    message = callSite === site || !callSite.name
	      ? defaultMessage(site)
	      : defaultMessage(callSite)
	  }
	
	  // emit deprecation if listeners exist
	  if (haslisteners) {
	    var err = DeprecationError(this._namespace, message, stack.slice(i))
	    process.emit('deprecation', err)
	    return
	  }
	
	  // format and write message
	  var format = process.stderr.isTTY
	    ? formatColor
	    : formatPlain
	  var msg = format.call(this, message, caller, stack.slice(i))
	  process.stderr.write(msg + '\n', 'utf8')
	
	  return
	}
	
	/**
	 * Get call site location as array.
	 */
	
	function callSiteLocation(callSite) {
	  var file = callSite.getFileName() || '<anonymous>'
	  var line = callSite.getLineNumber()
	  var colm = callSite.getColumnNumber()
	
	  if (callSite.isEval()) {
	    file = callSite.getEvalOrigin() + ', ' + file
	  }
	
	  var site = [file, line, colm]
	
	  site.callSite = callSite
	  site.name = callSite.getFunctionName()
	
	  return site
	}
	
	/**
	 * Generate a default message from the site.
	 */
	
	function defaultMessage(site) {
	  var callSite = site.callSite
	  var funcName = site.name
	
	  // make useful anonymous name
	  if (!funcName) {
	    funcName = '<anonymous@' + formatLocation(site) + '>'
	  }
	
	  var context = callSite.getThis()
	  var typeName = context && callSite.getTypeName()
	
	  // ignore useless type name
	  if (typeName === 'Object') {
	    typeName = undefined
	  }
	
	  // make useful type name
	  if (typeName === 'Function') {
	    typeName = context.name || typeName
	  }
	
	  return typeName && callSite.getMethodName()
	    ? typeName + '.' + funcName
	    : funcName
	}
	
	/**
	 * Format deprecation message without color.
	 */
	
	function formatPlain(msg, caller, stack) {
	  var timestamp = new Date().toUTCString()
	
	  var formatted = timestamp
	    + ' ' + this._namespace
	    + ' deprecated ' + msg
	
	  // add stack trace
	  if (this._traced) {
	    for (var i = 0; i < stack.length; i++) {
	      formatted += '\n    at ' + callSiteToString(stack[i])
	    }
	
	    return formatted
	  }
	
	  if (caller) {
	    formatted += ' at ' + formatLocation(caller)
	  }
	
	  return formatted
	}
	
	/**
	 * Format deprecation message with color.
	 */
	
	function formatColor(msg, caller, stack) {
	  var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' // bold cyan
	    + ' \x1b[33;1mdeprecated\x1b[22;39m' // bold yellow
	    + ' \x1b[0m' + msg + '\x1b[39m' // reset
	
	  // add stack trace
	  if (this._traced) {
	    for (var i = 0; i < stack.length; i++) {
	      formatted += '\n    \x1b[36mat ' + callSiteToString(stack[i]) + '\x1b[39m' // cyan
	    }
	
	    return formatted
	  }
	
	  if (caller) {
	    formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m' // cyan
	  }
	
	  return formatted
	}
	
	/**
	 * Format call site location.
	 */
	
	function formatLocation(callSite) {
	  return relative(basePath, callSite[0])
	    + ':' + callSite[1]
	    + ':' + callSite[2]
	}
	
	/**
	 * Get the stack as array of call sites.
	 */
	
	function getStack() {
	  var limit = Error.stackTraceLimit
	  var obj = {}
	  var prep = Error.prepareStackTrace
	
	  Error.prepareStackTrace = prepareObjectStackTrace
	  Error.stackTraceLimit = Math.max(10, limit)
	
	  // capture the stack
	  Error.captureStackTrace(obj)
	
	  // slice this function off the top
	  var stack = obj.stack.slice(1)
	
	  Error.prepareStackTrace = prep
	  Error.stackTraceLimit = limit
	
	  return stack
	}
	
	/**
	 * Capture call site stack from v8.
	 */
	
	function prepareObjectStackTrace(obj, stack) {
	  return stack
	}
	
	/**
	 * Return a wrapped function in a deprecation message.
	 */
	
	function wrapfunction(fn, message) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('argument fn must be a function')
	  }
	
	  var args = createArgumentsString(fn.length)
	  var deprecate = this
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	
	  site.name = fn.name
	
	  var deprecatedfn = eval('(function (' + args + ') {\n'
	    + '"use strict"\n'
	    + 'log.call(deprecate, message, site)\n'
	    + 'return fn.apply(this, arguments)\n'
	    + '})')
	
	  return deprecatedfn
	}
	
	/**
	 * Wrap property in a deprecation message.
	 */
	
	function wrapproperty(obj, prop, message) {
	  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
	    throw new TypeError('argument obj must be object')
	  }
	
	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
	
	  if (!descriptor) {
	    throw new TypeError('must call property on owner object')
	  }
	
	  if (!descriptor.configurable) {
	    throw new TypeError('property must be configurable')
	  }
	
	  var deprecate = this
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	
	  // set site name
	  site.name = prop
	
	  // convert data descriptor
	  if ('value' in descriptor) {
	    descriptor = convertDataDescriptorToAccessor(obj, prop, message)
	  }
	
	  var get = descriptor.get
	  var set = descriptor.set
	
	  // wrap getter
	  if (typeof get === 'function') {
	    descriptor.get = function getter() {
	      log.call(deprecate, message, site)
	      return get.apply(this, arguments)
	    }
	  }
	
	  // wrap setter
	  if (typeof set === 'function') {
	    descriptor.set = function setter() {
	      log.call(deprecate, message, site)
	      return set.apply(this, arguments)
	    }
	  }
	
	  Object.defineProperty(obj, prop, descriptor)
	}
	
	/**
	 * Create DeprecationError for deprecation
	 */
	
	function DeprecationError(namespace, message, stack) {
	  var error = new Error()
	  var stackString
	
	  Object.defineProperty(error, 'constructor', {
	    value: DeprecationError
	  })
	
	  Object.defineProperty(error, 'message', {
	    configurable: true,
	    enumerable: false,
	    value: message,
	    writable: true
	  })
	
	  Object.defineProperty(error, 'name', {
	    enumerable: false,
	    configurable: true,
	    value: 'DeprecationError',
	    writable: true
	  })
	
	  Object.defineProperty(error, 'namespace', {
	    configurable: true,
	    enumerable: false,
	    value: namespace,
	    writable: true
	  })
	
	  Object.defineProperty(error, 'stack', {
	    configurable: true,
	    enumerable: false,
	    get: function () {
	      if (stackString !== undefined) {
	        return stackString
	      }
	
	      // prepare stack trace
	      return stackString = createStackString.call(this, stack)
	    },
	    set: function setter(val) {
	      stackString = val
	    }
	  })
	
	  return error
	}


/***/ },
/* 22 */
/*!**********************************************!*\
  !*** ./~/express/~/depd/lib/compat/index.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	lazyProperty(module.exports, 'bufferConcat', function bufferConcat() {
	  return Buffer.concat || __webpack_require__(/*! ./buffer-concat */ 23)
	})
	
	lazyProperty(module.exports, 'callSiteToString', function callSiteToString() {
	  var limit = Error.stackTraceLimit
	  var obj = {}
	  var prep = Error.prepareStackTrace
	
	  function prepareObjectStackTrace(obj, stack) {
	    return stack
	  }
	
	  Error.prepareStackTrace = prepareObjectStackTrace
	  Error.stackTraceLimit = 2
	
	  // capture the stack
	  Error.captureStackTrace(obj)
	
	  // slice the stack
	  var stack = obj.stack.slice()
	
	  Error.prepareStackTrace = prep
	  Error.stackTraceLimit = limit
	
	  return stack[0].toString ? toString : __webpack_require__(/*! ./callsite-tostring */ 24)
	})
	
	/**
	 * Define a lazy property.
	 */
	
	function lazyProperty(obj, prop, getter) {
	  function get() {
	    var val = getter()
	
	    Object.defineProperty(obj, prop, {
	      configurable: true,
	      enumerable: true,
	      value: val
	    })
	
	    return val
	  }
	
	  Object.defineProperty(obj, prop, {
	    configurable: true,
	    enumerable: true,
	    get: get
	  })
	}
	
	/**
	 * Call toString() on the obj
	 */
	
	function toString(obj) {
	  return obj.toString()
	}


/***/ },
/* 23 */
/*!******************************************************!*\
  !*** ./~/express/~/depd/lib/compat/buffer-concat.js ***!
  \******************************************************/
/***/ function(module, exports) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = bufferConcat
	
	/**
	 * Concatenate an array of Buffers.
	 */
	
	function bufferConcat(bufs) {
	  var length = 0
	
	  for (var i = 0, len = bufs.length; i < len; i++) {
	    length += bufs[i].length
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	
	  for (var i = 0, len = bufs.length; i < len; i++) {
	    bufs[i].copy(buf, pos)
	    pos += bufs[i].length
	  }
	
	  return buf
	}


/***/ },
/* 24 */
/*!**********************************************************!*\
  !*** ./~/express/~/depd/lib/compat/callsite-tostring.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = callSiteToString
	
	/**
	 * Format a CallSite file location to a string.
	 */
	
	function callSiteFileLocation(callSite) {
	  var fileName
	  var fileLocation = ''
	
	  if (callSite.isNative()) {
	    fileLocation = 'native'
	  } else if (callSite.isEval()) {
	    fileName = callSite.getScriptNameOrSourceURL()
	    if (!fileName) {
	      fileLocation = callSite.getEvalOrigin()
	    }
	  } else {
	    fileName = callSite.getFileName()
	  }
	
	  if (fileName) {
	    fileLocation += fileName
	
	    var lineNumber = callSite.getLineNumber()
	    if (lineNumber != null) {
	      fileLocation += ':' + lineNumber
	
	      var columnNumber = callSite.getColumnNumber()
	      if (columnNumber) {
	        fileLocation += ':' + columnNumber
	      }
	    }
	  }
	
	  return fileLocation || 'unknown source'
	}
	
	/**
	 * Format a CallSite to a string.
	 */
	
	function callSiteToString(callSite) {
	  var addSuffix = true
	  var fileLocation = callSiteFileLocation(callSite)
	  var functionName = callSite.getFunctionName()
	  var isConstructor = callSite.isConstructor()
	  var isMethodCall = !(callSite.isToplevel() || isConstructor)
	  var line = ''
	
	  if (isMethodCall) {
	    var methodName = callSite.getMethodName()
	    var typeName = getConstructorName(callSite)
	
	    if (functionName) {
	      if (typeName && functionName.indexOf(typeName) !== 0) {
	        line += typeName + '.'
	      }
	
	      line += functionName
	
	      if (methodName && functionName.lastIndexOf('.' + methodName) !== functionName.length - methodName.length - 1) {
	        line += ' [as ' + methodName + ']'
	      }
	    } else {
	      line += typeName + '.' + (methodName || '<anonymous>')
	    }
	  } else if (isConstructor) {
	    line += 'new ' + (functionName || '<anonymous>')
	  } else if (functionName) {
	    line += functionName
	  } else {
	    addSuffix = false
	    line += fileLocation
	  }
	
	  if (addSuffix) {
	    line += ' (' + fileLocation + ')'
	  }
	
	  return line
	}
	
	/**
	 * Get constructor name of reviver.
	 */
	
	function getConstructorName(obj) {
	  var receiver = obj.receiver
	  return (receiver.constructor && receiver.constructor.name) || null
	}


/***/ },
/* 25 */
/*!***********************************!*\
  !*** ./~/express/~/send/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(/*! debug */ 7)('send')
	var deprecate = __webpack_require__(/*! depd */ 21)('send')
	var destroy = __webpack_require__(/*! destroy */ 26)
	var escapeHtml = __webpack_require__(/*! escape-html */ 14)
	  , parseRange = __webpack_require__(/*! range-parser */ 28)
	  , Stream = __webpack_require__(/*! stream */ 27)
	  , mime = __webpack_require__(/*! mime */ 29)
	  , fresh = __webpack_require__(/*! fresh */ 30)
	  , path = __webpack_require__(/*! path */ 20)
	  , http = __webpack_require__(/*! http */ 15)
	  , fs = __webpack_require__(/*! fs */ 12)
	  , normalize = path.normalize
	  , join = path.join
	var etag = __webpack_require__(/*! etag */ 31)
	var EventEmitter = __webpack_require__(/*! events */ 3).EventEmitter;
	var ms = __webpack_require__(/*! ms */ 44);
	var onFinished = __webpack_require__(/*! on-finished */ 16)
	
	/**
	 * Variables.
	 */
	var extname = path.extname
	var maxMaxAge = 60 * 60 * 24 * 365 * 1000; // 1 year
	var resolve = path.resolve
	var sep = path.sep
	var toString = Object.prototype.toString
	var upPathRegexp = /(?:^|[\\\/])\.\.(?:[\\\/]|$)/
	
	/**
	 * Expose `send`.
	 */
	
	exports = module.exports = send;
	
	/**
	 * Expose mime module.
	 */
	
	exports.mime = mime;
	
	/**
	 * Shim EventEmitter.listenerCount for node.js < 0.10
	 */
	
	/* istanbul ignore next */
	var listenerCount = EventEmitter.listenerCount
	  || function(emitter, type){ return emitter.listeners(type).length; };
	
	/**
	 * Return a `SendStream` for `req` and `path`.
	 *
	 * @param {Request} req
	 * @param {String} path
	 * @param {Object} options
	 * @return {SendStream}
	 * @api public
	 */
	
	function send(req, path, options) {
	  return new SendStream(req, path, options);
	}
	
	/**
	 * Initialize a `SendStream` with the given `path`.
	 *
	 * @param {Request} req
	 * @param {String} path
	 * @param {Object} options
	 * @api private
	 */
	
	function SendStream(req, path, options) {
	  var self = this;
	  options = options || {};
	  this.req = req;
	  this.path = path;
	  this.options = options;
	
	  this._etag = options.etag !== undefined
	    ? Boolean(options.etag)
	    : true
	
	  this._dotfiles = options.dotfiles !== undefined
	    ? options.dotfiles
	    : 'ignore'
	
	  if (['allow', 'deny', 'ignore'].indexOf(this._dotfiles) === -1) {
	    throw new TypeError('dotfiles option must be "allow", "deny", or "ignore"')
	  }
	
	  this._hidden = Boolean(options.hidden)
	
	  if ('hidden' in options) {
	    deprecate('hidden: use dotfiles: \'' + (this._hidden ? 'allow' : 'ignore') + '\' instead')
	  }
	
	  // legacy support
	  if (!('dotfiles' in options)) {
	    this._dotfiles = undefined
	  }
	
	  this._extensions = options.extensions !== undefined
	    ? normalizeList(options.extensions)
	    : []
	
	  this._index = options.index !== undefined
	    ? normalizeList(options.index)
	    : ['index.html']
	
	  this._lastModified = options.lastModified !== undefined
	    ? Boolean(options.lastModified)
	    : true
	
	  this._maxage = options.maxAge || options.maxage
	  this._maxage = typeof this._maxage === 'string'
	    ? ms(this._maxage)
	    : Number(this._maxage)
	  this._maxage = !isNaN(this._maxage)
	    ? Math.min(Math.max(0, this._maxage), maxMaxAge)
	    : 0
	
	  this._root = options.root
	    ? resolve(options.root)
	    : null
	
	  if (!this._root && options.from) {
	    this.from(options.from);
	  }
	}
	
	/**
	 * Inherits from `Stream.prototype`.
	 */
	
	SendStream.prototype.__proto__ = Stream.prototype;
	
	/**
	 * Enable or disable etag generation.
	 *
	 * @param {Boolean} val
	 * @return {SendStream}
	 * @api public
	 */
	
	SendStream.prototype.etag = deprecate.function(function etag(val) {
	  val = Boolean(val);
	  debug('etag %s', val);
	  this._etag = val;
	  return this;
	}, 'send.etag: pass etag as option');
	
	/**
	 * Enable or disable "hidden" (dot) files.
	 *
	 * @param {Boolean} path
	 * @return {SendStream}
	 * @api public
	 */
	
	SendStream.prototype.hidden = deprecate.function(function hidden(val) {
	  val = Boolean(val);
	  debug('hidden %s', val);
	  this._hidden = val;
	  this._dotfiles = undefined
	  return this;
	}, 'send.hidden: use dotfiles option');
	
	/**
	 * Set index `paths`, set to a falsy
	 * value to disable index support.
	 *
	 * @param {String|Boolean|Array} paths
	 * @return {SendStream}
	 * @api public
	 */
	
	SendStream.prototype.index = deprecate.function(function index(paths) {
	  var index = !paths ? [] : normalizeList(paths);
	  debug('index %o', paths);
	  this._index = index;
	  return this;
	}, 'send.index: pass index as option');
	
	/**
	 * Set root `path`.
	 *
	 * @param {String} path
	 * @return {SendStream}
	 * @api public
	 */
	
	SendStream.prototype.root = function(path){
	  path = String(path);
	  this._root = resolve(path)
	  return this;
	};
	
	SendStream.prototype.from = deprecate.function(SendStream.prototype.root,
	  'send.from: pass root as option');
	
	SendStream.prototype.root = deprecate.function(SendStream.prototype.root,
	  'send.root: pass root as option');
	
	/**
	 * Set max-age to `maxAge`.
	 *
	 * @param {Number} maxAge
	 * @return {SendStream}
	 * @api public
	 */
	
	SendStream.prototype.maxage = deprecate.function(function maxage(maxAge) {
	  maxAge = typeof maxAge === 'string'
	    ? ms(maxAge)
	    : Number(maxAge);
	  if (isNaN(maxAge)) maxAge = 0;
	  if (Infinity == maxAge) maxAge = 60 * 60 * 24 * 365 * 1000;
	  debug('max-age %d', maxAge);
	  this._maxage = maxAge;
	  return this;
	}, 'send.maxage: pass maxAge as option');
	
	/**
	 * Emit error with `status`.
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	SendStream.prototype.error = function(status, err){
	  var res = this.res;
	  var msg = http.STATUS_CODES[status];
	
	  err = err || new Error(msg);
	  err.status = status;
	
	  // emit if listeners instead of responding
	  if (listenerCount(this, 'error') !== 0) {
	    return this.emit('error', err);
	  }
	
	  // wipe all existing headers
	  res._headers = undefined;
	
	  res.statusCode = err.status;
	  res.end(msg);
	};
	
	/**
	 * Check if the pathname ends with "/".
	 *
	 * @return {Boolean}
	 * @api private
	 */
	
	SendStream.prototype.hasTrailingSlash = function(){
	  return '/' == this.path[this.path.length - 1];
	};
	
	/**
	 * Check if this is a conditional GET request.
	 *
	 * @return {Boolean}
	 * @api private
	 */
	
	SendStream.prototype.isConditionalGET = function(){
	  return this.req.headers['if-none-match']
	    || this.req.headers['if-modified-since'];
	};
	
	/**
	 * Strip content-* header fields.
	 *
	 * @api private
	 */
	
	SendStream.prototype.removeContentHeaderFields = function(){
	  var res = this.res;
	  Object.keys(res._headers).forEach(function(field){
	    if (0 == field.indexOf('content')) {
	      res.removeHeader(field);
	    }
	  });
	};
	
	/**
	 * Respond with 304 not modified.
	 *
	 * @api private
	 */
	
	SendStream.prototype.notModified = function(){
	  var res = this.res;
	  debug('not modified');
	  this.removeContentHeaderFields();
	  res.statusCode = 304;
	  res.end();
	};
	
	/**
	 * Raise error that headers already sent.
	 *
	 * @api private
	 */
	
	SendStream.prototype.headersAlreadySent = function headersAlreadySent(){
	  var err = new Error('Can\'t set headers after they are sent.');
	  debug('headers already sent');
	  this.error(500, err);
	};
	
	/**
	 * Check if the request is cacheable, aka
	 * responded with 2xx or 304 (see RFC 2616 section 14.2{5,6}).
	 *
	 * @return {Boolean}
	 * @api private
	 */
	
	SendStream.prototype.isCachable = function(){
	  var res = this.res;
	  return (res.statusCode >= 200 && res.statusCode < 300) || 304 == res.statusCode;
	};
	
	/**
	 * Handle stat() error.
	 *
	 * @param {Error} err
	 * @api private
	 */
	
	SendStream.prototype.onStatError = function(err){
	  var notfound = ['ENOENT', 'ENAMETOOLONG', 'ENOTDIR'];
	  if (~notfound.indexOf(err.code)) return this.error(404, err);
	  this.error(500, err);
	};
	
	/**
	 * Check if the cache is fresh.
	 *
	 * @return {Boolean}
	 * @api private
	 */
	
	SendStream.prototype.isFresh = function(){
	  return fresh(this.req.headers, this.res._headers);
	};
	
	/**
	 * Check if the range is fresh.
	 *
	 * @return {Boolean}
	 * @api private
	 */
	
	SendStream.prototype.isRangeFresh = function isRangeFresh(){
	  var ifRange = this.req.headers['if-range'];
	
	  if (!ifRange) return true;
	
	  return ~ifRange.indexOf('"')
	    ? ~ifRange.indexOf(this.res._headers['etag'])
	    : Date.parse(this.res._headers['last-modified']) <= Date.parse(ifRange);
	};
	
	/**
	 * Redirect to `path`.
	 *
	 * @param {String} path
	 * @api private
	 */
	
	SendStream.prototype.redirect = function(path){
	  if (listenerCount(this, 'directory') !== 0) {
	    return this.emit('directory');
	  }
	
	  if (this.hasTrailingSlash()) return this.error(403);
	  var res = this.res;
	  path += '/';
	  res.statusCode = 301;
	  res.setHeader('Content-Type', 'text/html; charset=utf-8');
	  res.setHeader('Location', path);
	  res.end('Redirecting to <a href="' + escapeHtml(path) + '">' + escapeHtml(path) + '</a>\n');
	};
	
	/**
	 * Pipe to `res.
	 *
	 * @param {Stream} res
	 * @return {Stream} res
	 * @api public
	 */
	
	SendStream.prototype.pipe = function(res){
	  var self = this
	    , args = arguments
	    , root = this._root;
	
	  // references
	  this.res = res;
	
	  // decode the path
	  var path = decode(this.path)
	  if (path === -1) return this.error(400)
	
	  // null byte(s)
	  if (~path.indexOf('\0')) return this.error(400);
	
	  var parts
	  if (root !== null) {
	    // malicious path
	    if (upPathRegexp.test(normalize('.' + sep + path))) {
	      debug('malicious path "%s"', path)
	      return this.error(403)
	    }
	
	    // join / normalize from optional root dir
	    path = normalize(join(root, path))
	    root = normalize(root + sep)
	
	    // explode path parts
	    parts = path.substr(root.length).split(sep)
	  } else {
	    // ".." is malicious without "root"
	    if (upPathRegexp.test(path)) {
	      debug('malicious path "%s"', path)
	      return this.error(403)
	    }
	
	    // explode path parts
	    parts = normalize(path).split(sep)
	
	    // resolve the path
	    path = resolve(path)
	  }
	
	  // dotfile handling
	  if (containsDotFile(parts)) {
	    var access = this._dotfiles
	
	    // legacy support
	    if (access === undefined) {
	      access = parts[parts.length - 1][0] === '.'
	        ? (this._hidden ? 'allow' : 'ignore')
	        : 'allow'
	    }
	
	    debug('%s dotfile "%s"', access, path)
	    switch (access) {
	      case 'allow':
	        break
	      case 'deny':
	        return this.error(403)
	      case 'ignore':
	      default:
	        return this.error(404)
	    }
	  }
	
	  // index file support
	  if (this._index.length && this.path[this.path.length - 1] === '/') {
	    this.sendIndex(path);
	    return res;
	  }
	
	  this.sendFile(path);
	  return res;
	};
	
	/**
	 * Transfer `path`.
	 *
	 * @param {String} path
	 * @api public
	 */
	
	SendStream.prototype.send = function(path, stat){
	  var options = this.options;
	  var len = stat.size;
	  var res = this.res;
	  var req = this.req;
	  var ranges = req.headers.range;
	  var offset = options.start || 0;
	
	  if (res._header) {
	    // impossible to send now
	    return this.headersAlreadySent();
	  }
	
	  debug('pipe "%s"', path)
	
	  // set header fields
	  this.setHeader(path, stat);
	
	  // set content-type
	  this.type(path);
	
	  // conditional GET support
	  if (this.isConditionalGET()
	    && this.isCachable()
	    && this.isFresh()) {
	    return this.notModified();
	  }
	
	  // adjust len to start/end options
	  len = Math.max(0, len - offset);
	  if (options.end !== undefined) {
	    var bytes = options.end - offset + 1;
	    if (len > bytes) len = bytes;
	  }
	
	  // Range support
	  if (ranges) {
	    ranges = parseRange(len, ranges);
	
	    // If-Range support
	    if (!this.isRangeFresh()) {
	      debug('range stale');
	      ranges = -2;
	    }
	
	    // unsatisfiable
	    if (-1 == ranges) {
	      debug('range unsatisfiable');
	      res.setHeader('Content-Range', 'bytes */' + stat.size);
	      return this.error(416);
	    }
	
	    // valid (syntactically invalid/multiple ranges are treated as a regular response)
	    if (-2 != ranges && ranges.length === 1) {
	      debug('range %j', ranges);
	
	      options.start = offset + ranges[0].start;
	      options.end = offset + ranges[0].end;
	
	      // Content-Range
	      res.statusCode = 206;
	      res.setHeader('Content-Range', 'bytes '
	        + ranges[0].start
	        + '-'
	        + ranges[0].end
	        + '/'
	        + len);
	      len = options.end - options.start + 1;
	    }
	  }
	
	  // content-length
	  res.setHeader('Content-Length', len);
	
	  // HEAD support
	  if ('HEAD' == req.method) return res.end();
	
	  this.stream(path, options);
	};
	
	/**
	 * Transfer file for `path`.
	 *
	 * @param {String} path
	 * @api private
	 */
	SendStream.prototype.sendFile = function sendFile(path) {
	  var i = 0
	  var self = this
	
	  debug('stat "%s"', path);
	  fs.stat(path, function onstat(err, stat) {
	    if (err && err.code === 'ENOENT'
	      && !extname(path)
	      && path[path.length - 1] !== sep) {
	      // not found, check extensions
	      return next(err)
	    }
	    if (err) return self.onStatError(err)
	    if (stat.isDirectory()) return self.redirect(self.path)
	    self.emit('file', path, stat)
	    self.send(path, stat)
	  })
	
	  function next(err) {
	    if (self._extensions.length <= i) {
	      return err
	        ? self.onStatError(err)
	        : self.error(404)
	    }
	
	    var p = path + '.' + self._extensions[i++]
	
	    debug('stat "%s"', p)
	    fs.stat(p, function (err, stat) {
	      if (err) return next(err)
	      if (stat.isDirectory()) return next()
	      self.emit('file', p, stat)
	      self.send(p, stat)
	    })
	  }
	}
	
	/**
	 * Transfer index for `path`.
	 *
	 * @param {String} path
	 * @api private
	 */
	SendStream.prototype.sendIndex = function sendIndex(path){
	  var i = -1;
	  var self = this;
	
	  function next(err){
	    if (++i >= self._index.length) {
	      if (err) return self.onStatError(err);
	      return self.error(404);
	    }
	
	    var p = join(path, self._index[i]);
	
	    debug('stat "%s"', p);
	    fs.stat(p, function(err, stat){
	      if (err) return next(err);
	      if (stat.isDirectory()) return next();
	      self.emit('file', p, stat);
	      self.send(p, stat);
	    });
	  }
	
	  next();
	};
	
	/**
	 * Stream `path` to the response.
	 *
	 * @param {String} path
	 * @param {Object} options
	 * @api private
	 */
	
	SendStream.prototype.stream = function(path, options){
	  // TODO: this is all lame, refactor meeee
	  var finished = false;
	  var self = this;
	  var res = this.res;
	  var req = this.req;
	
	  // pipe
	  var stream = fs.createReadStream(path, options);
	  this.emit('stream', stream);
	  stream.pipe(res);
	
	  // response finished, done with the fd
	  onFinished(res, function onfinished(){
	    finished = true;
	    destroy(stream);
	  });
	
	  // error handling code-smell
	  stream.on('error', function onerror(err){
	    // request already finished
	    if (finished) return;
	
	    // clean up stream
	    finished = true;
	    destroy(stream);
	
	    // error
	    self.onStatError(err);
	  });
	
	  // end
	  stream.on('end', function onend(){
	    self.emit('end');
	  });
	};
	
	/**
	 * Set content-type based on `path`
	 * if it hasn't been explicitly set.
	 *
	 * @param {String} path
	 * @api private
	 */
	
	SendStream.prototype.type = function(path){
	  var res = this.res;
	  if (res.getHeader('Content-Type')) return;
	  var type = mime.lookup(path);
	  var charset = mime.charsets.lookup(type);
	  debug('content-type %s', type);
	  res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
	};
	
	/**
	 * Set response header fields, most
	 * fields may be pre-defined.
	 *
	 * @param {String} path
	 * @param {Object} stat
	 * @api private
	 */
	
	SendStream.prototype.setHeader = function setHeader(path, stat){
	  var res = this.res;
	
	  this.emit('headers', res, path, stat);
	
	  if (!res.getHeader('Accept-Ranges')) res.setHeader('Accept-Ranges', 'bytes');
	  if (!res.getHeader('Date')) res.setHeader('Date', new Date().toUTCString());
	  if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + Math.floor(this._maxage / 1000));
	
	  if (this._lastModified && !res.getHeader('Last-Modified')) {
	    var modified = stat.mtime.toUTCString()
	    debug('modified %s', modified)
	    res.setHeader('Last-Modified', modified)
	  }
	
	  if (this._etag && !res.getHeader('ETag')) {
	    var val = etag(stat)
	    debug('etag %s', val)
	    res.setHeader('ETag', val)
	  }
	};
	
	/**
	 * Determine if path parts contain a dotfile.
	 *
	 * @api private
	 */
	
	function containsDotFile(parts) {
	  for (var i = 0; i < parts.length; i++) {
	    if (parts[i][0] === '.') {
	      return true
	    }
	  }
	
	  return false
	}
	
	/**
	 * decodeURIComponent.
	 *
	 * Allows V8 to only deoptimize this fn instead of all
	 * of send().
	 *
	 * @param {String} path
	 * @api private
	 */
	
	function decode(path) {
	  try {
	    return decodeURIComponent(path)
	  } catch (err) {
	    return -1
	  }
	}
	
	/**
	 * Normalize the index option into an array.
	 *
	 * @param {boolean|string|array} val
	 * @api private
	 */
	
	function normalizeList(val){
	  return [].concat(val || [])
	}


/***/ },
/* 26 */
/*!*********************************************!*\
  !*** ./~/express/~/send/~/destroy/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ReadStream = __webpack_require__(/*! fs */ 12).ReadStream
	var Stream = __webpack_require__(/*! stream */ 27)
	
	module.exports = function destroy(stream) {
	  if (stream instanceof ReadStream) {
	    return destroyReadStream(stream)
	  }
	
	  if (!(stream instanceof Stream)) {
	    return stream
	  }
	
	  if (typeof stream.destroy === 'function') {
	    stream.destroy()
	  }
	
	  return stream
	}
	
	function destroyReadStream(stream) {
	  stream.destroy()
	
	  if (typeof stream.close === 'function') {
	    // node.js core bug work-around
	    stream.on('open', onopenClose)
	  }
	
	  return stream
	}
	
	function onopenClose() {
	  if (typeof this.fd === 'number') {
	    // actually close down the fd
	    this.close()
	  }
	}


/***/ },
/* 27 */
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("stream");

/***/ },
/* 28 */
/*!*******************************************!*\
  !*** ./~/express/~/range-parser/index.js ***!
  \*******************************************/
/***/ function(module, exports) {

	
	/**
	 * Parse "Range" header `str` relative to the given file `size`.
	 *
	 * @param {Number} size
	 * @param {String} str
	 * @return {Array}
	 * @api public
	 */
	
	module.exports = function(size, str){
	  var valid = true;
	  var i = str.indexOf('=');
	
	  if (-1 == i) return -2;
	
	  var arr = str.slice(i + 1).split(',').map(function(range){
	    var range = range.split('-')
	      , start = parseInt(range[0], 10)
	      , end = parseInt(range[1], 10);
	
	    // -nnn
	    if (isNaN(start)) {
	      start = size - end;
	      end = size - 1;
	    // nnn-
	    } else if (isNaN(end)) {
	      end = size - 1;
	    }
	
	    // limit last-byte-pos to current length
	    if (end > size - 1) end = size - 1;
	
	    // invalid
	    if (isNaN(start)
	      || isNaN(end)
	      || start > end
	      || start < 0) valid = false;
	
	    return {
	      start: start,
	      end: end
	    };
	  });
	
	  arr.type = str.slice(0, i);
	
	  return valid ? arr : -1;
	};


/***/ },
/* 29 */
/*!*****************************************!*\
  !*** ./~/express/~/send/~/mime/mime.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ 20);
	var fs = __webpack_require__(/*! fs */ 12);
	
	function Mime() {
	  // Map of extension -> mime type
	  this.types = Object.create(null);
	
	  // Map of mime type -> extension
	  this.extensions = Object.create(null);
	}
	
	/**
	 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
	 * to an array of extensions associated with the type.  The first extension is
	 * used as the default extension for the type.
	 *
	 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
	 *
	 * @param map (Object) type definitions
	 */
	Mime.prototype.define = function (map) {
	  for (var type in map) {
	    var exts = map[type];
	
	    for (var i = 0; i < exts.length; i++) {
	      if (process.env.DEBUG_MIME && this.types[exts]) {
	        console.warn(this._loading.replace(/.*\//, ''), 'changes "' + exts[i] + '" extension type from ' +
	          this.types[exts] + ' to ' + type);
	      }
	
	      this.types[exts[i]] = type;
	    }
	
	    // Default extension is the first one we encounter
	    if (!this.extensions[type]) {
	      this.extensions[type] = exts[0];
	    }
	  }
	};
	
	/**
	 * Load an Apache2-style ".types" file
	 *
	 * This may be called multiple times (it's expected).  Where files declare
	 * overlapping types/extensions, the last file wins.
	 *
	 * @param file (String) path of file to load.
	 */
	Mime.prototype.load = function(file) {
	
	  this._loading = file;
	  // Read file and split into lines
	  var map = {},
	      content = fs.readFileSync(file, 'ascii'),
	      lines = content.split(/[\r\n]+/);
	
	  lines.forEach(function(line) {
	    // Clean up whitespace/comments, and split into fields
	    var fields = line.replace(/\s*#.*|^\s*|\s*$/g, '').split(/\s+/);
	    map[fields.shift()] = fields;
	  });
	
	  this.define(map);
	
	  this._loading = null;
	};
	
	/**
	 * Lookup a mime type based on extension
	 */
	Mime.prototype.lookup = function(path, fallback) {
	  var ext = path.replace(/.*[\.\/\\]/, '').toLowerCase();
	
	  return this.types[ext] || fallback || this.default_type;
	};
	
	/**
	 * Return file extension associated with a mime type
	 */
	Mime.prototype.extension = function(mimeType) {
	  var type = mimeType.match(/^\s*([^;\s]*)(?:;|\s|$)/)[1].toLowerCase();
	  return this.extensions[type];
	};
	
	// Default instance
	var mime = new Mime();
	
	// Load local copy of
	// http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
	mime.load(path.join(__dirname, 'types/mime.types'));
	
	// Load additional types from node.js community
	mime.load(path.join(__dirname, 'types/node.types'));
	
	// Default type
	mime.default_type = mime.lookup('bin');
	
	//
	// Additional API specific to the default instance
	//
	
	mime.Mime = Mime;
	
	/**
	 * Lookup a charset based on mime type.
	 */
	mime.charsets = {
	  lookup: function(mimeType, fallback) {
	    // Assume text types are utf8
	    return (/^text\//).test(mimeType) ? 'UTF-8' : fallback;
	  }
	};
	
	module.exports = mime;
	
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 30 */
/*!************************************!*\
  !*** ./~/express/~/fresh/index.js ***!
  \************************************/
/***/ function(module, exports) {

	
	/**
	 * Expose `fresh()`.
	 */
	
	module.exports = fresh;
	
	/**
	 * Check freshness of `req` and `res` headers.
	 *
	 * When the cache is "fresh" __true__ is returned,
	 * otherwise __false__ is returned to indicate that
	 * the cache is now stale.
	 *
	 * @param {Object} req
	 * @param {Object} res
	 * @return {Boolean}
	 * @api public
	 */
	
	function fresh(req, res) {
	  // defaults
	  var etagMatches = true;
	  var notModified = true;
	
	  // fields
	  var modifiedSince = req['if-modified-since'];
	  var noneMatch = req['if-none-match'];
	  var lastModified = res['last-modified'];
	  var etag = res['etag'];
	  var cc = req['cache-control'];
	
	  // unconditional request
	  if (!modifiedSince && !noneMatch) return false;
	
	  // check for no-cache cache request directive
	  if (cc && cc.indexOf('no-cache') !== -1) return false;  
	
	  // parse if-none-match
	  if (noneMatch) noneMatch = noneMatch.split(/ *, */);
	
	  // if-none-match
	  if (noneMatch) etagMatches = ~noneMatch.indexOf(etag) || '*' == noneMatch[0];
	
	  // if-modified-since
	  if (modifiedSince) {
	    modifiedSince = new Date(modifiedSince);
	    lastModified = new Date(lastModified);
	    notModified = lastModified <= modifiedSince;
	  }
	
	  return !! (etagMatches && notModified);
	}

/***/ },
/* 31 */
/*!***********************************!*\
  !*** ./~/express/~/etag/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * etag
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = etag
	
	/**
	 * Module dependencies.
	 */
	
	var crc = __webpack_require__(/*! crc */ 32).crc32
	var crypto = __webpack_require__(/*! crypto */ 43)
	var Stats = __webpack_require__(/*! fs */ 12).Stats
	
	/**
	 * Module variables.
	 */
	
	var crc32threshold = 1000 // 1KB
	var NULL = new Buffer([0])
	var toString = Object.prototype.toString
	
	/**
	 * Create a simple ETag.
	 *
	 * @param {string|Buffer|Stats} entity
	 * @param {object} [options]
	 * @param {boolean} [options.weak]
	 * @return {String}
	 * @api public
	 */
	
	function etag(entity, options) {
	  if (entity == null) {
	    throw new TypeError('argument entity is required')
	  }
	
	  var isStats = isstats(entity)
	  var weak = options && typeof options.weak === 'boolean'
	    ? options.weak
	    : isStats
	
	  // support fs.Stats object
	  if (isStats) {
	    return stattag(entity, weak)
	  }
	
	  if (typeof entity !== 'string' && !Buffer.isBuffer(entity)) {
	    throw new TypeError('argument entity must be string, Buffer, or fs.Stats')
	  }
	
	  var hash = weak
	    ? weakhash(entity)
	    : stronghash(entity)
	
	  return weak
	    ? 'W/"' + hash + '"'
	    : '"' + hash + '"'
	}
	
	/**
	 * Determine if object is a Stats object.
	 *
	 * @param {object} obj
	 * @return {boolean}
	 * @api private
	 */
	
	function isstats(obj) {
	  // not even an object
	  if (obj === null || typeof obj !== 'object') {
	    return false
	  }
	
	  // genuine fs.Stats
	  if (obj instanceof Stats) {
	    return true
	  }
	
	  // quack quack
	  return 'atime' in obj && toString.call(obj.atime) === '[object Date]'
	    && 'ctime' in obj && toString.call(obj.ctime) === '[object Date]'
	    && 'mtime' in obj && toString.call(obj.mtime) === '[object Date]'
	    && 'ino' in obj && typeof obj.ino === 'number'
	    && 'size' in obj && typeof obj.size === 'number'
	}
	
	/**
	 * Generate a tag for a stat.
	 *
	 * @param {Buffer} entity
	 * @return {String}
	 * @api private
	 */
	
	function stattag(stat, weak) {
	  var mtime = stat.mtime.toISOString()
	  var size = stat.size.toString(16)
	
	  if (weak) {
	    return 'W/"' + size + '-' + crc(mtime) + '"'
	  }
	
	  var hash = crypto
	    .createHash('md5')
	    .update('file', 'utf8')
	    .update(NULL)
	    .update(size, 'utf8')
	    .update(NULL)
	    .update(mtime, 'utf8')
	    .digest('base64')
	
	  return '"' + hash + '"'
	}
	
	/**
	 * Generate a strong hash.
	 *
	 * @param {Buffer} entity
	 * @return {String}
	 * @api private
	 */
	
	function stronghash(entity) {
	  if (entity.length === 0) {
	    // fast-path empty
	    return '1B2M2Y8AsgTpgAmY7PhCfg=='
	  }
	
	  return crypto
	    .createHash('md5')
	    .update(entity, 'utf8')
	    .digest('base64')
	}
	
	/**
	 * Generate a weak hash.
	 *
	 * @param {Buffer} entity
	 * @return {String}
	 * @api private
	 */
	
	function weakhash(entity) {
	  if (entity.length === 0) {
	    // fast-path empty
	    return '0-0'
	  }
	
	  var len = typeof entity === 'string'
	    ? Buffer.byteLength(entity, 'utf8')
	    : entity.length
	
	  if (len <= crc32threshold) {
	    // crc32 plus length when it's fast
	    // crc(str) only accepts utf-8 encoding
	    return len.toString(16) + '-' + crc(entity).toString(16)
	  }
	
	  // use md4 for long strings
	  return crypto
	    .createHash('md4')
	    .update(entity, 'utf8')
	    .digest('base64')
	}


/***/ },
/* 32 */
/*!*********************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	module.exports = {
	  crc1: __webpack_require__(/*! ./crc1 */ 33),
	  crc8: __webpack_require__(/*! ./crc8 */ 36),
	  crc81wire: __webpack_require__(/*! ./crc8_1wire */ 37),
	  crc16: __webpack_require__(/*! ./crc16 */ 38),
	  crc16ccitt: __webpack_require__(/*! ./crc16_ccitt */ 39),
	  crc16modbus: __webpack_require__(/*! ./crc16_modbus */ 40),
	  crc24: __webpack_require__(/*! ./crc24 */ 41),
	  crc32: __webpack_require__(/*! ./crc32 */ 42)
	};


/***/ },
/* 33 */
/*!********************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/crc1.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 35);
	
	module.exports = create('crc1', function(buf, previous) {
	  var accum, byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = ~~previous;
	  accum = 0;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    accum += byte;
	  }
	  crc += accum % 256;
	  return crc % 256;
	});


/***/ },
/* 34 */
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("buffer");

/***/ },
/* 35 */
/*!**********************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/create.js ***!
  \**********************************************/
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	module.exports = function(model, calc) {
	  var fn;
	  fn = function(buf, previous) {
	    return calc(buf, previous) >>> 0;
	  };
	  fn.signed = calc;
	  fn.unsigned = fn;
	  fn.model = model;
	  return fn;
	};


/***/ },
/* 36 */
/*!********************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/crc8.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 35);
	
	TABLE = [0x00, 0x07, 0x0e, 0x09, 0x1c, 0x1b, 0x12, 0x15, 0x38, 0x3f, 0x36, 0x31, 0x24, 0x23, 0x2a, 0x2d, 0x70, 0x77, 0x7e, 0x79, 0x6c, 0x6b, 0x62, 0x65, 0x48, 0x4f, 0x46, 0x41, 0x54, 0x53, 0x5a, 0x5d, 0xe0, 0xe7, 0xee, 0xe9, 0xfc, 0xfb, 0xf2, 0xf5, 0xd8, 0xdf, 0xd6, 0xd1, 0xc4, 0xc3, 0xca, 0xcd, 0x90, 0x97, 0x9e, 0x99, 0x8c, 0x8b, 0x82, 0x85, 0xa8, 0xaf, 0xa6, 0xa1, 0xb4, 0xb3, 0xba, 0xbd, 0xc7, 0xc0, 0xc9, 0xce, 0xdb, 0xdc, 0xd5, 0xd2, 0xff, 0xf8, 0xf1, 0xf6, 0xe3, 0xe4, 0xed, 0xea, 0xb7, 0xb0, 0xb9, 0xbe, 0xab, 0xac, 0xa5, 0xa2, 0x8f, 0x88, 0x81, 0x86, 0x93, 0x94, 0x9d, 0x9a, 0x27, 0x20, 0x29, 0x2e, 0x3b, 0x3c, 0x35, 0x32, 0x1f, 0x18, 0x11, 0x16, 0x03, 0x04, 0x0d, 0x0a, 0x57, 0x50, 0x59, 0x5e, 0x4b, 0x4c, 0x45, 0x42, 0x6f, 0x68, 0x61, 0x66, 0x73, 0x74, 0x7d, 0x7a, 0x89, 0x8e, 0x87, 0x80, 0x95, 0x92, 0x9b, 0x9c, 0xb1, 0xb6, 0xbf, 0xb8, 0xad, 0xaa, 0xa3, 0xa4, 0xf9, 0xfe, 0xf7, 0xf0, 0xe5, 0xe2, 0xeb, 0xec, 0xc1, 0xc6, 0xcf, 0xc8, 0xdd, 0xda, 0xd3, 0xd4, 0x69, 0x6e, 0x67, 0x60, 0x75, 0x72, 0x7b, 0x7c, 0x51, 0x56, 0x5f, 0x58, 0x4d, 0x4a, 0x43, 0x44, 0x19, 0x1e, 0x17, 0x10, 0x05, 0x02, 0x0b, 0x0c, 0x21, 0x26, 0x2f, 0x28, 0x3d, 0x3a, 0x33, 0x34, 0x4e, 0x49, 0x40, 0x47, 0x52, 0x55, 0x5c, 0x5b, 0x76, 0x71, 0x78, 0x7f, 0x6a, 0x6d, 0x64, 0x63, 0x3e, 0x39, 0x30, 0x37, 0x22, 0x25, 0x2c, 0x2b, 0x06, 0x01, 0x08, 0x0f, 0x1a, 0x1d, 0x14, 0x13, 0xae, 0xa9, 0xa0, 0xa7, 0xb2, 0xb5, 0xbc, 0xbb, 0x96, 0x91, 0x98, 0x9f, 0x8a, 0x8d, 0x84, 0x83, 0xde, 0xd9, 0xd0, 0xd7, 0xc2, 0xc5, 0xcc, 0xcb, 0xe6, 0xe1, 0xe8, 0xef, 0xfa, 0xfd, 0xf4, 0xf3];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-8', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = ~~previous;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
	  }
	  return crc;
	});


/***/ },
/* 37 */
/*!**************************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/crc8_1wire.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 35);
	
	TABLE = [0x00, 0x5e, 0xbc, 0xe2, 0x61, 0x3f, 0xdd, 0x83, 0xc2, 0x9c, 0x7e, 0x20, 0xa3, 0xfd, 0x1f, 0x41, 0x9d, 0xc3, 0x21, 0x7f, 0xfc, 0xa2, 0x40, 0x1e, 0x5f, 0x01, 0xe3, 0xbd, 0x3e, 0x60, 0x82, 0xdc, 0x23, 0x7d, 0x9f, 0xc1, 0x42, 0x1c, 0xfe, 0xa0, 0xe1, 0xbf, 0x5d, 0x03, 0x80, 0xde, 0x3c, 0x62, 0xbe, 0xe0, 0x02, 0x5c, 0xdf, 0x81, 0x63, 0x3d, 0x7c, 0x22, 0xc0, 0x9e, 0x1d, 0x43, 0xa1, 0xff, 0x46, 0x18, 0xfa, 0xa4, 0x27, 0x79, 0x9b, 0xc5, 0x84, 0xda, 0x38, 0x66, 0xe5, 0xbb, 0x59, 0x07, 0xdb, 0x85, 0x67, 0x39, 0xba, 0xe4, 0x06, 0x58, 0x19, 0x47, 0xa5, 0xfb, 0x78, 0x26, 0xc4, 0x9a, 0x65, 0x3b, 0xd9, 0x87, 0x04, 0x5a, 0xb8, 0xe6, 0xa7, 0xf9, 0x1b, 0x45, 0xc6, 0x98, 0x7a, 0x24, 0xf8, 0xa6, 0x44, 0x1a, 0x99, 0xc7, 0x25, 0x7b, 0x3a, 0x64, 0x86, 0xd8, 0x5b, 0x05, 0xe7, 0xb9, 0x8c, 0xd2, 0x30, 0x6e, 0xed, 0xb3, 0x51, 0x0f, 0x4e, 0x10, 0xf2, 0xac, 0x2f, 0x71, 0x93, 0xcd, 0x11, 0x4f, 0xad, 0xf3, 0x70, 0x2e, 0xcc, 0x92, 0xd3, 0x8d, 0x6f, 0x31, 0xb2, 0xec, 0x0e, 0x50, 0xaf, 0xf1, 0x13, 0x4d, 0xce, 0x90, 0x72, 0x2c, 0x6d, 0x33, 0xd1, 0x8f, 0x0c, 0x52, 0xb0, 0xee, 0x32, 0x6c, 0x8e, 0xd0, 0x53, 0x0d, 0xef, 0xb1, 0xf0, 0xae, 0x4c, 0x12, 0x91, 0xcf, 0x2d, 0x73, 0xca, 0x94, 0x76, 0x28, 0xab, 0xf5, 0x17, 0x49, 0x08, 0x56, 0xb4, 0xea, 0x69, 0x37, 0xd5, 0x8b, 0x57, 0x09, 0xeb, 0xb5, 0x36, 0x68, 0x8a, 0xd4, 0x95, 0xcb, 0x29, 0x77, 0xf4, 0xaa, 0x48, 0x16, 0xe9, 0xb7, 0x55, 0x0b, 0x88, 0xd6, 0x34, 0x6a, 0x2b, 0x75, 0x97, 0xc9, 0x4a, 0x14, 0xf6, 0xa8, 0x74, 0x2a, 0xc8, 0x96, 0x15, 0x4b, 0xa9, 0xf7, 0xb6, 0xe8, 0x0a, 0x54, 0xd7, 0x89, 0x6b, 0x35];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('dallas-1-wire', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = ~~previous;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
	  }
	  return crc;
	});


/***/ },
/* 38 */
/*!*********************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/crc16.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 35);
	
	TABLE = [0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601, 0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0, 0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81, 0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941, 0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01, 0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0, 0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081, 0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240, 0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00, 0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0, 0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981, 0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41, 0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700, 0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0, 0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281, 0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441, 0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01, 0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1, 0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80, 0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541, 0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101, 0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0, 0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481, 0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40, 0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801, 0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1, 0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581, 0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341, 0x4100, 0x81c1, 0x8081, 0x4040];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-16', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = ~~previous;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = (TABLE[(crc ^ byte) & 0xff] ^ (crc >> 8)) & 0xffff;
	  }
	  return crc;
	});


/***/ },
/* 39 */
/*!***************************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/crc16_ccitt.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 35);
	
	TABLE = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6, 0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d, 0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823, 0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a, 0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70, 0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067, 0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d, 0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634, 0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a, 0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1, 0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('ccitt', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = previous != null ? ~~previous : 0xffff;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = (TABLE[((crc >> 8) ^ byte) & 0xff] ^ (crc << 8)) & 0xffff;
	  }
	  return crc;
	});


/***/ },
/* 40 */
/*!****************************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/crc16_modbus.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 35);
	
	TABLE = [0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601, 0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0, 0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81, 0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941, 0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01, 0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0, 0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081, 0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240, 0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00, 0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0, 0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981, 0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41, 0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700, 0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0, 0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281, 0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441, 0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01, 0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1, 0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80, 0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541, 0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101, 0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0, 0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481, 0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40, 0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801, 0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1, 0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581, 0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341, 0x4100, 0x81c1, 0x8081, 0x4040];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-16-modbus', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = previous != null ? ~~previous : 0xffff;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = (TABLE[(crc ^ byte) & 0xff] ^ (crc >> 8)) & 0xffff;
	  }
	  return crc;
	});


/***/ },
/* 41 */
/*!*********************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/crc24.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 35);
	
	TABLE = [0x000000, 0x864cfb, 0x8ad50d, 0x0c99f6, 0x93e6e1, 0x15aa1a, 0x1933ec, 0x9f7f17, 0xa18139, 0x27cdc2, 0x2b5434, 0xad18cf, 0x3267d8, 0xb42b23, 0xb8b2d5, 0x3efe2e, 0xc54e89, 0x430272, 0x4f9b84, 0xc9d77f, 0x56a868, 0xd0e493, 0xdc7d65, 0x5a319e, 0x64cfb0, 0xe2834b, 0xee1abd, 0x685646, 0xf72951, 0x7165aa, 0x7dfc5c, 0xfbb0a7, 0x0cd1e9, 0x8a9d12, 0x8604e4, 0x00481f, 0x9f3708, 0x197bf3, 0x15e205, 0x93aefe, 0xad50d0, 0x2b1c2b, 0x2785dd, 0xa1c926, 0x3eb631, 0xb8faca, 0xb4633c, 0x322fc7, 0xc99f60, 0x4fd39b, 0x434a6d, 0xc50696, 0x5a7981, 0xdc357a, 0xd0ac8c, 0x56e077, 0x681e59, 0xee52a2, 0xe2cb54, 0x6487af, 0xfbf8b8, 0x7db443, 0x712db5, 0xf7614e, 0x19a3d2, 0x9fef29, 0x9376df, 0x153a24, 0x8a4533, 0x0c09c8, 0x00903e, 0x86dcc5, 0xb822eb, 0x3e6e10, 0x32f7e6, 0xb4bb1d, 0x2bc40a, 0xad88f1, 0xa11107, 0x275dfc, 0xdced5b, 0x5aa1a0, 0x563856, 0xd074ad, 0x4f0bba, 0xc94741, 0xc5deb7, 0x43924c, 0x7d6c62, 0xfb2099, 0xf7b96f, 0x71f594, 0xee8a83, 0x68c678, 0x645f8e, 0xe21375, 0x15723b, 0x933ec0, 0x9fa736, 0x19ebcd, 0x8694da, 0x00d821, 0x0c41d7, 0x8a0d2c, 0xb4f302, 0x32bff9, 0x3e260f, 0xb86af4, 0x2715e3, 0xa15918, 0xadc0ee, 0x2b8c15, 0xd03cb2, 0x567049, 0x5ae9bf, 0xdca544, 0x43da53, 0xc596a8, 0xc90f5e, 0x4f43a5, 0x71bd8b, 0xf7f170, 0xfb6886, 0x7d247d, 0xe25b6a, 0x641791, 0x688e67, 0xeec29c, 0x3347a4, 0xb50b5f, 0xb992a9, 0x3fde52, 0xa0a145, 0x26edbe, 0x2a7448, 0xac38b3, 0x92c69d, 0x148a66, 0x181390, 0x9e5f6b, 0x01207c, 0x876c87, 0x8bf571, 0x0db98a, 0xf6092d, 0x7045d6, 0x7cdc20, 0xfa90db, 0x65efcc, 0xe3a337, 0xef3ac1, 0x69763a, 0x578814, 0xd1c4ef, 0xdd5d19, 0x5b11e2, 0xc46ef5, 0x42220e, 0x4ebbf8, 0xc8f703, 0x3f964d, 0xb9dab6, 0xb54340, 0x330fbb, 0xac70ac, 0x2a3c57, 0x26a5a1, 0xa0e95a, 0x9e1774, 0x185b8f, 0x14c279, 0x928e82, 0x0df195, 0x8bbd6e, 0x872498, 0x016863, 0xfad8c4, 0x7c943f, 0x700dc9, 0xf64132, 0x693e25, 0xef72de, 0xe3eb28, 0x65a7d3, 0x5b59fd, 0xdd1506, 0xd18cf0, 0x57c00b, 0xc8bf1c, 0x4ef3e7, 0x426a11, 0xc426ea, 0x2ae476, 0xaca88d, 0xa0317b, 0x267d80, 0xb90297, 0x3f4e6c, 0x33d79a, 0xb59b61, 0x8b654f, 0x0d29b4, 0x01b042, 0x87fcb9, 0x1883ae, 0x9ecf55, 0x9256a3, 0x141a58, 0xefaaff, 0x69e604, 0x657ff2, 0xe33309, 0x7c4c1e, 0xfa00e5, 0xf69913, 0x70d5e8, 0x4e2bc6, 0xc8673d, 0xc4fecb, 0x42b230, 0xddcd27, 0x5b81dc, 0x57182a, 0xd154d1, 0x26359f, 0xa07964, 0xace092, 0x2aac69, 0xb5d37e, 0x339f85, 0x3f0673, 0xb94a88, 0x87b4a6, 0x01f85d, 0x0d61ab, 0x8b2d50, 0x145247, 0x921ebc, 0x9e874a, 0x18cbb1, 0xe37b16, 0x6537ed, 0x69ae1b, 0xefe2e0, 0x709df7, 0xf6d10c, 0xfa48fa, 0x7c0401, 0x42fa2f, 0xc4b6d4, 0xc82f22, 0x4e63d9, 0xd11cce, 0x575035, 0x5bc9c3, 0xdd8538];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-24', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = previous != null ? ~~previous : 0xb704ce;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = (TABLE[((crc >> 16) ^ byte) & 0xff] ^ (crc << 8)) & 0xffffff;
	  }
	  return crc;
	});


/***/ },
/* 42 */
/*!*********************************************!*\
  !*** ./~/express/~/etag/~/crc/lib/crc32.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 35);
	
	TABLE = [0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-32', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = previous === 0 ? 0 : ~~previous ^ -1;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
	  }
	  return crc ^ -1;
	});


/***/ },
/* 43 */
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 44 */
/*!****************************************!*\
  !*** ./~/express/~/send/~/ms/index.js ***!
  \****************************************/
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 45 */
/*!*****************************************!*\
  !*** ./~/express/~/proxy-addr/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * proxy-addr
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = proxyaddr;
	module.exports.all = alladdrs;
	module.exports.compile = compile;
	
	/**
	 * Module dependencies.
	 */
	
	var forwarded = __webpack_require__(/*! forwarded */ 46);
	var ipaddr = __webpack_require__(/*! ipaddr.js */ 47);
	
	/**
	 * Variables.
	 */
	
	var digitre = /^[0-9]+$/;
	var isip = ipaddr.isValid;
	var parseip = ipaddr.parse;
	
	/**
	 * Pre-defined IP ranges.
	 */
	
	var ipranges = {
	  linklocal: ['169.254.0.0/16', 'fe80::/10'],
	  loopback: ['127.0.0.1/8', '::1/128'],
	  uniquelocal: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', 'fc00::/7']
	};
	
	/**
	 * Get all addresses in the request, optionally stopping
	 * at the first untrusted.
	 *
	 * @param {Object} request
	 * @param {Function|Array|String} [trust]
	 * @api public
	 */
	
	function alladdrs(req, trust) {
	  // get addresses
	  var addrs = forwarded(req);
	
	  if (!trust) {
	    // Return all addresses
	    return addrs;
	  }
	
	  if (typeof trust !== 'function') {
	    trust = compile(trust);
	  }
	
	  for (var i = 0; i < addrs.length - 1; i++) {
	    if (trust(addrs[i], i)) continue;
	
	    addrs.length = i + 1;
	  }
	
	  return addrs;
	}
	
	/**
	 * Compile argument into trust function.
	 *
	 * @param {Array|String} val
	 * @api private
	 */
	
	function compile(val) {
	  if (!val) {
	    throw new TypeError('argument is required');
	  }
	
	  var trust = typeof val === 'string'
	    ? [val]
	    : val;
	
	  if (!Array.isArray(trust)) {
	    throw new TypeError('unsupported trust argument');
	  }
	
	  for (var i = 0; i < trust.length; i++) {
	    val = trust[i];
	
	    if (!ipranges.hasOwnProperty(val)) {
	      continue;
	    }
	
	    // Splice in pre-defined range
	    val = ipranges[val];
	    trust.splice.apply(trust, [i, 1].concat(val));
	    i += val.length - 1;
	  }
	
	  return compileTrust(compileRangeSubnets(trust));
	}
	
	/**
	 * Compile `arr` elements into range subnets.
	 *
	 * @param {Array} arr
	 * @api private
	 */
	
	function compileRangeSubnets(arr) {
	  var rangeSubnets = new Array(arr.length);
	
	  for (var i = 0; i < arr.length; i++) {
	    rangeSubnets[i] = parseipNotation(arr[i]);
	  }
	
	  return rangeSubnets;
	}
	
	/**
	 * Compile range subnet array into trust function.
	 *
	 * @param {Array} rangeSubnets
	 * @api private
	 */
	
	function compileTrust(rangeSubnets) {
	  // Return optimized function based on length
	  var len = rangeSubnets.length;
	  return len === 0
	    ? trustNone
	    : len === 1
	    ? trustSingle(rangeSubnets[0])
	    : trustMulti(rangeSubnets);
	}
	
	/**
	 * Parse IP notation string into range subnet.
	 *
	 * @param {String} note
	 * @api private
	 */
	
	function parseipNotation(note) {
	  var ip;
	  var kind;
	  var max;
	  var pos = note.lastIndexOf('/');
	  var range;
	
	  ip = pos !== -1
	    ? note.substring(0, pos)
	    : note;
	
	  if (!isip(ip)) {
	    throw new TypeError('invalid IP address: ' + ip);
	  }
	
	  ip = parseip(ip);
	
	  kind = ip.kind();
	  max = kind === 'ipv6'
	    ? 128
	    : 32;
	
	  range = pos !== -1
	    ? note.substring(pos + 1, note.length)
	    : max;
	
	  if (typeof range !== 'number') {
	    range = digitre.test(range)
	      ? parseInt(range, 10)
	      : isip(range)
	      ? parseNetmask(range)
	      : 0;
	  }
	
	  if (ip.kind() === 'ipv6' && ip.isIPv4MappedAddress()) {
	    // Store as IPv4
	    ip = ip.toIPv4Address();
	    range = range <= max
	      ? range - 96
	      : range;
	  }
	
	  if (range <= 0 || range > max) {
	    throw new TypeError('invalid range on address: ' + note);
	  }
	
	  return [ip, range];
	}
	
	/**
	 * Parse netmask string into CIDR range.
	 *
	 * @param {String} note
	 * @api private
	 */
	
	function parseNetmask(netmask) {
	  var ip = parseip(netmask);
	  var parts;
	  var size;
	
	  switch (ip.kind()) {
	    case 'ipv4':
	      parts = ip.octets;
	      size = 8;
	      break;
	    case 'ipv6':
	      parts = ip.parts;
	      size = 16;
	      break;
	  }
	
	  var max = Math.pow(2, size) - 1;
	  var part;
	  var range = 0;
	
	  for (var i = 0; i < parts.length; i++) {
	    part = parts[i] & max;
	
	    if (part === max) {
	      range += size;
	      continue;
	    }
	
	    while (part) {
	      part = (part << 1) & max;
	      range += 1;
	    }
	
	    break;
	  }
	
	  return range;
	}
	
	/**
	 * Determine address of proxied request.
	 *
	 * @param {Object} request
	 * @param {Function|Array|String} trust
	 * @api public
	 */
	
	function proxyaddr(req, trust) {
	  if (!req) {
	    throw new TypeError('req argument is required');
	  }
	
	  if (!trust) {
	    throw new TypeError('trust argument is required');
	  }
	
	  var addrs = alladdrs(req, trust);
	  var addr = addrs[addrs.length - 1];
	
	  return addr;
	}
	
	/**
	 * Static trust function to trust nothing.
	 *
	 * @api private
	 */
	
	function trustNone() {
	  return false;
	}
	
	/**
	 * Compile trust function for multiple subnets.
	 *
	 * @param {Array} subnets
	 * @api private
	 */
	
	function trustMulti(subnets) {
	  return function trust(addr) {
	    if (!isip(addr)) return false;
	
	    var ip = parseip(addr);
	    var ipv4;
	    var kind = ip.kind();
	    var subnet;
	    var subnetip;
	    var subnetkind;
	    var subnetrange;
	    var trusted;
	
	    for (var i = 0; i < subnets.length; i++) {
	      subnet = subnets[i];
	      subnetip = subnet[0];
	      subnetkind = subnetip.kind();
	      subnetrange = subnet[1];
	      trusted = ip;
	
	      if (kind !== subnetkind) {
	        if (kind !== 'ipv6' || subnetkind !== 'ipv4' || !ip.isIPv4MappedAddress()) {
	          continue;
	        }
	
	        // Store addr as IPv4
	        ipv4 = ipv4 || ip.toIPv4Address();
	        trusted = ipv4;
	      }
	
	      if (trusted.match(subnetip, subnetrange)) return true;
	    }
	
	    return false;
	  };
	}
	
	/**
	 * Compile trust function for single subnet.
	 *
	 * @param {Object} subnet
	 * @api private
	 */
	
	function trustSingle(subnet) {
	  var subnetip = subnet[0];
	  var subnetkind = subnetip.kind();
	  var subnetisipv4 = subnetkind === 'ipv4';
	  var subnetrange = subnet[1];
	
	  return function trust(addr) {
	    if (!isip(addr)) return false;
	
	    var ip = parseip(addr);
	    var kind = ip.kind();
	
	    return kind === subnetkind
	      ? ip.match(subnetip, subnetrange)
	      : subnetisipv4 && kind === 'ipv6' && ip.isIPv4MappedAddress()
	      ? ip.toIPv4Address().match(subnetip, subnetrange)
	      : false;
	  };
	}


/***/ },
/* 46 */
/*!*****************************************************!*\
  !*** ./~/express/~/proxy-addr/~/forwarded/index.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	/*!
	 * forwarded
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = forwarded
	
	/**
	 * Get all addresses in the request, using the `X-Forwarded-For` header.
	 *
	 * @param {Object} req
	 * @api public
	 */
	
	function forwarded(req) {
	  if (!req) {
	    throw new TypeError('argument req is required')
	  }
	
	  // simple header parsing
	  var proxyAddrs = (req.headers['x-forwarded-for'] || '')
	    .split(/ *, */)
	    .filter(Boolean)
	    .reverse()
	  var socketAddr = req.connection.remoteAddress
	  var addrs = [socketAddr].concat(proxyAddrs)
	
	  // return all addresses
	  return addrs
	}


/***/ },
/* 47 */
/*!**********************************************************!*\
  !*** ./~/express/~/proxy-addr/~/ipaddr.js/lib/ipaddr.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function() {
	  var expandIPv6, ipaddr, ipv4Part, ipv4Regexes, ipv6Part, ipv6Regexes, matchCIDR, root;
	
	  ipaddr = {};
	
	  root = this;
	
	  if ((typeof module !== "undefined" && module !== null) && module.exports) {
	    module.exports = ipaddr;
	  } else {
	    root['ipaddr'] = ipaddr;
	  }
	
	  matchCIDR = function(first, second, partSize, cidrBits) {
	    var part, shift;
	    if (first.length !== second.length) {
	      throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
	    }
	    part = 0;
	    while (cidrBits > 0) {
	      shift = partSize - cidrBits;
	      if (shift < 0) {
	        shift = 0;
	      }
	      if (first[part] >> shift !== second[part] >> shift) {
	        return false;
	      }
	      cidrBits -= partSize;
	      part += 1;
	    }
	    return true;
	  };
	
	  ipaddr.subnetMatch = function(address, rangeList, defaultName) {
	    var rangeName, rangeSubnets, subnet, _i, _len;
	    if (defaultName == null) {
	      defaultName = 'unicast';
	    }
	    for (rangeName in rangeList) {
	      rangeSubnets = rangeList[rangeName];
	      if (toString.call(rangeSubnets[0]) !== '[object Array]') {
	        rangeSubnets = [rangeSubnets];
	      }
	      for (_i = 0, _len = rangeSubnets.length; _i < _len; _i++) {
	        subnet = rangeSubnets[_i];
	        if (address.match.apply(address, subnet)) {
	          return rangeName;
	        }
	      }
	    }
	    return defaultName;
	  };
	
	  ipaddr.IPv4 = (function() {
	    function IPv4(octets) {
	      var octet, _i, _len;
	      if (octets.length !== 4) {
	        throw new Error("ipaddr: ipv4 octet count should be 4");
	      }
	      for (_i = 0, _len = octets.length; _i < _len; _i++) {
	        octet = octets[_i];
	        if (!((0 <= octet && octet <= 255))) {
	          throw new Error("ipaddr: ipv4 octet is a byte");
	        }
	      }
	      this.octets = octets;
	    }
	
	    IPv4.prototype.kind = function() {
	      return 'ipv4';
	    };
	
	    IPv4.prototype.toString = function() {
	      return this.octets.join(".");
	    };
	
	    IPv4.prototype.toByteArray = function() {
	      return this.octets.slice(0);
	    };
	
	    IPv4.prototype.match = function(other, cidrRange) {
	      var _ref;
	      if (cidrRange === void 0) {
	        _ref = other, other = _ref[0], cidrRange = _ref[1];
	      }
	      if (other.kind() !== 'ipv4') {
	        throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
	      }
	      return matchCIDR(this.octets, other.octets, 8, cidrRange);
	    };
	
	    IPv4.prototype.SpecialRanges = {
	      unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
	      broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
	      multicast: [[new IPv4([224, 0, 0, 0]), 4]],
	      linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
	      loopback: [[new IPv4([127, 0, 0, 0]), 8]],
	      "private": [[new IPv4([10, 0, 0, 0]), 8], [new IPv4([172, 16, 0, 0]), 12], [new IPv4([192, 168, 0, 0]), 16]],
	      reserved: [[new IPv4([192, 0, 0, 0]), 24], [new IPv4([192, 0, 2, 0]), 24], [new IPv4([192, 88, 99, 0]), 24], [new IPv4([198, 51, 100, 0]), 24], [new IPv4([203, 0, 113, 0]), 24], [new IPv4([240, 0, 0, 0]), 4]]
	    };
	
	    IPv4.prototype.range = function() {
	      return ipaddr.subnetMatch(this, this.SpecialRanges);
	    };
	
	    IPv4.prototype.toIPv4MappedAddress = function() {
	      return ipaddr.IPv6.parse("::ffff:" + (this.toString()));
	    };
	
	    return IPv4;
	
	  })();
	
	  ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
	
	  ipv4Regexes = {
	    fourOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$", 'i'),
	    longValue: new RegExp("^" + ipv4Part + "$", 'i')
	  };
	
	  ipaddr.IPv4.parser = function(string) {
	    var match, parseIntAuto, part, shift, value;
	    parseIntAuto = function(string) {
	      if (string[0] === "0" && string[1] !== "x") {
	        return parseInt(string, 8);
	      } else {
	        return parseInt(string);
	      }
	    };
	    if (match = string.match(ipv4Regexes.fourOctet)) {
	      return (function() {
	        var _i, _len, _ref, _results;
	        _ref = match.slice(1, 6);
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          part = _ref[_i];
	          _results.push(parseIntAuto(part));
	        }
	        return _results;
	      })();
	    } else if (match = string.match(ipv4Regexes.longValue)) {
	      value = parseIntAuto(match[1]);
	      if (value > 0xffffffff || value < 0) {
	        throw new Error("ipaddr: address outside defined range");
	      }
	      return ((function() {
	        var _i, _results;
	        _results = [];
	        for (shift = _i = 0; _i <= 24; shift = _i += 8) {
	          _results.push((value >> shift) & 0xff);
	        }
	        return _results;
	      })()).reverse();
	    } else {
	      return null;
	    }
	  };
	
	  ipaddr.IPv6 = (function() {
	    function IPv6(parts) {
	      var part, _i, _len;
	      if (parts.length !== 8) {
	        throw new Error("ipaddr: ipv6 part count should be 8");
	      }
	      for (_i = 0, _len = parts.length; _i < _len; _i++) {
	        part = parts[_i];
	        if (!((0 <= part && part <= 0xffff))) {
	          throw new Error("ipaddr: ipv6 part should fit to two octets");
	        }
	      }
	      this.parts = parts;
	    }
	
	    IPv6.prototype.kind = function() {
	      return 'ipv6';
	    };
	
	    IPv6.prototype.toString = function() {
	      var compactStringParts, part, pushPart, state, stringParts, _i, _len;
	      stringParts = (function() {
	        var _i, _len, _ref, _results;
	        _ref = this.parts;
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          part = _ref[_i];
	          _results.push(part.toString(16));
	        }
	        return _results;
	      }).call(this);
	      compactStringParts = [];
	      pushPart = function(part) {
	        return compactStringParts.push(part);
	      };
	      state = 0;
	      for (_i = 0, _len = stringParts.length; _i < _len; _i++) {
	        part = stringParts[_i];
	        switch (state) {
	          case 0:
	            if (part === '0') {
	              pushPart('');
	            } else {
	              pushPart(part);
	            }
	            state = 1;
	            break;
	          case 1:
	            if (part === '0') {
	              state = 2;
	            } else {
	              pushPart(part);
	            }
	            break;
	          case 2:
	            if (part !== '0') {
	              pushPart('');
	              pushPart(part);
	              state = 3;
	            }
	            break;
	          case 3:
	            pushPart(part);
	        }
	      }
	      if (state === 2) {
	        pushPart('');
	        pushPart('');
	      }
	      return compactStringParts.join(":");
	    };
	
	    IPv6.prototype.toByteArray = function() {
	      var bytes, part, _i, _len, _ref;
	      bytes = [];
	      _ref = this.parts;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        part = _ref[_i];
	        bytes.push(part >> 8);
	        bytes.push(part & 0xff);
	      }
	      return bytes;
	    };
	
	    IPv6.prototype.toNormalizedString = function() {
	      var part;
	      return ((function() {
	        var _i, _len, _ref, _results;
	        _ref = this.parts;
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          part = _ref[_i];
	          _results.push(part.toString(16));
	        }
	        return _results;
	      }).call(this)).join(":");
	    };
	
	    IPv6.prototype.match = function(other, cidrRange) {
	      var _ref;
	      if (cidrRange === void 0) {
	        _ref = other, other = _ref[0], cidrRange = _ref[1];
	      }
	      if (other.kind() !== 'ipv6') {
	        throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
	      }
	      return matchCIDR(this.parts, other.parts, 16, cidrRange);
	    };
	
	    IPv6.prototype.SpecialRanges = {
	      unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
	      linkLocal: [new IPv6([0xfe80, 0, 0, 0, 0, 0, 0, 0]), 10],
	      multicast: [new IPv6([0xff00, 0, 0, 0, 0, 0, 0, 0]), 8],
	      loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
	      uniqueLocal: [new IPv6([0xfc00, 0, 0, 0, 0, 0, 0, 0]), 7],
	      ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 0xffff, 0, 0]), 96],
	      rfc6145: [new IPv6([0, 0, 0, 0, 0xffff, 0, 0, 0]), 96],
	      rfc6052: [new IPv6([0x64, 0xff9b, 0, 0, 0, 0, 0, 0]), 96],
	      '6to4': [new IPv6([0x2002, 0, 0, 0, 0, 0, 0, 0]), 16],
	      teredo: [new IPv6([0x2001, 0, 0, 0, 0, 0, 0, 0]), 32],
	      reserved: [[new IPv6([0x2001, 0xdb8, 0, 0, 0, 0, 0, 0]), 32]]
	    };
	
	    IPv6.prototype.range = function() {
	      return ipaddr.subnetMatch(this, this.SpecialRanges);
	    };
	
	    IPv6.prototype.isIPv4MappedAddress = function() {
	      return this.range() === 'ipv4Mapped';
	    };
	
	    IPv6.prototype.toIPv4Address = function() {
	      var high, low, _ref;
	      if (!this.isIPv4MappedAddress()) {
	        throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
	      }
	      _ref = this.parts.slice(-2), high = _ref[0], low = _ref[1];
	      return new ipaddr.IPv4([high >> 8, high & 0xff, low >> 8, low & 0xff]);
	    };
	
	    return IPv6;
	
	  })();
	
	  ipv6Part = "(?:[0-9a-f]+::?)+";
	
	  ipv6Regexes = {
	    "native": new RegExp("^(::)?(" + ipv6Part + ")?([0-9a-f]+)?(::)?$", 'i'),
	    transitional: new RegExp(("^((?:" + ipv6Part + ")|(?:::)(?:" + ipv6Part + ")?)") + ("" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$"), 'i')
	  };
	
	  expandIPv6 = function(string, parts) {
	    var colonCount, lastColon, part, replacement, replacementCount;
	    if (string.indexOf('::') !== string.lastIndexOf('::')) {
	      return null;
	    }
	    colonCount = 0;
	    lastColon = -1;
	    while ((lastColon = string.indexOf(':', lastColon + 1)) >= 0) {
	      colonCount++;
	    }
	    if (string[0] === ':') {
	      colonCount--;
	    }
	    if (string[string.length - 1] === ':') {
	      colonCount--;
	    }
	    if (colonCount > parts) {
	      return null;
	    }
	    replacementCount = parts - colonCount;
	    replacement = ':';
	    while (replacementCount--) {
	      replacement += '0:';
	    }
	    string = string.replace('::', replacement);
	    if (string[0] === ':') {
	      string = string.slice(1);
	    }
	    if (string[string.length - 1] === ':') {
	      string = string.slice(0, -1);
	    }
	    return (function() {
	      var _i, _len, _ref, _results;
	      _ref = string.split(":");
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        part = _ref[_i];
	        _results.push(parseInt(part, 16));
	      }
	      return _results;
	    })();
	  };
	
	  ipaddr.IPv6.parser = function(string) {
	    var match, parts;
	    if (string.match(ipv6Regexes['native'])) {
	      return expandIPv6(string, 8);
	    } else if (match = string.match(ipv6Regexes['transitional'])) {
	      parts = expandIPv6(match[1].slice(0, -1), 6);
	      if (parts) {
	        parts.push(parseInt(match[2]) << 8 | parseInt(match[3]));
	        parts.push(parseInt(match[4]) << 8 | parseInt(match[5]));
	        return parts;
	      }
	    }
	    return null;
	  };
	
	  ipaddr.IPv4.isIPv4 = ipaddr.IPv6.isIPv6 = function(string) {
	    return this.parser(string) !== null;
	  };
	
	  ipaddr.IPv4.isValid = ipaddr.IPv6.isValid = function(string) {
	    var e;
	    try {
	      new this(this.parser(string));
	      return true;
	    } catch (_error) {
	      e = _error;
	      return false;
	    }
	  };
	
	  ipaddr.IPv4.parse = ipaddr.IPv6.parse = function(string) {
	    var parts;
	    parts = this.parser(string);
	    if (parts === null) {
	      throw new Error("ipaddr: string is not formatted like ip address");
	    }
	    return new this(parts);
	  };
	
	  ipaddr.IPv4.parseCIDR = ipaddr.IPv6.parseCIDR = function(string) {
	    var match;
	    if (match = string.match(/^(.+)\/(\d+)$/)) {
	      return [this.parse(match[1]), parseInt(match[2])];
	    }
	    throw new Error("ipaddr: string is not formatted like a CIDR range");
	  };
	
	  ipaddr.isValid = function(string) {
	    return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
	  };
	
	  ipaddr.parse = function(string) {
	    if (ipaddr.IPv6.isValid(string)) {
	      return ipaddr.IPv6.parse(string);
	    } else if (ipaddr.IPv4.isValid(string)) {
	      return ipaddr.IPv4.parse(string);
	    } else {
	      throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
	    }
	  };
	
	  ipaddr.parseCIDR = function(string) {
	    var e;
	    try {
	      return ipaddr.IPv6.parseCIDR(string);
	    } catch (_error) {
	      e = _error;
	      try {
	        return ipaddr.IPv4.parseCIDR(string);
	      } catch (_error) {
	        e = _error;
	        throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
	      }
	    }
	  };
	
	  ipaddr.process = function(string) {
	    var addr;
	    addr = this.parse(string);
	    if (addr.kind() === 'ipv6' && addr.isIPv4MappedAddress()) {
	      return addr.toIPv4Address();
	    } else {
	      return addr;
	    }
	  };
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/module.js */ 48)(module)))

/***/ },
/* 48 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 49 */
/*!*********************************!*\
  !*** ./~/express/~/qs/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/ */ 50);


/***/ },
/* 50 */
/*!*************************************!*\
  !*** ./~/express/~/qs/lib/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Stringify = __webpack_require__(/*! ./stringify */ 51);
	var Parse = __webpack_require__(/*! ./parse */ 53);
	
	
	// Declare internals
	
	var internals = {};
	
	
	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 51 */
/*!*****************************************!*\
  !*** ./~/express/~/qs/lib/stringify.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Utils = __webpack_require__(/*! ./utils */ 52);
	
	
	// Declare internals
	
	var internals = {
	    delimiter: '&',
	    indices: true
	};
	
	
	internals.stringify = function (obj, prefix, options) {
	
	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }
	
	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {
	
	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (!options.indices &&
	            Array.isArray(obj)) {
	
	            values = values.concat(internals.stringify(obj[key], prefix, options));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', options));
	        }
	    }
	
	    return values;
	};
	
	
	module.exports = function (obj, options) {
	
	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
	    options.indices = typeof options.indices === 'boolean' ? options.indices : internals.indices;
	
	    var keys = [];
	
	    if (typeof obj !== 'object' ||
	        obj === null) {
	
	        return '';
	    }
	
	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, options));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 52 */
/*!*************************************!*\
  !*** ./~/express/~/qs/lib/utils.js ***!
  \*************************************/
/***/ function(module, exports) {

	// Load modules
	
	
	// Declare internals
	
	var internals = {};
	
	
	exports.arrayToObject = function (source) {
	
	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {
	
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	
	exports.merge = function (target, source) {
	
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }
	
	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {
	
	        target = exports.arrayToObject(target);
	    }
	
	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];
	
	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }
	
	    return target;
	};
	
	
	exports.decode = function (str) {
	
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	
	exports.compact = function (obj, refs) {
	
	    if (typeof obj !== 'object' ||
	        obj === null) {
	
	        return obj;
	    }
	
	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }
	
	    return obj;
	};
	
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	
	exports.isBuffer = function (obj) {
	
	    if (obj === null ||
	        typeof obj === 'undefined') {
	
	        return false;
	    }
	
	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ },
/* 53 */
/*!*************************************!*\
  !*** ./~/express/~/qs/lib/parse.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Utils = __webpack_require__(/*! ./utils */ 52);
	
	
	// Declare internals
	
	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};
	
	
	internals.parseValues = function (str, options) {
	
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));
	
	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }
	
	    return obj;
	};
	
	
	internals.parseObject = function (chain, val, options) {
	
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {
	
	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	
	internals.parseKeys = function (key, val, options) {
	
	    if (!key) {
	        return;
	    }
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Don't allow them to overwrite object prototype properties
	
	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	
	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return internals.parseObject(keys, val, options);
	};
	
	
	module.exports = function (str, options) {
	
	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {
	
	        return {};
	    }
	
	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
	
	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }
	
	    return Utils.compact(obj);
	};


/***/ },
/* 54 */
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = require("querystring");

/***/ },
/* 55 */
/*!******************************************!*\
  !*** ./~/express/~/media-typer/index.js ***!
  \******************************************/
/***/ function(module, exports) {

	/*!
	 * media-typer
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * RegExp to match *( ";" parameter ) in RFC 2616 sec 3.7
	 *
	 * parameter     = token "=" ( token | quoted-string )
	 * token         = 1*<any CHAR except CTLs or separators>
	 * separators    = "(" | ")" | "<" | ">" | "@"
	 *               | "," | ";" | ":" | "\" | <">
	 *               | "/" | "[" | "]" | "?" | "="
	 *               | "{" | "}" | SP | HT
	 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
	 * qdtext        = <any TEXT except <">>
	 * quoted-pair   = "\" CHAR
	 * CHAR          = <any US-ASCII character (octets 0 - 127)>
	 * TEXT          = <any OCTET except CTLs, but including LWS>
	 * LWS           = [CRLF] 1*( SP | HT )
	 * CRLF          = CR LF
	 * CR            = <US-ASCII CR, carriage return (13)>
	 * LF            = <US-ASCII LF, linefeed (10)>
	 * SP            = <US-ASCII SP, space (32)>
	 * SHT           = <US-ASCII HT, horizontal-tab (9)>
	 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
	 * OCTET         = <any 8-bit sequence of data>
	 */
	var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g;
	var textRegExp = /^[\u0020-\u007e\u0080-\u00ff]+$/
	var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/
	
	/**
	 * RegExp to match quoted-pair in RFC 2616
	 *
	 * quoted-pair = "\" CHAR
	 * CHAR        = <any US-ASCII character (octets 0 - 127)>
	 */
	var qescRegExp = /\\([\u0000-\u007f])/g;
	
	/**
	 * RegExp to match chars that must be quoted-pair in RFC 2616
	 */
	var quoteRegExp = /([\\"])/g;
	
	/**
	 * RegExp to match type in RFC 6838
	 *
	 * type-name = restricted-name
	 * subtype-name = restricted-name
	 * restricted-name = restricted-name-first *126restricted-name-chars
	 * restricted-name-first  = ALPHA / DIGIT
	 * restricted-name-chars  = ALPHA / DIGIT / "!" / "#" /
	 *                          "$" / "&" / "-" / "^" / "_"
	 * restricted-name-chars =/ "." ; Characters before first dot always
	 *                              ; specify a facet name
	 * restricted-name-chars =/ "+" ; Characters after last plus always
	 *                              ; specify a structured syntax suffix
	 * ALPHA =  %x41-5A / %x61-7A   ; A-Z / a-z
	 * DIGIT =  %x30-39             ; 0-9
	 */
	var subtypeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/
	var typeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/
	var typeRegExp = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
	
	/**
	 * Module exports.
	 */
	
	exports.format = format
	exports.parse = parse
	
	/**
	 * Format object to media type.
	 *
	 * @param {object} obj
	 * @return {string}
	 * @api public
	 */
	
	function format(obj) {
	  if (!obj || typeof obj !== 'object') {
	    throw new TypeError('argument obj is required')
	  }
	
	  var parameters = obj.parameters
	  var subtype = obj.subtype
	  var suffix = obj.suffix
	  var type = obj.type
	
	  if (!type || !typeNameRegExp.test(type)) {
	    throw new TypeError('invalid type')
	  }
	
	  if (!subtype || !subtypeNameRegExp.test(subtype)) {
	    throw new TypeError('invalid subtype')
	  }
	
	  // format as type/subtype
	  var string = type + '/' + subtype
	
	  // append +suffix
	  if (suffix) {
	    if (!typeNameRegExp.test(suffix)) {
	      throw new TypeError('invalid suffix')
	    }
	
	    string += '+' + suffix
	  }
	
	  // append parameters
	  if (parameters && typeof parameters === 'object') {
	    var param
	    var params = Object.keys(parameters).sort()
	
	    for (var i = 0; i < params.length; i++) {
	      param = params[i]
	
	      if (!tokenRegExp.test(param)) {
	        throw new TypeError('invalid parameter name')
	      }
	
	      string += '; ' + param + '=' + qstring(parameters[param])
	    }
	  }
	
	  return string
	}
	
	/**
	 * Parse media type to object.
	 *
	 * @param {string|object} string
	 * @return {Object}
	 * @api public
	 */
	
	function parse(string) {
	  if (!string) {
	    throw new TypeError('argument string is required')
	  }
	
	  // support req/res-like objects as argument
	  if (typeof string === 'object') {
	    string = getcontenttype(string)
	  }
	
	  if (typeof string !== 'string') {
	    throw new TypeError('argument string is required to be a string')
	  }
	
	  var index = string.indexOf(';')
	  var type = index !== -1
	    ? string.substr(0, index)
	    : string
	
	  var key
	  var match
	  var obj = splitType(type)
	  var params = {}
	  var value
	
	  paramRegExp.lastIndex = index
	
	  while (match = paramRegExp.exec(string)) {
	    if (match.index !== index) {
	      throw new TypeError('invalid parameter format')
	    }
	
	    index += match[0].length
	    key = match[1].toLowerCase()
	    value = match[2]
	
	    if (value[0] === '"') {
	      // remove quotes and escapes
	      value = value
	        .substr(1, value.length - 2)
	        .replace(qescRegExp, '$1')
	    }
	
	    params[key] = value
	  }
	
	  if (index !== -1 && index !== string.length) {
	    throw new TypeError('invalid parameter format')
	  }
	
	  obj.parameters = params
	
	  return obj
	}
	
	/**
	 * Get content-type from req/res objects.
	 *
	 * @param {object}
	 * @return {Object}
	 * @api private
	 */
	
	function getcontenttype(obj) {
	  if (typeof obj.getHeader === 'function') {
	    // res-like
	    return obj.getHeader('content-type')
	  }
	
	  if (typeof obj.headers === 'object') {
	    // req-like
	    return obj.headers && obj.headers['content-type']
	  }
	}
	
	/**
	 * Quote a string if necessary.
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */
	
	function qstring(val) {
	  var str = String(val)
	
	  // no need to quote tokens
	  if (tokenRegExp.test(str)) {
	    return str
	  }
	
	  if (str.length > 0 && !textRegExp.test(str)) {
	    throw new TypeError('invalid parameter value')
	  }
	
	  return '"' + str.replace(quoteRegExp, '\\$1') + '"'
	}
	
	/**
	 * Simply "type/subtype+siffx" into parts.
	 *
	 * @param {string} string
	 * @return {Object}
	 * @api private
	 */
	
	function splitType(string) {
	  var match = typeRegExp.exec(string.toLowerCase())
	
	  if (!match) {
	    throw new TypeError('invalid media type')
	  }
	
	  var type = match[1]
	  var subtype = match[2]
	  var suffix
	
	  // suffix after last +
	  var index = subtype.lastIndexOf('+')
	  if (index !== -1) {
	    suffix = subtype.substr(index + 1)
	    subtype = subtype.substr(0, index)
	  }
	
	  var obj = {
	    type: type,
	    subtype: subtype,
	    suffix: suffix
	  }
	
	  return obj
	}


/***/ },
/* 56 */
/*!***************************************!*\
  !*** ./~/express/lib/router/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var Route = __webpack_require__(/*! ./route */ 57);
	var Layer = __webpack_require__(/*! ./layer */ 58);
	var methods = __webpack_require__(/*! methods */ 60);
	var mixin = __webpack_require__(/*! utils-merge */ 61);
	var debug = __webpack_require__(/*! debug */ 7)('express:router');
	var deprecate = __webpack_require__(/*! depd */ 21)('express');
	var parseUrl = __webpack_require__(/*! parseurl */ 62);
	var utils = __webpack_require__(/*! ../utils */ 18);
	
	/**
	 * Module variables.
	 */
	
	var objectRegExp = /^\[object (\S+)\]$/;
	var slice = Array.prototype.slice;
	var toString = Object.prototype.toString;
	
	/**
	 * Initialize a new `Router` with the given `options`.
	 *
	 * @param {Object} options
	 * @return {Router} which is an callable function
	 * @api public
	 */
	
	var proto = module.exports = function(options) {
	  options = options || {};
	
	  function router(req, res, next) {
	    router.handle(req, res, next);
	  }
	
	  // mixin Router class functions
	  router.__proto__ = proto;
	
	  router.params = {};
	  router._params = [];
	  router.caseSensitive = options.caseSensitive;
	  router.mergeParams = options.mergeParams;
	  router.strict = options.strict;
	  router.stack = [];
	
	  return router;
	};
	
	/**
	 * Map the given param placeholder `name`(s) to the given callback.
	 *
	 * Parameter mapping is used to provide pre-conditions to routes
	 * which use normalized placeholders. For example a _:user_id_ parameter
	 * could automatically load a user's information from the database without
	 * any additional code,
	 *
	 * The callback uses the same signature as middleware, the only difference
	 * being that the value of the placeholder is passed, in this case the _id_
	 * of the user. Once the `next()` function is invoked, just like middleware
	 * it will continue on to execute the route, or subsequent parameter functions.
	 *
	 * Just like in middleware, you must either respond to the request or call next
	 * to avoid stalling the request.
	 *
	 *  app.param('user_id', function(req, res, next, id){
	 *    User.find(id, function(err, user){
	 *      if (err) {
	 *        return next(err);
	 *      } else if (!user) {
	 *        return next(new Error('failed to load user'));
	 *      }
	 *      req.user = user;
	 *      next();
	 *    });
	 *  });
	 *
	 * @param {String} name
	 * @param {Function} fn
	 * @return {app} for chaining
	 * @api public
	 */
	
	proto.param = function param(name, fn) {
	  // param logic
	  if (typeof name === 'function') {
	    deprecate('router.param(fn): Refactor to use path params');
	    this._params.push(name);
	    return;
	  }
	
	  // apply param functions
	  var params = this._params;
	  var len = params.length;
	  var ret;
	
	  if (name[0] === ':') {
	    deprecate('router.param(' + JSON.stringify(name) + ', fn): Use router.param(' + JSON.stringify(name.substr(1)) + ', fn) instead');
	    name = name.substr(1);
	  }
	
	  for (var i = 0; i < len; ++i) {
	    if (ret = params[i](name, fn)) {
	      fn = ret;
	    }
	  }
	
	  // ensure we end up with a
	  // middleware function
	  if ('function' != typeof fn) {
	    throw new Error('invalid param() call for ' + name + ', got ' + fn);
	  }
	
	  (this.params[name] = this.params[name] || []).push(fn);
	  return this;
	};
	
	/**
	 * Dispatch a req, res into the router.
	 *
	 * @api private
	 */
	
	proto.handle = function(req, res, done) {
	  var self = this;
	
	  debug('dispatching %s %s', req.method, req.url);
	
	  var search = 1 + req.url.indexOf('?');
	  var pathlength = search ? search - 1 : req.url.length;
	  var fqdn = req.url[0] !== '/' && 1 + req.url.substr(0, pathlength).indexOf('://');
	  var protohost = fqdn ? req.url.substr(0, req.url.indexOf('/', 2 + fqdn)) : '';
	  var idx = 0;
	  var removed = '';
	  var slashAdded = false;
	  var paramcalled = {};
	
	  // store options for OPTIONS request
	  // only used if OPTIONS request
	  var options = [];
	
	  // middleware and routes
	  var stack = self.stack;
	
	  // manage inter-router variables
	  var parentParams = req.params;
	  var parentUrl = req.baseUrl || '';
	  done = restore(done, req, 'baseUrl', 'next', 'params');
	
	  // setup next layer
	  req.next = next;
	
	  // for options requests, respond with a default if nothing else responds
	  if (req.method === 'OPTIONS') {
	    done = wrap(done, function(old, err) {
	      if (err || options.length === 0) return old(err);
	      sendOptionsResponse(res, options, old);
	    });
	  }
	
	  // setup basic req values
	  req.baseUrl = parentUrl;
	  req.originalUrl = req.originalUrl || req.url;
	
	  next();
	
	  function next(err) {
	    var layerError = err === 'route'
	      ? null
	      : err;
	
	    // remove added slash
	    if (slashAdded) {
	      req.url = req.url.substr(1);
	      slashAdded = false;
	    }
	
	    // restore altered req.url
	    if (removed.length !== 0) {
	      req.baseUrl = parentUrl;
	      req.url = protohost + removed + req.url.substr(protohost.length);
	      removed = '';
	    }
	
	    // no more matching layers
	    if (idx >= stack.length) {
	      setImmediate(done, layerError);
	      return;
	    }
	
	    // get pathname of request
	    var path = getPathname(req);
	
	    if (path == null) {
	      return done(layerError);
	    }
	
	    // find next matching layer
	    var layer;
	    var match;
	    var route;
	
	    while (match !== true && idx < stack.length) {
	      layer = stack[idx++];
	      match = matchLayer(layer, path);
	      route = layer.route;
	
	      if (typeof match !== 'boolean') {
	        // hold on to layerError
	        layerError = layerError || match;
	      }
	
	      if (match !== true) {
	        continue;
	      }
	
	      if (!route) {
	        // process non-route handlers normally
	        continue;
	      }
	
	      if (layerError) {
	        // routes do not match with a pending error
	        match = false;
	        continue;
	      }
	
	      var method = req.method;
	      var has_method = route._handles_method(method);
	
	      // build up automatic options response
	      if (!has_method && method === 'OPTIONS') {
	        appendMethods(options, route._options());
	      }
	
	      // don't even bother matching route
	      if (!has_method && method !== 'HEAD') {
	        match = false;
	        continue;
	      }
	    }
	
	    // no match
	    if (match !== true) {
	      return done(layerError);
	    }
	
	    // store route for dispatch on change
	    if (route) {
	      req.route = route;
	    }
	
	    // Capture one-time layer values
	    req.params = self.mergeParams
	      ? mergeParams(layer.params, parentParams)
	      : layer.params;
	    var layerPath = layer.path;
	
	    // this should be done for the layer
	    self.process_params(layer, paramcalled, req, res, function (err) {
	      if (err) {
	        return next(layerError || err);
	      }
	
	      if (route) {
	        return layer.handle_request(req, res, next);
	      }
	
	      trim_prefix(layer, layerError, layerPath, path);
	    });
	  }
	
	  function trim_prefix(layer, layerError, layerPath, path) {
	    var c = path[layerPath.length];
	    if (c && '/' !== c && '.' !== c) return next(layerError);
	
	     // Trim off the part of the url that matches the route
	     // middleware (.use stuff) needs to have the path stripped
	    if (layerPath.length !== 0) {
	      debug('trim prefix (%s) from url %s', layerPath, req.url);
	      removed = layerPath;
	      req.url = protohost + req.url.substr(protohost.length + removed.length);
	
	      // Ensure leading slash
	      if (!fqdn && req.url[0] !== '/') {
	        req.url = '/' + req.url;
	        slashAdded = true;
	      }
	
	      // Setup base URL (no trailing slash)
	      req.baseUrl = parentUrl + (removed[removed.length - 1] === '/'
	        ? removed.substring(0, removed.length - 1)
	        : removed);
	    }
	
	    debug('%s %s : %s', layer.name, layerPath, req.originalUrl);
	
	    if (layerError) {
	      layer.handle_error(layerError, req, res, next);
	    } else {
	      layer.handle_request(req, res, next);
	    }
	  }
	};
	
	/**
	 * Process any parameters for the layer.
	 *
	 * @api private
	 */
	
	proto.process_params = function(layer, called, req, res, done) {
	  var params = this.params;
	
	  // captured parameters from the layer, keys and values
	  var keys = layer.keys;
	
	  // fast track
	  if (!keys || keys.length === 0) {
	    return done();
	  }
	
	  var i = 0;
	  var name;
	  var paramIndex = 0;
	  var key;
	  var paramVal;
	  var paramCallbacks;
	  var paramCalled;
	
	  // process params in order
	  // param callbacks can be async
	  function param(err) {
	    if (err) {
	      return done(err);
	    }
	
	    if (i >= keys.length ) {
	      return done();
	    }
	
	    paramIndex = 0;
	    key = keys[i++];
	
	    if (!key) {
	      return done();
	    }
	
	    name = key.name;
	    paramVal = req.params[name];
	    paramCallbacks = params[name];
	    paramCalled = called[name];
	
	    if (paramVal === undefined || !paramCallbacks) {
	      return param();
	    }
	
	    // param previously called with same value or error occurred
	    if (paramCalled && (paramCalled.error || paramCalled.match === paramVal)) {
	      // restore value
	      req.params[name] = paramCalled.value;
	
	      // next param
	      return param(paramCalled.error);
	    }
	
	    called[name] = paramCalled = {
	      error: null,
	      match: paramVal,
	      value: paramVal
	    };
	
	    paramCallback();
	  }
	
	  // single param callbacks
	  function paramCallback(err) {
	    var fn = paramCallbacks[paramIndex++];
	
	    // store updated value
	    paramCalled.value = req.params[key.name];
	
	    if (err) {
	      // store error
	      paramCalled.error = err;
	      param(err);
	      return;
	    }
	
	    if (!fn) return param();
	
	    try {
	      fn(req, res, paramCallback, paramVal, key.name);
	    } catch (e) {
	      paramCallback(e);
	    }
	  }
	
	  param();
	};
	
	/**
	 * Use the given middleware function, with optional path, defaulting to "/".
	 *
	 * Use (like `.all`) will run for any http METHOD, but it will not add
	 * handlers for those methods so OPTIONS requests will not consider `.use`
	 * functions even if they could respond.
	 *
	 * The other difference is that _route_ path is stripped and not visible
	 * to the handler function. The main effect of this feature is that mounted
	 * handlers can operate without any code changes regardless of the "prefix"
	 * pathname.
	 *
	 * @api public
	 */
	
	proto.use = function use(fn) {
	  var offset = 0;
	  var path = '/';
	
	  // default path to '/'
	  // disambiguate router.use([fn])
	  if (typeof fn !== 'function') {
	    var arg = fn;
	
	    while (Array.isArray(arg) && arg.length !== 0) {
	      arg = arg[0];
	    }
	
	    // first arg is the path
	    if (typeof arg !== 'function') {
	      offset = 1;
	      path = fn;
	    }
	  }
	
	  var callbacks = utils.flatten(slice.call(arguments, offset));
	
	  if (callbacks.length === 0) {
	    throw new TypeError('Router.use() requires middleware functions');
	  }
	
	  callbacks.forEach(function (fn) {
	    if (typeof fn !== 'function') {
	      throw new TypeError('Router.use() requires middleware function but got a ' + gettype(fn));
	    }
	
	    // add the middleware
	    debug('use %s %s', path, fn.name || '<anonymous>');
	
	    var layer = new Layer(path, {
	      sensitive: this.caseSensitive,
	      strict: false,
	      end: false
	    }, fn);
	
	    layer.route = undefined;
	
	    this.stack.push(layer);
	  }, this);
	
	  return this;
	};
	
	/**
	 * Create a new Route for the given path.
	 *
	 * Each route contains a separate middleware stack and VERB handlers.
	 *
	 * See the Route api documentation for details on adding handlers
	 * and middleware to routes.
	 *
	 * @param {String} path
	 * @return {Route}
	 * @api public
	 */
	
	proto.route = function(path){
	  var route = new Route(path);
	
	  var layer = new Layer(path, {
	    sensitive: this.caseSensitive,
	    strict: this.strict,
	    end: true
	  }, route.dispatch.bind(route));
	
	  layer.route = route;
	
	  this.stack.push(layer);
	  return route;
	};
	
	// create Router#VERB functions
	methods.concat('all').forEach(function(method){
	  proto[method] = function(path){
	    var route = this.route(path)
	    route[method].apply(route, slice.call(arguments, 1));
	    return this;
	  };
	});
	
	// append methods to a list of methods
	function appendMethods(list, addition) {
	  for (var i = 0; i < addition.length; i++) {
	    var method = addition[i];
	    if (list.indexOf(method) === -1) {
	      list.push(method);
	    }
	  }
	}
	
	// get pathname of request
	function getPathname(req) {
	  try {
	    return parseUrl(req).pathname;
	  } catch (err) {
	    return undefined;
	  }
	}
	
	// get type for error message
	function gettype(obj) {
	  var type = typeof obj;
	
	  if (type !== 'object') {
	    return type;
	  }
	
	  // inspect [[Class]] for objects
	  return toString.call(obj)
	    .replace(objectRegExp, '$1');
	}
	
	/**
	 * Match path to a layer.
	 *
	 * @param {Layer} layer
	 * @param {string} path
	 * @private
	 */
	
	function matchLayer(layer, path) {
	  try {
	    return layer.match(path);
	  } catch (err) {
	    return err;
	  }
	}
	
	// merge params with parent params
	function mergeParams(params, parent) {
	  if (typeof parent !== 'object' || !parent) {
	    return params;
	  }
	
	  // make copy of parent for base
	  var obj = mixin({}, parent);
	
	  // simple non-numeric merging
	  if (!(0 in params) || !(0 in parent)) {
	    return mixin(obj, params);
	  }
	
	  var i = 0;
	  var o = 0;
	
	  // determine numeric gaps
	  while (i === o || o in parent) {
	    if (i in params) i++;
	    if (o in parent) o++;
	  }
	
	  // offset numeric indices in params before merge
	  for (i--; i >= 0; i--) {
	    params[i + o] = params[i];
	
	    // create holes for the merge when necessary
	    if (i < o) {
	      delete params[i];
	    }
	  }
	
	  return mixin(parent, params);
	}
	
	// restore obj props after function
	function restore(fn, obj) {
	  var props = new Array(arguments.length - 2);
	  var vals = new Array(arguments.length - 2);
	
	  for (var i = 0; i < props.length; i++) {
	    props[i] = arguments[i + 2];
	    vals[i] = obj[props[i]];
	  }
	
	  return function(err){
	    // restore vals
	    for (var i = 0; i < props.length; i++) {
	      obj[props[i]] = vals[i];
	    }
	
	    return fn.apply(this, arguments);
	  };
	}
	
	// send an OPTIONS response
	function sendOptionsResponse(res, options, next) {
	  try {
	    var body = options.join(',');
	    res.set('Allow', body);
	    res.send(body);
	  } catch (err) {
	    next(err);
	  }
	}
	
	// wrap a function
	function wrap(old, fn) {
	  return function proxy() {
	    var args = new Array(arguments.length + 1);
	
	    args[0] = old;
	    for (var i = 0, len = arguments.length; i < len; i++) {
	      args[i + 1] = arguments[i];
	    }
	
	    fn.apply(this, args);
	  };
	}


/***/ },
/* 57 */
/*!***************************************!*\
  !*** ./~/express/lib/router/route.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(/*! debug */ 7)('express:router:route');
	var Layer = __webpack_require__(/*! ./layer */ 58);
	var methods = __webpack_require__(/*! methods */ 60);
	var utils = __webpack_require__(/*! ../utils */ 18);
	
	/**
	 * Expose `Route`.
	 */
	
	module.exports = Route;
	
	/**
	 * Initialize `Route` with the given `path`,
	 *
	 * @param {String} path
	 * @api private
	 */
	
	function Route(path) {
	  debug('new %s', path);
	  this.path = path;
	  this.stack = [];
	
	  // route handlers for various http methods
	  this.methods = {};
	}
	
	/**
	 * @api private
	 */
	
	Route.prototype._handles_method = function _handles_method(method) {
	  if (this.methods._all) {
	    return true;
	  }
	
	  method = method.toLowerCase();
	
	  if (method === 'head' && !this.methods['head']) {
	    method = 'get';
	  }
	
	  return Boolean(this.methods[method]);
	};
	
	/**
	 * @return {Array} supported HTTP methods
	 * @api private
	 */
	
	Route.prototype._options = function _options() {
	  var methods = Object.keys(this.methods);
	
	  // append automatic head
	  if (this.methods.get && !this.methods.head) {
	    methods.push('head');
	  }
	
	  for (var i = 0; i < methods.length; i++) {
	    // make upper case
	    methods[i] = methods[i].toUpperCase();
	  }
	
	  return methods;
	};
	
	/**
	 * dispatch req, res into this route
	 *
	 * @api private
	 */
	
	Route.prototype.dispatch = function(req, res, done){
	  var idx = 0;
	  var stack = this.stack;
	  if (stack.length === 0) {
	    return done();
	  }
	
	  var method = req.method.toLowerCase();
	  if (method === 'head' && !this.methods['head']) {
	    method = 'get';
	  }
	
	  req.route = this;
	
	  next();
	
	  function next(err) {
	    if (err && err === 'route') {
	      return done();
	    }
	
	    var layer = stack[idx++];
	    if (!layer) {
	      return done(err);
	    }
	
	    if (layer.method && layer.method !== method) {
	      return next(err);
	    }
	
	    if (err) {
	      layer.handle_error(err, req, res, next);
	    } else {
	      layer.handle_request(req, res, next);
	    }
	  }
	};
	
	/**
	 * Add a handler for all HTTP verbs to this route.
	 *
	 * Behaves just like middleware and can respond or call `next`
	 * to continue processing.
	 *
	 * You can use multiple `.all` call to add multiple handlers.
	 *
	 *   function check_something(req, res, next){
	 *     next();
	 *   };
	 *
	 *   function validate_user(req, res, next){
	 *     next();
	 *   };
	 *
	 *   route
	 *   .all(validate_user)
	 *   .all(check_something)
	 *   .get(function(req, res, next){
	 *     res.send('hello world');
	 *   });
	 *
	 * @param {function} handler
	 * @return {Route} for chaining
	 * @api public
	 */
	
	Route.prototype.all = function(){
	  var callbacks = utils.flatten([].slice.call(arguments));
	  callbacks.forEach(function(fn) {
	    if (typeof fn !== 'function') {
	      var type = {}.toString.call(fn);
	      var msg = 'Route.all() requires callback functions but got a ' + type;
	      throw new Error(msg);
	    }
	
	    var layer = Layer('/', {}, fn);
	    layer.method = undefined;
	
	    this.methods._all = true;
	    this.stack.push(layer);
	  }, this);
	
	  return this;
	};
	
	methods.forEach(function(method){
	  Route.prototype[method] = function(){
	    var callbacks = utils.flatten([].slice.call(arguments));
	
	    callbacks.forEach(function(fn) {
	      if (typeof fn !== 'function') {
	        var type = {}.toString.call(fn);
	        var msg = 'Route.' + method + '() requires callback functions but got a ' + type;
	        throw new Error(msg);
	      }
	
	      debug('%s %s', method, this.path);
	
	      var layer = Layer('/', {}, fn);
	      layer.method = method;
	
	      this.methods[method] = true;
	      this.stack.push(layer);
	    }, this);
	    return this;
	  };
	});


/***/ },
/* 58 */
/*!***************************************!*\
  !*** ./~/express/lib/router/layer.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var pathRegexp = __webpack_require__(/*! path-to-regexp */ 59);
	var debug = __webpack_require__(/*! debug */ 7)('express:router:layer');
	
	/**
	 * Module variables.
	 */
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Expose `Layer`.
	 */
	
	module.exports = Layer;
	
	function Layer(path, options, fn) {
	  if (!(this instanceof Layer)) {
	    return new Layer(path, options, fn);
	  }
	
	  debug('new %s', path);
	  options = options || {};
	
	  this.handle = fn;
	  this.name = fn.name || '<anonymous>';
	  this.params = undefined;
	  this.path = undefined;
	  this.regexp = pathRegexp(path, this.keys = [], options);
	
	  if (path === '/' && options.end === false) {
	    this.regexp.fast_slash = true;
	  }
	}
	
	/**
	 * Handle the error for the layer.
	 *
	 * @param {Error} error
	 * @param {Request} req
	 * @param {Response} res
	 * @param {function} next
	 * @api private
	 */
	
	Layer.prototype.handle_error = function handle_error(error, req, res, next) {
	  var fn = this.handle;
	
	  if (fn.length !== 4) {
	    // not a standard error handler
	    return next(error);
	  }
	
	  try {
	    fn(error, req, res, next);
	  } catch (err) {
	    next(err);
	  }
	};
	
	/**
	 * Handle the request for the layer.
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @param {function} next
	 * @api private
	 */
	
	Layer.prototype.handle_request = function handle(req, res, next) {
	  var fn = this.handle;
	
	  if (fn.length > 3) {
	    // not a standard request handler
	    return next();
	  }
	
	  try {
	    fn(req, res, next);
	  } catch (err) {
	    next(err);
	  }
	};
	
	/**
	 * Check if this route matches `path`, if so
	 * populate `.params`.
	 *
	 * @param {String} path
	 * @return {Boolean}
	 * @api private
	 */
	
	Layer.prototype.match = function match(path) {
	  if (path == null) {
	    // no path, nothing matches
	    this.params = undefined;
	    this.path = undefined;
	    return false;
	  }
	
	  if (this.regexp.fast_slash) {
	    // fast path non-ending match for / (everything matches)
	    this.params = {};
	    this.path = '';
	    return true;
	  }
	
	  var m = this.regexp.exec(path);
	
	  if (!m) {
	    this.params = undefined;
	    this.path = undefined;
	    return false;
	  }
	
	  // store values
	  this.params = {};
	  this.path = m[0];
	
	  var keys = this.keys;
	  var params = this.params;
	  var prop;
	  var n = 0;
	  var key;
	  var val;
	
	  for (var i = 1, len = m.length; i < len; ++i) {
	    key = keys[i - 1];
	    prop = key
	      ? key.name
	      : n++;
	    val = decode_param(m[i]);
	
	    if (val !== undefined || !(hasOwnProperty.call(params, prop))) {
	      params[prop] = val;
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Decode param value.
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */
	
	function decode_param(val){
	  if (typeof val !== 'string') {
	    return val;
	  }
	
	  try {
	    return decodeURIComponent(val);
	  } catch (e) {
	    var err = new TypeError("Failed to decode param '" + val + "'");
	    err.status = 400;
	    throw err;
	  }
	}


/***/ },
/* 59 */
/*!*********************************************!*\
  !*** ./~/express/~/path-to-regexp/index.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * Expose `pathtoRegexp`.
	 */
	
	module.exports = pathtoRegexp;
	
	/**
	 * Normalize the given path string,
	 * returning a regular expression.
	 *
	 * An empty array should be passed,
	 * which will contain the placeholder
	 * key names. For example "/user/:id" will
	 * then contain ["id"].
	 *
	 * @param  {String|RegExp|Array} path
	 * @param  {Array} keys
	 * @param  {Object} options
	 * @return {RegExp}
	 * @api private
	 */
	
	function pathtoRegexp(path, keys, options) {
	  options = options || {};
	  var strict = options.strict;
	  var end = options.end !== false;
	  var flags = options.sensitive ? '' : 'i';
	  keys = keys || [];
	
	  if (path instanceof RegExp) {
	    return path;
	  }
	
	  if (Array.isArray(path)) {
	    // Map array parts into regexps and return their source. We also pass
	    // the same keys and options instance into every generation to get
	    // consistent matching groups before we join the sources together.
	    path = path.map(function (value) {
	      return pathtoRegexp(value, keys, options).source;
	    });
	
	    return new RegExp('(?:' + path.join('|') + ')', flags);
	  }
	
	  path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'))
	    .replace(/\/\(/g, '/(?:')
	    .replace(/([\/\.])/g, '\\$1')
	    .replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g, function (match, slash, format, key, capture, star, optional) {
	      slash = slash || '';
	      format = format || '';
	      capture = capture || '([^\\/' + format + ']+?)';
	      optional = optional || '';
	
	      keys.push({ name: key, optional: !!optional });
	
	      return ''
	        + (optional ? '' : slash)
	        + '(?:'
	        + format + (optional ? slash : '') + capture
	        + (star ? '((?:[\\/' + format + '].+?)?)' : '')
	        + ')'
	        + optional;
	    })
	    .replace(/\*/g, '(.*)');
	
	  // If the path is non-ending, match until the end or a slash.
	  path += (end ? '$' : (path[path.length - 1] === '/' ? '' : '(?=\\/|$)'));
	
	  return new RegExp(path, flags);
	};


/***/ },
/* 60 */
/*!**************************************!*\
  !*** ./~/express/~/methods/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var http = __webpack_require__(/*! http */ 15);
	
	/* istanbul ignore next: implementation differs on version */
	if (http.METHODS) {
	
	  module.exports = http.METHODS.map(function(method){
	    return method.toLowerCase();
	  });
	
	} else {
	
	  module.exports = [
	    'get',
	    'post',
	    'put',
	    'head',
	    'delete',
	    'options',
	    'trace',
	    'copy',
	    'lock',
	    'mkcol',
	    'move',
	    'purge',
	    'propfind',
	    'proppatch',
	    'unlock',
	    'report',
	    'mkactivity',
	    'checkout',
	    'merge',
	    'm-search',
	    'notify',
	    'subscribe',
	    'unsubscribe',
	    'patch',
	    'search',
	    'connect'
	  ];
	
	}


/***/ },
/* 61 */
/*!******************************************!*\
  !*** ./~/express/~/utils-merge/index.js ***!
  \******************************************/
/***/ function(module, exports) {

	/**
	 * Merge object b with object a.
	 *
	 *     var a = { foo: 'bar' }
	 *       , b = { bar: 'baz' };
	 *
	 *     merge(a, b);
	 *     // => { foo: 'bar', bar: 'baz' }
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object}
	 * @api public
	 */
	
	exports = module.exports = function(a, b){
	  if (a && b) {
	    for (var key in b) {
	      a[key] = b[key];
	    }
	  }
	  return a;
	};


/***/ },
/* 62 */
/*!***************************************!*\
  !*** ./~/express/~/parseurl/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * parseurl
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(/*! url */ 63)
	var parse = url.parse
	var Url = url.Url
	
	/**
	 * Pattern for a simple path case.
	 * See: https://github.com/joyent/node/pull/7878
	 */
	
	var simplePathRegExp = /^(\/\/?(?!\/)[^\?#\s]*)(\?[^#\s]*)?$/
	
	/**
	 * Exports.
	 */
	
	module.exports = parseurl
	module.exports.original = originalurl
	
	/**
	 * Parse the `req` url with memoization.
	 *
	 * @param {ServerRequest} req
	 * @return {Object}
	 * @api public
	 */
	
	function parseurl(req) {
	  var url = req.url
	
	  if (url === undefined) {
	    // URL is undefined
	    return undefined
	  }
	
	  var parsed = req._parsedUrl
	
	  if (fresh(url, parsed)) {
	    // Return cached URL parse
	    return parsed
	  }
	
	  // Parse the URL
	  parsed = fastparse(url)
	  parsed._raw = url
	
	  return req._parsedUrl = parsed
	};
	
	/**
	 * Parse the `req` original url with fallback and memoization.
	 *
	 * @param {ServerRequest} req
	 * @return {Object}
	 * @api public
	 */
	
	function originalurl(req) {
	  var url = req.originalUrl
	
	  if (typeof url !== 'string') {
	    // Fallback
	    return parseurl(req)
	  }
	
	  var parsed = req._parsedOriginalUrl
	
	  if (fresh(url, parsed)) {
	    // Return cached URL parse
	    return parsed
	  }
	
	  // Parse the URL
	  parsed = fastparse(url)
	  parsed._raw = url
	
	  return req._parsedOriginalUrl = parsed
	};
	
	/**
	 * Parse the `str` url with fast-path short-cut.
	 *
	 * @param {string} str
	 * @return {Object}
	 * @api private
	 */
	
	function fastparse(str) {
	  // Try fast path regexp
	  // See: https://github.com/joyent/node/pull/7878
	  var simplePath = typeof str === 'string' && simplePathRegExp.exec(str)
	
	  // Construct simple URL
	  if (simplePath) {
	    var pathname = simplePath[1]
	    var search = simplePath[2] || null
	    var url = Url !== undefined
	      ? new Url()
	      : {}
	    url.path = str
	    url.href = str
	    url.pathname = pathname
	    url.search = search
	    url.query = search && search.substr(1)
	
	    return url
	  }
	
	  return parse(str)
	}
	
	/**
	 * Determine if parsed is still fresh for url.
	 *
	 * @param {string} url
	 * @param {object} parsedUrl
	 * @return {boolean}
	 * @api private
	 */
	
	function fresh(url, parsedUrl) {
	  return typeof parsedUrl === 'object'
	    && parsedUrl !== null
	    && (Url === undefined || parsedUrl instanceof Url)
	    && parsedUrl._raw === url
	}


/***/ },
/* 63 */
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 64 */
/*!******************************************!*\
  !*** ./~/express/lib/middleware/init.js ***!
  \******************************************/
/***/ function(module, exports) {

	/**
	 * Initialization middleware, exposing the
	 * request and response to each other, as well
	 * as defaulting the X-Powered-By header field.
	 *
	 * @param {Function} app
	 * @return {Function}
	 * @api private
	 */
	
	exports.init = function(app){
	  return function expressInit(req, res, next){
	    if (app.enabled('x-powered-by')) res.setHeader('X-Powered-By', 'Express');
	    req.res = res;
	    res.req = req;
	    req.next = next;
	
	    req.__proto__ = app.request;
	    res.__proto__ = app.response;
	
	    res.locals = res.locals || Object.create(null);
	
	    next();
	  };
	};
	


/***/ },
/* 65 */
/*!*******************************************!*\
  !*** ./~/express/lib/middleware/query.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var parseUrl = __webpack_require__(/*! parseurl */ 62);
	var qs = __webpack_require__(/*! qs */ 49);
	
	/**
	 * @param {Object} options
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function query(options) {
	  var queryparse = qs.parse;
	
	  if (typeof options === 'function') {
	    queryparse = options;
	    options = undefined;
	  }
	
	  return function query(req, res, next){
	    if (!req.query) {
	      var val = parseUrl(req).query;
	      req.query = queryparse(val, options);
	    }
	
	    next();
	  };
	};


/***/ },
/* 66 */
/*!*******************************!*\
  !*** ./~/express/lib/view.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(/*! debug */ 7)('express:view');
	var path = __webpack_require__(/*! path */ 20);
	var fs = __webpack_require__(/*! fs */ 12);
	var utils = __webpack_require__(/*! ./utils */ 18);
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var dirname = path.dirname;
	var basename = path.basename;
	var extname = path.extname;
	var join = path.join;
	var resolve = path.resolve;
	
	/**
	 * Expose `View`.
	 */
	
	module.exports = View;
	
	/**
	 * Initialize a new `View` with the given `name`.
	 *
	 * Options:
	 *
	 *   - `defaultEngine` the default template engine name
	 *   - `engines` template engine require() cache
	 *   - `root` root path for view lookup
	 *
	 * @param {String} name
	 * @param {Object} options
	 * @api private
	 */
	
	function View(name, options) {
	  options = options || {};
	  this.name = name;
	  this.root = options.root;
	  var engines = options.engines;
	  this.defaultEngine = options.defaultEngine;
	  var ext = this.ext = extname(name);
	  if (!ext && !this.defaultEngine) throw new Error('No default engine was specified and no extension was provided.');
	  if (!ext) name += (ext = this.ext = ('.' != this.defaultEngine[0] ? '.' : '') + this.defaultEngine);
	  this.engine = engines[ext] || (engines[ext] = __webpack_require__(/*! . */ 67)(ext.slice(1)).__express);
	  this.path = this.lookup(name);
	}
	
	/**
	 * Lookup view by the given `name`
	 *
	 * @param {String} name
	 * @return {String}
	 * @api private
	 */
	
	View.prototype.lookup = function lookup(name) {
	  var path;
	  var roots = [].concat(this.root);
	
	  debug('lookup "%s"', name);
	
	  for (var i = 0; i < roots.length && !path; i++) {
	    var root = roots[i];
	
	    // resolve the path
	    var loc = resolve(root, name);
	    var dir = dirname(loc);
	    var file = basename(loc);
	
	    // resolve the file
	    path = this.resolve(dir, file);
	  }
	
	  return path;
	};
	
	/**
	 * Render with the given `options` and callback `fn(err, str)`.
	 *
	 * @param {Object} options
	 * @param {Function} fn
	 * @api private
	 */
	
	View.prototype.render = function render(options, fn) {
	  debug('render "%s"', this.path);
	  this.engine(this.path, options, fn);
	};
	
	/**
	 * Resolve the file within the given directory.
	 *
	 * @param {string} dir
	 * @param {string} file
	 * @private
	 */
	
	View.prototype.resolve = function resolve(dir, file) {
	  var ext = this.ext;
	  var path;
	  var stat;
	
	  // <path>.<ext>
	  path = join(dir, file);
	  stat = tryStat(path);
	
	  if (stat && stat.isFile()) {
	    return path;
	  }
	
	  // <path>/index.<ext>
	  path = join(dir, basename(file, ext), 'index' + ext);
	  stat = tryStat(path);
	
	  if (stat && stat.isFile()) {
	    return path;
	  }
	};
	
	/**
	 * Return a stat, maybe.
	 *
	 * @param {string} path
	 * @return {fs.Stats}
	 * @private
	 */
	
	function tryStat(path) {
	  debug('stat "%s"', path);
	
	  try {
	    return fs.statSync(path);
	  } catch (e) {
	    return undefined;
	  }
	}


/***/ },
/* 67 */
/*!********************************!*\
  !*** ./~/express/lib ^\.\/.*$ ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./application": 5,
		"./application.js": 5,
		"./express": 2,
		"./express.js": 2,
		"./middleware/init": 64,
		"./middleware/init.js": 64,
		"./middleware/query": 65,
		"./middleware/query.js": 65,
		"./request": 68,
		"./request.js": 68,
		"./response": 80,
		"./response.js": 80,
		"./router/index": 56,
		"./router/index.js": 56,
		"./router/layer": 58,
		"./router/layer.js": 58,
		"./router/route": 57,
		"./router/route.js": 57,
		"./utils": 18,
		"./utils.js": 18,
		"./view": 66,
		"./view.js": 66
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 67;


/***/ },
/* 68 */
/*!**********************************!*\
  !*** ./~/express/lib/request.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var accepts = __webpack_require__(/*! accepts */ 69);
	var deprecate = __webpack_require__(/*! depd */ 21)('express');
	var isIP = __webpack_require__(/*! net */ 13).isIP;
	var typeis = __webpack_require__(/*! type-is */ 77);
	var http = __webpack_require__(/*! http */ 15);
	var fresh = __webpack_require__(/*! fresh */ 30);
	var parseRange = __webpack_require__(/*! range-parser */ 28);
	var parse = __webpack_require__(/*! parseurl */ 62);
	var proxyaddr = __webpack_require__(/*! proxy-addr */ 45);
	
	/**
	 * Request prototype.
	 */
	
	var req = exports = module.exports = {
	  __proto__: http.IncomingMessage.prototype
	};
	
	/**
	 * Return request header.
	 *
	 * The `Referrer` header field is special-cased,
	 * both `Referrer` and `Referer` are interchangeable.
	 *
	 * Examples:
	 *
	 *     req.get('Content-Type');
	 *     // => "text/plain"
	 *
	 *     req.get('content-type');
	 *     // => "text/plain"
	 *
	 *     req.get('Something');
	 *     // => undefined
	 *
	 * Aliased as `req.header()`.
	 *
	 * @param {String} name
	 * @return {String}
	 * @api public
	 */
	
	req.get =
	req.header = function(name){
	  switch (name = name.toLowerCase()) {
	    case 'referer':
	    case 'referrer':
	      return this.headers.referrer
	        || this.headers.referer;
	    default:
	      return this.headers[name];
	  }
	};
	
	/**
	 * To do: update docs.
	 *
	 * Check if the given `type(s)` is acceptable, returning
	 * the best match when true, otherwise `undefined`, in which
	 * case you should respond with 406 "Not Acceptable".
	 *
	 * The `type` value may be a single mime type string
	 * such as "application/json", the extension name
	 * such as "json", a comma-delimted list such as "json, html, text/plain",
	 * an argument list such as `"json", "html", "text/plain"`,
	 * or an array `["json", "html", "text/plain"]`. When a list
	 * or array is given the _best_ match, if any is returned.
	 *
	 * Examples:
	 *
	 *     // Accept: text/html
	 *     req.accepts('html');
	 *     // => "html"
	 *
	 *     // Accept: text/*, application/json
	 *     req.accepts('html');
	 *     // => "html"
	 *     req.accepts('text/html');
	 *     // => "text/html"
	 *     req.accepts('json, text');
	 *     // => "json"
	 *     req.accepts('application/json');
	 *     // => "application/json"
	 *
	 *     // Accept: text/*, application/json
	 *     req.accepts('image/png');
	 *     req.accepts('png');
	 *     // => undefined
	 *
	 *     // Accept: text/*;q=.5, application/json
	 *     req.accepts(['html', 'json']);
	 *     req.accepts('html', 'json');
	 *     req.accepts('html, json');
	 *     // => "json"
	 *
	 * @param {String|Array} type(s)
	 * @return {String}
	 * @api public
	 */
	
	req.accepts = function(){
	  var accept = accepts(this);
	  return accept.types.apply(accept, arguments);
	};
	
	/**
	 * Check if the given `encoding`s are accepted.
	 *
	 * @param {String} ...encoding
	 * @return {Boolean}
	 * @api public
	 */
	
	req.acceptsEncodings = function(){
	  var accept = accepts(this);
	  return accept.encodings.apply(accept, arguments);
	};
	
	req.acceptsEncoding = deprecate.function(req.acceptsEncodings,
	  'req.acceptsEncoding: Use acceptsEncodings instead');
	
	/**
	 * Check if the given `charset`s are acceptable,
	 * otherwise you should respond with 406 "Not Acceptable".
	 *
	 * @param {String} ...charset
	 * @return {Boolean}
	 * @api public
	 */
	
	req.acceptsCharsets = function(){
	  var accept = accepts(this);
	  return accept.charsets.apply(accept, arguments);
	};
	
	req.acceptsCharset = deprecate.function(req.acceptsCharsets,
	  'req.acceptsCharset: Use acceptsCharsets instead');
	
	/**
	 * Check if the given `lang`s are acceptable,
	 * otherwise you should respond with 406 "Not Acceptable".
	 *
	 * @param {String} ...lang
	 * @return {Boolean}
	 * @api public
	 */
	
	req.acceptsLanguages = function(){
	  var accept = accepts(this);
	  return accept.languages.apply(accept, arguments);
	};
	
	req.acceptsLanguage = deprecate.function(req.acceptsLanguages,
	  'req.acceptsLanguage: Use acceptsLanguages instead');
	
	/**
	 * Parse Range header field,
	 * capping to the given `size`.
	 *
	 * Unspecified ranges such as "0-" require
	 * knowledge of your resource length. In
	 * the case of a byte range this is of course
	 * the total number of bytes. If the Range
	 * header field is not given `null` is returned,
	 * `-1` when unsatisfiable, `-2` when syntactically invalid.
	 *
	 * NOTE: remember that ranges are inclusive, so
	 * for example "Range: users=0-3" should respond
	 * with 4 users when available, not 3.
	 *
	 * @param {Number} size
	 * @return {Array}
	 * @api public
	 */
	
	req.range = function(size){
	  var range = this.get('Range');
	  if (!range) return;
	  return parseRange(size, range);
	};
	
	/**
	 * Return the value of param `name` when present or `defaultValue`.
	 *
	 *  - Checks route placeholders, ex: _/user/:id_
	 *  - Checks body params, ex: id=12, {"id":12}
	 *  - Checks query string params, ex: ?id=12
	 *
	 * To utilize request bodies, `req.body`
	 * should be an object. This can be done by using
	 * the `bodyParser()` middleware.
	 *
	 * @param {String} name
	 * @param {Mixed} [defaultValue]
	 * @return {String}
	 * @api public
	 */
	
	req.param = function param(name, defaultValue) {
	  var params = this.params || {};
	  var body = this.body || {};
	  var query = this.query || {};
	
	  var args = arguments.length === 1
	    ? 'name'
	    : 'name, default';
	  deprecate('req.param(' + args + '): Use req.params, req.body, or req.query instead');
	
	  if (null != params[name] && params.hasOwnProperty(name)) return params[name];
	  if (null != body[name]) return body[name];
	  if (null != query[name]) return query[name];
	
	  return defaultValue;
	};
	
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * Examples:
	 *
	 *      // With Content-Type: text/html; charset=utf-8
	 *      req.is('html');
	 *      req.is('text/html');
	 *      req.is('text/*');
	 *      // => true
	 *
	 *      // When Content-Type is application/json
	 *      req.is('json');
	 *      req.is('application/json');
	 *      req.is('application/*');
	 *      // => true
	 *
	 *      req.is('html');
	 *      // => false
	 *
	 * @param {String} type
	 * @return {Boolean}
	 * @api public
	 */
	
	req.is = function(types){
	  if (!Array.isArray(types)) types = [].slice.call(arguments);
	  return typeis(this, types);
	};
	
	/**
	 * Return the protocol string "http" or "https"
	 * when requested with TLS. When the "trust proxy"
	 * setting trusts the socket address, the
	 * "X-Forwarded-Proto" header field will be trusted
	 * and used if present.
	 *
	 * If you're running behind a reverse proxy that
	 * supplies https for you this may be enabled.
	 *
	 * @return {String}
	 * @api public
	 */
	
	defineGetter(req, 'protocol', function protocol(){
	  var proto = this.connection.encrypted
	    ? 'https'
	    : 'http';
	  var trust = this.app.get('trust proxy fn');
	
	  if (!trust(this.connection.remoteAddress)) {
	    return proto;
	  }
	
	  // Note: X-Forwarded-Proto is normally only ever a
	  //       single value, but this is to be safe.
	  proto = this.get('X-Forwarded-Proto') || proto;
	  return proto.split(/\s*,\s*/)[0];
	});
	
	/**
	 * Short-hand for:
	 *
	 *    req.protocol == 'https'
	 *
	 * @return {Boolean}
	 * @api public
	 */
	
	defineGetter(req, 'secure', function secure(){
	  return 'https' == this.protocol;
	});
	
	/**
	 * Return the remote address from the trusted proxy.
	 *
	 * The is the remote address on the socket unless
	 * "trust proxy" is set.
	 *
	 * @return {String}
	 * @api public
	 */
	
	defineGetter(req, 'ip', function ip(){
	  var trust = this.app.get('trust proxy fn');
	  return proxyaddr(this, trust);
	});
	
	/**
	 * When "trust proxy" is set, trusted proxy addresses + client.
	 *
	 * For example if the value were "client, proxy1, proxy2"
	 * you would receive the array `["client", "proxy1", "proxy2"]`
	 * where "proxy2" is the furthest down-stream and "proxy1" and
	 * "proxy2" were trusted.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	defineGetter(req, 'ips', function ips() {
	  var trust = this.app.get('trust proxy fn');
	  var addrs = proxyaddr.all(this, trust);
	  return addrs.slice(1).reverse();
	});
	
	/**
	 * Return subdomains as an array.
	 *
	 * Subdomains are the dot-separated parts of the host before the main domain of
	 * the app. By default, the domain of the app is assumed to be the last two
	 * parts of the host. This can be changed by setting "subdomain offset".
	 *
	 * For example, if the domain is "tobi.ferrets.example.com":
	 * If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
	 * If "subdomain offset" is 3, req.subdomains is `["tobi"]`.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	defineGetter(req, 'subdomains', function subdomains() {
	  var hostname = this.hostname;
	
	  if (!hostname) return [];
	
	  var offset = this.app.get('subdomain offset');
	  var subdomains = !isIP(hostname)
	    ? hostname.split('.').reverse()
	    : [hostname];
	
	  return subdomains.slice(offset);
	});
	
	/**
	 * Short-hand for `url.parse(req.url).pathname`.
	 *
	 * @return {String}
	 * @api public
	 */
	
	defineGetter(req, 'path', function path() {
	  return parse(this).pathname;
	});
	
	/**
	 * Parse the "Host" header field to a hostname.
	 *
	 * When the "trust proxy" setting trusts the socket
	 * address, the "X-Forwarded-Host" header field will
	 * be trusted.
	 *
	 * @return {String}
	 * @api public
	 */
	
	defineGetter(req, 'hostname', function hostname(){
	  var trust = this.app.get('trust proxy fn');
	  var host = this.get('X-Forwarded-Host');
	
	  if (!host || !trust(this.connection.remoteAddress)) {
	    host = this.get('Host');
	  }
	
	  if (!host) return;
	
	  // IPv6 literal support
	  var offset = host[0] === '['
	    ? host.indexOf(']') + 1
	    : 0;
	  var index = host.indexOf(':', offset);
	
	  return ~index
	    ? host.substring(0, index)
	    : host;
	});
	
	// TODO: change req.host to return host in next major
	
	defineGetter(req, 'host', deprecate.function(function host(){
	  return this.hostname;
	}, 'req.host: Use req.hostname instead'));
	
	/**
	 * Check if the request is fresh, aka
	 * Last-Modified and/or the ETag
	 * still match.
	 *
	 * @return {Boolean}
	 * @api public
	 */
	
	defineGetter(req, 'fresh', function(){
	  var method = this.method;
	  var s = this.res.statusCode;
	
	  // GET or HEAD for weak freshness validation only
	  if ('GET' != method && 'HEAD' != method) return false;
	
	  // 2xx or 304 as per rfc2616 14.26
	  if ((s >= 200 && s < 300) || 304 == s) {
	    return fresh(this.headers, (this.res._headers || {}));
	  }
	
	  return false;
	});
	
	/**
	 * Check if the request is stale, aka
	 * "Last-Modified" and / or the "ETag" for the
	 * resource has changed.
	 *
	 * @return {Boolean}
	 * @api public
	 */
	
	defineGetter(req, 'stale', function stale(){
	  return !this.fresh;
	});
	
	/**
	 * Check if the request was an _XMLHttpRequest_.
	 *
	 * @return {Boolean}
	 * @api public
	 */
	
	defineGetter(req, 'xhr', function xhr(){
	  var val = this.get('X-Requested-With') || '';
	  return 'xmlhttprequest' == val.toLowerCase();
	});
	
	/**
	 * Helper function for creating a getter on an object.
	 *
	 * @param {Object} obj
	 * @param {String} name
	 * @param {Function} getter
	 * @api private
	 */
	function defineGetter(obj, name, getter) {
	  Object.defineProperty(obj, name, {
	    configurable: true,
	    enumerable: true,
	    get: getter
	  });
	};


/***/ },
/* 69 */
/*!**************************************!*\
  !*** ./~/express/~/accepts/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * accepts
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict'
	
	/**
	 * Module dependencies.
	 * @private
	 */
	
	var Negotiator = __webpack_require__(/*! negotiator */ 70)
	var mime = __webpack_require__(/*! mime-types */ 75)
	
	/**
	 * Module exports.
	 * @public
	 */
	
	module.exports = Accepts
	
	/**
	 * Create a new Accepts object for the given req.
	 *
	 * @param {object} req
	 * @public
	 */
	
	function Accepts(req) {
	  if (!(this instanceof Accepts))
	    return new Accepts(req)
	
	  this.headers = req.headers
	  this.negotiator = new Negotiator(req)
	}
	
	/**
	 * Check if the given `type(s)` is acceptable, returning
	 * the best match when true, otherwise `undefined`, in which
	 * case you should respond with 406 "Not Acceptable".
	 *
	 * The `type` value may be a single mime type string
	 * such as "application/json", the extension name
	 * such as "json" or an array `["json", "html", "text/plain"]`. When a list
	 * or array is given the _best_ match, if any is returned.
	 *
	 * Examples:
	 *
	 *     // Accept: text/html
	 *     this.types('html');
	 *     // => "html"
	 *
	 *     // Accept: text/*, application/json
	 *     this.types('html');
	 *     // => "html"
	 *     this.types('text/html');
	 *     // => "text/html"
	 *     this.types('json', 'text');
	 *     // => "json"
	 *     this.types('application/json');
	 *     // => "application/json"
	 *
	 *     // Accept: text/*, application/json
	 *     this.types('image/png');
	 *     this.types('png');
	 *     // => undefined
	 *
	 *     // Accept: text/*;q=.5, application/json
	 *     this.types(['html', 'json']);
	 *     this.types('html', 'json');
	 *     // => "json"
	 *
	 * @param {String|Array} types...
	 * @return {String|Array|Boolean}
	 * @public
	 */
	
	Accepts.prototype.type =
	Accepts.prototype.types = function (types_) {
	  var types = types_
	
	  // support flattened arguments
	  if (types && !Array.isArray(types)) {
	    types = new Array(arguments.length)
	    for (var i = 0; i < types.length; i++) {
	      types[i] = arguments[i]
	    }
	  }
	
	  // no types, return all requested types
	  if (!types || types.length === 0) {
	    return this.negotiator.mediaTypes()
	  }
	
	  if (!this.headers.accept) return types[0];
	  var mimes = types.map(extToMime);
	  var accepts = this.negotiator.mediaTypes(mimes.filter(validMime));
	  var first = accepts[0];
	  if (!first) return false;
	  return types[mimes.indexOf(first)];
	}
	
	/**
	 * Return accepted encodings or best fit based on `encodings`.
	 *
	 * Given `Accept-Encoding: gzip, deflate`
	 * an array sorted by quality is returned:
	 *
	 *     ['gzip', 'deflate']
	 *
	 * @param {String|Array} encodings...
	 * @return {String|Array}
	 * @public
	 */
	
	Accepts.prototype.encoding =
	Accepts.prototype.encodings = function (encodings_) {
	  var encodings = encodings_
	
	  // support flattened arguments
	  if (encodings && !Array.isArray(encodings)) {
	    encodings = new Array(arguments.length)
	    for (var i = 0; i < encodings.length; i++) {
	      encodings[i] = arguments[i]
	    }
	  }
	
	  // no encodings, return all requested encodings
	  if (!encodings || encodings.length === 0) {
	    return this.negotiator.encodings()
	  }
	
	  return this.negotiator.encodings(encodings)[0] || false
	}
	
	/**
	 * Return accepted charsets or best fit based on `charsets`.
	 *
	 * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
	 * an array sorted by quality is returned:
	 *
	 *     ['utf-8', 'utf-7', 'iso-8859-1']
	 *
	 * @param {String|Array} charsets...
	 * @return {String|Array}
	 * @public
	 */
	
	Accepts.prototype.charset =
	Accepts.prototype.charsets = function (charsets_) {
	  var charsets = charsets_
	
	  // support flattened arguments
	  if (charsets && !Array.isArray(charsets)) {
	    charsets = new Array(arguments.length)
	    for (var i = 0; i < charsets.length; i++) {
	      charsets[i] = arguments[i]
	    }
	  }
	
	  // no charsets, return all requested charsets
	  if (!charsets || charsets.length === 0) {
	    return this.negotiator.charsets()
	  }
	
	  return this.negotiator.charsets(charsets)[0] || false
	}
	
	/**
	 * Return accepted languages or best fit based on `langs`.
	 *
	 * Given `Accept-Language: en;q=0.8, es, pt`
	 * an array sorted by quality is returned:
	 *
	 *     ['es', 'pt', 'en']
	 *
	 * @param {String|Array} langs...
	 * @return {Array|String}
	 * @public
	 */
	
	Accepts.prototype.lang =
	Accepts.prototype.langs =
	Accepts.prototype.language =
	Accepts.prototype.languages = function (languages_) {
	  var languages = languages_
	
	  // support flattened arguments
	  if (languages && !Array.isArray(languages)) {
	    languages = new Array(arguments.length)
	    for (var i = 0; i < languages.length; i++) {
	      languages[i] = arguments[i]
	    }
	  }
	
	  // no languages, return all requested languages
	  if (!languages || languages.length === 0) {
	    return this.negotiator.languages()
	  }
	
	  return this.negotiator.languages(languages)[0] || false
	}
	
	/**
	 * Convert extnames to mime.
	 *
	 * @param {String} type
	 * @return {String}
	 * @private
	 */
	
	function extToMime(type) {
	  return type.indexOf('/') === -1
	    ? mime.lookup(type)
	    : type
	}
	
	/**
	 * Check if mime is valid.
	 *
	 * @param {String} type
	 * @return {String}
	 * @private
	 */
	
	function validMime(type) {
	  return typeof type === 'string';
	}


/***/ },
/* 70 */
/*!***************************************************!*\
  !*** ./~/express/~/accepts/~/negotiator/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var preferredCharsets = __webpack_require__(/*! ./lib/charset */ 71);
	var preferredEncodings = __webpack_require__(/*! ./lib/encoding */ 72);
	var preferredLanguages = __webpack_require__(/*! ./lib/language */ 73);
	var preferredMediaTypes = __webpack_require__(/*! ./lib/mediaType */ 74);
	
	module.exports = Negotiator;
	Negotiator.Negotiator = Negotiator;
	
	function Negotiator(request) {
	  if (!(this instanceof Negotiator)) {
	    return new Negotiator(request);
	  }
	
	  this.request = request;
	}
	
	Negotiator.prototype.charset = function charset(available) {
	  var set = this.charsets(available);
	  return set && set[0];
	};
	
	Negotiator.prototype.charsets = function charsets(available) {
	  return preferredCharsets(this.request.headers['accept-charset'], available);
	};
	
	Negotiator.prototype.encoding = function encoding(available) {
	  var set = this.encodings(available);
	  return set && set[0];
	};
	
	Negotiator.prototype.encodings = function encodings(available) {
	  return preferredEncodings(this.request.headers['accept-encoding'], available);
	};
	
	Negotiator.prototype.language = function language(available) {
	  var set = this.languages(available);
	  return set && set[0];
	};
	
	Negotiator.prototype.languages = function languages(available) {
	  return preferredLanguages(this.request.headers['accept-language'], available);
	};
	
	Negotiator.prototype.mediaType = function mediaType(available) {
	  var set = this.mediaTypes(available);
	  return set && set[0];
	};
	
	Negotiator.prototype.mediaTypes = function mediaTypes(available) {
	  return preferredMediaTypes(this.request.headers.accept, available);
	};
	
	// Backwards compatibility
	Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
	Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
	Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
	Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
	Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
	Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
	Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
	Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;


/***/ },
/* 71 */
/*!*********************************************************!*\
  !*** ./~/express/~/accepts/~/negotiator/lib/charset.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	module.exports = preferredCharsets;
	preferredCharsets.preferredCharsets = preferredCharsets;
	
	function parseAcceptCharset(accept) {
	  var accepts = accept.split(',');
	
	  for (var i = 0, j = 0; i < accepts.length; i++) {
	    var charset = parseCharset(accepts[i].trim(), i);
	
	    if (charset) {
	      accepts[j++] = charset;
	    }
	  }
	
	  // trim accepts
	  accepts.length = j;
	
	  return accepts;
	}
	
	function parseCharset(s, i) {
	  var match = s.match(/^\s*(\S+?)\s*(?:;(.*))?$/);
	  if (!match) return null;
	
	  var charset = match[1];
	  var q = 1;
	  if (match[2]) {
	    var params = match[2].split(';')
	    for (var i = 0; i < params.length; i ++) {
	      var p = params[i].trim().split('=');
	      if (p[0] === 'q') {
	        q = parseFloat(p[1]);
	        break;
	      }
	    }
	  }
	
	  return {
	    charset: charset,
	    q: q,
	    i: i
	  };
	}
	
	function getCharsetPriority(charset, accepted, index) {
	  var priority = {o: -1, q: 0, s: 0};
	
	  for (var i = 0; i < accepted.length; i++) {
	    var spec = specify(charset, accepted[i], index);
	
	    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
	      priority = spec;
	    }
	  }
	
	  return priority;
	}
	
	function specify(charset, spec, index) {
	  var s = 0;
	  if(spec.charset.toLowerCase() === charset.toLowerCase()){
	    s |= 1;
	  } else if (spec.charset !== '*' ) {
	    return null
	  }
	
	  return {
	    i: index,
	    o: spec.i,
	    q: spec.q,
	    s: s
	  }
	}
	
	function preferredCharsets(accept, provided) {
	  // RFC 2616 sec 14.2: no header = *
	  var accepts = parseAcceptCharset(accept === undefined ? '*' : accept || '');
	
	  if (!provided) {
	    // sorted list of all charsets
	    return accepts.filter(isQuality).sort(compareSpecs).map(function getCharset(spec) {
	      return spec.charset;
	    });
	  }
	
	  var priorities = provided.map(function getPriority(type, index) {
	    return getCharsetPriority(type, accepts, index);
	  });
	
	  // sorted list of accepted charsets
	  return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
	    return provided[priorities.indexOf(priority)];
	  });
	}
	
	function compareSpecs(a, b) {
	  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
	}
	
	function isQuality(spec) {
	  return spec.q > 0;
	}


/***/ },
/* 72 */
/*!**********************************************************!*\
  !*** ./~/express/~/accepts/~/negotiator/lib/encoding.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	module.exports = preferredEncodings;
	preferredEncodings.preferredEncodings = preferredEncodings;
	
	function parseAcceptEncoding(accept) {
	  var accepts = accept.split(',');
	  var hasIdentity = false;
	  var minQuality = 1;
	
	  for (var i = 0, j = 0; i < accepts.length; i++) {
	    var encoding = parseEncoding(accepts[i].trim(), i);
	
	    if (encoding) {
	      accepts[j++] = encoding;
	      hasIdentity = hasIdentity || specify('identity', encoding);
	      minQuality = Math.min(minQuality, encoding.q || 1);
	    }
	  }
	
	  if (!hasIdentity) {
	    /*
	     * If identity doesn't explicitly appear in the accept-encoding header,
	     * it's added to the list of acceptable encoding with the lowest q
	     */
	    accepts[j++] = {
	      encoding: 'identity',
	      q: minQuality,
	      i: i
	    };
	  }
	
	  // trim accepts
	  accepts.length = j;
	
	  return accepts;
	}
	
	function parseEncoding(s, i) {
	  var match = s.match(/^\s*(\S+?)\s*(?:;(.*))?$/);
	
	  if (!match) return null;
	
	  var encoding = match[1];
	  var q = 1;
	  if (match[2]) {
	    var params = match[2].split(';');
	    for (var i = 0; i < params.length; i ++) {
	      var p = params[i].trim().split('=');
	      if (p[0] === 'q') {
	        q = parseFloat(p[1]);
	        break;
	      }
	    }
	  }
	
	  return {
	    encoding: encoding,
	    q: q,
	    i: i
	  };
	}
	
	function getEncodingPriority(encoding, accepted, index) {
	  var priority = {o: -1, q: 0, s: 0};
	
	  for (var i = 0; i < accepted.length; i++) {
	    var spec = specify(encoding, accepted[i], index);
	
	    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
	      priority = spec;
	    }
	  }
	
	  return priority;
	}
	
	function specify(encoding, spec, index) {
	  var s = 0;
	  if(spec.encoding.toLowerCase() === encoding.toLowerCase()){
	    s |= 1;
	  } else if (spec.encoding !== '*' ) {
	    return null
	  }
	
	  return {
	    i: index,
	    o: spec.i,
	    q: spec.q,
	    s: s
	  }
	};
	
	function preferredEncodings(accept, provided) {
	  var accepts = parseAcceptEncoding(accept || '');
	
	  if (!provided) {
	    // sorted list of all encodings
	    return accepts.filter(isQuality).sort(compareSpecs).map(function getEncoding(spec) {
	      return spec.encoding;
	    });
	  }
	
	  var priorities = provided.map(function getPriority(type, index) {
	    return getEncodingPriority(type, accepts, index);
	  });
	
	  // sorted list of accepted encodings
	  return priorities.filter(isQuality).sort(compareSpecs).map(function getEncoding(priority) {
	    return provided[priorities.indexOf(priority)];
	  });
	}
	
	function compareSpecs(a, b) {
	  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
	}
	
	function isQuality(spec) {
	  return spec.q > 0;
	}


/***/ },
/* 73 */
/*!**********************************************************!*\
  !*** ./~/express/~/accepts/~/negotiator/lib/language.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	module.exports = preferredLanguages;
	preferredLanguages.preferredLanguages = preferredLanguages;
	
	function parseAcceptLanguage(accept) {
	  var accepts = accept.split(',');
	
	  for (var i = 0, j = 0; i < accepts.length; i++) {
	    var langauge = parseLanguage(accepts[i].trim(), i);
	
	    if (langauge) {
	      accepts[j++] = langauge;
	    }
	  }
	
	  // trim accepts
	  accepts.length = j;
	
	  return accepts;
	}
	
	function parseLanguage(s, i) {
	  var match = s.match(/^\s*(\S+?)(?:-(\S+?))?\s*(?:;(.*))?$/);
	  if (!match) return null;
	
	  var prefix = match[1],
	      suffix = match[2],
	      full = prefix;
	
	  if (suffix) full += "-" + suffix;
	
	  var q = 1;
	  if (match[3]) {
	    var params = match[3].split(';')
	    for (var i = 0; i < params.length; i ++) {
	      var p = params[i].split('=');
	      if (p[0] === 'q') q = parseFloat(p[1]);
	    }
	  }
	
	  return {
	    prefix: prefix,
	    suffix: suffix,
	    q: q,
	    i: i,
	    full: full
	  };
	}
	
	function getLanguagePriority(language, accepted, index) {
	  var priority = {o: -1, q: 0, s: 0};
	
	  for (var i = 0; i < accepted.length; i++) {
	    var spec = specify(language, accepted[i], index);
	
	    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
	      priority = spec;
	    }
	  }
	
	  return priority;
	}
	
	function specify(language, spec, index) {
	  var p = parseLanguage(language)
	  if (!p) return null;
	  var s = 0;
	  if(spec.full.toLowerCase() === p.full.toLowerCase()){
	    s |= 4;
	  } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
	    s |= 2;
	  } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
	    s |= 1;
	  } else if (spec.full !== '*' ) {
	    return null
	  }
	
	  return {
	    i: index,
	    o: spec.i,
	    q: spec.q,
	    s: s
	  }
	};
	
	function preferredLanguages(accept, provided) {
	  // RFC 2616 sec 14.4: no header = *
	  var accepts = parseAcceptLanguage(accept === undefined ? '*' : accept || '');
	
	  if (!provided) {
	    // sorted list of all languages
	    return accepts.filter(isQuality).sort(compareSpecs).map(function getLanguage(spec) {
	      return spec.full;
	    });
	  }
	
	  var priorities = provided.map(function getPriority(type, index) {
	    return getLanguagePriority(type, accepts, index);
	  });
	
	  // sorted list of accepted languages
	  return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
	    return provided[priorities.indexOf(priority)];
	  });
	}
	
	function compareSpecs(a, b) {
	  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
	}
	
	function isQuality(spec) {
	  return spec.q > 0;
	}


/***/ },
/* 74 */
/*!***********************************************************!*\
  !*** ./~/express/~/accepts/~/negotiator/lib/mediaType.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	/**
	 * negotiator
	 * Copyright(c) 2012 Isaac Z. Schlueter
	 * Copyright(c) 2014 Federico Romero
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	module.exports = preferredMediaTypes;
	preferredMediaTypes.preferredMediaTypes = preferredMediaTypes;
	
	function parseAccept(accept) {
	  var accepts = splitMediaTypes(accept);
	
	  for (var i = 0, j = 0; i < accepts.length; i++) {
	    var mediaType = parseMediaType(accepts[i].trim(), i);
	
	    if (mediaType) {
	      accepts[j++] = mediaType;
	    }
	  }
	
	  // trim accepts
	  accepts.length = j;
	
	  return accepts;
	};
	
	function parseMediaType(s, i) {
	  var match = s.match(/\s*(\S+?)\/([^;\s]+)\s*(?:;(.*))?/);
	  if (!match) return null;
	
	  var type = match[1],
	      subtype = match[2],
	      full = "" + type + "/" + subtype,
	      params = {},
	      q = 1;
	
	  if (match[3]) {
	    params = match[3].split(';').map(function(s) {
	      return s.trim().split('=');
	    }).reduce(function (set, p) {
	      var name = p[0].toLowerCase();
	      var value = p[1];
	
	      set[name] = value && value[0] === '"' && value[value.length - 1] === '"'
	        ? value.substr(1, value.length - 2)
	        : value;
	
	      return set;
	    }, params);
	
	    if (params.q != null) {
	      q = parseFloat(params.q);
	      delete params.q;
	    }
	  }
	
	  return {
	    type: type,
	    subtype: subtype,
	    params: params,
	    q: q,
	    i: i,
	    full: full
	  };
	}
	
	function getMediaTypePriority(type, accepted, index) {
	  var priority = {o: -1, q: 0, s: 0};
	
	  for (var i = 0; i < accepted.length; i++) {
	    var spec = specify(type, accepted[i], index);
	
	    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
	      priority = spec;
	    }
	  }
	
	  return priority;
	}
	
	function specify(type, spec, index) {
	  var p = parseMediaType(type);
	  var s = 0;
	
	  if (!p) {
	    return null;
	  }
	
	  if(spec.type.toLowerCase() == p.type.toLowerCase()) {
	    s |= 4
	  } else if(spec.type != '*') {
	    return null;
	  }
	
	  if(spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
	    s |= 2
	  } else if(spec.subtype != '*') {
	    return null;
	  }
	
	  var keys = Object.keys(spec.params);
	  if (keys.length > 0) {
	    if (keys.every(function (k) {
	      return spec.params[k] == '*' || (spec.params[k] || '').toLowerCase() == (p.params[k] || '').toLowerCase();
	    })) {
	      s |= 1
	    } else {
	      return null
	    }
	  }
	
	  return {
	    i: index,
	    o: spec.i,
	    q: spec.q,
	    s: s,
	  }
	
	}
	
	function preferredMediaTypes(accept, provided) {
	  // RFC 2616 sec 14.2: no header = */*
	  var accepts = parseAccept(accept === undefined ? '*/*' : accept || '');
	
	  if (!provided) {
	    // sorted list of all types
	    return accepts.filter(isQuality).sort(compareSpecs).map(function getType(spec) {
	      return spec.full;
	    });
	  }
	
	  var priorities = provided.map(function getPriority(type, index) {
	    return getMediaTypePriority(type, accepts, index);
	  });
	
	  // sorted list of accepted types
	  return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
	    return provided[priorities.indexOf(priority)];
	  });
	}
	
	function compareSpecs(a, b) {
	  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
	}
	
	function isQuality(spec) {
	  return spec.q > 0;
	}
	
	function quoteCount(string) {
	  var count = 0;
	  var index = 0;
	
	  while ((index = string.indexOf('"', index)) !== -1) {
	    count++;
	    index++;
	  }
	
	  return count;
	}
	
	function splitMediaTypes(accept) {
	  var accepts = accept.split(',');
	
	  for (var i = 1, j = 0; i < accepts.length; i++) {
	    if (quoteCount(accepts[j]) % 2 == 0) {
	      accepts[++j] = accepts[i];
	    } else {
	      accepts[j] += ',' + accepts[i];
	    }
	  }
	
	  // trim accepts
	  accepts.length = j + 1;
	
	  return accepts;
	}


/***/ },
/* 75 */
/*!***************************************************!*\
  !*** ./~/express/~/accepts/~/mime-types/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * mime-types
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict'
	
	/**
	 * Module dependencies.
	 * @private
	 */
	
	var db = __webpack_require__(/*! mime-db */ 76)
	var extname = __webpack_require__(/*! path */ 20).extname
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var extractTypeRegExp = /^\s*([^;\s]*)(?:;|\s|$)/
	var textTypeRegExp = /^text\//i
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.charset = charset
	exports.charsets = { lookup: charset }
	exports.contentType = contentType
	exports.extension = extension
	exports.extensions = Object.create(null)
	exports.lookup = lookup
	exports.types = Object.create(null)
	
	// Populate the extensions/types maps
	populateMaps(exports.extensions, exports.types)
	
	/**
	 * Get the default charset for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */
	
	function charset(type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }
	
	  // TODO: use media-typer
	  var match = extractTypeRegExp.exec(type)
	  var mime = match && db[match[1].toLowerCase()]
	
	  if (mime && mime.charset) {
	    return mime.charset
	  }
	
	  // default text/* to utf-8
	  if (match && textTypeRegExp.test(match[1])) {
	    return 'UTF-8'
	  }
	
	  return false
	}
	
	/**
	 * Create a full Content-Type header given a MIME type or extension.
	 *
	 * @param {string} str
	 * @return {boolean|string}
	 */
	
	function contentType(str) {
	  // TODO: should this even be in this module?
	  if (!str || typeof str !== 'string') {
	    return false
	  }
	
	  var mime = str.indexOf('/') === -1
	    ? exports.lookup(str)
	    : str
	
	  if (!mime) {
	    return false
	  }
	
	  // TODO: use content-type or other module
	  if (mime.indexOf('charset') === -1) {
	    var charset = exports.charset(mime)
	    if (charset) mime += '; charset=' + charset.toLowerCase()
	  }
	
	  return mime
	}
	
	/**
	 * Get the default extension for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */
	
	function extension(type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }
	
	  // TODO: use media-typer
	  var match = extractTypeRegExp.exec(type)
	
	  // get extensions
	  var exts = match && exports.extensions[match[1].toLowerCase()]
	
	  if (!exts || !exts.length) {
	    return false
	  }
	
	  return exts[0]
	}
	
	/**
	 * Lookup the MIME type for a file path/extension.
	 *
	 * @param {string} path
	 * @return {boolean|string}
	 */
	
	function lookup(path) {
	  if (!path || typeof path !== 'string') {
	    return false
	  }
	
	  // get the extension ("ext" or ".ext" or full path)
	  var extension = extname('x.' + path)
	    .toLowerCase()
	    .substr(1)
	
	  if (!extension) {
	    return false
	  }
	
	  return exports.types[extension] || false
	}
	
	/**
	 * Populate the extensions and types maps.
	 * @private
	 */
	
	function populateMaps(extensions, types) {
	  // source preference (least -> most)
	  var preference = ['nginx', 'apache', undefined, 'iana']
	
	  Object.keys(db).forEach(function forEachMimeType(type) {
	    var mime = db[type]
	    var exts = mime.extensions
	
	    if (!exts || !exts.length) {
	      return
	    }
	
	    // mime -> extensions
	    extensions[type] = exts
	
	    // extension -> mime
	    for (var i = 0; i < exts.length; i++) {
	      var extension = exts[i]
	
	      if (types[extension]) {
	        var from = preference.indexOf(db[types[extension]].source)
	        var to = preference.indexOf(mime.source)
	
	        if (types[extension] !== 'application/octet-stream'
	          && from > to || (from === to && types[extension].substr(0, 12) === 'application/')) {
	          // skip the remapping
	          return
	        }
	      }
	
	      // set the extension -> mime
	      types[extension] = type
	    }
	  })
	}


/***/ },
/* 76 */
/*!*************************************************************!*\
  !*** ./~/express/~/accepts/~/mime-types/~/mime-db/index.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * mime-db
	 * Copyright(c) 2014 Jonathan Ong
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./db.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))


/***/ },
/* 77 */
/*!**************************************!*\
  !*** ./~/express/~/type-is/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var typer = __webpack_require__(/*! media-typer */ 55)
	var mime = __webpack_require__(/*! mime-types */ 78)
	
	module.exports = typeofrequest;
	typeofrequest.is = typeis;
	typeofrequest.hasBody = hasbody;
	typeofrequest.normalize = normalize;
	typeofrequest.match = mimeMatch;
	
	/**
	 * Compare a `value` content-type with `types`.
	 * Each `type` can be an extension like `html`,
	 * a special shortcut like `multipart` or `urlencoded`,
	 * or a mime type.
	 *
	 * If no types match, `false` is returned.
	 * Otherwise, the first `type` that matches is returned.
	 *
	 * @param {String} value
	 * @param {Array} types
	 * @return String
	 */
	
	function typeis(value, types_) {
	  var i
	  var types = types_
	
	  // remove parameters and normalize
	  var val = typenormalize(value)
	
	  // no type or invalid
	  if (!val) {
	    return false
	  }
	
	  // support flattened arguments
	  if (types && !Array.isArray(types)) {
	    types = new Array(arguments.length - 1)
	    for (i = 0; i < types.length; i++) {
	      types[i] = arguments[i + 1]
	    }
	  }
	
	  // no types, return the content type
	  if (!types || !types.length) {
	    return val
	  }
	
	  var type
	  for (i = 0; i < types.length; i++) {
	    if (mimeMatch(normalize(type = types[i]), val)) {
	      return type[0] === '+' || ~type.indexOf('*')
	        ? val
	        : type
	    }
	  }
	
	  // no matches
	  return false;
	}
	
	/**
	 * Check if a request has a request body.
	 * A request with a body __must__ either have `transfer-encoding`
	 * or `content-length` headers set.
	 * http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.3
	 *
	 * @param {Object} request
	 * @return {Boolean}
	 * @api public
	 */
	
	function hasbody(req) {
	  var headers = req.headers;
	  if ('transfer-encoding' in headers) return true;
	  return !isNaN(headers['content-length']);
	}
	
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains any of the give mime `type`s.
	 * If there is no request body, `null` is returned.
	 * If there is no content type, `false` is returned.
	 * Otherwise, it returns the first `type` that matches.
	 *
	 * Examples:
	 *
	 *     // With Content-Type: text/html; charset=utf-8
	 *     this.is('html'); // => 'html'
	 *     this.is('text/html'); // => 'text/html'
	 *     this.is('text/*', 'application/json'); // => 'text/html'
	 *
	 *     // When Content-Type is application/json
	 *     this.is('json', 'urlencoded'); // => 'json'
	 *     this.is('application/json'); // => 'application/json'
	 *     this.is('html', 'application/*'); // => 'application/json'
	 *
	 *     this.is('html'); // => false
	 *
	 * @param {String|Array} types...
	 * @return {String|false|null}
	 * @api public
	 */
	
	function typeofrequest(req, types_) {
	  var types = types_
	
	  // no body
	  if (!hasbody(req)) {
	    return null
	  }
	
	  // support flattened arguments
	  if (arguments.length > 2) {
	    types = new Array(arguments.length - 1)
	    for (var i = 0; i < types.length; i++) {
	      types[i] = arguments[i + 1]
	    }
	  }
	
	  // request content type
	  var value = req.headers['content-type']
	
	  return typeis(value, types);
	}
	
	/**
	 * Normalize a mime type.
	 * If it's a shorthand, expand it to a valid mime type.
	 *
	 * In general, you probably want:
	 *
	 *   var type = is(req, ['urlencoded', 'json', 'multipart']);
	 *
	 * Then use the appropriate body parsers.
	 * These three are the most common request body types
	 * and are thus ensured to work.
	 *
	 * @param {String} type
	 * @api private
	 */
	
	function normalize(type) {
	  switch (type) {
	    case 'urlencoded': return 'application/x-www-form-urlencoded';
	    case 'multipart':
	      type = 'multipart/*';
	      break;
	  }
	
	  return type[0] === '+' || ~type.indexOf('/')
	    ? type
	    : mime.lookup(type)
	}
	
	/**
	 * Check if `exected` mime type
	 * matches `actual` mime type with
	 * wildcard and +suffix support.
	 *
	 * @param {String} expected
	 * @param {String} actual
	 * @return {Boolean}
	 * @api private
	 */
	
	function mimeMatch(expected, actual) {
	  // invalid type
	  if (expected === false) {
	    return false
	  }
	
	  // exact match
	  if (expected === actual) {
	    return true
	  }
	
	  actual = actual.split('/');
	
	  if (expected[0] === '+') {
	    // support +suffix
	    return Boolean(actual[1])
	      && expected.length <= actual[1].length
	      && expected === actual[1].substr(0 - expected.length)
	  }
	
	  if (!~expected.indexOf('*')) return false;
	
	  expected = expected.split('/');
	
	  if (expected[0] === '*') {
	    // support */yyy
	    return expected[1] === actual[1]
	  }
	
	  if (expected[1] === '*') {
	    // support xxx/*
	    return expected[0] === actual[0]
	  }
	
	  if (expected[1][0] === '*' && expected[1][1] === '+') {
	    // support xxx/*+zzz
	    return expected[0] === actual[0]
	      && expected[1].length <= actual[1].length + 1
	      && expected[1].substr(1) === actual[1].substr(1 - expected[1].length)
	  }
	
	  return false
	}
	
	/**
	 * Normalize a type and remove parameters.
	 *
	 * @param {string} value
	 * @return {string}
	 * @api private
	 */
	
	function typenormalize(value) {
	  try {
	    var type = typer.parse(value)
	    delete type.parameters
	    return typer.format(type)
	  } catch (err) {
	    return null
	  }
	}


/***/ },
/* 78 */
/*!***************************************************!*\
  !*** ./~/express/~/type-is/~/mime-types/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var db = __webpack_require__(/*! mime-db */ 79)
	
	// types[extension] = type
	exports.types = Object.create(null)
	// extensions[type] = [extensions]
	exports.extensions = Object.create(null)
	
	Object.keys(db).forEach(function (name) {
	  var mime = db[name]
	  var exts = mime.extensions
	  if (!exts || !exts.length) return
	  exports.extensions[name] = exts
	  exts.forEach(function (ext) {
	    exports.types[ext] = name
	  })
	})
	
	exports.lookup = function (string) {
	  if (!string || typeof string !== "string") return false
	  // remove any leading paths, though we should just use path.basename
	  string = string.replace(/.*[\.\/\\]/, '').toLowerCase()
	  if (!string) return false
	  return exports.types[string] || false
	}
	
	exports.extension = function (type) {
	  if (!type || typeof type !== "string") return false
	  // to do: use media-typer
	  type = type.match(/^\s*([^;\s]*)(?:;|\s|$)/)
	  if (!type) return false
	  var exts = exports.extensions[type[1].toLowerCase()]
	  if (!exts || !exts.length) return false
	  return exts[0]
	}
	
	// type has to be an exact mime type
	exports.charset = function (type) {
	  var mime = db[type]
	  if (mime && mime.charset) return mime.charset
	
	  // default text/* to utf-8
	  if (/^text\//.test(type)) return 'UTF-8'
	
	  return false
	}
	
	// backwards compatibility
	exports.charsets = {
	  lookup: exports.charset
	}
	
	// to do: maybe use set-type module or something
	exports.contentType = function (type) {
	  if (!type || typeof type !== "string") return false
	  if (!~type.indexOf('/')) type = exports.lookup(type)
	  if (!type) return false
	  if (!~type.indexOf('charset')) {
	    var charset = exports.charset(type)
	    if (charset) type += '; charset=' + charset.toLowerCase()
	  }
	  return type
	}


/***/ },
/* 79 */
/*!*************************************************************!*\
  !*** ./~/express/~/type-is/~/mime-types/~/mime-db/index.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * mime-db
	 * Copyright(c) 2014 Jonathan Ong
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./db.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))


/***/ },
/* 80 */
/*!***********************************!*\
  !*** ./~/express/lib/response.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var contentDisposition = __webpack_require__(/*! content-disposition */ 19);
	var deprecate = __webpack_require__(/*! depd */ 21)('express');
	var escapeHtml = __webpack_require__(/*! escape-html */ 14);
	var http = __webpack_require__(/*! http */ 15);
	var isAbsolute = __webpack_require__(/*! ./utils */ 18).isAbsolute;
	var onFinished = __webpack_require__(/*! on-finished */ 16);
	var path = __webpack_require__(/*! path */ 20);
	var merge = __webpack_require__(/*! utils-merge */ 61);
	var sign = __webpack_require__(/*! cookie-signature */ 81).sign;
	var normalizeType = __webpack_require__(/*! ./utils */ 18).normalizeType;
	var normalizeTypes = __webpack_require__(/*! ./utils */ 18).normalizeTypes;
	var setCharset = __webpack_require__(/*! ./utils */ 18).setCharset;
	var statusCodes = http.STATUS_CODES;
	var cookie = __webpack_require__(/*! cookie */ 82);
	var send = __webpack_require__(/*! send */ 25);
	var extname = path.extname;
	var mime = send.mime;
	var resolve = path.resolve;
	var vary = __webpack_require__(/*! vary */ 83);
	
	/**
	 * Response prototype.
	 */
	
	var res = module.exports = {
	  __proto__: http.ServerResponse.prototype
	};
	
	/**
	 * Set status `code`.
	 *
	 * @param {Number} code
	 * @return {ServerResponse}
	 * @api public
	 */
	
	res.status = function(code){
	  this.statusCode = code;
	  return this;
	};
	
	/**
	 * Set Link header field with the given `links`.
	 *
	 * Examples:
	 *
	 *    res.links({
	 *      next: 'http://api.example.com/users?page=2',
	 *      last: 'http://api.example.com/users?page=5'
	 *    });
	 *
	 * @param {Object} links
	 * @return {ServerResponse}
	 * @api public
	 */
	
	res.links = function(links){
	  var link = this.get('Link') || '';
	  if (link) link += ', ';
	  return this.set('Link', link + Object.keys(links).map(function(rel){
	    return '<' + links[rel] + '>; rel="' + rel + '"';
	  }).join(', '));
	};
	
	/**
	 * Send a response.
	 *
	 * Examples:
	 *
	 *     res.send(new Buffer('wahoo'));
	 *     res.send({ some: 'json' });
	 *     res.send('<p>some html</p>');
	 *
	 * @param {string|number|boolean|object|Buffer} body
	 * @api public
	 */
	
	res.send = function send(body) {
	  var chunk = body;
	  var encoding;
	  var len;
	  var req = this.req;
	  var type;
	
	  // settings
	  var app = this.app;
	
	  // allow status / body
	  if (arguments.length === 2) {
	    // res.send(body, status) backwards compat
	    if (typeof arguments[0] !== 'number' && typeof arguments[1] === 'number') {
	      deprecate('res.send(body, status): Use res.status(status).send(body) instead');
	      this.statusCode = arguments[1];
	    } else {
	      deprecate('res.send(status, body): Use res.status(status).send(body) instead');
	      this.statusCode = arguments[0];
	      chunk = arguments[1];
	    }
	  }
	
	  // disambiguate res.send(status) and res.send(status, num)
	  if (typeof chunk === 'number' && arguments.length === 1) {
	    // res.send(status) will set status message as text string
	    if (!this.get('Content-Type')) {
	      this.type('txt');
	    }
	
	    deprecate('res.send(status): Use res.sendStatus(status) instead');
	    this.statusCode = chunk;
	    chunk = http.STATUS_CODES[chunk];
	  }
	
	  switch (typeof chunk) {
	    // string defaulting to html
	    case 'string':
	      if (!this.get('Content-Type')) {
	        this.type('html');
	      }
	      break;
	    case 'boolean':
	    case 'number':
	    case 'object':
	      if (chunk === null) {
	        chunk = '';
	      } else if (Buffer.isBuffer(chunk)) {
	        if (!this.get('Content-Type')) {
	          this.type('bin');
	        }
	      } else {
	        return this.json(chunk);
	      }
	      break;
	  }
	
	  // write strings in utf-8
	  if (typeof chunk === 'string') {
	    encoding = 'utf8';
	    type = this.get('Content-Type');
	
	    // reflect this in content-type
	    if (typeof type === 'string') {
	      this.set('Content-Type', setCharset(type, 'utf-8'));
	    }
	  }
	
	  // populate Content-Length
	  if (chunk !== undefined) {
	    if (!Buffer.isBuffer(chunk)) {
	      // convert chunk to Buffer; saves later double conversions
	      chunk = new Buffer(chunk, encoding);
	      encoding = undefined;
	    }
	
	    len = chunk.length;
	    this.set('Content-Length', len);
	  }
	
	  // method check
	  var isHead = req.method === 'HEAD';
	
	  // ETag support
	  if (len !== undefined && (isHead || req.method === 'GET')) {
	    var etag = app.get('etag fn');
	    if (etag && !this.get('ETag')) {
	      etag = etag(chunk, encoding);
	      etag && this.set('ETag', etag);
	    }
	  }
	
	  // freshness
	  if (req.fresh) this.statusCode = 304;
	
	  // strip irrelevant headers
	  if (204 == this.statusCode || 304 == this.statusCode) {
	    this.removeHeader('Content-Type');
	    this.removeHeader('Content-Length');
	    this.removeHeader('Transfer-Encoding');
	    chunk = '';
	  }
	
	  if (isHead) {
	    // skip body for HEAD
	    this.end();
	  } else {
	    // respond
	    this.end(chunk, encoding);
	  }
	
	  return this;
	};
	
	/**
	 * Send JSON response.
	 *
	 * Examples:
	 *
	 *     res.json(null);
	 *     res.json({ user: 'tj' });
	 *
	 * @param {string|number|boolean|object} obj
	 * @api public
	 */
	
	res.json = function json(obj) {
	  var val = obj;
	
	  // allow status / body
	  if (arguments.length === 2) {
	    // res.json(body, status) backwards compat
	    if (typeof arguments[1] === 'number') {
	      deprecate('res.json(obj, status): Use res.status(status).json(obj) instead');
	      this.statusCode = arguments[1];
	    } else {
	      deprecate('res.json(status, obj): Use res.status(status).json(obj) instead');
	      this.statusCode = arguments[0];
	      val = arguments[1];
	    }
	  }
	
	  // settings
	  var app = this.app;
	  var replacer = app.get('json replacer');
	  var spaces = app.get('json spaces');
	  var body = JSON.stringify(val, replacer, spaces);
	
	  // content-type
	  if (!this.get('Content-Type')) {
	    this.set('Content-Type', 'application/json');
	  }
	
	  return this.send(body);
	};
	
	/**
	 * Send JSON response with JSONP callback support.
	 *
	 * Examples:
	 *
	 *     res.jsonp(null);
	 *     res.jsonp({ user: 'tj' });
	 *
	 * @param {string|number|boolean|object} obj
	 * @api public
	 */
	
	res.jsonp = function jsonp(obj) {
	  var val = obj;
	
	  // allow status / body
	  if (arguments.length === 2) {
	    // res.json(body, status) backwards compat
	    if (typeof arguments[1] === 'number') {
	      deprecate('res.jsonp(obj, status): Use res.status(status).json(obj) instead');
	      this.statusCode = arguments[1];
	    } else {
	      deprecate('res.jsonp(status, obj): Use res.status(status).jsonp(obj) instead');
	      this.statusCode = arguments[0];
	      val = arguments[1];
	    }
	  }
	
	  // settings
	  var app = this.app;
	  var replacer = app.get('json replacer');
	  var spaces = app.get('json spaces');
	  var body = JSON.stringify(val, replacer, spaces);
	  var callback = this.req.query[app.get('jsonp callback name')];
	
	  // content-type
	  if (!this.get('Content-Type')) {
	    this.set('X-Content-Type-Options', 'nosniff');
	    this.set('Content-Type', 'application/json');
	  }
	
	  // fixup callback
	  if (Array.isArray(callback)) {
	    callback = callback[0];
	  }
	
	  // jsonp
	  if (typeof callback === 'string' && callback.length !== 0) {
	    this.charset = 'utf-8';
	    this.set('X-Content-Type-Options', 'nosniff');
	    this.set('Content-Type', 'text/javascript');
	
	    // restrict callback charset
	    callback = callback.replace(/[^\[\]\w$.]/g, '');
	
	    // replace chars not allowed in JavaScript that are in JSON
	    body = body
	      .replace(/\u2028/g, '\\u2028')
	      .replace(/\u2029/g, '\\u2029');
	
	    // the /**/ is a specific security mitigation for "Rosetta Flash JSONP abuse"
	    // the typeof check is just to reduce client error noise
	    body = '/**/ typeof ' + callback + ' === \'function\' && ' + callback + '(' + body + ');';
	  }
	
	  return this.send(body);
	};
	
	/**
	 * Send given HTTP status code.
	 *
	 * Sets the response status to `statusCode` and the body of the
	 * response to the standard description from node's http.STATUS_CODES
	 * or the statusCode number if no description.
	 *
	 * Examples:
	 *
	 *     res.sendStatus(200);
	 *
	 * @param {number} statusCode
	 * @api public
	 */
	
	res.sendStatus = function sendStatus(statusCode) {
	  var body = http.STATUS_CODES[statusCode] || String(statusCode);
	
	  this.statusCode = statusCode;
	  this.type('txt');
	
	  return this.send(body);
	};
	
	/**
	 * Transfer the file at the given `path`.
	 *
	 * Automatically sets the _Content-Type_ response header field.
	 * The callback `fn(err)` is invoked when the transfer is complete
	 * or when an error occurs. Be sure to check `res.sentHeader`
	 * if you wish to attempt responding, as the header and some data
	 * may have already been transferred.
	 *
	 * Options:
	 *
	 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
	 *   - `root`     root directory for relative filenames
	 *   - `headers`  object of headers to serve with file
	 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
	 *
	 * Other options are passed along to `send`.
	 *
	 * Examples:
	 *
	 *  The following example illustrates how `res.sendFile()` may
	 *  be used as an alternative for the `static()` middleware for
	 *  dynamic situations. The code backing `res.sendFile()` is actually
	 *  the same code, so HTTP cache support etc is identical.
	 *
	 *     app.get('/user/:uid/photos/:file', function(req, res){
	 *       var uid = req.params.uid
	 *         , file = req.params.file;
	 *
	 *       req.user.mayViewFilesFrom(uid, function(yes){
	 *         if (yes) {
	 *           res.sendFile('/uploads/' + uid + '/' + file);
	 *         } else {
	 *           res.send(403, 'Sorry! you cant see that.');
	 *         }
	 *       });
	 *     });
	 *
	 * @api public
	 */
	
	res.sendFile = function sendFile(path, options, fn) {
	  var req = this.req;
	  var res = this;
	  var next = req.next;
	
	  if (!path) {
	    throw new TypeError('path argument is required to res.sendFile');
	  }
	
	  // support function as second arg
	  if (typeof options === 'function') {
	    fn = options;
	    options = {};
	  }
	
	  options = options || {};
	
	  if (!options.root && !isAbsolute(path)) {
	    throw new TypeError('path must be absolute or specify root to res.sendFile');
	  }
	
	  // create file stream
	  var pathname = encodeURI(path);
	  var file = send(req, pathname, options);
	
	  // transfer
	  sendfile(res, file, options, function (err) {
	    if (fn) return fn(err);
	    if (err && err.code === 'EISDIR') return next();
	
	    // next() all but write errors
	    if (err && err.code !== 'ECONNABORT' && err.syscall !== 'write') {
	      next(err);
	    }
	  });
	};
	
	/**
	 * Transfer the file at the given `path`.
	 *
	 * Automatically sets the _Content-Type_ response header field.
	 * The callback `fn(err)` is invoked when the transfer is complete
	 * or when an error occurs. Be sure to check `res.sentHeader`
	 * if you wish to attempt responding, as the header and some data
	 * may have already been transferred.
	 *
	 * Options:
	 *
	 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
	 *   - `root`     root directory for relative filenames
	 *   - `headers`  object of headers to serve with file
	 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
	 *
	 * Other options are passed along to `send`.
	 *
	 * Examples:
	 *
	 *  The following example illustrates how `res.sendfile()` may
	 *  be used as an alternative for the `static()` middleware for
	 *  dynamic situations. The code backing `res.sendfile()` is actually
	 *  the same code, so HTTP cache support etc is identical.
	 *
	 *     app.get('/user/:uid/photos/:file', function(req, res){
	 *       var uid = req.params.uid
	 *         , file = req.params.file;
	 *
	 *       req.user.mayViewFilesFrom(uid, function(yes){
	 *         if (yes) {
	 *           res.sendfile('/uploads/' + uid + '/' + file);
	 *         } else {
	 *           res.send(403, 'Sorry! you cant see that.');
	 *         }
	 *       });
	 *     });
	 *
	 * @api public
	 */
	
	res.sendfile = function(path, options, fn){
	  var req = this.req;
	  var res = this;
	  var next = req.next;
	
	  // support function as second arg
	  if (typeof options === 'function') {
	    fn = options;
	    options = {};
	  }
	
	  options = options || {};
	
	  // create file stream
	  var file = send(req, path, options);
	
	  // transfer
	  sendfile(res, file, options, function (err) {
	    if (fn) return fn(err);
	    if (err && err.code === 'EISDIR') return next();
	
	    // next() all but write errors
	    if (err && err.code !== 'ECONNABORT' && err.syscall !== 'write') {
	      next(err);
	    }
	  });
	};
	
	res.sendfile = deprecate.function(res.sendfile,
	  'res.sendfile: Use res.sendFile instead');
	
	/**
	 * Transfer the file at the given `path` as an attachment.
	 *
	 * Optionally providing an alternate attachment `filename`,
	 * and optional callback `fn(err)`. The callback is invoked
	 * when the data transfer is complete, or when an error has
	 * ocurred. Be sure to check `res.headersSent` if you plan to respond.
	 *
	 * This method uses `res.sendfile()`.
	 *
	 * @api public
	 */
	
	res.download = function download(path, filename, fn) {
	  // support function as second arg
	  if (typeof filename === 'function') {
	    fn = filename;
	    filename = null;
	  }
	
	  filename = filename || path;
	
	  // set Content-Disposition when file is sent
	  var headers = {
	    'Content-Disposition': contentDisposition(filename)
	  };
	
	  // Resolve the full path for sendFile
	  var fullPath = resolve(path);
	
	  return this.sendFile(fullPath, { headers: headers }, fn);
	};
	
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 *
	 *     res.type('.html');
	 *     res.type('html');
	 *     res.type('json');
	 *     res.type('application/json');
	 *     res.type('png');
	 *
	 * @param {String} type
	 * @return {ServerResponse} for chaining
	 * @api public
	 */
	
	res.contentType =
	res.type = function(type){
	  return this.set('Content-Type', ~type.indexOf('/')
	    ? type
	    : mime.lookup(type));
	};
	
	/**
	 * Respond to the Acceptable formats using an `obj`
	 * of mime-type callbacks.
	 *
	 * This method uses `req.accepted`, an array of
	 * acceptable types ordered by their quality values.
	 * When "Accept" is not present the _first_ callback
	 * is invoked, otherwise the first match is used. When
	 * no match is performed the server responds with
	 * 406 "Not Acceptable".
	 *
	 * Content-Type is set for you, however if you choose
	 * you may alter this within the callback using `res.type()`
	 * or `res.set('Content-Type', ...)`.
	 *
	 *    res.format({
	 *      'text/plain': function(){
	 *        res.send('hey');
	 *      },
	 *
	 *      'text/html': function(){
	 *        res.send('<p>hey</p>');
	 *      },
	 *
	 *      'appliation/json': function(){
	 *        res.send({ message: 'hey' });
	 *      }
	 *    });
	 *
	 * In addition to canonicalized MIME types you may
	 * also use extnames mapped to these types:
	 *
	 *    res.format({
	 *      text: function(){
	 *        res.send('hey');
	 *      },
	 *
	 *      html: function(){
	 *        res.send('<p>hey</p>');
	 *      },
	 *
	 *      json: function(){
	 *        res.send({ message: 'hey' });
	 *      }
	 *    });
	 *
	 * By default Express passes an `Error`
	 * with a `.status` of 406 to `next(err)`
	 * if a match is not made. If you provide
	 * a `.default` callback it will be invoked
	 * instead.
	 *
	 * @param {Object} obj
	 * @return {ServerResponse} for chaining
	 * @api public
	 */
	
	res.format = function(obj){
	  var req = this.req;
	  var next = req.next;
	
	  var fn = obj.default;
	  if (fn) delete obj.default;
	  var keys = Object.keys(obj);
	
	  var key = req.accepts(keys);
	
	  this.vary("Accept");
	
	  if (key) {
	    this.set('Content-Type', normalizeType(key).value);
	    obj[key](req, this, next);
	  } else if (fn) {
	    fn();
	  } else {
	    var err = new Error('Not Acceptable');
	    err.status = 406;
	    err.types = normalizeTypes(keys).map(function(o){ return o.value });
	    next(err);
	  }
	
	  return this;
	};
	
	/**
	 * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
	 *
	 * @param {String} filename
	 * @return {ServerResponse}
	 * @api public
	 */
	
	res.attachment = function attachment(filename) {
	  if (filename) {
	    this.type(extname(filename));
	  }
	
	  this.set('Content-Disposition', contentDisposition(filename));
	
	  return this;
	};
	
	/**
	 * Append additional header `field` with value `val`.
	 *
	 * Example:
	 *
	 *    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
	 *    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	 *    res.append('Warning', '199 Miscellaneous warning');
	 *
	 * @param {String} field
	 * @param {String|Array} val
	 * @return {ServerResponse} for chaining
	 * @api public
	 */
	
	res.append = function append(field, val) {
	  var prev = this.get(field);
	  var value = val;
	
	  if (prev) {
	    // concat the new and prev vals
	    value = Array.isArray(prev) ? prev.concat(val)
	      : Array.isArray(val) ? [prev].concat(val)
	      : [prev, val];
	  }
	
	  return this.set(field, value);
	};
	
	/**
	 * Set header `field` to `val`, or pass
	 * an object of header fields.
	 *
	 * Examples:
	 *
	 *    res.set('Foo', ['bar', 'baz']);
	 *    res.set('Accept', 'application/json');
	 *    res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
	 *
	 * Aliased as `res.header()`.
	 *
	 * @param {String|Object|Array} field
	 * @param {String} val
	 * @return {ServerResponse} for chaining
	 * @api public
	 */
	
	res.set =
	res.header = function header(field, val) {
	  if (arguments.length === 2) {
	    if (Array.isArray(val)) val = val.map(String);
	    else val = String(val);
	    if ('content-type' == field.toLowerCase() && !/;\s*charset\s*=/.test(val)) {
	      var charset = mime.charsets.lookup(val.split(';')[0]);
	      if (charset) val += '; charset=' + charset.toLowerCase();
	    }
	    this.setHeader(field, val);
	  } else {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Get value for header `field`.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	res.get = function(field){
	  return this.getHeader(field);
	};
	
	/**
	 * Clear cookie `name`.
	 *
	 * @param {String} name
	 * @param {Object} options
	 * @return {ServerResponse} for chaining
	 * @api public
	 */
	
	res.clearCookie = function(name, options){
	  var opts = { expires: new Date(1), path: '/' };
	  return this.cookie(name, '', options
	    ? merge(opts, options)
	    : opts);
	};
	
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *
	 * Options:
	 *
	 *    - `maxAge`   max-age in milliseconds, converted to `expires`
	 *    - `signed`   sign the cookie
	 *    - `path`     defaults to "/"
	 *
	 * Examples:
	 *
	 *    // "Remember Me" for 15 minutes
	 *    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 *    // save as above
	 *    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
	 *
	 * @param {String} name
	 * @param {String|Object} val
	 * @param {Options} options
	 * @return {ServerResponse} for chaining
	 * @api public
	 */
	
	res.cookie = function(name, val, options){
	  options = merge({}, options);
	  var secret = this.req.secret;
	  var signed = options.signed;
	  if (signed && !secret) throw new Error('cookieParser("secret") required for signed cookies');
	  if ('number' == typeof val) val = val.toString();
	  if ('object' == typeof val) val = 'j:' + JSON.stringify(val);
	  if (signed) val = 's:' + sign(val, secret);
	  if ('maxAge' in options) {
	    options.expires = new Date(Date.now() + options.maxAge);
	    options.maxAge /= 1000;
	  }
	  if (null == options.path) options.path = '/';
	  var headerVal = cookie.serialize(name, String(val), options);
	
	  // supports multiple 'res.cookie' calls by getting previous value
	  var prev = this.get('Set-Cookie');
	  if (prev) {
	    if (Array.isArray(prev)) {
	      headerVal = prev.concat(headerVal);
	    } else {
	      headerVal = [prev, headerVal];
	    }
	  }
	  this.set('Set-Cookie', headerVal);
	  return this;
	};
	
	
	/**
	 * Set the location header to `url`.
	 *
	 * The given `url` can also be "back", which redirects
	 * to the _Referrer_ or _Referer_ headers or "/".
	 *
	 * Examples:
	 *
	 *    res.location('/foo/bar').;
	 *    res.location('http://example.com');
	 *    res.location('../login');
	 *
	 * @param {String} url
	 * @return {ServerResponse} for chaining
	 * @api public
	 */
	
	res.location = function(url){
	  var req = this.req;
	
	  // "back" is an alias for the referrer
	  if ('back' == url) url = req.get('Referrer') || '/';
	
	  // Respond
	  this.set('Location', url);
	  return this;
	};
	
	/**
	 * Redirect to the given `url` with optional response `status`
	 * defaulting to 302.
	 *
	 * The resulting `url` is determined by `res.location()`, so
	 * it will play nicely with mounted apps, relative paths,
	 * `"back"` etc.
	 *
	 * Examples:
	 *
	 *    res.redirect('/foo/bar');
	 *    res.redirect('http://example.com');
	 *    res.redirect(301, 'http://example.com');
	 *    res.redirect('../login'); // /blog/post/1 -> /blog/login
	 *
	 * @api public
	 */
	
	res.redirect = function redirect(url) {
	  var address = url;
	  var body;
	  var status = 302;
	
	  // allow status / url
	  if (arguments.length === 2) {
	    if (typeof arguments[0] === 'number') {
	      status = arguments[0];
	      address = arguments[1];
	    } else {
	      deprecate('res.redirect(url, status): Use res.redirect(status, url) instead');
	      status = arguments[1];
	    }
	  }
	
	  // Set location header
	  this.location(address);
	  address = this.get('Location');
	
	  // Support text/{plain,html} by default
	  this.format({
	    text: function(){
	      body = statusCodes[status] + '. Redirecting to ' + encodeURI(address);
	    },
	
	    html: function(){
	      var u = escapeHtml(address);
	      body = '<p>' + statusCodes[status] + '. Redirecting to <a href="' + u + '">' + u + '</a></p>';
	    },
	
	    default: function(){
	      body = '';
	    }
	  });
	
	  // Respond
	  this.statusCode = status;
	  this.set('Content-Length', Buffer.byteLength(body));
	
	  if (this.req.method === 'HEAD') {
	    this.end();
	  } else {
	    this.end(body);
	  }
	};
	
	/**
	 * Add `field` to Vary. If already present in the Vary set, then
	 * this call is simply ignored.
	 *
	 * @param {Array|String} field
	 * @return {ServerResponse} for chaining
	 * @api public
	 */
	
	res.vary = function(field){
	  // checks for back-compat
	  if (!field || (Array.isArray(field) && !field.length)) {
	    deprecate('res.vary(): Provide a field name');
	    return this;
	  }
	
	  vary(this, field);
	
	  return this;
	};
	
	/**
	 * Render `view` with the given `options` and optional callback `fn`.
	 * When a callback function is given a response will _not_ be made
	 * automatically, otherwise a response of _200_ and _text/html_ is given.
	 *
	 * Options:
	 *
	 *  - `cache`     boolean hinting to the engine it should cache
	 *  - `filename`  filename of the view being rendered
	 *
	 * @api public
	 */
	
	res.render = function(view, options, fn){
	  options = options || {};
	  var self = this;
	  var req = this.req;
	  var app = req.app;
	
	  // support callback function as second arg
	  if ('function' == typeof options) {
	    fn = options, options = {};
	  }
	
	  // merge res.locals
	  options._locals = self.locals;
	
	  // default callback to respond
	  fn = fn || function(err, str){
	    if (err) return req.next(err);
	    self.send(str);
	  };
	
	  // render
	  app.render(view, options, fn);
	};
	
	// pipe the send file stream
	function sendfile(res, file, options, callback) {
	  var done = false;
	  var streaming;
	
	  // request aborted
	  function onaborted() {
	    if (done) return;
	    done = true;
	
	    var err = new Error('Request aborted');
	    err.code = 'ECONNABORT';
	    callback(err);
	  }
	
	  // directory
	  function ondirectory() {
	    if (done) return;
	    done = true;
	
	    var err = new Error('EISDIR, read');
	    err.code = 'EISDIR';
	    callback(err);
	  }
	
	  // errors
	  function onerror(err) {
	    if (done) return;
	    done = true;
	    callback(err);
	  }
	
	  // ended
	  function onend() {
	    if (done) return;
	    done = true;
	    callback();
	  }
	
	  // file
	  function onfile() {
	    streaming = false;
	  }
	
	  // finished
	  function onfinish(err) {
	    if (err) return onerror(err);
	    if (done) return;
	
	    setImmediate(function () {
	      if (streaming !== false && !done) {
	        onaborted();
	        return;
	      }
	
	      if (done) return;
	      done = true;
	      callback();
	    });
	  }
	
	  // streaming
	  function onstream() {
	    streaming = true;
	  }
	
	  file.on('directory', ondirectory);
	  file.on('end', onend);
	  file.on('error', onerror);
	  file.on('file', onfile);
	  file.on('stream', onstream);
	  onFinished(res, onfinish);
	
	  if (options.headers) {
	    // set headers on successful transfer
	    file.on('headers', function headers(res) {
	      var obj = options.headers;
	      var keys = Object.keys(obj);
	
	      for (var i = 0; i < keys.length; i++) {
	        var k = keys[i];
	        res.setHeader(k, obj[k]);
	      }
	    });
	  }
	
	  // pipe
	  file.pipe(res);
	}


/***/ },
/* 81 */
/*!***********************************************!*\
  !*** ./~/express/~/cookie-signature/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var crypto = __webpack_require__(/*! crypto */ 43);
	
	/**
	 * Sign the given `val` with `secret`.
	 *
	 * @param {String} val
	 * @param {String} secret
	 * @return {String}
	 * @api private
	 */
	
	exports.sign = function(val, secret){
	  if ('string' != typeof val) throw new TypeError('cookie required');
	  if ('string' != typeof secret) throw new TypeError('secret required');
	  return val + '.' + crypto
	    .createHmac('sha256', secret)
	    .update(val)
	    .digest('base64')
	    .replace(/\=+$/, '');
	};
	
	/**
	 * Unsign and decode the given `val` with `secret`,
	 * returning `false` if the signature is invalid.
	 *
	 * @param {String} val
	 * @param {String} secret
	 * @return {String|Boolean}
	 * @api private
	 */
	
	exports.unsign = function(val, secret){
	  if ('string' != typeof val) throw new TypeError('cookie required');
	  if ('string' != typeof secret) throw new TypeError('secret required');
	  var str = val.slice(0, val.lastIndexOf('.'))
	    , mac = exports.sign(str, secret);
	  
	  return sha1(mac) == sha1(val) ? str : false;
	};
	
	/**
	 * Private
	 */
	
	function sha1(str){
	  return crypto.createHash('sha1').update(str).digest('hex');
	}


/***/ },
/* 82 */
/*!*************************************!*\
  !*** ./~/express/~/cookie/index.js ***!
  \*************************************/
/***/ function(module, exports) {

	
	/// Serialize the a name value pair into a cookie string suitable for
	/// http headers. An optional options object specified cookie parameters
	///
	/// serialize('foo', 'bar', { httpOnly: true })
	///   => "foo=bar; httpOnly"
	///
	/// @param {String} name
	/// @param {String} val
	/// @param {Object} options
	/// @return {String}
	var serialize = function(name, val, opt){
	    opt = opt || {};
	    var enc = opt.encode || encode;
	    var pairs = [name + '=' + enc(val)];
	
	    if (null != opt.maxAge) {
	        var maxAge = opt.maxAge - 0;
	        if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	        pairs.push('Max-Age=' + maxAge);
	    }
	
	    if (opt.domain) pairs.push('Domain=' + opt.domain);
	    if (opt.path) pairs.push('Path=' + opt.path);
	    if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
	    if (opt.httpOnly) pairs.push('HttpOnly');
	    if (opt.secure) pairs.push('Secure');
	
	    return pairs.join('; ');
	};
	
	/// Parse the given cookie header string into an object
	/// The object has the various cookies as keys(names) => values
	/// @param {String} str
	/// @return {Object}
	var parse = function(str, opt) {
	    opt = opt || {};
	    var obj = {}
	    var pairs = str.split(/; */);
	    var dec = opt.decode || decode;
	
	    pairs.forEach(function(pair) {
	        var eq_idx = pair.indexOf('=')
	
	        // skip things that don't look like key=value
	        if (eq_idx < 0) {
	            return;
	        }
	
	        var key = pair.substr(0, eq_idx).trim()
	        var val = pair.substr(++eq_idx, pair.length).trim();
	
	        // quoted values
	        if ('"' == val[0]) {
	            val = val.slice(1, -1);
	        }
	
	        // only assign once
	        if (undefined == obj[key]) {
	            try {
	                obj[key] = dec(val);
	            } catch (e) {
	                obj[key] = val;
	            }
	        }
	    });
	
	    return obj;
	};
	
	var encode = encodeURIComponent;
	var decode = decodeURIComponent;
	
	module.exports.serialize = serialize;
	module.exports.parse = parse;


/***/ },
/* 83 */
/*!***********************************!*\
  !*** ./~/express/~/vary/index.js ***!
  \***********************************/
/***/ function(module, exports) {

	/*!
	 * vary
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict';
	
	/**
	 * Module exports.
	 */
	
	module.exports = vary;
	module.exports.append = append;
	
	/**
	 * Variables.
	 */
	
	var separators = /[\(\)<>@,;:\\"\/\[\]\?=\{\}\u0020\u0009]/;
	
	/**
	 * Append a field to a vary header.
	 *
	 * @param {String} header
	 * @param {String|Array} field
	 * @return {String}
	 * @api public
	 */
	
	function append(header, field) {
	  if (typeof header !== 'string') {
	    throw new TypeError('header argument is required');
	  }
	
	  if (!field) {
	    throw new TypeError('field argument is required');
	  }
	
	  // get fields array
	  var fields = !Array.isArray(field)
	    ? parse(String(field))
	    : field;
	
	  // assert on invalid fields
	  for (var i = 0; i < fields.length; i++) {
	    if (separators.test(fields[i])) {
	      throw new TypeError('field argument contains an invalid header');
	    }
	  }
	
	  // existing, unspecified vary
	  if (header === '*') {
	    return header;
	  }
	
	  // enumerate current values
	  var val = header;
	  var vals = parse(header.toLowerCase());
	
	  // unspecified vary
	  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
	    return '*';
	  }
	
	  for (var i = 0; i < fields.length; i++) {
	    var fld = fields[i].toLowerCase();
	
	    // append value (case-preserving)
	    if (vals.indexOf(fld) === -1) {
	      vals.push(fld);
	      val = val
	        ? val + ', ' + fields[i]
	        : fields[i];
	    }
	  }
	
	  return val;
	}
	
	/**
	 * Parse a vary header into an array.
	 *
	 * @param {String} header
	 * @return {Array}
	 * @api private
	 */
	
	function parse(header) {
	  return header.trim().split(/ *, */);
	}
	
	/**
	 * Mark that a request is varied on a header field.
	 *
	 * @param {Object} res
	 * @param {String|Array} field
	 * @api public
	 */
	
	function vary(res, field) {
	  if (!res || !res.getHeader || !res.setHeader) {
	    // quack quack
	    throw new TypeError('res argument is required');
	  }
	
	  // get existing header
	  var val = res.getHeader('Vary') || ''
	  var header = Array.isArray(val)
	    ? val.join(', ')
	    : String(val);
	
	  // set new header
	  if ((val = append(header, field))) {
	    res.setHeader('Vary', val);
	  }
	}


/***/ },
/* 84 */
/*!*******************************************!*\
  !*** ./~/express/~/serve-static/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * serve-static
	 * Copyright(c) 2010 Sencha Inc.
	 * Copyright(c) 2011 TJ Holowaychuk
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var escapeHtml = __webpack_require__(/*! escape-html */ 14);
	var merge = __webpack_require__(/*! utils-merge */ 61);
	var parseurl = __webpack_require__(/*! parseurl */ 62);
	var resolve = __webpack_require__(/*! path */ 20).resolve;
	var send = __webpack_require__(/*! send */ 25);
	var url = __webpack_require__(/*! url */ 63);
	
	/**
	 * @param {String} root
	 * @param {Object} options
	 * @return {Function}
	 * @api public
	 */
	
	exports = module.exports = function serveStatic(root, options) {
	  if (!root) {
	    throw new TypeError('root path required')
	  }
	
	  if (typeof root !== 'string') {
	    throw new TypeError('root path must be a string')
	  }
	
	  // copy options object
	  options = merge({}, options)
	
	  // resolve root to absolute
	  root = resolve(root)
	
	  // default redirect
	  var redirect = options.redirect !== false
	
	  // headers listener
	  var setHeaders = options.setHeaders
	  delete options.setHeaders
	
	  if (setHeaders && typeof setHeaders !== 'function') {
	    throw new TypeError('option setHeaders must be function')
	  }
	
	  // setup options for send
	  options.maxage = options.maxage || options.maxAge || 0
	  options.root = root
	
	  return function serveStatic(req, res, next) {
	    if (req.method !== 'GET' && req.method !== 'HEAD') {
	      return next()
	    }
	
	    var opts = merge({}, options)
	    var originalUrl = parseurl.original(req)
	    var path = parseurl(req).pathname
	    var hasTrailingSlash = originalUrl.pathname[originalUrl.pathname.length - 1] === '/'
	
	    if (path === '/' && !hasTrailingSlash) {
	      // make sure redirect occurs at mount
	      path = ''
	    }
	
	    // create send stream
	    var stream = send(req, path, opts)
	
	    if (redirect) {
	      // redirect relative to originalUrl
	      stream.on('directory', function redirect() {
	        if (hasTrailingSlash) {
	          return next()
	        }
	
	        // append trailing slash
	        originalUrl.path = null
	        originalUrl.pathname = collapseLeadingSlashes(originalUrl.pathname + '/')
	
	        // reformat the URL
	        var target = url.format(originalUrl)
	
	        // send redirect response
	        res.statusCode = 303
	        res.setHeader('Content-Type', 'text/html; charset=utf-8')
	        res.setHeader('Location', target)
	        res.end('Redirecting to <a href="' + escapeHtml(target) + '">' + escapeHtml(target) + '</a>\n')
	      })
	    } else {
	      // forward to next middleware on directory
	      stream.on('directory', next)
	    }
	
	    // add headers listener
	    if (setHeaders) {
	      stream.on('headers', setHeaders)
	    }
	
	    // forward non-404 errors
	    stream.on('error', function error(err) {
	      next(err.status === 404 ? null : err)
	    })
	
	    // pipe
	    stream.pipe(res)
	  }
	}
	
	/**
	 * Expose mime module.
	 *
	 * If you wish to extend the mime table use this
	 * reference to the "mime" module in the npm registry.
	 */
	
	exports.mime = send.mime
	
	/**
	 * Collapse all leading slashes into a single slash
	 * @private
	 */
	function collapseLeadingSlashes(str) {
	  for (var i = 0; i < str.length; i++) {
	    if (str[i] !== '/') {
	      break
	    }
	  }
	
	  return i > 1
	    ? '/' + str.substr(i)
	    : str
	}


/***/ },
/* 85 */
/*!**********************************!*\
  !*** ./~/serve-favicon/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * serve-favicon
	 * Copyright(c) 2010 Sencha Inc.
	 * Copyright(c) 2011 TJ Holowaychuk
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 * @private
	 */
	
	var etag = __webpack_require__(/*! etag */ 86);
	var fresh = __webpack_require__(/*! fresh */ 97);
	var fs = __webpack_require__(/*! fs */ 12);
	var ms = __webpack_require__(/*! ms */ 98);
	var parseUrl = __webpack_require__(/*! parseurl */ 99);
	var path = __webpack_require__(/*! path */ 20);
	var resolve = path.resolve;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var maxMaxAge = 60 * 60 * 24 * 365 * 1000; // 1 year
	
	/**
	 * Serves the favicon located by the given `path`.
	 *
	 * @public
	 * @param {String|Buffer} path
	 * @param {Object} options
	 * @return {Function} middleware
	 */
	
	module.exports = function favicon(path, options){
	  options = options || {};
	
	  var buf;
	  var icon; // favicon cache
	  var maxAge = calcMaxAge(options.maxAge);
	  var stat;
	
	  if (!path) throw new TypeError('path to favicon.ico is required');
	
	  if (Buffer.isBuffer(path)) {
	    buf = new Buffer(path.length);
	    path.copy(buf);
	
	    icon = createIcon(buf, maxAge);
	  } else if (typeof path === 'string') {
	    path = resolve(path);
	    stat = fs.statSync(path);
	    if (stat.isDirectory()) throw createIsDirError(path);
	  } else {
	    throw new TypeError('path to favicon.ico must be string or buffer');
	  }
	
	  return function favicon(req, res, next){
	    if (parseUrl(req).pathname !== '/favicon.ico') {
	      next();
	      return;
	    }
	
	    if ('GET' !== req.method && 'HEAD' !== req.method) {
	      var status = 'OPTIONS' === req.method ? 200 : 405;
	      res.writeHead(status, {'Allow': 'GET, HEAD, OPTIONS'});
	      res.end();
	      return;
	    }
	
	    if (icon) return send(req, res, icon);
	
	    fs.readFile(path, function(err, buf){
	      if (err) return next(err);
	      icon = createIcon(buf, maxAge);
	      send(req, res, icon);
	    });
	  };
	};
	
	/**
	 * Calculate the max-age from a configured value.
	 *
	 * @private
	 * @param {string|number} val
	 * @return {number}
	 */
	
	function calcMaxAge(val) {
	  var num = typeof val === 'string'
	    ? ms(val)
	    : val;
	
	  return num != null
	    ? Math.min(Math.max(0, num), maxMaxAge)
	    : maxMaxAge
	}
	
	/**
	 * Create icon data from Buffer and max-age.
	 *
	 * @private
	 * @param {Buffer} buf
	 * @param {number} maxAge
	 * @return {object}
	 */
	
	function createIcon(buf, maxAge) {
	  return {
	    body: buf,
	    headers: {
	      'Cache-Control': 'public, max-age=' + ~~(maxAge / 1000),
	      'ETag': etag(buf)
	    }
	  };
	}
	
	/**
	 * Create EISDIR error.
	 *
	 * @private
	 * @param {string} path
	 * @return {Error}
	 */
	
	function createIsDirError(path) {
	  var error = new Error('EISDIR, illegal operation on directory \'' + path + '\'');
	  error.code = 'EISDIR';
	  error.errno = 28;
	  error.path = path;
	  error.syscall = 'open';
	  return error;
	}
	
	/**
	 * Send icon data in response to a request.
	 *
	 * @private
	 * @param {IncomingMessage} req
	 * @param {OutgoingMessage} res
	 * @param {object} icon
	 */
	
	function send(req, res, icon) {
	  var headers = icon.headers;
	
	  // Set headers
	  var keys = Object.keys(headers);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    res.setHeader(key, headers[key]);
	  }
	
	  if (fresh(req.headers, res._headers)) {
	    res.statusCode = 304;
	    res.end();
	    return;
	  }
	
	  res.statusCode = 200;
	  res.setHeader('Content-Length', icon.body.length);
	  res.setHeader('Content-Type', 'image/x-icon');
	  res.end(icon.body);
	}


/***/ },
/* 86 */
/*!*****************************************!*\
  !*** ./~/serve-favicon/~/etag/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * etag
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = etag
	
	/**
	 * Module dependencies.
	 */
	
	var crc = __webpack_require__(/*! crc */ 87).crc32
	var crypto = __webpack_require__(/*! crypto */ 43)
	var Stats = __webpack_require__(/*! fs */ 12).Stats
	
	/**
	 * Module variables.
	 */
	
	var crc32threshold = 1000 // 1KB
	var NULL = new Buffer([0])
	var toString = Object.prototype.toString
	
	/**
	 * Create a simple ETag.
	 *
	 * @param {string|Buffer|Stats} entity
	 * @param {object} [options]
	 * @param {boolean} [options.weak]
	 * @return {String}
	 * @api public
	 */
	
	function etag(entity, options) {
	  if (entity == null) {
	    throw new TypeError('argument entity is required')
	  }
	
	  var isStats = isstats(entity)
	  var weak = options && typeof options.weak === 'boolean'
	    ? options.weak
	    : isStats
	
	  // support fs.Stats object
	  if (isStats) {
	    return stattag(entity, weak)
	  }
	
	  if (typeof entity !== 'string' && !Buffer.isBuffer(entity)) {
	    throw new TypeError('argument entity must be string, Buffer, or fs.Stats')
	  }
	
	  var hash = weak
	    ? weakhash(entity)
	    : stronghash(entity)
	
	  return weak
	    ? 'W/"' + hash + '"'
	    : '"' + hash + '"'
	}
	
	/**
	 * Determine if object is a Stats object.
	 *
	 * @param {object} obj
	 * @return {boolean}
	 * @api private
	 */
	
	function isstats(obj) {
	  // genuine fs.Stats
	  if (typeof Stats === 'function' && obj instanceof Stats) {
	    return true
	  }
	
	  // quack quack
	  return obj && typeof obj === 'object'
	    && 'ctime' in obj && toString.call(obj.ctime) === '[object Date]'
	    && 'mtime' in obj && toString.call(obj.mtime) === '[object Date]'
	    && 'ino' in obj && typeof obj.ino === 'number'
	    && 'size' in obj && typeof obj.size === 'number'
	}
	
	/**
	 * Generate a tag for a stat.
	 *
	 * @param {Buffer} entity
	 * @return {String}
	 * @api private
	 */
	
	function stattag(stat, weak) {
	  var mtime = stat.mtime.toISOString()
	  var size = stat.size.toString(16)
	
	  if (weak) {
	    return 'W/"' + size + '-' + crc(mtime) + '"'
	  }
	
	  var hash = crypto
	    .createHash('md5')
	    .update('file', 'utf8')
	    .update(NULL)
	    .update(size, 'utf8')
	    .update(NULL)
	    .update(mtime, 'utf8')
	    .digest('base64')
	
	  return '"' + hash + '"'
	}
	
	/**
	 * Generate a strong hash.
	 *
	 * @param {Buffer} entity
	 * @return {String}
	 * @api private
	 */
	
	function stronghash(entity) {
	  if (entity.length === 0) {
	    // fast-path empty
	    return '1B2M2Y8AsgTpgAmY7PhCfg=='
	  }
	
	  return crypto
	    .createHash('md5')
	    .update(entity, 'utf8')
	    .digest('base64')
	}
	
	/**
	 * Generate a weak hash.
	 *
	 * @param {Buffer} entity
	 * @return {String}
	 * @api private
	 */
	
	function weakhash(entity) {
	  if (entity.length === 0) {
	    // fast-path empty
	    return '0-0'
	  }
	
	  var len = typeof entity === 'string'
	    ? Buffer.byteLength(entity, 'utf8')
	    : entity.length
	
	  if (len <= crc32threshold) {
	    // crc32 plus length when it's fast
	    // crc(str) only accepts utf-8 encoding
	    return len.toString(16) + '-' + crc(entity).toString(16)
	  }
	
	  // use md4 for long strings
	  return crypto
	    .createHash('md4')
	    .update(entity, 'utf8')
	    .digest('base64')
	}


/***/ },
/* 87 */
/*!***************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	module.exports = {
	  crc1: __webpack_require__(/*! ./crc1 */ 88),
	  crc8: __webpack_require__(/*! ./crc8 */ 90),
	  crc81wire: __webpack_require__(/*! ./crc8_1wire */ 91),
	  crc16: __webpack_require__(/*! ./crc16 */ 92),
	  crc16ccitt: __webpack_require__(/*! ./crc16_ccitt */ 93),
	  crc16modbus: __webpack_require__(/*! ./crc16_modbus */ 94),
	  crc24: __webpack_require__(/*! ./crc24 */ 95),
	  crc32: __webpack_require__(/*! ./crc32 */ 96)
	};


/***/ },
/* 88 */
/*!**************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/crc1.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 89);
	
	module.exports = create('crc1', function(buf, previous) {
	  var accum, byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = ~~previous;
	  accum = 0;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    accum += byte;
	  }
	  crc += accum % 256;
	  return crc % 256;
	});


/***/ },
/* 89 */
/*!****************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/create.js ***!
  \****************************************************/
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.7.1
	module.exports = function(model, calc) {
	  var fn;
	  fn = function(buf, previous) {
	    return calc(buf, previous) >>> 0;
	  };
	  fn.signed = calc;
	  fn.unsigned = fn;
	  fn.model = model;
	  return fn;
	};


/***/ },
/* 90 */
/*!**************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/crc8.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 89);
	
	TABLE = [0x00, 0x07, 0x0e, 0x09, 0x1c, 0x1b, 0x12, 0x15, 0x38, 0x3f, 0x36, 0x31, 0x24, 0x23, 0x2a, 0x2d, 0x70, 0x77, 0x7e, 0x79, 0x6c, 0x6b, 0x62, 0x65, 0x48, 0x4f, 0x46, 0x41, 0x54, 0x53, 0x5a, 0x5d, 0xe0, 0xe7, 0xee, 0xe9, 0xfc, 0xfb, 0xf2, 0xf5, 0xd8, 0xdf, 0xd6, 0xd1, 0xc4, 0xc3, 0xca, 0xcd, 0x90, 0x97, 0x9e, 0x99, 0x8c, 0x8b, 0x82, 0x85, 0xa8, 0xaf, 0xa6, 0xa1, 0xb4, 0xb3, 0xba, 0xbd, 0xc7, 0xc0, 0xc9, 0xce, 0xdb, 0xdc, 0xd5, 0xd2, 0xff, 0xf8, 0xf1, 0xf6, 0xe3, 0xe4, 0xed, 0xea, 0xb7, 0xb0, 0xb9, 0xbe, 0xab, 0xac, 0xa5, 0xa2, 0x8f, 0x88, 0x81, 0x86, 0x93, 0x94, 0x9d, 0x9a, 0x27, 0x20, 0x29, 0x2e, 0x3b, 0x3c, 0x35, 0x32, 0x1f, 0x18, 0x11, 0x16, 0x03, 0x04, 0x0d, 0x0a, 0x57, 0x50, 0x59, 0x5e, 0x4b, 0x4c, 0x45, 0x42, 0x6f, 0x68, 0x61, 0x66, 0x73, 0x74, 0x7d, 0x7a, 0x89, 0x8e, 0x87, 0x80, 0x95, 0x92, 0x9b, 0x9c, 0xb1, 0xb6, 0xbf, 0xb8, 0xad, 0xaa, 0xa3, 0xa4, 0xf9, 0xfe, 0xf7, 0xf0, 0xe5, 0xe2, 0xeb, 0xec, 0xc1, 0xc6, 0xcf, 0xc8, 0xdd, 0xda, 0xd3, 0xd4, 0x69, 0x6e, 0x67, 0x60, 0x75, 0x72, 0x7b, 0x7c, 0x51, 0x56, 0x5f, 0x58, 0x4d, 0x4a, 0x43, 0x44, 0x19, 0x1e, 0x17, 0x10, 0x05, 0x02, 0x0b, 0x0c, 0x21, 0x26, 0x2f, 0x28, 0x3d, 0x3a, 0x33, 0x34, 0x4e, 0x49, 0x40, 0x47, 0x52, 0x55, 0x5c, 0x5b, 0x76, 0x71, 0x78, 0x7f, 0x6a, 0x6d, 0x64, 0x63, 0x3e, 0x39, 0x30, 0x37, 0x22, 0x25, 0x2c, 0x2b, 0x06, 0x01, 0x08, 0x0f, 0x1a, 0x1d, 0x14, 0x13, 0xae, 0xa9, 0xa0, 0xa7, 0xb2, 0xb5, 0xbc, 0xbb, 0x96, 0x91, 0x98, 0x9f, 0x8a, 0x8d, 0x84, 0x83, 0xde, 0xd9, 0xd0, 0xd7, 0xc2, 0xc5, 0xcc, 0xcb, 0xe6, 0xe1, 0xe8, 0xef, 0xfa, 0xfd, 0xf4, 0xf3];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-8', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = ~~previous;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
	  }
	  return crc;
	});


/***/ },
/* 91 */
/*!********************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/crc8_1wire.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 89);
	
	TABLE = [0x00, 0x5e, 0xbc, 0xe2, 0x61, 0x3f, 0xdd, 0x83, 0xc2, 0x9c, 0x7e, 0x20, 0xa3, 0xfd, 0x1f, 0x41, 0x9d, 0xc3, 0x21, 0x7f, 0xfc, 0xa2, 0x40, 0x1e, 0x5f, 0x01, 0xe3, 0xbd, 0x3e, 0x60, 0x82, 0xdc, 0x23, 0x7d, 0x9f, 0xc1, 0x42, 0x1c, 0xfe, 0xa0, 0xe1, 0xbf, 0x5d, 0x03, 0x80, 0xde, 0x3c, 0x62, 0xbe, 0xe0, 0x02, 0x5c, 0xdf, 0x81, 0x63, 0x3d, 0x7c, 0x22, 0xc0, 0x9e, 0x1d, 0x43, 0xa1, 0xff, 0x46, 0x18, 0xfa, 0xa4, 0x27, 0x79, 0x9b, 0xc5, 0x84, 0xda, 0x38, 0x66, 0xe5, 0xbb, 0x59, 0x07, 0xdb, 0x85, 0x67, 0x39, 0xba, 0xe4, 0x06, 0x58, 0x19, 0x47, 0xa5, 0xfb, 0x78, 0x26, 0xc4, 0x9a, 0x65, 0x3b, 0xd9, 0x87, 0x04, 0x5a, 0xb8, 0xe6, 0xa7, 0xf9, 0x1b, 0x45, 0xc6, 0x98, 0x7a, 0x24, 0xf8, 0xa6, 0x44, 0x1a, 0x99, 0xc7, 0x25, 0x7b, 0x3a, 0x64, 0x86, 0xd8, 0x5b, 0x05, 0xe7, 0xb9, 0x8c, 0xd2, 0x30, 0x6e, 0xed, 0xb3, 0x51, 0x0f, 0x4e, 0x10, 0xf2, 0xac, 0x2f, 0x71, 0x93, 0xcd, 0x11, 0x4f, 0xad, 0xf3, 0x70, 0x2e, 0xcc, 0x92, 0xd3, 0x8d, 0x6f, 0x31, 0xb2, 0xec, 0x0e, 0x50, 0xaf, 0xf1, 0x13, 0x4d, 0xce, 0x90, 0x72, 0x2c, 0x6d, 0x33, 0xd1, 0x8f, 0x0c, 0x52, 0xb0, 0xee, 0x32, 0x6c, 0x8e, 0xd0, 0x53, 0x0d, 0xef, 0xb1, 0xf0, 0xae, 0x4c, 0x12, 0x91, 0xcf, 0x2d, 0x73, 0xca, 0x94, 0x76, 0x28, 0xab, 0xf5, 0x17, 0x49, 0x08, 0x56, 0xb4, 0xea, 0x69, 0x37, 0xd5, 0x8b, 0x57, 0x09, 0xeb, 0xb5, 0x36, 0x68, 0x8a, 0xd4, 0x95, 0xcb, 0x29, 0x77, 0xf4, 0xaa, 0x48, 0x16, 0xe9, 0xb7, 0x55, 0x0b, 0x88, 0xd6, 0x34, 0x6a, 0x2b, 0x75, 0x97, 0xc9, 0x4a, 0x14, 0xf6, 0xa8, 0x74, 0x2a, 0xc8, 0x96, 0x15, 0x4b, 0xa9, 0xf7, 0xb6, 0xe8, 0x0a, 0x54, 0xd7, 0x89, 0x6b, 0x35];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('dallas-1-wire', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = ~~previous;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = TABLE[(crc ^ byte) & 0xff] & 0xff;
	  }
	  return crc;
	});


/***/ },
/* 92 */
/*!***************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/crc16.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 89);
	
	TABLE = [0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601, 0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0, 0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81, 0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941, 0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01, 0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0, 0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081, 0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240, 0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00, 0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0, 0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981, 0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41, 0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700, 0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0, 0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281, 0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441, 0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01, 0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1, 0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80, 0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541, 0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101, 0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0, 0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481, 0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40, 0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801, 0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1, 0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581, 0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341, 0x4100, 0x81c1, 0x8081, 0x4040];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-16', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = ~~previous;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = (TABLE[(crc ^ byte) & 0xff] ^ (crc >> 8)) & 0xffff;
	  }
	  return crc;
	});


/***/ },
/* 93 */
/*!*********************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/crc16_ccitt.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 89);
	
	TABLE = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6, 0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d, 0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823, 0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a, 0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70, 0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067, 0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d, 0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634, 0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a, 0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1, 0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('ccitt', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = previous != null ? ~~previous : 0xffff;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = (TABLE[((crc >> 8) ^ byte) & 0xff] ^ (crc << 8)) & 0xffff;
	  }
	  return crc;
	});


/***/ },
/* 94 */
/*!**********************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/crc16_modbus.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 89);
	
	TABLE = [0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601, 0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0, 0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81, 0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941, 0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01, 0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0, 0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081, 0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240, 0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00, 0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0, 0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981, 0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41, 0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700, 0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0, 0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281, 0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441, 0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01, 0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1, 0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80, 0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541, 0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101, 0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0, 0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481, 0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40, 0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801, 0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1, 0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581, 0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341, 0x4100, 0x81c1, 0x8081, 0x4040];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-16-modbus', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = previous != null ? ~~previous : 0xffff;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = (TABLE[(crc ^ byte) & 0xff] ^ (crc >> 8)) & 0xffff;
	  }
	  return crc;
	});


/***/ },
/* 95 */
/*!***************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/crc24.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 89);
	
	TABLE = [0x000000, 0x864cfb, 0x8ad50d, 0x0c99f6, 0x93e6e1, 0x15aa1a, 0x1933ec, 0x9f7f17, 0xa18139, 0x27cdc2, 0x2b5434, 0xad18cf, 0x3267d8, 0xb42b23, 0xb8b2d5, 0x3efe2e, 0xc54e89, 0x430272, 0x4f9b84, 0xc9d77f, 0x56a868, 0xd0e493, 0xdc7d65, 0x5a319e, 0x64cfb0, 0xe2834b, 0xee1abd, 0x685646, 0xf72951, 0x7165aa, 0x7dfc5c, 0xfbb0a7, 0x0cd1e9, 0x8a9d12, 0x8604e4, 0x00481f, 0x9f3708, 0x197bf3, 0x15e205, 0x93aefe, 0xad50d0, 0x2b1c2b, 0x2785dd, 0xa1c926, 0x3eb631, 0xb8faca, 0xb4633c, 0x322fc7, 0xc99f60, 0x4fd39b, 0x434a6d, 0xc50696, 0x5a7981, 0xdc357a, 0xd0ac8c, 0x56e077, 0x681e59, 0xee52a2, 0xe2cb54, 0x6487af, 0xfbf8b8, 0x7db443, 0x712db5, 0xf7614e, 0x19a3d2, 0x9fef29, 0x9376df, 0x153a24, 0x8a4533, 0x0c09c8, 0x00903e, 0x86dcc5, 0xb822eb, 0x3e6e10, 0x32f7e6, 0xb4bb1d, 0x2bc40a, 0xad88f1, 0xa11107, 0x275dfc, 0xdced5b, 0x5aa1a0, 0x563856, 0xd074ad, 0x4f0bba, 0xc94741, 0xc5deb7, 0x43924c, 0x7d6c62, 0xfb2099, 0xf7b96f, 0x71f594, 0xee8a83, 0x68c678, 0x645f8e, 0xe21375, 0x15723b, 0x933ec0, 0x9fa736, 0x19ebcd, 0x8694da, 0x00d821, 0x0c41d7, 0x8a0d2c, 0xb4f302, 0x32bff9, 0x3e260f, 0xb86af4, 0x2715e3, 0xa15918, 0xadc0ee, 0x2b8c15, 0xd03cb2, 0x567049, 0x5ae9bf, 0xdca544, 0x43da53, 0xc596a8, 0xc90f5e, 0x4f43a5, 0x71bd8b, 0xf7f170, 0xfb6886, 0x7d247d, 0xe25b6a, 0x641791, 0x688e67, 0xeec29c, 0x3347a4, 0xb50b5f, 0xb992a9, 0x3fde52, 0xa0a145, 0x26edbe, 0x2a7448, 0xac38b3, 0x92c69d, 0x148a66, 0x181390, 0x9e5f6b, 0x01207c, 0x876c87, 0x8bf571, 0x0db98a, 0xf6092d, 0x7045d6, 0x7cdc20, 0xfa90db, 0x65efcc, 0xe3a337, 0xef3ac1, 0x69763a, 0x578814, 0xd1c4ef, 0xdd5d19, 0x5b11e2, 0xc46ef5, 0x42220e, 0x4ebbf8, 0xc8f703, 0x3f964d, 0xb9dab6, 0xb54340, 0x330fbb, 0xac70ac, 0x2a3c57, 0x26a5a1, 0xa0e95a, 0x9e1774, 0x185b8f, 0x14c279, 0x928e82, 0x0df195, 0x8bbd6e, 0x872498, 0x016863, 0xfad8c4, 0x7c943f, 0x700dc9, 0xf64132, 0x693e25, 0xef72de, 0xe3eb28, 0x65a7d3, 0x5b59fd, 0xdd1506, 0xd18cf0, 0x57c00b, 0xc8bf1c, 0x4ef3e7, 0x426a11, 0xc426ea, 0x2ae476, 0xaca88d, 0xa0317b, 0x267d80, 0xb90297, 0x3f4e6c, 0x33d79a, 0xb59b61, 0x8b654f, 0x0d29b4, 0x01b042, 0x87fcb9, 0x1883ae, 0x9ecf55, 0x9256a3, 0x141a58, 0xefaaff, 0x69e604, 0x657ff2, 0xe33309, 0x7c4c1e, 0xfa00e5, 0xf69913, 0x70d5e8, 0x4e2bc6, 0xc8673d, 0xc4fecb, 0x42b230, 0xddcd27, 0x5b81dc, 0x57182a, 0xd154d1, 0x26359f, 0xa07964, 0xace092, 0x2aac69, 0xb5d37e, 0x339f85, 0x3f0673, 0xb94a88, 0x87b4a6, 0x01f85d, 0x0d61ab, 0x8b2d50, 0x145247, 0x921ebc, 0x9e874a, 0x18cbb1, 0xe37b16, 0x6537ed, 0x69ae1b, 0xefe2e0, 0x709df7, 0xf6d10c, 0xfa48fa, 0x7c0401, 0x42fa2f, 0xc4b6d4, 0xc82f22, 0x4e63d9, 0xd11cce, 0x575035, 0x5bc9c3, 0xdd8538];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-24', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = previous != null ? ~~previous : 0xb704ce;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = (TABLE[((crc >> 16) ^ byte) & 0xff] ^ (crc << 8)) & 0xffffff;
	  }
	  return crc;
	});


/***/ },
/* 96 */
/*!***************************************************!*\
  !*** ./~/serve-favicon/~/etag/~/crc/lib/crc32.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.7.1
	var Buffer, TABLE, create;
	
	Buffer = __webpack_require__(/*! buffer */ 34).Buffer;
	
	create = __webpack_require__(/*! ./create */ 89);
	
	TABLE = [0x00000000, 0x77073096, 0xee0e612c, 0x990951ba, 0x076dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0x0edb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x09b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x01db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x06b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0x0f00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x086d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x03b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x04db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0x0d6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0x0a00ae27, 0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x026d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x05005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0x0cb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0x0bdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d];
	
	if (typeof Int32Array !== 'undefined') {
	  TABLE = new Int32Array(TABLE);
	}
	
	module.exports = create('crc-32', function(buf, previous) {
	  var byte, crc, _i, _len;
	  if (!Buffer.isBuffer(buf)) {
	    buf = Buffer(buf);
	  }
	  crc = previous === 0 ? 0 : ~~previous ^ -1;
	  for (_i = 0, _len = buf.length; _i < _len; _i++) {
	    byte = buf[_i];
	    crc = TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
	  }
	  return crc ^ -1;
	});


/***/ },
/* 97 */
/*!******************************************!*\
  !*** ./~/serve-favicon/~/fresh/index.js ***!
  \******************************************/
/***/ function(module, exports) {

	
	/**
	 * Expose `fresh()`.
	 */
	
	module.exports = fresh;
	
	/**
	 * Check freshness of `req` and `res` headers.
	 *
	 * When the cache is "fresh" __true__ is returned,
	 * otherwise __false__ is returned to indicate that
	 * the cache is now stale.
	 *
	 * @param {Object} req
	 * @param {Object} res
	 * @return {Boolean}
	 * @api public
	 */
	
	function fresh(req, res) {
	  // defaults
	  var etagMatches = true;
	  var notModified = true;
	
	  // fields
	  var modifiedSince = req['if-modified-since'];
	  var noneMatch = req['if-none-match'];
	  var lastModified = res['last-modified'];
	  var etag = res['etag'];
	  var cc = req['cache-control'];
	
	  // unconditional request
	  if (!modifiedSince && !noneMatch) return false;
	
	  // check for no-cache cache request directive
	  if (cc && cc.indexOf('no-cache') !== -1) return false;  
	
	  // parse if-none-match
	  if (noneMatch) noneMatch = noneMatch.split(/ *, */);
	
	  // if-none-match
	  if (noneMatch) etagMatches = ~noneMatch.indexOf(etag) || '*' == noneMatch[0];
	
	  // if-modified-since
	  if (modifiedSince) {
	    modifiedSince = new Date(modifiedSince);
	    lastModified = new Date(lastModified);
	    notModified = lastModified <= modifiedSince;
	  }
	
	  return !! (etagMatches && notModified);
	}

/***/ },
/* 98 */
/*!***************************************!*\
  !*** ./~/serve-favicon/~/ms/index.js ***!
  \***************************************/
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 99 */
/*!*********************************************!*\
  !*** ./~/serve-favicon/~/parseurl/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * parseurl
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(/*! url */ 63)
	var parse = url.parse
	var Url = url.Url
	
	/**
	 * Pattern for a simple path case.
	 * See: https://github.com/joyent/node/pull/7878
	 */
	
	var simplePathRegExp = /^(\/\/?(?!\/)[^\?#\s]*)(\?[^#\s]*)?$/
	
	/**
	 * Exports.
	 */
	
	module.exports = parseurl
	module.exports.original = originalurl
	
	/**
	 * Parse the `req` url with memoization.
	 *
	 * @param {ServerRequest} req
	 * @return {Object}
	 * @api public
	 */
	
	function parseurl(req) {
	  var url = req.url
	
	  if (url === undefined) {
	    // URL is undefined
	    return undefined
	  }
	
	  var parsed = req._parsedUrl
	
	  if (fresh(url, parsed)) {
	    // Return cached URL parse
	    return parsed
	  }
	
	  // Parse the URL
	  parsed = fastparse(url)
	  parsed._raw = url
	
	  return req._parsedUrl = parsed
	};
	
	/**
	 * Parse the `req` original url with fallback and memoization.
	 *
	 * @param {ServerRequest} req
	 * @return {Object}
	 * @api public
	 */
	
	function originalurl(req) {
	  var url = req.originalUrl
	
	  if (typeof url !== 'string') {
	    // Fallback
	    return parseurl(req)
	  }
	
	  var parsed = req._parsedOriginalUrl
	
	  if (fresh(url, parsed)) {
	    // Return cached URL parse
	    return parsed
	  }
	
	  // Parse the URL
	  parsed = fastparse(url)
	  parsed._raw = url
	
	  return req._parsedOriginalUrl = parsed
	};
	
	/**
	 * Parse the `str` url with fast-path short-cut.
	 *
	 * @param {string} str
	 * @return {Object}
	 * @api private
	 */
	
	function fastparse(str) {
	  // Try fast path regexp
	  // See: https://github.com/joyent/node/pull/7878
	  var simplePath = typeof str === 'string' && simplePathRegExp.exec(str)
	
	  // Construct simple URL
	  if (simplePath) {
	    var pathname = simplePath[1]
	    var search = simplePath[2] || null
	    var url = Url !== undefined
	      ? new Url()
	      : {}
	    url.path = str
	    url.href = str
	    url.pathname = pathname
	    url.search = search
	    url.query = search && search.substr(1)
	
	    return url
	  }
	
	  return parse(str)
	}
	
	/**
	 * Determine if parsed is still fresh for url.
	 *
	 * @param {string} url
	 * @param {object} parsedUrl
	 * @return {boolean}
	 * @api private
	 */
	
	function fresh(url, parsedUrl) {
	  return typeof parsedUrl === 'object'
	    && parsedUrl !== null
	    && (Url === undefined || parsedUrl instanceof Url)
	    && parsedUrl._raw === url
	}


/***/ },
/* 100 */
/*!***************************!*\
  !*** ./~/morgan/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * morgan
	 * Copyright(c) 2010 Sencha Inc.
	 * Copyright(c) 2011 TJ Holowaychuk
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 * @private
	 */
	
	var auth = __webpack_require__(/*! basic-auth */ 101)
	var debug = __webpack_require__(/*! debug */ 102)('morgan')
	var deprecate = __webpack_require__(/*! depd */ 105)('morgan')
	var onFinished = __webpack_require__(/*! on-finished */ 109)
	
	/**
	 * Array of CLF month names.
	 * @private
	 */
	
	var clfmonth = [
	  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	]
	
	/**
	 * Default log buffer duration.
	 * @private
	 */
	
	var defaultBufferDuration = 1000;
	
	/**
	 * Create a logger middleware.
	 *
	 * @public
	 * @param {String|Function} format
	 * @param {Object} [options]
	 * @return {Function} middleware
	 */
	
	exports = module.exports = function morgan(format, options) {
	  if (typeof format === 'object') {
	    options = format
	    format = options.format || 'default'
	
	    // smart deprecation message
	    deprecate('morgan(options): use morgan(' + (typeof format === 'string' ? JSON.stringify(format) : 'format') + ', options) instead')
	  }
	
	  if (format === undefined) {
	    deprecate('undefined format: specify a format')
	  }
	
	  options = options || {}
	
	  // output on request instead of response
	  var immediate = options.immediate;
	
	  // check if log entry should be skipped
	  var skip = options.skip || function () { return false; };
	
	  // format function
	  var fmt = compile(exports[format] || format || exports.default)
	
	  // steam
	  var buffer = options.buffer
	  var stream = options.stream || process.stdout
	
	  // buffering support
	  if (buffer) {
	    deprecate('buffer option')
	
	    var realStream = stream
	    var buf = []
	    var timer = null
	    var interval = 'number' == typeof buffer
	      ? buffer
	      : defaultBufferDuration
	
	    // flush function
	    var flush = function(){
	      timer = null
	
	      if (buf.length) {
	        realStream.write(buf.join(''));
	        buf.length = 0;
	      }
	    }
	
	    // swap the stream
	    stream = {
	      write: function(str){
	        if (timer === null) {
	          timer = setTimeout(flush, interval)
	        }
	
	        buf.push(str);
	      }
	    };
	  }
	
	  return function logger(req, res, next) {
	    req._startAt = process.hrtime();
	    req._startTime = new Date;
	    req._remoteAddress = getip(req);
	
	    function logRequest(){
	      if (skip(req, res)) {
	        debug('skip request')
	        return
	      }
	
	      var line = fmt(exports, req, res)
	
	      if (null == line) {
	        debug('skip line')
	        return
	      }
	
	      debug('log request')
	      stream.write(line + '\n')
	    };
	
	    // immediate
	    if (immediate) {
	      logRequest();
	    } else {
	      onFinished(res, logRequest)
	    }
	
	    next();
	  };
	};
	
	/**
	 * Compile `format` into a function.
	 *
	 * @private
	 * @param {Function|String} format
	 * @return {Function}
	 */
	
	function compile(format) {
	  if (typeof format === 'function') {
	    // already compiled
	    return format
	  }
	
	  if (typeof format !== 'string') {
	    throw new TypeError('argument format must be a function or string')
	  }
	
	  var fmt = format.replace(/"/g, '\\"')
	  var js = '  return "' + fmt.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g, function(_, name, arg){
	    return '"\n    + (tokens["' + name + '"](req, res, ' + String(JSON.stringify(arg)) + ') || "-") + "';
	  }) + '";'
	
	  return new Function('tokens, req, res', js);
	};
	
	/**
	 * Define a token function with the given `name`,
	 * and callback `fn(req, res)`.
	 *
	 * @public
	 * @param {String} name
	 * @param {Function} fn
	 * @return {Object} exports for chaining
	 */
	
	exports.token = function(name, fn) {
	  exports[name] = fn;
	  return this;
	};
	
	/**
	 * Define a `fmt` with the given `name`.
	 *
	 * @public
	 * @param {String} name
	 * @param {String|Function} fmt
	 * @return {Object} exports for chaining
	 */
	
	exports.format = function(name, fmt){
	  exports[name] = fmt;
	  return this;
	};
	
	/**
	 * Apache combined log format.
	 */
	
	exports.format('combined', ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"')
	
	/**
	 * Apache common log format.
	 */
	
	exports.format('common', ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]')
	
	/**
	 * Default format.
	 */
	
	exports.format('default', ':remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');
	deprecate.property(exports, 'default', 'default format: use combined format')
	
	/**
	 * Short format.
	 */
	
	exports.format('short', ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms');
	
	/**
	 * Tiny format.
	 */
	
	exports.format('tiny', ':method :url :status :res[content-length] - :response-time ms');
	
	/**
	 * dev (colored)
	 */
	
	exports.format('dev', function(tokens, req, res){
	  var color = 32; // green
	  var status = res.statusCode;
	
	  if (status >= 500) color = 31; // red
	  else if (status >= 400) color = 33; // yellow
	  else if (status >= 300) color = 36; // cyan
	
	  var fn = compile('\x1b[0m:method :url \x1b[' + color + 'm:status \x1b[0m:response-time ms - :res[content-length]\x1b[0m');
	
	  return fn(tokens, req, res);
	});
	
	/**
	 * request url
	 */
	
	exports.token('url', function(req){
	  return req.originalUrl || req.url;
	});
	
	/**
	 * request method
	 */
	
	exports.token('method', function(req){
	  return req.method;
	});
	
	/**
	 * response time in milliseconds
	 */
	
	exports.token('response-time', function(req, res){
	  if (!res._header || !req._startAt) return '';
	  var diff = process.hrtime(req._startAt);
	  var ms = diff[0] * 1e3 + diff[1] * 1e-6;
	  return ms.toFixed(3);
	});
	
	/**
	 * current date
	 */
	
	exports.token('date', function(req, res, format){
	  format = format || 'web'
	
	  var date = new Date()
	
	  switch (format) {
	    case 'clf':
	      return clfdate(date)
	    case 'iso':
	      return date.toISOString()
	    case 'web':
	      return date.toUTCString()
	  }
	});
	
	/**
	 * response status code
	 */
	
	exports.token('status', function(req, res){
	  return res._header ? res.statusCode : null;
	});
	
	/**
	 * normalized referrer
	 */
	
	exports.token('referrer', function(req){
	  return req.headers['referer'] || req.headers['referrer'];
	});
	
	/**
	 * remote address
	 */
	
	exports.token('remote-addr', getip);
	
	/**
	 * remote user
	 */
	
	exports.token('remote-user', function (req) {
	  var creds = auth(req)
	  var user = (creds && creds.name) || '-'
	  return user;
	})
	
	/**
	 * HTTP version
	 */
	
	exports.token('http-version', function(req){
	  return req.httpVersionMajor + '.' + req.httpVersionMinor;
	});
	
	/**
	 * UA string
	 */
	
	exports.token('user-agent', function(req){
	  return req.headers['user-agent'];
	});
	
	/**
	 * request header
	 */
	
	exports.token('req', function(req, res, field){
	  return req.headers[field.toLowerCase()];
	});
	
	/**
	 * response header
	 */
	
	exports.token('res', function(req, res, field){
	  return (res._headers || {})[field.toLowerCase()];
	});
	
	/**
	 * Format a Date in the common log format.
	 *
	 * @private
	 * @param {Date} dateTime
	 * @return {string}
	 */
	
	function clfdate(dateTime) {
	  var date = dateTime.getUTCDate()
	  var hour = dateTime.getUTCHours()
	  var mins = dateTime.getUTCMinutes()
	  var secs = dateTime.getUTCSeconds()
	  var year = dateTime.getUTCFullYear()
	
	  var month = clfmonth[dateTime.getUTCMonth()]
	
	  return pad2(date) + '/' + month + '/' + year
	    + ':' + pad2(hour) + ':' + pad2(mins) + ':' + pad2(secs)
	    + ' +0000'
	}
	
	/**
	 * Get request IP address.
	 *
	 * @private
	 * @param {IncomingMessage} req
	 * @return {string}
	 */
	
	function getip(req) {
	  return req.ip
	    || req._remoteAddress
	    || (req.connection && req.connection.remoteAddress)
	    || undefined;
	}
	
	/**
	 * Pad number to two digits.
	 *
	 * @private
	 * @param {number} num
	 * @return {string}
	 */
	
	function pad2(num) {
	  var str = String(num)
	
	  return (str.length === 1 ? '0' : '')
	    + str
	}


/***/ },
/* 101 */
/*!****************************************!*\
  !*** ./~/morgan/~/basic-auth/index.js ***!
  \****************************************/
/***/ function(module, exports) {

	/*!
	 * basic-auth
	 * Copyright(c) 2013 TJ Holowaychuk
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict'
	
	/**
	 * Module exports.
	 * @public
	 */
	
	module.exports = auth
	
	/**
	 * RegExp for basic auth credentials
	 *
	 * credentials = auth-scheme 1*SP token68
	 * auth-scheme = "Basic" ; case insensitive
	 * token68     = 1*( ALPHA / DIGIT / "-" / "." / "_" / "~" / "+" / "/" ) *"="
	 * @private
	 */
	
	var credentialsRegExp = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9\-\._~\+\/]+=*) *$/
	
	/**
	 * RegExp for basic auth user/pass
	 *
	 * user-pass   = userid ":" password
	 * userid      = *<TEXT excluding ":">
	 * password    = *TEXT
	 * @private
	 */
	
	var userPassRegExp = /^([^:]*):(.*)$/
	
	/**
	 * Parse the Authorization header field of a request.
	 *
	 * @param {object} req
	 * @return {object} with .name and .pass
	 * @public
	 */
	
	function auth(req) {
	  if (!req) {
	    throw new TypeError('argument req is required')
	  }
	
	  // get header
	  var header = (req.req || req).headers.authorization
	
	  // parse header
	  var match = credentialsRegExp.exec(header || '')
	
	  if (!match) {
	    return
	  }
	
	  // decode user pass
	  var userPass = userPassRegExp.exec(decodeBase64(match[1]))
	
	  if (!userPass) {
	    return
	  }
	
	  // return credentials object
	  return new Credentials(userPass[1], userPass[2])
	}
	
	/**
	 * Decode base64 string.
	 * @private
	 */
	
	function decodeBase64(str) {
	  return new Buffer(str, 'base64').toString()
	}
	
	/**
	 * Object to represent user credentials.
	 * @private
	 */
	
	function Credentials(name, pass) {
	  this.name = name
	  this.pass = pass
	}


/***/ },
/* 102 */
/*!**********************************!*\
  !*** ./~/morgan/~/debug/node.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var tty = __webpack_require__(/*! tty */ 8);
	var util = __webpack_require__(/*! util */ 9);
	
	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(/*! ./debug */ 103);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	
	/**
	 * Colors.
	 */
	
	exports.colors = [6, 2, 3, 4, 5, 1];
	
	/**
	 * The file descriptor to write the `debug()` calls to.
	 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
	 *
	 *   $ DEBUG_FD=3 node script.js 3>debug.log
	 */
	
	var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
	var stream = 1 === fd ? process.stdout :
	             2 === fd ? process.stderr :
	             createWritableStdioStream(fd);
	
	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */
	
	function useColors() {
	  var debugColors = (process.env.DEBUG_COLORS || '').trim().toLowerCase();
	  if (0 === debugColors.length) {
	    return tty.isatty(fd);
	  } else {
	    return '0' !== debugColors
	        && 'no' !== debugColors
	        && 'false' !== debugColors
	        && 'disabled' !== debugColors;
	  }
	}
	
	/**
	 * Map %o to `util.inspect()`, since Node doesn't do that out of the box.
	 */
	
	var inspect = (4 === util.inspect.length ?
	  // node <= 0.8.x
	  function (v, colors) {
	    return util.inspect(v, void 0, void 0, colors);
	  } :
	  // node > 0.8.x
	  function (v, colors) {
	    return util.inspect(v, { colors: colors });
	  }
	);
	
	exports.formatters.o = function(v) {
	  return inspect(v, this.useColors)
	    .replace(/\s*\n\s*/g, ' ');
	};
	
	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	  var name = this.namespace;
	
	  if (useColors) {
	    var c = this.color;
	
	    args[0] = '  \u001b[3' + c + ';1m' + name + ' '
	      + '\u001b[0m'
	      + args[0] + '\u001b[3' + c + 'm'
	      + ' +' + exports.humanize(this.diff) + '\u001b[0m';
	  } else {
	    args[0] = new Date().toUTCString()
	      + ' ' + name + ' ' + args[0];
	  }
	  return args;
	}
	
	/**
	 * Invokes `console.error()` with the specified arguments.
	 */
	
	function log() {
	  return stream.write(util.format.apply(this, arguments) + '\n');
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete process.env.DEBUG;
	  } else {
	    process.env.DEBUG = namespaces;
	  }
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  return process.env.DEBUG;
	}
	
	/**
	 * Copied from `node/src/node.js`.
	 *
	 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
	 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
	 */
	
	function createWritableStdioStream (fd) {
	  var stream;
	  var tty_wrap = process.binding('tty_wrap');
	
	  // Note stream._type is used for test-module-load-list.js
	
	  switch (tty_wrap.guessHandleType(fd)) {
	    case 'TTY':
	      stream = new tty.WriteStream(fd);
	      stream._type = 'tty';
	
	      // Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;
	
	    case 'FILE':
	      var fs = __webpack_require__(/*! fs */ 12);
	      stream = new fs.SyncWriteStream(fd, { autoClose: false });
	      stream._type = 'fs';
	      break;
	
	    case 'PIPE':
	    case 'TCP':
	      var net = __webpack_require__(/*! net */ 13);
	      stream = new net.Socket({
	        fd: fd,
	        readable: false,
	        writable: true
	      });
	
	      // FIXME Should probably have an option in net.Socket to create a
	      // stream from an existing fd which is writable only. But for now
	      // we'll just add this hack and set the `readable` member to false.
	      // Test: ./node test/fixtures/echo.js < /etc/passwd
	      stream.readable = false;
	      stream.read = null;
	      stream._type = 'pipe';
	
	      // FIXME Hack to have stream not keep the event loop alive.
	      // See https://github.com/joyent/node/issues/1726
	      if (stream._handle && stream._handle.unref) {
	        stream._handle.unref();
	      }
	      break;
	
	    default:
	      // Probably an error on in uv_guess_handle()
	      throw new Error('Implement me. Unknown stream file type!');
	  }
	
	  // For supporting legacy API we put the FD here.
	  stream.fd = fd;
	
	  stream._isStdio = true;
	
	  return stream;
	}
	
	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */
	
	exports.enable(load());


/***/ },
/* 103 */
/*!***********************************!*\
  !*** ./~/morgan/~/debug/debug.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(/*! ms */ 104);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 104 */
/*!****************************************!*\
  !*** ./~/morgan/~/debug/~/ms/index.js ***!
  \****************************************/
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 105 */
/*!**********************************!*\
  !*** ./~/morgan/~/depd/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var callSiteToString = __webpack_require__(/*! ./lib/compat */ 106).callSiteToString
	var EventEmitter = __webpack_require__(/*! events */ 3).EventEmitter
	var relative = __webpack_require__(/*! path */ 20).relative
	
	/**
	 * Module exports.
	 */
	
	module.exports = depd
	
	/**
	 * Get the path to base files on.
	 */
	
	var basePath = process.cwd()
	
	/**
	 * Get listener count on event emitter.
	 */
	
	/*istanbul ignore next*/
	var eventListenerCount = EventEmitter.listenerCount
	  || function (emitter, type) { return emitter.listeners(type).length }
	
	/**
	 * Determine if namespace is contained in the string.
	 */
	
	function containsNamespace(str, namespace) {
	  var val = str.split(/[ ,]+/)
	
	  namespace = String(namespace).toLowerCase()
	
	  for (var i = 0 ; i < val.length; i++) {
	    if (!(str = val[i])) continue;
	
	    // namespace contained
	    if (str === '*' || str.toLowerCase() === namespace) {
	      return true
	    }
	  }
	
	  return false
	}
	
	/**
	 * Convert a data descriptor to accessor descriptor.
	 */
	
	function convertDataDescriptorToAccessor(obj, prop, message) {
	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
	  var value = descriptor.value
	
	  descriptor.get = function getter() { return value }
	
	  if (descriptor.writable) {
	    descriptor.set = function setter(val) { return value = val }
	  }
	
	  delete descriptor.value
	  delete descriptor.writable
	
	  Object.defineProperty(obj, prop, descriptor)
	
	  return descriptor
	}
	
	/**
	 * Create arguments string to keep arity.
	 */
	
	function createArgumentsString(arity) {
	  var str = ''
	
	  for (var i = 0; i < arity; i++) {
	    str += ', arg' + i
	  }
	
	  return str.substr(2)
	}
	
	/**
	 * Create stack string from stack.
	 */
	
	function createStackString(stack) {
	  var str = this.name + ': ' + this.namespace
	
	  if (this.message) {
	    str += ' deprecated ' + this.message
	  }
	
	  for (var i = 0; i < stack.length; i++) {
	    str += '\n    at ' + callSiteToString(stack[i])
	  }
	
	  return str
	}
	
	/**
	 * Create deprecate for namespace in caller.
	 */
	
	function depd(namespace) {
	  if (!namespace) {
	    throw new TypeError('argument namespace is required')
	  }
	
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	  var file = site[0]
	
	  function deprecate(message) {
	    // call to self as log
	    log.call(deprecate, message)
	  }
	
	  deprecate._file = file
	  deprecate._ignored = isignored(namespace)
	  deprecate._namespace = namespace
	  deprecate._traced = istraced(namespace)
	  deprecate._warned = Object.create(null)
	
	  deprecate.function = wrapfunction
	  deprecate.property = wrapproperty
	
	  return deprecate
	}
	
	/**
	 * Determine if namespace is ignored.
	 */
	
	function isignored(namespace) {
	  /* istanbul ignore next: tested in a child processs */
	  if (process.noDeprecation) {
	    // --no-deprecation support
	    return true
	  }
	
	  var str = process.env.NO_DEPRECATION || ''
	
	  // namespace ignored
	  return containsNamespace(str, namespace)
	}
	
	/**
	 * Determine if namespace is traced.
	 */
	
	function istraced(namespace) {
	  /* istanbul ignore next: tested in a child processs */
	  if (process.traceDeprecation) {
	    // --trace-deprecation support
	    return true
	  }
	
	  var str = process.env.TRACE_DEPRECATION || ''
	
	  // namespace traced
	  return containsNamespace(str, namespace)
	}
	
	/**
	 * Display deprecation message.
	 */
	
	function log(message, site) {
	  var haslisteners = eventListenerCount(process, 'deprecation') !== 0
	
	  // abort early if no destination
	  if (!haslisteners && this._ignored) {
	    return
	  }
	
	  var caller
	  var callFile
	  var callSite
	  var i = 0
	  var seen = false
	  var stack = getStack()
	  var file = this._file
	
	  if (site) {
	    // provided site
	    callSite = callSiteLocation(stack[1])
	    callSite.name = site.name
	    file = callSite[0]
	  } else {
	    // get call site
	    i = 2
	    site = callSiteLocation(stack[i])
	    callSite = site
	  }
	
	  // get caller of deprecated thing in relation to file
	  for (; i < stack.length; i++) {
	    caller = callSiteLocation(stack[i])
	    callFile = caller[0]
	
	    if (callFile === file) {
	      seen = true
	    } else if (callFile === this._file) {
	      file = this._file
	    } else if (seen) {
	      break
	    }
	  }
	
	  var key = caller
	    ? site.join(':') + '__' + caller.join(':')
	    : undefined
	
	  if (key !== undefined && key in this._warned) {
	    // already warned
	    return
	  }
	
	  this._warned[key] = true
	
	  // generate automatic message from call site
	  if (!message) {
	    message = callSite === site || !callSite.name
	      ? defaultMessage(site)
	      : defaultMessage(callSite)
	  }
	
	  // emit deprecation if listeners exist
	  if (haslisteners) {
	    var err = DeprecationError(this._namespace, message, stack.slice(i))
	    process.emit('deprecation', err)
	    return
	  }
	
	  // format and write message
	  var format = process.stderr.isTTY
	    ? formatColor
	    : formatPlain
	  var msg = format.call(this, message, caller, stack.slice(i))
	  process.stderr.write(msg + '\n', 'utf8')
	
	  return
	}
	
	/**
	 * Get call site location as array.
	 */
	
	function callSiteLocation(callSite) {
	  var file = callSite.getFileName() || '<anonymous>'
	  var line = callSite.getLineNumber()
	  var colm = callSite.getColumnNumber()
	
	  if (callSite.isEval()) {
	    file = callSite.getEvalOrigin() + ', ' + file
	  }
	
	  var site = [file, line, colm]
	
	  site.callSite = callSite
	  site.name = callSite.getFunctionName()
	
	  return site
	}
	
	/**
	 * Generate a default message from the site.
	 */
	
	function defaultMessage(site) {
	  var callSite = site.callSite
	  var funcName = site.name
	
	  // make useful anonymous name
	  if (!funcName) {
	    funcName = '<anonymous@' + formatLocation(site) + '>'
	  }
	
	  var context = callSite.getThis()
	  var typeName = context && callSite.getTypeName()
	
	  // ignore useless type name
	  if (typeName === 'Object') {
	    typeName = undefined
	  }
	
	  // make useful type name
	  if (typeName === 'Function') {
	    typeName = context.name || typeName
	  }
	
	  return typeName && callSite.getMethodName()
	    ? typeName + '.' + funcName
	    : funcName
	}
	
	/**
	 * Format deprecation message without color.
	 */
	
	function formatPlain(msg, caller, stack) {
	  var timestamp = new Date().toUTCString()
	
	  var formatted = timestamp
	    + ' ' + this._namespace
	    + ' deprecated ' + msg
	
	  // add stack trace
	  if (this._traced) {
	    for (var i = 0; i < stack.length; i++) {
	      formatted += '\n    at ' + callSiteToString(stack[i])
	    }
	
	    return formatted
	  }
	
	  if (caller) {
	    formatted += ' at ' + formatLocation(caller)
	  }
	
	  return formatted
	}
	
	/**
	 * Format deprecation message with color.
	 */
	
	function formatColor(msg, caller, stack) {
	  var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' // bold cyan
	    + ' \x1b[33;1mdeprecated\x1b[22;39m' // bold yellow
	    + ' \x1b[0m' + msg + '\x1b[39m' // reset
	
	  // add stack trace
	  if (this._traced) {
	    for (var i = 0; i < stack.length; i++) {
	      formatted += '\n    \x1b[36mat ' + callSiteToString(stack[i]) + '\x1b[39m' // cyan
	    }
	
	    return formatted
	  }
	
	  if (caller) {
	    formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m' // cyan
	  }
	
	  return formatted
	}
	
	/**
	 * Format call site location.
	 */
	
	function formatLocation(callSite) {
	  return relative(basePath, callSite[0])
	    + ':' + callSite[1]
	    + ':' + callSite[2]
	}
	
	/**
	 * Get the stack as array of call sites.
	 */
	
	function getStack() {
	  var limit = Error.stackTraceLimit
	  var obj = {}
	  var prep = Error.prepareStackTrace
	
	  Error.prepareStackTrace = prepareObjectStackTrace
	  Error.stackTraceLimit = Math.max(10, limit)
	
	  // capture the stack
	  Error.captureStackTrace(obj)
	
	  // slice this function off the top
	  var stack = obj.stack.slice(1)
	
	  Error.prepareStackTrace = prep
	  Error.stackTraceLimit = limit
	
	  return stack
	}
	
	/**
	 * Capture call site stack from v8.
	 */
	
	function prepareObjectStackTrace(obj, stack) {
	  return stack
	}
	
	/**
	 * Return a wrapped function in a deprecation message.
	 */
	
	function wrapfunction(fn, message) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('argument fn must be a function')
	  }
	
	  var args = createArgumentsString(fn.length)
	  var deprecate = this
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	
	  site.name = fn.name
	
	  var deprecatedfn = eval('(function (' + args + ') {\n'
	    + '"use strict"\n'
	    + 'log.call(deprecate, message, site)\n'
	    + 'return fn.apply(this, arguments)\n'
	    + '})')
	
	  return deprecatedfn
	}
	
	/**
	 * Wrap property in a deprecation message.
	 */
	
	function wrapproperty(obj, prop, message) {
	  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
	    throw new TypeError('argument obj must be object')
	  }
	
	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
	
	  if (!descriptor) {
	    throw new TypeError('must call property on owner object')
	  }
	
	  if (!descriptor.configurable) {
	    throw new TypeError('property must be configurable')
	  }
	
	  var deprecate = this
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	
	  // set site name
	  site.name = prop
	
	  // convert data descriptor
	  if ('value' in descriptor) {
	    descriptor = convertDataDescriptorToAccessor(obj, prop, message)
	  }
	
	  var get = descriptor.get
	  var set = descriptor.set
	
	  // wrap getter
	  if (typeof get === 'function') {
	    descriptor.get = function getter() {
	      log.call(deprecate, message, site)
	      return get.apply(this, arguments)
	    }
	  }
	
	  // wrap setter
	  if (typeof set === 'function') {
	    descriptor.set = function setter() {
	      log.call(deprecate, message, site)
	      return set.apply(this, arguments)
	    }
	  }
	
	  Object.defineProperty(obj, prop, descriptor)
	}
	
	/**
	 * Create DeprecationError for deprecation
	 */
	
	function DeprecationError(namespace, message, stack) {
	  var error = new Error()
	  var stackString
	
	  Object.defineProperty(error, 'constructor', {
	    value: DeprecationError
	  })
	
	  Object.defineProperty(error, 'message', {
	    configurable: true,
	    enumerable: false,
	    value: message,
	    writable: true
	  })
	
	  Object.defineProperty(error, 'name', {
	    enumerable: false,
	    configurable: true,
	    value: 'DeprecationError',
	    writable: true
	  })
	
	  Object.defineProperty(error, 'namespace', {
	    configurable: true,
	    enumerable: false,
	    value: namespace,
	    writable: true
	  })
	
	  Object.defineProperty(error, 'stack', {
	    configurable: true,
	    enumerable: false,
	    get: function () {
	      if (stackString !== undefined) {
	        return stackString
	      }
	
	      // prepare stack trace
	      return stackString = createStackString.call(this, stack)
	    },
	    set: function setter(val) {
	      stackString = val
	    }
	  })
	
	  return error
	}


/***/ },
/* 106 */
/*!*********************************************!*\
  !*** ./~/morgan/~/depd/lib/compat/index.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	lazyProperty(module.exports, 'bufferConcat', function bufferConcat() {
	  return Buffer.concat || __webpack_require__(/*! ./buffer-concat */ 107)
	})
	
	lazyProperty(module.exports, 'callSiteToString', function callSiteToString() {
	  var limit = Error.stackTraceLimit
	  var obj = {}
	  var prep = Error.prepareStackTrace
	
	  function prepareObjectStackTrace(obj, stack) {
	    return stack
	  }
	
	  Error.prepareStackTrace = prepareObjectStackTrace
	  Error.stackTraceLimit = 2
	
	  // capture the stack
	  Error.captureStackTrace(obj)
	
	  // slice the stack
	  var stack = obj.stack.slice()
	
	  Error.prepareStackTrace = prep
	  Error.stackTraceLimit = limit
	
	  return stack[0].toString ? toString : __webpack_require__(/*! ./callsite-tostring */ 108)
	})
	
	/**
	 * Define a lazy property.
	 */
	
	function lazyProperty(obj, prop, getter) {
	  function get() {
	    var val = getter()
	
	    Object.defineProperty(obj, prop, {
	      configurable: true,
	      enumerable: true,
	      value: val
	    })
	
	    return val
	  }
	
	  Object.defineProperty(obj, prop, {
	    configurable: true,
	    enumerable: true,
	    get: get
	  })
	}
	
	/**
	 * Call toString() on the obj
	 */
	
	function toString(obj) {
	  return obj.toString()
	}


/***/ },
/* 107 */
/*!*****************************************************!*\
  !*** ./~/morgan/~/depd/lib/compat/buffer-concat.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = bufferConcat
	
	/**
	 * Concatenate an array of Buffers.
	 */
	
	function bufferConcat(bufs) {
	  var length = 0
	
	  for (var i = 0, len = bufs.length; i < len; i++) {
	    length += bufs[i].length
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	
	  for (var i = 0, len = bufs.length; i < len; i++) {
	    bufs[i].copy(buf, pos)
	    pos += bufs[i].length
	  }
	
	  return buf
	}


/***/ },
/* 108 */
/*!*********************************************************!*\
  !*** ./~/morgan/~/depd/lib/compat/callsite-tostring.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = callSiteToString
	
	/**
	 * Format a CallSite file location to a string.
	 */
	
	function callSiteFileLocation(callSite) {
	  var fileName
	  var fileLocation = ''
	
	  if (callSite.isNative()) {
	    fileLocation = 'native'
	  } else if (callSite.isEval()) {
	    fileName = callSite.getScriptNameOrSourceURL()
	    if (!fileName) {
	      fileLocation = callSite.getEvalOrigin()
	    }
	  } else {
	    fileName = callSite.getFileName()
	  }
	
	  if (fileName) {
	    fileLocation += fileName
	
	    var lineNumber = callSite.getLineNumber()
	    if (lineNumber != null) {
	      fileLocation += ':' + lineNumber
	
	      var columnNumber = callSite.getColumnNumber()
	      if (columnNumber) {
	        fileLocation += ':' + columnNumber
	      }
	    }
	  }
	
	  return fileLocation || 'unknown source'
	}
	
	/**
	 * Format a CallSite to a string.
	 */
	
	function callSiteToString(callSite) {
	  var addSuffix = true
	  var fileLocation = callSiteFileLocation(callSite)
	  var functionName = callSite.getFunctionName()
	  var isConstructor = callSite.isConstructor()
	  var isMethodCall = !(callSite.isToplevel() || isConstructor)
	  var line = ''
	
	  if (isMethodCall) {
	    var methodName = callSite.getMethodName()
	    var typeName = getConstructorName(callSite)
	
	    if (functionName) {
	      if (typeName && functionName.indexOf(typeName) !== 0) {
	        line += typeName + '.'
	      }
	
	      line += functionName
	
	      if (methodName && functionName.lastIndexOf('.' + methodName) !== functionName.length - methodName.length - 1) {
	        line += ' [as ' + methodName + ']'
	      }
	    } else {
	      line += typeName + '.' + (methodName || '<anonymous>')
	    }
	  } else if (isConstructor) {
	    line += 'new ' + (functionName || '<anonymous>')
	  } else if (functionName) {
	    line += functionName
	  } else {
	    addSuffix = false
	    line += fileLocation
	  }
	
	  if (addSuffix) {
	    line += ' (' + fileLocation + ')'
	  }
	
	  return line
	}
	
	/**
	 * Get constructor name of reviver.
	 */
	
	function getConstructorName(obj) {
	  var receiver = obj.receiver
	  return (receiver.constructor && receiver.constructor.name) || null
	}


/***/ },
/* 109 */
/*!*****************************************!*\
  !*** ./~/morgan/~/on-finished/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * on-finished
	 * Copyright(c) 2013 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = onFinished;
	module.exports.isFinished = isFinished;
	
	/**
	* Module dependencies.
	*/
	
	var first = __webpack_require__(/*! ee-first */ 110)
	
	/**
	* Variables.
	*/
	
	/* istanbul ignore next */
	var defer = typeof setImmediate === 'function'
	  ? setImmediate
	  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }
	
	/**
	 * Invoke callback when the response has finished, useful for
	 * cleaning up resources afterwards.
	 *
	 * @param {object} msg
	 * @param {function} listener
	 * @return {object}
	 * @api public
	 */
	
	function onFinished(msg, listener) {
	  if (isFinished(msg) !== false) {
	    defer(listener, null, msg)
	    return msg
	  }
	
	  // attach the listener to the message
	  attachListener(msg, listener)
	
	  return msg
	}
	
	/**
	 * Determine if message is already finished.
	 *
	 * @param {object} msg
	 * @return {boolean}
	 * @api public
	 */
	
	function isFinished(msg) {
	  var socket = msg.socket
	
	  if (typeof msg.finished === 'boolean') {
	    // OutgoingMessage
	    return Boolean(msg.finished || (socket && !socket.writable))
	  }
	
	  if (typeof msg.complete === 'boolean') {
	    // IncomingMessage
	    return Boolean(!socket || !socket.readable || (msg.complete && !msg.readable))
	  }
	
	  // don't know
	  return undefined
	}
	
	/**
	 * Attach a finished listener to the message.
	 *
	 * @param {object} msg
	 * @param {function} callback
	 * @private
	 */
	
	function attachFinishedListener(msg, callback) {
	  var eeMsg
	  var eeSocket
	  var finished = false
	
	  function onFinish(error) {
	    eeMsg.cancel()
	    eeSocket.cancel()
	
	    finished = true
	    callback(error)
	  }
	
	  // finished on first message event
	  eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish)
	
	  function onSocket(socket) {
	    // remove listener
	    msg.removeListener('socket', onSocket)
	
	    if (finished) return
	    if (eeMsg !== eeSocket) return
	
	    // finished on first socket event
	    eeSocket = first([[socket, 'error', 'close']], onFinish)
	  }
	
	  if (msg.socket) {
	    // socket already assigned
	    onSocket(msg.socket)
	    return
	  }
	
	  // wait for socket to be assigned
	  msg.on('socket', onSocket)
	
	  if (msg.socket === undefined) {
	    // node.js 0.8 patch
	    patchAssignSocket(msg, onSocket)
	  }
	}
	
	/**
	 * Attach the listener to the message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @api private
	 */
	
	function attachListener(msg, listener) {
	  var attached = msg.__onFinished
	
	  // create a private single listener with queue
	  if (!attached || !attached.queue) {
	    attached = msg.__onFinished = createListener(msg)
	    attachFinishedListener(msg, attached)
	  }
	
	  attached.queue.push(listener)
	}
	
	/**
	 * Create listener on message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @api private
	 */
	
	function createListener(msg) {
	  function listener(err) {
	    if (msg.__onFinished === listener) msg.__onFinished = null
	    if (!listener.queue) return
	
	    var queue = listener.queue
	    listener.queue = null
	
	    for (var i = 0; i < queue.length; i++) {
	      queue[i](err, msg)
	    }
	  }
	
	  listener.queue = []
	
	  return listener
	}
	
	/**
	 * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
	 *
	 * @param {ServerResponse} res
	 * @param {function} callback
	 * @private
	 */
	
	function patchAssignSocket(res, callback) {
	  var assignSocket = res.assignSocket
	
	  if (typeof assignSocket !== 'function') return
	
	  // res.on('socket', callback) is broken in 0.8
	  res.assignSocket = function _assignSocket(socket) {
	    assignSocket.call(this, socket)
	    callback(socket)
	  }
	}


/***/ },
/* 110 */
/*!****************************************************!*\
  !*** ./~/morgan/~/on-finished/~/ee-first/index.js ***!
  \****************************************************/
/***/ function(module, exports) {

	
	module.exports = function first(stuff, done) {
	  if (!Array.isArray(stuff))
	    throw new TypeError('arg must be an array of [ee, events...] arrays')
	
	  var cleanups = []
	
	  for (var i = 0; i < stuff.length; i++) {
	    var arr = stuff[i]
	
	    if (!Array.isArray(arr) || arr.length < 2)
	      throw new TypeError('each array member must be [ee, events...]')
	
	    var ee = arr[0]
	
	    for (var j = 1; j < arr.length; j++) {
	      var event = arr[j]
	      var fn = listener(event, callback)
	
	      // listen to the event
	      ee.on(event, fn)
	      // push this listener to the list of cleanups
	      cleanups.push({
	        ee: ee,
	        event: event,
	        fn: fn,
	      })
	    }
	  }
	
	  function callback() {
	    cleanup()
	    done.apply(null, arguments)
	  }
	
	  function cleanup() {
	    var x
	    for (var i = 0; i < cleanups.length; i++) {
	      x = cleanups[i]
	      x.ee.removeListener(x.event, x.fn)
	    }
	  }
	
	  function thunk(fn) {
	    done = fn
	  }
	
	  thunk.cancel = cleanup
	
	  return thunk
	}
	
	function listener(event, done) {
	  return function onevent(arg1) {
	    var args = new Array(arguments.length)
	    var ee = this
	    var err = event === 'error'
	      ? arg1
	      : null
	
	    // copy args to prevent arguments escaping scope
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i]
	    }
	
	    done(err, ee, event, args)
	  }
	}


/***/ },
/* 111 */
/*!**********************************!*\
  !*** ./~/cookie-parser/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * cookie-parser
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var cookie = __webpack_require__(/*! cookie */ 112);
	var parse = __webpack_require__(/*! ./lib/parse */ 113);
	
	/**
	 * Parse Cookie header and populate `req.cookies`
	 * with an object keyed by the cookie names.
	 *
	 * @param {String} [secret]
	 * @param {Object} [options]
	 * @return {Function}
	 * @api public
	 */
	
	exports = module.exports = function cookieParser(secret, options){
	  return function cookieParser(req, res, next) {
	    if (req.cookies) return next();
	    var cookies = req.headers.cookie;
	
	    req.secret = secret;
	    req.cookies = Object.create(null);
	    req.signedCookies = Object.create(null);
	
	    // no cookies
	    if (!cookies) {
	      return next();
	    }
	
	    req.cookies = cookie.parse(cookies, options);
	
	    // parse signed cookies
	    if (secret) {
	      req.signedCookies = parse.signedCookies(req.cookies, secret);
	      req.signedCookies = parse.JSONCookies(req.signedCookies);
	    }
	
	    // parse JSON cookies
	    req.cookies = parse.JSONCookies(req.cookies);
	
	    next();
	  };
	};
	
	/**
	 * Export parsing functions.
	 */
	
	exports.JSONCookie = parse.JSONCookie;
	exports.JSONCookies = parse.JSONCookies;
	exports.signedCookie = parse.signedCookie;
	exports.signedCookies = parse.signedCookies;


/***/ },
/* 112 */
/*!*******************************************!*\
  !*** ./~/cookie-parser/~/cookie/index.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.parse = parse;
	exports.serialize = serialize;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function parse(str, options) {
	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(/; */);
	  var dec = opt.decode || decode;
	
	  pairs.forEach(function(pair) {
	    var eq_idx = pair.indexOf('=')
	
	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      return;
	    }
	
	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();
	
	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }
	
	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  });
	
	  return obj;
	}
	
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;
	  var pairs = [name + '=' + enc(val)];
	
	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    pairs.push('Max-Age=' + maxAge);
	  }
	
	  if (opt.domain) pairs.push('Domain=' + opt.domain);
	  if (opt.path) pairs.push('Path=' + opt.path);
	  if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
	  if (opt.httpOnly) pairs.push('HttpOnly');
	  if (opt.secure) pairs.push('Secure');
	
	  return pairs.join('; ');
	}
	
	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */
	
	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ },
/* 113 */
/*!**************************************!*\
  !*** ./~/cookie-parser/lib/parse.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var signature = __webpack_require__(/*! cookie-signature */ 114);
	
	/**
	 * Parse signed cookies, returning an object
	 * containing the decoded key/value pairs,
	 * while removing the signed key from `obj`.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	exports.signedCookies = function(obj, secret){
	  var cookies = Object.keys(obj);
	  var dec;
	  var key;
	  var ret = Object.create(null);
	  var val;
	
	  for (var i = 0; i < cookies.length; i++) {
	    key = cookies[i];
	    val = obj[key];
	    dec = exports.signedCookie(val, secret);
	
	    if (val !== dec) {
	      ret[key] = dec;
	      delete obj[key];
	    }
	  }
	
	  return ret;
	};
	
	/**
	 * Parse a signed cookie string, return the decoded value
	 *
	 * @param {String} str signed cookie string
	 * @param {String} secret
	 * @return {String} decoded value
	 * @api private
	 */
	
	exports.signedCookie = function(str, secret){
	  return str.substr(0, 2) === 's:'
	    ? signature.unsign(str.slice(2), secret)
	    : str;
	};
	
	/**
	 * Parse JSON cookies.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	exports.JSONCookies = function(obj){
	  var cookies = Object.keys(obj);
	  var key;
	  var val;
	
	  for (var i = 0; i < cookies.length; i++) {
	    key = cookies[i];
	    val = exports.JSONCookie(obj[key]);
	
	    if (val) {
	      obj[key] = val;
	    }
	  }
	
	  return obj;
	};
	
	/**
	 * Parse JSON cookie string
	 *
	 * @param {String} str
	 * @return {Object} Parsed object or null if not json cookie
	 * @api private
	 */
	
	exports.JSONCookie = function(str) {
	  if (!str || str.substr(0, 2) !== 'j:') return;
	
	  try {
	    return JSON.parse(str.slice(2));
	  } catch (err) {
	    // no op
	  }
	};


/***/ },
/* 114 */
/*!*****************************************************!*\
  !*** ./~/cookie-parser/~/cookie-signature/index.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var crypto = __webpack_require__(/*! crypto */ 43);
	
	/**
	 * Sign the given `val` with `secret`.
	 *
	 * @param {String} val
	 * @param {String} secret
	 * @return {String}
	 * @api private
	 */
	
	exports.sign = function(val, secret){
	  if ('string' != typeof val) throw new TypeError("Cookie value must be provided as a string.");
	  if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
	  return val + '.' + crypto
	    .createHmac('sha256', secret)
	    .update(val)
	    .digest('base64')
	    .replace(/\=+$/, '');
	};
	
	/**
	 * Unsign and decode the given `val` with `secret`,
	 * returning `false` if the signature is invalid.
	 *
	 * @param {String} val
	 * @param {String} secret
	 * @return {String|Boolean}
	 * @api private
	 */
	
	exports.unsign = function(val, secret){
	  if ('string' != typeof val) throw new TypeError("Signed cookie string must be provided.");
	  if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
	  var str = val.slice(0, val.lastIndexOf('.'))
	    , mac = exports.sign(str, secret);
	  
	  return sha1(mac) == sha1(val) ? str : false;
	};
	
	/**
	 * Private
	 */
	
	function sha1(str){
	  return crypto.createHash('sha1').update(str).digest('hex');
	}


/***/ },
/* 115 */
/*!********************************!*\
  !*** ./~/body-parser/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {/*!
	 * body-parser
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var deprecate = __webpack_require__(/*! depd */ 116)('body-parser')
	var fs = __webpack_require__(/*! fs */ 12)
	var path = __webpack_require__(/*! path */ 20)
	
	/**
	 * @typedef Parsers
	 * @type {function}
	 * @property {function} json
	 * @property {function} raw
	 * @property {function} text
	 * @property {function} urlencoded
	 */
	
	/**
	 * Module exports.
	 * @type {Parsers}
	 */
	
	exports = module.exports = deprecate.function(bodyParser,
	  'bodyParser: use individual json/urlencoded middlewares')
	
	/**
	 * Path to the parser modules.
	 */
	
	var parsersDir = path.join(__dirname, 'lib', 'types')
	
	/**
	 * Auto-load bundled parsers with getters.
	 */
	
	fs.readdirSync(parsersDir).forEach(function onfilename(filename) {
	  if (!/\.js$/.test(filename)) return
	
	  var loc = path.resolve(parsersDir, filename)
	  var mod
	  var name = path.basename(filename, '.js')
	
	  function load() {
	    if (mod) {
	      return mod
	    }
	
	    return mod = __webpack_require__(/*! . */ 120)(loc)
	  }
	
	  Object.defineProperty(exports, name, {
	    configurable: true,
	    enumerable: true,
	    get: load
	  })
	})
	
	/**
	 * Create a middleware to parse json and urlencoded bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @deprecated
	 * @api public
	 */
	
	function bodyParser(options){
	  var opts = {}
	
	  options = options || {}
	
	  // exclude type option
	  for (var prop in options) {
	    if ('type' !== prop) {
	      opts[prop] = options[prop]
	    }
	  }
	
	  var _urlencoded = exports.urlencoded(opts)
	  var _json = exports.json(opts)
	
	  return function bodyParser(req, res, next) {
	    _json(req, res, function(err){
	      if (err) return next(err);
	      _urlencoded(req, res, next);
	    });
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 116 */
/*!***************************************!*\
  !*** ./~/body-parser/~/depd/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var callSiteToString = __webpack_require__(/*! ./lib/compat */ 117).callSiteToString
	var EventEmitter = __webpack_require__(/*! events */ 3).EventEmitter
	var relative = __webpack_require__(/*! path */ 20).relative
	
	/**
	 * Module exports.
	 */
	
	module.exports = depd
	
	/**
	 * Get the path to base files on.
	 */
	
	var basePath = process.cwd()
	
	/**
	 * Get listener count on event emitter.
	 */
	
	/*istanbul ignore next*/
	var eventListenerCount = EventEmitter.listenerCount
	  || function (emitter, type) { return emitter.listeners(type).length }
	
	/**
	 * Determine if namespace is contained in the string.
	 */
	
	function containsNamespace(str, namespace) {
	  var val = str.split(/[ ,]+/)
	
	  namespace = String(namespace).toLowerCase()
	
	  for (var i = 0 ; i < val.length; i++) {
	    if (!(str = val[i])) continue;
	
	    // namespace contained
	    if (str === '*' || str.toLowerCase() === namespace) {
	      return true
	    }
	  }
	
	  return false
	}
	
	/**
	 * Convert a data descriptor to accessor descriptor.
	 */
	
	function convertDataDescriptorToAccessor(obj, prop, message) {
	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
	  var value = descriptor.value
	
	  descriptor.get = function getter() { return value }
	
	  if (descriptor.writable) {
	    descriptor.set = function setter(val) { return value = val }
	  }
	
	  delete descriptor.value
	  delete descriptor.writable
	
	  Object.defineProperty(obj, prop, descriptor)
	
	  return descriptor
	}
	
	/**
	 * Create arguments string to keep arity.
	 */
	
	function createArgumentsString(arity) {
	  var str = ''
	
	  for (var i = 0; i < arity; i++) {
	    str += ', arg' + i
	  }
	
	  return str.substr(2)
	}
	
	/**
	 * Create stack string from stack.
	 */
	
	function createStackString(stack) {
	  var str = this.name + ': ' + this.namespace
	
	  if (this.message) {
	    str += ' deprecated ' + this.message
	  }
	
	  for (var i = 0; i < stack.length; i++) {
	    str += '\n    at ' + callSiteToString(stack[i])
	  }
	
	  return str
	}
	
	/**
	 * Create deprecate for namespace in caller.
	 */
	
	function depd(namespace) {
	  if (!namespace) {
	    throw new TypeError('argument namespace is required')
	  }
	
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	  var file = site[0]
	
	  function deprecate(message) {
	    // call to self as log
	    log.call(deprecate, message)
	  }
	
	  deprecate._file = file
	  deprecate._ignored = isignored(namespace)
	  deprecate._namespace = namespace
	  deprecate._traced = istraced(namespace)
	  deprecate._warned = Object.create(null)
	
	  deprecate.function = wrapfunction
	  deprecate.property = wrapproperty
	
	  return deprecate
	}
	
	/**
	 * Determine if namespace is ignored.
	 */
	
	function isignored(namespace) {
	  /* istanbul ignore next: tested in a child processs */
	  if (process.noDeprecation) {
	    // --no-deprecation support
	    return true
	  }
	
	  var str = process.env.NO_DEPRECATION || ''
	
	  // namespace ignored
	  return containsNamespace(str, namespace)
	}
	
	/**
	 * Determine if namespace is traced.
	 */
	
	function istraced(namespace) {
	  /* istanbul ignore next: tested in a child processs */
	  if (process.traceDeprecation) {
	    // --trace-deprecation support
	    return true
	  }
	
	  var str = process.env.TRACE_DEPRECATION || ''
	
	  // namespace traced
	  return containsNamespace(str, namespace)
	}
	
	/**
	 * Display deprecation message.
	 */
	
	function log(message, site) {
	  var haslisteners = eventListenerCount(process, 'deprecation') !== 0
	
	  // abort early if no destination
	  if (!haslisteners && this._ignored) {
	    return
	  }
	
	  var caller
	  var callFile
	  var callSite
	  var i = 0
	  var seen = false
	  var stack = getStack()
	  var file = this._file
	
	  if (site) {
	    // provided site
	    callSite = callSiteLocation(stack[1])
	    callSite.name = site.name
	    file = callSite[0]
	  } else {
	    // get call site
	    i = 2
	    site = callSiteLocation(stack[i])
	    callSite = site
	  }
	
	  // get caller of deprecated thing in relation to file
	  for (; i < stack.length; i++) {
	    caller = callSiteLocation(stack[i])
	    callFile = caller[0]
	
	    if (callFile === file) {
	      seen = true
	    } else if (callFile === this._file) {
	      file = this._file
	    } else if (seen) {
	      break
	    }
	  }
	
	  var key = caller
	    ? site.join(':') + '__' + caller.join(':')
	    : undefined
	
	  if (key !== undefined && key in this._warned) {
	    // already warned
	    return
	  }
	
	  this._warned[key] = true
	
	  // generate automatic message from call site
	  if (!message) {
	    message = callSite === site || !callSite.name
	      ? defaultMessage(site)
	      : defaultMessage(callSite)
	  }
	
	  // emit deprecation if listeners exist
	  if (haslisteners) {
	    var err = DeprecationError(this._namespace, message, stack.slice(i))
	    process.emit('deprecation', err)
	    return
	  }
	
	  // format and write message
	  var format = process.stderr.isTTY
	    ? formatColor
	    : formatPlain
	  var msg = format.call(this, message, caller, stack.slice(i))
	  process.stderr.write(msg + '\n', 'utf8')
	
	  return
	}
	
	/**
	 * Get call site location as array.
	 */
	
	function callSiteLocation(callSite) {
	  var file = callSite.getFileName() || '<anonymous>'
	  var line = callSite.getLineNumber()
	  var colm = callSite.getColumnNumber()
	
	  if (callSite.isEval()) {
	    file = callSite.getEvalOrigin() + ', ' + file
	  }
	
	  var site = [file, line, colm]
	
	  site.callSite = callSite
	  site.name = callSite.getFunctionName()
	
	  return site
	}
	
	/**
	 * Generate a default message from the site.
	 */
	
	function defaultMessage(site) {
	  var callSite = site.callSite
	  var funcName = site.name
	
	  // make useful anonymous name
	  if (!funcName) {
	    funcName = '<anonymous@' + formatLocation(site) + '>'
	  }
	
	  var context = callSite.getThis()
	  var typeName = context && callSite.getTypeName()
	
	  // ignore useless type name
	  if (typeName === 'Object') {
	    typeName = undefined
	  }
	
	  // make useful type name
	  if (typeName === 'Function') {
	    typeName = context.name || typeName
	  }
	
	  return typeName && callSite.getMethodName()
	    ? typeName + '.' + funcName
	    : funcName
	}
	
	/**
	 * Format deprecation message without color.
	 */
	
	function formatPlain(msg, caller, stack) {
	  var timestamp = new Date().toUTCString()
	
	  var formatted = timestamp
	    + ' ' + this._namespace
	    + ' deprecated ' + msg
	
	  // add stack trace
	  if (this._traced) {
	    for (var i = 0; i < stack.length; i++) {
	      formatted += '\n    at ' + callSiteToString(stack[i])
	    }
	
	    return formatted
	  }
	
	  if (caller) {
	    formatted += ' at ' + formatLocation(caller)
	  }
	
	  return formatted
	}
	
	/**
	 * Format deprecation message with color.
	 */
	
	function formatColor(msg, caller, stack) {
	  var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' // bold cyan
	    + ' \x1b[33;1mdeprecated\x1b[22;39m' // bold yellow
	    + ' \x1b[0m' + msg + '\x1b[39m' // reset
	
	  // add stack trace
	  if (this._traced) {
	    for (var i = 0; i < stack.length; i++) {
	      formatted += '\n    \x1b[36mat ' + callSiteToString(stack[i]) + '\x1b[39m' // cyan
	    }
	
	    return formatted
	  }
	
	  if (caller) {
	    formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m' // cyan
	  }
	
	  return formatted
	}
	
	/**
	 * Format call site location.
	 */
	
	function formatLocation(callSite) {
	  return relative(basePath, callSite[0])
	    + ':' + callSite[1]
	    + ':' + callSite[2]
	}
	
	/**
	 * Get the stack as array of call sites.
	 */
	
	function getStack() {
	  var limit = Error.stackTraceLimit
	  var obj = {}
	  var prep = Error.prepareStackTrace
	
	  Error.prepareStackTrace = prepareObjectStackTrace
	  Error.stackTraceLimit = Math.max(10, limit)
	
	  // capture the stack
	  Error.captureStackTrace(obj)
	
	  // slice this function off the top
	  var stack = obj.stack.slice(1)
	
	  Error.prepareStackTrace = prep
	  Error.stackTraceLimit = limit
	
	  return stack
	}
	
	/**
	 * Capture call site stack from v8.
	 */
	
	function prepareObjectStackTrace(obj, stack) {
	  return stack
	}
	
	/**
	 * Return a wrapped function in a deprecation message.
	 */
	
	function wrapfunction(fn, message) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('argument fn must be a function')
	  }
	
	  var args = createArgumentsString(fn.length)
	  var deprecate = this
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	
	  site.name = fn.name
	
	  var deprecatedfn = eval('(function (' + args + ') {\n'
	    + '"use strict"\n'
	    + 'log.call(deprecate, message, site)\n'
	    + 'return fn.apply(this, arguments)\n'
	    + '})')
	
	  return deprecatedfn
	}
	
	/**
	 * Wrap property in a deprecation message.
	 */
	
	function wrapproperty(obj, prop, message) {
	  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
	    throw new TypeError('argument obj must be object')
	  }
	
	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
	
	  if (!descriptor) {
	    throw new TypeError('must call property on owner object')
	  }
	
	  if (!descriptor.configurable) {
	    throw new TypeError('property must be configurable')
	  }
	
	  var deprecate = this
	  var stack = getStack()
	  var site = callSiteLocation(stack[1])
	
	  // set site name
	  site.name = prop
	
	  // convert data descriptor
	  if ('value' in descriptor) {
	    descriptor = convertDataDescriptorToAccessor(obj, prop, message)
	  }
	
	  var get = descriptor.get
	  var set = descriptor.set
	
	  // wrap getter
	  if (typeof get === 'function') {
	    descriptor.get = function getter() {
	      log.call(deprecate, message, site)
	      return get.apply(this, arguments)
	    }
	  }
	
	  // wrap setter
	  if (typeof set === 'function') {
	    descriptor.set = function setter() {
	      log.call(deprecate, message, site)
	      return set.apply(this, arguments)
	    }
	  }
	
	  Object.defineProperty(obj, prop, descriptor)
	}
	
	/**
	 * Create DeprecationError for deprecation
	 */
	
	function DeprecationError(namespace, message, stack) {
	  var error = new Error()
	  var stackString
	
	  Object.defineProperty(error, 'constructor', {
	    value: DeprecationError
	  })
	
	  Object.defineProperty(error, 'message', {
	    configurable: true,
	    enumerable: false,
	    value: message,
	    writable: true
	  })
	
	  Object.defineProperty(error, 'name', {
	    enumerable: false,
	    configurable: true,
	    value: 'DeprecationError',
	    writable: true
	  })
	
	  Object.defineProperty(error, 'namespace', {
	    configurable: true,
	    enumerable: false,
	    value: namespace,
	    writable: true
	  })
	
	  Object.defineProperty(error, 'stack', {
	    configurable: true,
	    enumerable: false,
	    get: function () {
	      if (stackString !== undefined) {
	        return stackString
	      }
	
	      // prepare stack trace
	      return stackString = createStackString.call(this, stack)
	    },
	    set: function setter(val) {
	      stackString = val
	    }
	  })
	
	  return error
	}


/***/ },
/* 117 */
/*!**************************************************!*\
  !*** ./~/body-parser/~/depd/lib/compat/index.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	lazyProperty(module.exports, 'bufferConcat', function bufferConcat() {
	  return Buffer.concat || __webpack_require__(/*! ./buffer-concat */ 118)
	})
	
	lazyProperty(module.exports, 'callSiteToString', function callSiteToString() {
	  var limit = Error.stackTraceLimit
	  var obj = {}
	  var prep = Error.prepareStackTrace
	
	  function prepareObjectStackTrace(obj, stack) {
	    return stack
	  }
	
	  Error.prepareStackTrace = prepareObjectStackTrace
	  Error.stackTraceLimit = 2
	
	  // capture the stack
	  Error.captureStackTrace(obj)
	
	  // slice the stack
	  var stack = obj.stack.slice()
	
	  Error.prepareStackTrace = prep
	  Error.stackTraceLimit = limit
	
	  return stack[0].toString ? toString : __webpack_require__(/*! ./callsite-tostring */ 119)
	})
	
	/**
	 * Define a lazy property.
	 */
	
	function lazyProperty(obj, prop, getter) {
	  function get() {
	    var val = getter()
	
	    Object.defineProperty(obj, prop, {
	      configurable: true,
	      enumerable: true,
	      value: val
	    })
	
	    return val
	  }
	
	  Object.defineProperty(obj, prop, {
	    configurable: true,
	    enumerable: true,
	    get: get
	  })
	}
	
	/**
	 * Call toString() on the obj
	 */
	
	function toString(obj) {
	  return obj.toString()
	}


/***/ },
/* 118 */
/*!**********************************************************!*\
  !*** ./~/body-parser/~/depd/lib/compat/buffer-concat.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = bufferConcat
	
	/**
	 * Concatenate an array of Buffers.
	 */
	
	function bufferConcat(bufs) {
	  var length = 0
	
	  for (var i = 0, len = bufs.length; i < len; i++) {
	    length += bufs[i].length
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	
	  for (var i = 0, len = bufs.length; i < len; i++) {
	    bufs[i].copy(buf, pos)
	    pos += bufs[i].length
	  }
	
	  return buf
	}


/***/ },
/* 119 */
/*!**************************************************************!*\
  !*** ./~/body-parser/~/depd/lib/compat/callsite-tostring.js ***!
  \**************************************************************/
/***/ function(module, exports) {

	/*!
	 * depd
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = callSiteToString
	
	/**
	 * Format a CallSite file location to a string.
	 */
	
	function callSiteFileLocation(callSite) {
	  var fileName
	  var fileLocation = ''
	
	  if (callSite.isNative()) {
	    fileLocation = 'native'
	  } else if (callSite.isEval()) {
	    fileName = callSite.getScriptNameOrSourceURL()
	    if (!fileName) {
	      fileLocation = callSite.getEvalOrigin()
	    }
	  } else {
	    fileName = callSite.getFileName()
	  }
	
	  if (fileName) {
	    fileLocation += fileName
	
	    var lineNumber = callSite.getLineNumber()
	    if (lineNumber != null) {
	      fileLocation += ':' + lineNumber
	
	      var columnNumber = callSite.getColumnNumber()
	      if (columnNumber) {
	        fileLocation += ':' + columnNumber
	      }
	    }
	  }
	
	  return fileLocation || 'unknown source'
	}
	
	/**
	 * Format a CallSite to a string.
	 */
	
	function callSiteToString(callSite) {
	  var addSuffix = true
	  var fileLocation = callSiteFileLocation(callSite)
	  var functionName = callSite.getFunctionName()
	  var isConstructor = callSite.isConstructor()
	  var isMethodCall = !(callSite.isToplevel() || isConstructor)
	  var line = ''
	
	  if (isMethodCall) {
	    var methodName = callSite.getMethodName()
	    var typeName = getConstructorName(callSite)
	
	    if (functionName) {
	      if (typeName && functionName.indexOf(typeName) !== 0) {
	        line += typeName + '.'
	      }
	
	      line += functionName
	
	      if (methodName && functionName.lastIndexOf('.' + methodName) !== functionName.length - methodName.length - 1) {
	        line += ' [as ' + methodName + ']'
	      }
	    } else {
	      line += typeName + '.' + (methodName || '<anonymous>')
	    }
	  } else if (isConstructor) {
	    line += 'new ' + (functionName || '<anonymous>')
	  } else if (functionName) {
	    line += functionName
	  } else {
	    addSuffix = false
	    line += fileLocation
	  }
	
	  if (addSuffix) {
	    line += ' (' + fileLocation + ')'
	  }
	
	  return line
	}
	
	/**
	 * Get constructor name of reviver.
	 */
	
	function getConstructorName(obj) {
	  var receiver = obj.receiver
	  return (receiver.constructor && receiver.constructor.name) || null
	}


/***/ },
/* 120 */
/*!********************************!*\
  !*** ./~/body-parser ^\.\/.*$ ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./index": 115,
		"./index.js": 115,
		"./lib/read": 124,
		"./lib/read.js": 124,
		"./lib/types/json": 144,
		"./lib/types/json.js": 144,
		"./lib/types/raw": 148,
		"./lib/types/raw.js": 148,
		"./lib/types/text": 149,
		"./lib/types/text.js": 149,
		"./lib/types/urlencoded": 150,
		"./lib/types/urlencoded.js": 150
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 120;


/***/ },
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/*!***********************************!*\
  !*** ./~/body-parser/lib/read.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * body-parser
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var getBody = __webpack_require__(/*! raw-body */ 125)
	var iconv = __webpack_require__(/*! iconv-lite */ 127)
	var onFinished = __webpack_require__(/*! on-finished */ 140)
	var typer = __webpack_require__(/*! media-typer */ 142)
	var zlib = __webpack_require__(/*! zlib */ 143)
	
	/**
	 * Module exports.
	 */
	
	module.exports = read
	
	/**
	 * Read a request into a buffer and parse.
	 *
	 * @param {object} req
	 * @param {object} res
	 * @param {function} next
	 * @param {function} parse
	 * @param {object} options
	 * @api private
	 */
	
	function read(req, res, next, parse, options) {
	  var length
	  var stream
	
	  // flag as parsed
	  req._body = true
	
	  try {
	    stream = contentstream(req, options.inflate)
	    length = stream.length
	    delete stream.length
	  } catch (err) {
	    return next(err)
	  }
	
	  options = options || {}
	  options.length = length
	
	  var encoding = options.encoding !== null
	    ? options.encoding || 'utf-8'
	    : null
	  var verify = options.verify
	
	  options.encoding = verify
	    ? null
	    : encoding
	
	  // read body
	  getBody(stream, options, function (err, body) {
	    if (err) {
	      if (!err.status) {
	        err.status = 400
	      }
	
	      // echo back charset
	      if (err.type === 'encoding.unsupported') {
	        err = new Error('unsupported charset "' + encoding.toUpperCase() + '"')
	        err.charset = encoding.toLowerCase()
	        err.status = 415
	      }
	
	      // read off entire request
	      stream.resume()
	      onFinished(req, function onfinished() {
	        next(err)
	      })
	      return
	    }
	
	    // verify
	    if (verify) {
	      try {
	        verify(req, res, body, encoding)
	      } catch (err) {
	        if (!err.status) err.status = 403
	        return next(err)
	      }
	    }
	
	    // parse
	    try {
	      body = typeof body !== 'string' && encoding !== null
	        ? iconv.decode(body, encoding)
	        : body
	      req.body = parse(body)
	    } catch (err) {
	      if (!err.status) {
	        err.body = body
	        err.status = 400
	      }
	      return next(err)
	    }
	
	    next()
	  })
	}
	
	/**
	 * Get the content stream of the request.
	 *
	 * @param {object} req
	 * @param {boolean} [inflate=true]
	 * @return {object}
	 * @api private
	 */
	
	function contentstream(req, inflate) {
	  var encoding = (req.headers['content-encoding'] || 'identity').toLowerCase()
	  var err
	  var length = req.headers['content-length']
	  var stream
	
	  if (inflate === false && encoding !== 'identity') {
	    err = new Error('content encoding unsupported')
	    err.status = 415
	    throw err
	  }
	
	  switch (encoding) {
	    case 'deflate':
	      stream = zlib.createInflate()
	      req.pipe(stream)
	      break
	    case 'gzip':
	      stream = zlib.createGunzip()
	      req.pipe(stream)
	      break
	    case 'identity':
	      stream = req
	      stream.length = length
	      break
	    default:
	      err = new Error('unsupported content encoding "' + encoding + '"')
	      err.encoding = encoding
	      err.status = 415
	      throw err
	  }
	
	  return stream
	}


/***/ },
/* 125 */
/*!*******************************************!*\
  !*** ./~/body-parser/~/raw-body/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var bytes = __webpack_require__(/*! bytes */ 126)
	var iconv = __webpack_require__(/*! iconv-lite */ 127)
	
	module.exports = function (stream, options, done) {
	  if (options === true || typeof options === 'string') {
	    // short cut for encoding
	    options = {
	      encoding: options
	    }
	  }
	
	  options = options || {}
	
	  if (typeof options === 'function') {
	    done = options
	    options = {}
	  }
	
	  // get encoding
	  var encoding = options.encoding !== true
	    ? options.encoding
	    : 'utf-8'
	
	  // convert the limit to an integer
	  var limit = null
	  if (typeof options.limit === 'number')
	    limit = options.limit
	  if (typeof options.limit === 'string')
	    limit = bytes(options.limit)
	
	  // convert the expected length to an integer
	  var length = null
	  if (options.length != null && !isNaN(options.length))
	    length = parseInt(options.length, 10)
	
	  // check the length and limit options.
	  // note: we intentionally leave the stream paused,
	  // so users should handle the stream themselves.
	  if (limit !== null && length !== null && length > limit) {
	    var err = makeError('request entity too large', 'entity.too.large')
	    err.status = err.statusCode = 413
	    err.length = err.expected = length
	    err.limit = limit
	    cleanup()
	    halt(stream)
	    process.nextTick(function () {
	      done(err)
	    })
	    return defer
	  }
	
	  // streams1: assert request encoding is buffer.
	  // streams2+: assert the stream encoding is buffer.
	  //   stream._decoder: streams1
	  //   state.encoding: streams2
	  //   state.decoder: streams2, specifically < 0.10.6
	  var state = stream._readableState
	  if (stream._decoder || (state && (state.encoding || state.decoder))) {
	    // developer error
	    var err = makeError('stream encoding should not be set',
	      'stream.encoding.set')
	    err.status = err.statusCode = 500
	    cleanup()
	    halt(stream)
	    process.nextTick(function () {
	      done(err)
	    })
	    return defer
	  }
	
	  var received = 0
	  var decoder
	
	  try {
	    decoder = getDecoder(encoding)
	  } catch (err) {
	    cleanup()
	    halt(stream)
	    process.nextTick(function () {
	      done(err)
	    })
	    return defer
	  }
	
	  var buffer = decoder
	    ? ''
	    : []
	
	  stream.on('data', onData)
	  stream.once('end', onEnd)
	  stream.once('error', onEnd)
	  stream.once('close', cleanup)
	
	  return defer
	
	  // yieldable support
	  function defer(fn) {
	    done = fn
	  }
	
	  function onData(chunk) {
	    received += chunk.length
	    decoder
	      ? buffer += decoder.write(chunk)
	      : buffer.push(chunk)
	
	    if (limit !== null && received > limit) {
	      var err = makeError('request entity too large', 'entity.too.large')
	      err.status = err.statusCode = 413
	      err.received = received
	      err.limit = limit
	      cleanup()
	      halt(stream)
	      done(err)
	    }
	  }
	
	  function onEnd(err) {
	    if (err) {
	      cleanup()
	      halt(stream)
	      done(err)
	    } else if (length !== null && received !== length) {
	      err = makeError('request size did not match content length',
	        'request.size.invalid')
	      err.status = err.statusCode = 400
	      err.received = received
	      err.length = err.expected = length
	      cleanup()
	      done(err)
	    } else {
	      var string = decoder
	        ? buffer + (decoder.end() || '')
	        : Buffer.concat(buffer)
	      cleanup()
	      done(null, string)
	    }
	  }
	
	  function cleanup() {
	    received = buffer = null
	
	    stream.removeListener('data', onData)
	    stream.removeListener('end', onEnd)
	    stream.removeListener('error', onEnd)
	    stream.removeListener('close', cleanup)
	  }
	}
	
	function getDecoder(encoding) {
	  if (!encoding) return null
	
	  try {
	    return iconv.getCodec(encoding).decoder()
	  } catch (e) {
	    var err = makeError('specified encoding unsupported', 'encoding.unsupported')
	    err.status = err.statusCode = 415
	    err.encoding = encoding
	    throw err
	  }
	}
	
	/**
	 * Halt a stream.
	 *
	 * @param {Object} stream
	 * @api private
	 */
	
	function halt(stream) {
	  // unpipe everything from the stream
	  unpipe(stream)
	
	  // pause stream
	  if (typeof stream.pause === 'function') {
	    stream.pause()
	  }
	}
	
	// to create serializable errors you must re-set message so
	// that it is enumerable and you must re configure the type
	// property so that is writable and enumerable
	function makeError(message, type) {
	  var error = new Error()
	  error.message = message
	  Object.defineProperty(error, 'type', {
	    value: type,
	    enumerable: true,
	    writable: true,
	    configurable: true
	  })
	  return error
	}
	
	/**
	 * Unpipe everything from a stream.
	 *
	 * @param {Object} stream
	 * @api private
	 */
	
	/* istanbul ignore next: implementation differs between versions */
	function unpipe(stream) {
	  if (typeof stream.unpipe === 'function') {
	    // new-style
	    stream.unpipe()
	    return
	  }
	
	  // Node.js 0.8 hack
	  var listener
	  var listeners = stream.listeners('close')
	
	  for (var i = 0; i < listeners.length; i++) {
	    listener = listeners[i]
	
	    if (listener.name !== 'cleanup' && listener.name !== 'onclose') {
	      continue
	    }
	
	    // invoke the listener
	    listener.call(stream)
	  }
	}


/***/ },
/* 126 */
/*!****************************************!*\
  !*** ./~/body-parser/~/bytes/index.js ***!
  \****************************************/
/***/ function(module, exports) {

	
	/**
	 * Parse byte `size` string.
	 *
	 * @param {String} size
	 * @return {Number}
	 * @api public
	 */
	
	module.exports = function(size) {
	  if ('number' == typeof size) return convert(size);
	  var parts = size.match(/^(\d+(?:\.\d+)?) *(kb|mb|gb|tb)$/)
	    , n = parseFloat(parts[1])
	    , type = parts[2];
	
	  var map = {
	      kb: 1 << 10
	    , mb: 1 << 20
	    , gb: 1 << 30
	    , tb: ((1 << 30) * 1024)
	  };
	
	  return map[type] * n;
	};
	
	/**
	 * convert bytes into string.
	 *
	 * @param {Number} b - bytes to convert
	 * @return {String}
	 * @api public
	 */
	
	function convert (b) {
	  var tb = ((1 << 30) * 1024), gb = 1 << 30, mb = 1 << 20, kb = 1 << 10, abs = Math.abs(b);
	  if (abs >= tb) return (Math.round(b / tb * 100) / 100) + 'tb';
	  if (abs >= gb) return (Math.round(b / gb * 100) / 100) + 'gb';
	  if (abs >= mb) return (Math.round(b / mb * 100) / 100) + 'mb';
	  if (abs >= kb) return (Math.round(b / kb * 100) / 100) + 'kb';
	  return b + 'b';
	}


/***/ },
/* 127 */
/*!*************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/lib/index.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var iconv = module.exports;
	
	// All codecs and aliases are kept here, keyed by encoding name/alias.
	// They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.
	iconv.encodings = null;
	
	// Characters emitted in case of error.
	iconv.defaultCharUnicode = '�';
	iconv.defaultCharSingleByte = '?';
	
	// Public API.
	iconv.encode = function encode(str, encoding, options) {
	    str = "" + (str || ""); // Ensure string.
	
	    var encoder = iconv.getCodec(encoding).encoder(options);
	
	    var res = encoder.write(str);
	    var trail = encoder.end();
	    
	    return (trail && trail.length > 0) ? Buffer.concat([res, trail]) : res;
	}
	
	iconv.decode = function decode(buf, encoding, options) {
	    if (typeof buf === 'string') {
	        if (!iconv.skipDecodeWarning) {
	            console.error('Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding');
	            iconv.skipDecodeWarning = true;
	        }
	
	        buf = new Buffer("" + (buf || ""), "binary"); // Ensure buffer.
	    }
	
	    var decoder = iconv.getCodec(encoding).decoder(options);
	
	    var res = decoder.write(buf);
	    var trail = decoder.end();
	
	    return (trail && trail.length > 0) ? (res + trail) : res;
	}
	
	iconv.encodingExists = function encodingExists(enc) {
	    try {
	        iconv.getCodec(enc);
	        return true;
	    } catch (e) {
	        return false;
	    }
	}
	
	// Legacy aliases to convert functions
	iconv.toEncoding = iconv.encode;
	iconv.fromEncoding = iconv.decode;
	
	// Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.
	iconv._codecDataCache = {};
	iconv.getCodec = function getCodec(encoding) {
	    if (!iconv.encodings)
	        iconv.encodings = __webpack_require__(/*! ../encodings */ 128); // Lazy load all encoding definitions.
	    
	    // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
	    var enc = (''+encoding).toLowerCase().replace(/[^0-9a-z]|:\d{4}$/g, "");
	
	    // Traverse iconv.encodings to find actual codec.
	    var codecData, codecOptions;
	    while (true) {
	        codecData = iconv._codecDataCache[enc];
	        if (codecData)
	            return codecData;
	
	        var codec = iconv.encodings[enc];
	
	        switch (typeof codec) {
	            case "string": // Direct alias to other encoding.
	                enc = codec;
	                break;
	
	            case "object": // Alias with options. Can be layered.
	                if (!codecOptions) {
	                    codecOptions = codec;
	                    codecOptions.encodingName = enc;
	                }
	                else {
	                    for (var key in codec)
	                        codecOptions[key] = codec[key];
	                }
	
	                enc = codec.type;
	                break;
	
	            case "function": // Codec itself.
	                if (!codecOptions)
	                    codecOptions = { encodingName: enc };
	                codecOptions.iconv = iconv;
	
	                // The codec function must load all tables and return object with .encoder and .decoder methods.
	                // It'll be called only once (for each different options object).
	                codecData = codec.call(iconv.encodings, codecOptions);
	
	                iconv._codecDataCache[codecOptions.encodingName] = codecData; // Save it to be reused later.
	                return codecData;
	
	            default:
	                throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '"+enc+"')");
	        }
	    }
	}
	
	// Load extensions in Node. All of them are omitted in Browserify build via 'browser' field in package.json.
	var nodeVer = typeof process !== 'undefined' && process.versions && process.versions.node;
	if (nodeVer) {
	
	    // Load streaming support in Node v0.10+
	    var nodeVerArr = nodeVer.split(".").map(Number);
	    if (nodeVerArr[0] > 0 || nodeVerArr[1] >= 10) {
	        __webpack_require__(/*! ./streams */ 138)(iconv);
	    }
	
	    // Load Node primitive extensions.
	    __webpack_require__(/*! ./extend-node */ 139)(iconv);
	}
	


/***/ },
/* 128 */
/*!*******************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/index.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	// Update this array if you add/rename/remove files in this directory.
	// We support Browserify by skipping automatic module discovery and requiring modules directly.
	var modules = [
	    __webpack_require__(/*! ./internal */ 129),
	    __webpack_require__(/*! ./utf16 */ 131),
	    __webpack_require__(/*! ./utf7 */ 132),
	    __webpack_require__(/*! ./sbcs-codec */ 133),
	    __webpack_require__(/*! ./sbcs-data */ 134),
	    __webpack_require__(/*! ./sbcs-data-generated */ 135),
	    __webpack_require__(/*! ./dbcs-codec */ 136),
	    __webpack_require__(/*! ./dbcs-data */ 137),
	];
	
	// Put all encoding/alias/codec definitions to single object and export it. 
	for (var i = 0; i < modules.length; i++) {
	    var module = modules[i];
	    for (var enc in module)
	        exports[enc] = module[enc];
	}


/***/ },
/* 129 */
/*!**********************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/internal.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	// Export Node.js internal encodings.
	
	var utf16lebom = new Buffer([0xFF, 0xFE]);
	
	module.exports = {
	    // Encodings
	    utf8:   { type: "_internal", enc: "utf8" },
	    cesu8:  { type: "_internal", enc: "utf8" },
	    unicode11utf8: { type: "_internal", enc: "utf8" },
	    ucs2:   { type: "_internal", enc: "ucs2", bom: utf16lebom },
	    utf16le:{ type: "_internal", enc: "ucs2", bom: utf16lebom },
	    binary: { type: "_internal", enc: "binary" },
	    base64: { type: "_internal", enc: "base64" },
	    hex:    { type: "_internal", enc: "hex" },
	
	    // Codec.
	    _internal: function(options) {
	        if (!options || !options.enc)
	            throw new Error("Internal codec is called without encoding type.")
	
	        return {
	            encoder: options.enc == "base64" ? encoderBase64 : encoderInternal,
	            decoder: decoderInternal,
	
	            enc: options.enc,
	            bom: options.bom,
	        };
	    },
	};
	
	// We use node.js internal decoder. It's signature is the same as ours.
	var StringDecoder = __webpack_require__(/*! string_decoder */ 130).StringDecoder;
	
	if (!StringDecoder.prototype.end) // Node v0.8 doesn't have this method.
	    StringDecoder.prototype.end = function() {};
	
	function decoderInternal() {
	    return new StringDecoder(this.enc);
	}
	
	// Encoder is mostly trivial
	
	function encoderInternal() {
	    return {
	        write: encodeInternal,
	        end: function() {},
	        
	        enc: this.enc,
	    }
	}
	
	function encodeInternal(str) {
	    return new Buffer(str, this.enc);
	}
	
	
	// Except base64 encoder, which must keep its state.
	
	function encoderBase64() {
	    return {
	        write: encodeBase64Write,
	        end: encodeBase64End,
	
	        prevStr: '',
	    };
	}
	
	function encodeBase64Write(str) {
	    str = this.prevStr + str;
	    var completeQuads = str.length - (str.length % 4);
	    this.prevStr = str.slice(completeQuads);
	    str = str.slice(0, completeQuads);
	
	    return new Buffer(str, "base64");
	}
	
	function encodeBase64End() {
	    return new Buffer(this.prevStr, "base64");
	}
	


/***/ },
/* 130 */
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = require("string_decoder");

/***/ },
/* 131 */
/*!*******************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/utf16.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	
	
	// == UTF16-BE codec. ==========================================================
	
	exports.utf16be = function(options) {
	    return {
	        encoder: utf16beEncoder,
	        decoder: utf16beDecoder,
	
	        bom: new Buffer([0xFE, 0xFF]),
	    };
	};
	
	
	// -- Encoding
	
	function utf16beEncoder(options) {
	    return {
	        write: utf16beEncoderWrite,
	        end: function() {},
	    }
	}
	
	function utf16beEncoderWrite(str) {
	    var buf = new Buffer(str, 'ucs2');
	    for (var i = 0; i < buf.length; i += 2) {
	        var tmp = buf[i]; buf[i] = buf[i+1]; buf[i+1] = tmp;
	    }
	    return buf;
	}
	
	
	// -- Decoding
	
	function utf16beDecoder(options) {
	    return {
	        write: utf16beDecoderWrite,
	        end: function() {},
	
	        overflowByte: -1,
	    };
	}
	
	function utf16beDecoderWrite(buf) {
	    if (buf.length == 0)
	        return '';
	
	    var buf2 = new Buffer(buf.length + 1),
	        i = 0, j = 0;
	
	    if (this.overflowByte !== -1) {
	        buf2[0] = buf[0];
	        buf2[1] = this.overflowByte;
	        i = 1; j = 2;
	    }
	
	    for (; i < buf.length-1; i += 2, j+= 2) {
	        buf2[j] = buf[i+1];
	        buf2[j+1] = buf[i];
	    }
	
	    this.overflowByte = (i == buf.length-1) ? buf[buf.length-1] : -1;
	
	    return buf2.slice(0, j).toString('ucs2');
	}
	
	
	// == UTF-16 codec =============================================================
	// Decoder chooses automatically from UTF-16LE and UTF-16BE using BOM and space-based heuristic.
	// Defaults to UTF-16BE, according to RFC 2781, although it is against some industry practices, see
	// http://en.wikipedia.org/wiki/UTF-16 and http://encoding.spec.whatwg.org/#utf-16le
	// Decoder default can be changed: iconv.decode(buf, 'utf16', {default: 'utf-16le'});
	
	// Encoder prepends BOM and uses UTF-16BE.
	// Endianness can also be changed: iconv.encode(str, 'utf16', {use: 'utf-16le'});
	
	exports.utf16 = function(options) {
	    return {
	        encoder: utf16Encoder,
	        decoder: utf16Decoder,
	
	        getCodec: options.iconv.getCodec,
	    };
	};
	
	// -- Encoding
	
	function utf16Encoder(options) {
	    options = options || {};
	    var codec = this.getCodec(options.use || 'utf-16be');
	    if (!codec.bom)
	        throw new Error("iconv-lite: in UTF-16 encoder, 'use' parameter should be either UTF-16BE or UTF16-LE.");
	
	    return {
	        write: utf16EncoderWrite,
	        end: utf16EncoderEnd,
	
	        bom: codec.bom,
	        internalEncoder: codec.encoder(options),
	    };
	}
	
	function utf16EncoderWrite(str) {
	    var buf = this.internalEncoder.write(str);
	
	    if (this.bom) {
	        buf = Buffer.concat([this.bom, buf]);
	        this.bom = null;
	    }
	
	    return buf;
	}
	
	function utf16EncoderEnd() {
	    return this.internalEncoder.end();
	}
	
	
	// -- Decoding
	
	function utf16Decoder(options) {
	    return {
	        write: utf16DecoderWrite,
	        end: utf16DecoderEnd,
	
	        internalDecoder: null,
	        initialBytes: [],
	        initialBytesLen: 0,
	
	        options: options || {},
	        getCodec: this.getCodec,
	    };
	}
	
	function utf16DecoderWrite(buf) {
	    if (this.internalDecoder)
	        return this.internalDecoder.write(buf);
	
	    // Codec is not chosen yet. Accumulate initial bytes.
	    this.initialBytes.push(buf);
	    this.initialBytesLen += buf.length;
	    
	    if (this.initialBytesLen < 16) // We need > 2 bytes to use space heuristic (see below)
	        return '';
	
	    // We have enough bytes -> decide endianness.
	    return utf16DecoderDecideEndianness.call(this);
	}
	
	function utf16DecoderEnd() {
	    if (this.internalDecoder)
	        return this.internalDecoder.end();
	
	    var res = utf16DecoderDecideEndianness.call(this);
	    var trail;
	
	    if (this.internalDecoder)
	        trail = this.internalDecoder.end();
	
	    return (trail && trail.length > 0) ? (res + trail) : res;
	}
	
	function utf16DecoderDecideEndianness() {
	    var buf = Buffer.concat(this.initialBytes);
	    this.initialBytes.length = this.initialBytesLen = 0;
	
	    if (buf.length < 2)
	        return ''; // Not a valid UTF-16 sequence anyway.
	
	    // Default encoding.
	    var enc = this.options.default || 'utf-16be';
	
	    // Check BOM.
	    if (buf[0] == 0xFE && buf[1] == 0xFF) { // UTF-16BE BOM
	        enc = 'utf-16be'; buf = buf.slice(2);
	    }
	    else if (buf[0] == 0xFF && buf[1] == 0xFE) { // UTF-16LE BOM
	        enc = 'utf-16le'; buf = buf.slice(2);
	    }
	    else {
	        // No BOM found. Try to deduce encoding from initial content.
	        // Most of the time, the content has spaces (U+0020), but the opposite (U+2000) is very uncommon.
	        // So, we count spaces as if it was LE or BE, and decide from that.
	        var spaces = [0, 0], // Counts of space chars in both positions
	            _len = Math.min(buf.length - (buf.length % 2), 64); // Len is always even.
	
	        for (var i = 0; i < _len; i += 2) {
	            if (buf[i] == 0x00 && buf[i+1] == 0x20) spaces[0]++;
	            if (buf[i] == 0x20 && buf[i+1] == 0x00) spaces[1]++;
	        }
	
	        if (spaces[0] > 0 && spaces[1] == 0)  
	            enc = 'utf-16be';
	        else if (spaces[0] == 0 && spaces[1] > 0)
	            enc = 'utf-16le';
	    }
	
	    this.internalDecoder = this.getCodec(enc).decoder(this.options);
	    return this.internalDecoder.write(buf);
	}
	
	


/***/ },
/* 132 */
/*!******************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/utf7.js ***!
  \******************************************************/
/***/ function(module, exports) {

	
	// UTF-7 codec, according to https://tools.ietf.org/html/rfc2152
	// Below is UTF-7-IMAP codec, according to http://tools.ietf.org/html/rfc3501#section-5.1.3
	
	exports.utf7 = function(options) {
	    return {
	        encoder: function utf7Encoder() {
	            return {
	                write: utf7EncoderWrite,
	                end: function() {},
	
	                iconv: options.iconv,
	            };
	        },
	        decoder: function utf7Decoder() {
	            return {
	                write: utf7DecoderWrite,
	                end: utf7DecoderEnd,
	
	                iconv: options.iconv,
	                inBase64: false,
	                base64Accum: '',
	            };
	        },
	    };
	};
	
	
	var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
	
	// Direct: \n, \r, \t, 0x20, 0x27-0x29, (0x2B), 0x2C-0x3A, 0x3F, 0x41-0x5A, 0x61-0x7A
	
	function utf7EncoderWrite(str) {
	    // Naive implementation.
	    // Non-direct chars are encoded as "+<base64>-"; single "+" char is encoded as "+-".
	    return new Buffer(str.replace(nonDirectChars, function(chunk) {
	        return "+" + (chunk === '+' ? '' : 
	            this.iconv.encode(chunk, 'utf16-be').toString('base64').replace(/=+$/, '')) 
	            + "-";
	    }.bind(this)));
	}
	
	
	var base64Regex = /[A-Za-z0-9\/+]/;
	var base64Chars = [];
	for (var i = 0; i < 256; i++)
	    base64Chars[i] = base64Regex.test(String.fromCharCode(i));
	
	var plusChar = '+'.charCodeAt(0), 
	    minusChar = '-'.charCodeAt(0),
	    andChar = '&'.charCodeAt(0);
	
	function utf7DecoderWrite(buf) {
	    var res = "", lastI = 0,
	        inBase64 = this.inBase64,
	        base64Accum = this.base64Accum;
	
	    // The decoder is more involved as we must handle chunks in stream.
	
	    for (var i = 0; i < buf.length; i++) {
	        if (!inBase64) { // We're in direct mode.
	            // Write direct chars until '+'
	            if (buf[i] == plusChar) {
	                res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
	                lastI = i+1;
	                inBase64 = true;
	            }
	        } else { // We decode base64.
	            if (!base64Chars[buf[i]]) { // Base64 ended.
	                if (i == lastI && buf[i] == minusChar) {// "+-" -> "+"
	                    res += "+";
	                } else {
	                    var b64str = base64Accum + buf.slice(lastI, i).toString();
	                    res += this.iconv.decode(new Buffer(b64str, 'base64'), "utf16-be");
	                }
	
	                if (buf[i] != minusChar) // Minus is absorbed after base64.
	                    i--;
	
	                lastI = i+1;
	                inBase64 = false;
	                base64Accum = '';
	            }
	        }
	    }
	
	    if (!inBase64) {
	        res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
	    } else {
	        var b64str = base64Accum + buf.slice(lastI).toString();
	
	        var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
	        base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
	        b64str = b64str.slice(0, canBeDecoded);
	
	        res += this.iconv.decode(new Buffer(b64str, 'base64'), "utf16-be");
	    }
	
	    this.inBase64 = inBase64;
	    this.base64Accum = base64Accum;
	
	    return res;
	}
	
	function utf7DecoderEnd() {
	    var res = "";
	    if (this.inBase64 && this.base64Accum.length > 0)
	        res = this.iconv.decode(new Buffer(this.base64Accum, 'base64'), "utf16-be");
	
	    this.inBase64 = false;
	    this.base64Accum = '';
	    return res;
	}
	
	
	// UTF-7-IMAP codec.
	// RFC3501 Sec. 5.1.3 Modified UTF-7 (http://tools.ietf.org/html/rfc3501#section-5.1.3)
	// Differences:
	//  * Base64 part is started by "&" instead of "+"
	//  * Direct characters are 0x20-0x7E, except "&" (0x26)
	//  * In Base64, "," is used instead of "/"
	//  * Base64 must not be used to represent direct characters.
	//  * No implicit shift back from Base64 (should always end with '-')
	//  * String must end in non-shifted position.
	//  * "-&" while in base64 is not allowed.
	
	
	exports.utf7imap = function(options) {
	    return {
	        encoder: function utf7ImapEncoder() {
	            return {
	                write: utf7ImapEncoderWrite,
	                end: utf7ImapEncoderEnd,
	
	                iconv: options.iconv,
	                inBase64: false,
	                base64Accum: new Buffer(6),
	                base64AccumIdx: 0,
	            };
	        },
	        decoder: function utf7ImapDecoder() {
	            return {
	                write: utf7ImapDecoderWrite,
	                end: utf7ImapDecoderEnd,
	
	                iconv: options.iconv,
	                inBase64: false,
	                base64Accum: '',
	            };
	        },
	    };
	};
	
	
	function utf7ImapEncoderWrite(str) {
	    var inBase64 = this.inBase64,
	        base64Accum = this.base64Accum,
	        base64AccumIdx = this.base64AccumIdx,
	        buf = new Buffer(str.length*5 + 10), bufIdx = 0;
	
	    for (var i = 0; i < str.length; i++) {
	        var uChar = str.charCodeAt(i);
	        if (0x20 <= uChar && uChar <= 0x7E) { // Direct character or '&'.
	            if (inBase64) {
	                if (base64AccumIdx > 0) {
	                    bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
	                    base64AccumIdx = 0;
	                }
	
	                buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
	                inBase64 = false;
	            }
	
	            if (!inBase64) {
	                buf[bufIdx++] = uChar; // Write direct character
	
	                if (uChar === andChar)  // Ampersand -> '&-'
	                    buf[bufIdx++] = minusChar;
	            }
	
	        } else { // Non-direct character
	            if (!inBase64) {
	                buf[bufIdx++] = andChar; // Write '&', then go to base64 mode.
	                inBase64 = true;
	            }
	            if (inBase64) {
	                base64Accum[base64AccumIdx++] = uChar >> 8;
	                base64Accum[base64AccumIdx++] = uChar & 0xFF;
	
	                if (base64AccumIdx == base64Accum.length) {
	                    bufIdx += buf.write(base64Accum.toString('base64').replace(/\//g, ','), bufIdx);
	                    base64AccumIdx = 0;
	                }
	            }
	        }
	    }
	
	    this.inBase64 = inBase64;
	    this.base64AccumIdx = base64AccumIdx;
	
	    return buf.slice(0, bufIdx);
	}
	
	function utf7ImapEncoderEnd() {
	    var buf = new Buffer(10), bufIdx = 0;
	    if (this.inBase64) {
	        if (this.base64AccumIdx > 0) {
	            bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
	            this.base64AccumIdx = 0;
	        }
	
	        buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
	        this.inBase64 = false;
	    }
	
	    return buf.slice(0, bufIdx);
	}
	
	
	var base64IMAPChars = base64Chars.slice();
	base64IMAPChars[','.charCodeAt(0)] = true;
	
	function utf7ImapDecoderWrite(buf) {
	    var res = "", lastI = 0,
	        inBase64 = this.inBase64,
	        base64Accum = this.base64Accum;
	
	    // The decoder is more involved as we must handle chunks in stream.
	    // It is forgiving, closer to standard UTF-7 (for example, '-' is optional at the end).
	
	    for (var i = 0; i < buf.length; i++) {
	        if (!inBase64) { // We're in direct mode.
	            // Write direct chars until '&'
	            if (buf[i] == andChar) {
	                res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
	                lastI = i+1;
	                inBase64 = true;
	            }
	        } else { // We decode base64.
	            if (!base64IMAPChars[buf[i]]) { // Base64 ended.
	                if (i == lastI && buf[i] == minusChar) { // "&-" -> "&"
	                    res += "&";
	                } else {
	                    var b64str = base64Accum + buf.slice(lastI, i).toString().replace(/,/g, '/');
	                    res += this.iconv.decode(new Buffer(b64str, 'base64'), "utf16-be");
	                }
	
	                if (buf[i] != minusChar) // Minus may be absorbed after base64.
	                    i--;
	
	                lastI = i+1;
	                inBase64 = false;
	                base64Accum = '';
	            }
	        }
	    }
	
	    if (!inBase64) {
	        res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
	    } else {
	        var b64str = base64Accum + buf.slice(lastI).toString().replace(/,/g, '/');
	
	        var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
	        base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
	        b64str = b64str.slice(0, canBeDecoded);
	
	        res += this.iconv.decode(new Buffer(b64str, 'base64'), "utf16-be");
	    }
	
	    this.inBase64 = inBase64;
	    this.base64Accum = base64Accum;
	
	    return res;
	}
	
	function utf7ImapDecoderEnd() {
	    var res = "";
	    if (this.inBase64 && this.base64Accum.length > 0)
	        res = this.iconv.decode(new Buffer(this.base64Accum, 'base64'), "utf16-be");
	
	    this.inBase64 = false;
	    this.base64Accum = '';
	    return res;
	}
	
	


/***/ },
/* 133 */
/*!************************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/sbcs-codec.js ***!
  \************************************************************/
/***/ function(module, exports) {

	
	// Single-byte codec. Needs a 'chars' string parameter that contains 256 or 128 chars that
	// correspond to encoded bytes (if 128 - then lower half is ASCII). 
	
	exports._sbcs = function(options) {
	    if (!options)
	        throw new Error("SBCS codec is called without the data.")
	    
	    // Prepare char buffer for decoding.
	    if (!options.chars || (options.chars.length !== 128 && options.chars.length !== 256))
	        throw new Error("Encoding '"+options.type+"' has incorrect 'chars' (must be of len 128 or 256)");
	    
	    if (options.chars.length === 128) {
	        var asciiString = "";
	        for (var i = 0; i < 128; i++)
	            asciiString += String.fromCharCode(i);
	        options.chars = asciiString + options.chars;
	    }
	
	    var decodeBuf = new Buffer(options.chars, 'ucs2');
	    
	    // Encoding buffer.
	    var encodeBuf = new Buffer(65536);
	    encodeBuf.fill(options.iconv.defaultCharSingleByte.charCodeAt(0));
	
	    for (var i = 0; i < options.chars.length; i++)
	        encodeBuf[options.chars.charCodeAt(i)] = i;
	
	    return {
	        encoder: encoderSBCS,
	        decoder: decoderSBCS,
	
	        encodeBuf: encodeBuf,
	        decodeBuf: decodeBuf,
	    };
	}
	
	function encoderSBCS(options) {
	    return {
	        write: encoderSBCSWrite,
	        end: function() {},
	
	        encodeBuf: this.encodeBuf,
	    };
	}
	
	function encoderSBCSWrite(str) {
	    var buf = new Buffer(str.length);
	    for (var i = 0; i < str.length; i++)
	        buf[i] = this.encodeBuf[str.charCodeAt(i)];
	    
	    return buf;
	}
	
	
	function decoderSBCS(options) {
	    return {
	        write: decoderSBCSWrite,
	        end: function() {},
	        
	        decodeBuf: this.decodeBuf,
	    };
	}
	
	function decoderSBCSWrite(buf) {
	    // Strings are immutable in JS -> we use ucs2 buffer to speed up computations.
	    var decodeBuf = this.decodeBuf;
	    var newBuf = new Buffer(buf.length*2);
	    var idx1 = 0, idx2 = 0;
	    for (var i = 0, _len = buf.length; i < _len; i++) {
	        idx1 = buf[i]*2; idx2 = i*2;
	        newBuf[idx2] = decodeBuf[idx1];
	        newBuf[idx2+1] = decodeBuf[idx1+1];
	    }
	    return newBuf.toString('ucs2');
	}


/***/ },
/* 134 */
/*!***********************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/sbcs-data.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	
	// Manually added data to be used by sbcs codec in addition to generated one.
	
	module.exports = {
	    // Not supported by iconv, not sure why.
	    "10029": "maccenteuro",
	    "maccenteuro": {
	        "type": "_sbcs",
	        "chars": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
	    },
	
	    "808": "cp808",
	    "ibm808": "cp808",
	    "cp808": {
	        "type": "_sbcs",
	        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
	    },
	
	    // Aliases of generated encodings.
	    "ascii8bit": "ascii",
	    "usascii": "ascii",
	    "ansix34": "ascii",
	    "ansix341968": "ascii",
	    "ansix341986": "ascii",
	    "csascii": "ascii",
	    "cp367": "ascii",
	    "ibm367": "ascii",
	    "isoir6": "ascii",
	    "iso646us": "ascii",
	    "iso646irv": "ascii",
	    "us": "ascii",
	
	    "latin1": "iso88591",
	    "latin2": "iso88592",
	    "latin3": "iso88593",
	    "latin4": "iso88594",
	    "latin5": "iso88599",
	    "latin6": "iso885910",
	    "latin7": "iso885913",
	    "latin8": "iso885914",
	    "latin9": "iso885915",
	    "latin10": "iso885916",
	
	    "csisolatin1": "iso88591",
	    "csisolatin2": "iso88592",
	    "csisolatin3": "iso88593",
	    "csisolatin4": "iso88594",
	    "csisolatincyrillic": "iso88595",
	    "csisolatinarabic": "iso88596",
	    "csisolatingreek" : "iso88597",
	    "csisolatinhebrew": "iso88598",
	    "csisolatin5": "iso88599",
	    "csisolatin6": "iso885910",
	
	    "l1": "iso88591",
	    "l2": "iso88592",
	    "l3": "iso88593",
	    "l4": "iso88594",
	    "l5": "iso88599",
	    "l6": "iso885910",
	    "l7": "iso885913",
	    "l8": "iso885914",
	    "l9": "iso885915",
	    "l10": "iso885916",
	
	    "isoir14": "iso646jp",
	    "isoir57": "iso646cn",
	    "isoir100": "iso88591",
	    "isoir101": "iso88592",
	    "isoir109": "iso88593",
	    "isoir110": "iso88594",
	    "isoir144": "iso88595",
	    "isoir127": "iso88596",
	    "isoir126": "iso88597",
	    "isoir138": "iso88598",
	    "isoir148": "iso88599",
	    "isoir157": "iso885910",
	    "isoir166": "tis620",
	    "isoir179": "iso885913",
	    "isoir199": "iso885914",
	    "isoir203": "iso885915",
	    "isoir226": "iso885916",
	
	    "cp819": "iso88591",
	    "ibm819": "iso88591",
	
	    "cyrillic": "iso88595",
	
	    "arabic": "iso88596",
	    "arabic8": "iso88596",
	    "ecma114": "iso88596",
	    "asmo708": "iso88596",
	
	    "greek" : "iso88597",
	    "greek8" : "iso88597",
	    "ecma118" : "iso88597",
	    "elot928" : "iso88597",
	
	    "hebrew": "iso88598",
	    "hebrew8": "iso88598",
	
	    "turkish": "iso88599",
	    "turkish8": "iso88599",
	
	    "thai": "iso885911",
	    "thai8": "iso885911",
	
	    "celtic": "iso885914",
	    "celtic8": "iso885914",
	    "isoceltic": "iso885914",
	
	    "tis6200": "tis620",
	    "tis62025291": "tis620",
	    "tis62025330": "tis620",
	
	    "10000": "macroman",
	    "10006": "macgreek",
	    "10007": "maccyrillic",
	    "10079": "maciceland",
	    "10081": "macturkish",
	
	    "cspc8codepage437": "cp437",
	    "cspc775baltic": "cp775",
	    "cspc850multilingual": "cp850",
	    "cspcp852": "cp852",
	    "cspc862latinhebrew": "cp862",
	    "cpgr": "cp869",
	
	    "msee": "cp1250",
	    "mscyrl": "cp1251",
	    "msansi": "cp1252",
	    "msgreek": "cp1253",
	    "msturk": "cp1254",
	    "mshebr": "cp1255",
	    "msarab": "cp1256",
	    "winbaltrim": "cp1257",
	
	    "cp20866": "koi8r",
	    "20866": "koi8r",
	    "ibm878": "koi8r",
	    "cskoi8r": "koi8r",
	
	    "cp21866": "koi8u",
	    "21866": "koi8u",
	    "ibm1168": "koi8u",
	
	    "strk10482002": "rk1048",
	
	    "tcvn5712": "tcvn",
	    "tcvn57121": "tcvn",
	
	    "gb198880": "iso646cn",
	    "cn": "iso646cn",
	
	    "csiso14jisc6220ro": "iso646jp",
	    "jisc62201969ro": "iso646jp",
	    "jp": "iso646jp",
	
	    "cshproman8": "hproman8",
	    "r8": "hproman8",
	    "roman8": "hproman8",
	    "xroman8": "hproman8",
	    "ibm1051": "hproman8",
	
	    "mac": "macintosh",
	    "csmacintosh": "macintosh",
	};
	


/***/ },
/* 135 */
/*!*********************************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/sbcs-data-generated.js ***!
  \*********************************************************************/
/***/ function(module, exports) {

	
	// Generated data for sbcs codec. Don't edit manually. Regenerate using generation/gen-sbcs.js script.
	module.exports = {
	  "437": "cp437",
	  "737": "cp737",
	  "775": "cp775",
	  "850": "cp850",
	  "852": "cp852",
	  "855": "cp855",
	  "856": "cp856",
	  "857": "cp857",
	  "858": "cp858",
	  "860": "cp860",
	  "861": "cp861",
	  "862": "cp862",
	  "863": "cp863",
	  "864": "cp864",
	  "865": "cp865",
	  "866": "cp866",
	  "869": "cp869",
	  "874": "windows874",
	  "922": "cp922",
	  "1046": "cp1046",
	  "1124": "cp1124",
	  "1125": "cp1125",
	  "1129": "cp1129",
	  "1133": "cp1133",
	  "1161": "cp1161",
	  "1162": "cp1162",
	  "1163": "cp1163",
	  "1250": "windows1250",
	  "1251": "windows1251",
	  "1252": "windows1252",
	  "1253": "windows1253",
	  "1254": "windows1254",
	  "1255": "windows1255",
	  "1256": "windows1256",
	  "1257": "windows1257",
	  "1258": "windows1258",
	  "28591": "iso88591",
	  "28592": "iso88592",
	  "28593": "iso88593",
	  "28594": "iso88594",
	  "28595": "iso88595",
	  "28596": "iso88596",
	  "28597": "iso88597",
	  "28598": "iso88598",
	  "28599": "iso88599",
	  "28600": "iso885910",
	  "28601": "iso885911",
	  "28603": "iso885913",
	  "28604": "iso885914",
	  "28605": "iso885915",
	  "28606": "iso885916",
	  "windows874": {
	    "type": "_sbcs",
	    "chars": "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
	  },
	  "win874": "windows874",
	  "cp874": "windows874",
	  "windows1250": {
	    "type": "_sbcs",
	    "chars": "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
	  },
	  "win1250": "windows1250",
	  "cp1250": "windows1250",
	  "windows1251": {
	    "type": "_sbcs",
	    "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
	  },
	  "win1251": "windows1251",
	  "cp1251": "windows1251",
	  "windows1252": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "win1252": "windows1252",
	  "cp1252": "windows1252",
	  "windows1253": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
	  },
	  "win1253": "windows1253",
	  "cp1253": "windows1253",
	  "windows1254": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
	  },
	  "win1254": "windows1254",
	  "cp1254": "windows1254",
	  "windows1255": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹ�ֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
	  },
	  "win1255": "windows1255",
	  "cp1255": "windows1255",
	  "windows1256": {
	    "type": "_sbcs",
	    "chars": "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
	  },
	  "win1256": "windows1256",
	  "cp1256": "windows1256",
	  "windows1257": {
	    "type": "_sbcs",
	    "chars": "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
	  },
	  "win1257": "windows1257",
	  "cp1257": "windows1257",
	  "windows1258": {
	    "type": "_sbcs",
	    "chars": "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
	  },
	  "win1258": "windows1258",
	  "cp1258": "windows1258",
	  "iso88591": {
	    "type": "_sbcs",
	    "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "cp28591": "iso88591",
	  "iso88592": {
	    "type": "_sbcs",
	    "chars": " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
	  },
	  "cp28592": "iso88592",
	  "iso88593": {
	    "type": "_sbcs",
	    "chars": " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
	  },
	  "cp28593": "iso88593",
	  "iso88594": {
	    "type": "_sbcs",
	    "chars": " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
	  },
	  "cp28594": "iso88594",
	  "iso88595": {
	    "type": "_sbcs",
	    "chars": " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
	  },
	  "cp28595": "iso88595",
	  "iso88596": {
	    "type": "_sbcs",
	    "chars": " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
	  },
	  "cp28596": "iso88596",
	  "iso88597": {
	    "type": "_sbcs",
	    "chars": " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
	  },
	  "cp28597": "iso88597",
	  "iso88598": {
	    "type": "_sbcs",
	    "chars": " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
	  },
	  "cp28598": "iso88598",
	  "iso88599": {
	    "type": "_sbcs",
	    "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
	  },
	  "cp28599": "iso88599",
	  "iso885910": {
	    "type": "_sbcs",
	    "chars": " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
	  },
	  "cp28600": "iso885910",
	  "iso885911": {
	    "type": "_sbcs",
	    "chars": " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
	  },
	  "cp28601": "iso885911",
	  "iso885913": {
	    "type": "_sbcs",
	    "chars": " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
	  },
	  "cp28603": "iso885913",
	  "iso885914": {
	    "type": "_sbcs",
	    "chars": " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
	  },
	  "cp28604": "iso885914",
	  "iso885915": {
	    "type": "_sbcs",
	    "chars": " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "cp28605": "iso885915",
	  "iso885916": {
	    "type": "_sbcs",
	    "chars": " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
	  },
	  "cp28606": "iso885916",
	  "cp437": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm437": "cp437",
	  "csibm437": "cp437",
	  "cp737": {
	    "type": "_sbcs",
	    "chars": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
	  },
	  "ibm737": "cp737",
	  "csibm737": "cp737",
	  "cp775": {
	    "type": "_sbcs",
	    "chars": "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
	  },
	  "ibm775": "cp775",
	  "csibm775": "cp775",
	  "cp850": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
	  },
	  "ibm850": "cp850",
	  "csibm850": "cp850",
	  "cp852": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
	  },
	  "ibm852": "cp852",
	  "csibm852": "cp852",
	  "cp855": {
	    "type": "_sbcs",
	    "chars": "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
	  },
	  "ibm855": "cp855",
	  "csibm855": "cp855",
	  "cp856": {
	    "type": "_sbcs",
	    "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
	  },
	  "ibm856": "cp856",
	  "csibm856": "cp856",
	  "cp857": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
	  },
	  "ibm857": "cp857",
	  "csibm857": "cp857",
	  "cp858": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
	  },
	  "ibm858": "cp858",
	  "csibm858": "cp858",
	  "cp860": {
	    "type": "_sbcs",
	    "chars": "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm860": "cp860",
	  "csibm860": "cp860",
	  "cp861": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm861": "cp861",
	  "csibm861": "cp861",
	  "cp862": {
	    "type": "_sbcs",
	    "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm862": "cp862",
	  "csibm862": "cp862",
	  "cp863": {
	    "type": "_sbcs",
	    "chars": "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm863": "cp863",
	  "csibm863": "cp863",
	  "cp864": {
	    "type": "_sbcs",
	    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
	  },
	  "ibm864": "cp864",
	  "csibm864": "cp864",
	  "cp865": {
	    "type": "_sbcs",
	    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
	  },
	  "ibm865": "cp865",
	  "csibm865": "cp865",
	  "cp866": {
	    "type": "_sbcs",
	    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
	  },
	  "ibm866": "cp866",
	  "csibm866": "cp866",
	  "cp869": {
	    "type": "_sbcs",
	    "chars": "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
	  },
	  "ibm869": "cp869",
	  "csibm869": "cp869",
	  "cp922": {
	    "type": "_sbcs",
	    "chars": " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
	  },
	  "ibm922": "cp922",
	  "csibm922": "cp922",
	  "cp1046": {
	    "type": "_sbcs",
	    "chars": "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
	  },
	  "ibm1046": "cp1046",
	  "csibm1046": "cp1046",
	  "cp1124": {
	    "type": "_sbcs",
	    "chars": " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
	  },
	  "ibm1124": "cp1124",
	  "csibm1124": "cp1124",
	  "cp1125": {
	    "type": "_sbcs",
	    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
	  },
	  "ibm1125": "cp1125",
	  "csibm1125": "cp1125",
	  "cp1129": {
	    "type": "_sbcs",
	    "chars": " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
	  },
	  "ibm1129": "cp1129",
	  "csibm1129": "cp1129",
	  "cp1133": {
	    "type": "_sbcs",
	    "chars": " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
	  },
	  "ibm1133": "cp1133",
	  "csibm1133": "cp1133",
	  "cp1161": {
	    "type": "_sbcs",
	    "chars": "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
	  },
	  "ibm1161": "cp1161",
	  "csibm1161": "cp1161",
	  "cp1162": {
	    "type": "_sbcs",
	    "chars": "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
	  },
	  "ibm1162": "cp1162",
	  "csibm1162": "cp1162",
	  "cp1163": {
	    "type": "_sbcs",
	    "chars": " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
	  },
	  "ibm1163": "cp1163",
	  "csibm1163": "cp1163",
	  "maccroatian": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
	  },
	  "maccyrillic": {
	    "type": "_sbcs",
	    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
	  },
	  "macgreek": {
	    "type": "_sbcs",
	    "chars": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
	  },
	  "maciceland": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "macroman": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "macromania": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "macthai": {
	    "type": "_sbcs",
	    "chars": "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
	  },
	  "macturkish": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "macukraine": {
	    "type": "_sbcs",
	    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
	  },
	  "koi8r": {
	    "type": "_sbcs",
	    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
	  },
	  "koi8u": {
	    "type": "_sbcs",
	    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
	  },
	  "koi8ru": {
	    "type": "_sbcs",
	    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
	  },
	  "koi8t": {
	    "type": "_sbcs",
	    "chars": "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
	  },
	  "armscii8": {
	    "type": "_sbcs",
	    "chars": " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
	  },
	  "rk1048": {
	    "type": "_sbcs",
	    "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
	  },
	  "tcvn": {
	    "type": "_sbcs",
	    "chars": "\u0000ÚỤ\u0003ỪỬỮ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010ỨỰỲỶỸÝỴ\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
	  },
	  "georgianacademy": {
	    "type": "_sbcs",
	    "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "georgianps": {
	    "type": "_sbcs",
	    "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
	  },
	  "pt154": {
	    "type": "_sbcs",
	    "chars": "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
	  },
	  "viscii": {
	    "type": "_sbcs",
	    "chars": "\u0000\u0001Ẳ\u0003\u0004ẴẪ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013Ỷ\u0015\u0016\u0017\u0018Ỹ\u001a\u001b\u001c\u001dỴ\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
	  },
	  "iso646cn": {
	    "type": "_sbcs",
	    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
	  },
	  "iso646jp": {
	    "type": "_sbcs",
	    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
	  },
	  "hproman8": {
	    "type": "_sbcs",
	    "chars": " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
	  },
	  "macintosh": {
	    "type": "_sbcs",
	    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
	  },
	  "ascii": {
	    "type": "_sbcs",
	    "chars": "��������������������������������������������������������������������������������������������������������������������������������"
	  },
	  "tis620": {
	    "type": "_sbcs",
	    "chars": "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
	  }
	}

/***/ },
/* 136 */
/*!************************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/dbcs-codec.js ***!
  \************************************************************/
/***/ function(module, exports) {

	
	// Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
	// Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
	// To save memory and loading time, we read table files only when requested.
	
	exports._dbcs = function(options) {
	    return new DBCSCodec(options);
	}
	
	var UNASSIGNED = -1,
	    GB18030_CODE = -2,
	    SEQ_START  = -10,
	    NODE_START = -1000,
	    UNASSIGNED_NODE = new Array(0x100),
	    DEF_CHAR = -1;
	
	for (var i = 0; i < 0x100; i++)
	    UNASSIGNED_NODE[i] = UNASSIGNED;
	
	
	// Class DBCSCodec reads and initializes mapping tables.
	function DBCSCodec(options) {
	    this.options = options;
	    if (!options)
	        throw new Error("DBCS codec is called without the data.")
	    if (!options.table)
	        throw new Error("Encoding '" + options.encodingName + "' has no data.");
	
	    // Load tables.
	    var mappingTable = options.table();
	
	
	    // Decode tables: MBCS -> Unicode.
	
	    // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
	    // Trie root is decodeTables[0].
	    // Values: >=  0 -> unicode character code. can be > 0xFFFF
	    //         == UNASSIGNED -> unknown/unassigned sequence.
	    //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
	    //         <= NODE_START -> index of the next node in our trie to process next byte.
	    //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.
	    this.decodeTables = [];
	    this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.
	
	    // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here. 
	    this.decodeTableSeq = [];
	
	    // Actual mapping tables consist of chunks. Use them to fill up decode tables.
	    for (var i = 0; i < mappingTable.length; i++)
	        this._addDecodeChunk(mappingTable[i]);
	
	    this.defaultCharUnicode = options.iconv.defaultCharUnicode;
	
	    
	    // Encode tables: Unicode -> DBCS.
	
	    // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
	    // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
	    // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
	    //         == UNASSIGNED -> no conversion found. Output a default char.
	    //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.
	    this.encodeTable = [];
	    
	    // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
	    // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
	    // means end of sequence (needed when one sequence is a strict subsequence of another).
	    // Objects are kept separately from encodeTable to increase performance.
	    this.encodeTableSeq = [];
	
	    // Some chars can be decoded, but need not be encoded.
	    var skipEncodeChars = {};
	    if (options.encodeSkipVals)
	        for (var i = 0; i < options.encodeSkipVals.length; i++) {
	            var range = options.encodeSkipVals[i];
	            for (var j = range.from; j <= range.to; j++)
	                skipEncodeChars[j] = true;
	        }
	        
	    // Use decode trie to recursively fill out encode tables.
	    this._fillEncodeTable(0, 0, skipEncodeChars);
	
	    // Add more encoding pairs when needed.
	    for (var uChar in options.encodeAdd || {})
	        this._setEncodeChar(uChar.charCodeAt(0), options.encodeAdd[uChar]);
	
	    this.defCharSB  = this.encodeTable[0][options.iconv.defaultCharSingleByte.charCodeAt(0)];
	    if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]['?'];
	    if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);
	
	
	    // Load & create GB18030 tables when needed.
	    if (typeof options.gb18030 === 'function') {
	        this.gb18030 = options.gb18030(); // Load GB18030 ranges.
	
	        // Add GB18030 decode tables.
	        var thirdByteNodeIdx = this.decodeTables.length;
	        var thirdByteNode = this.decodeTables[thirdByteNodeIdx] = UNASSIGNED_NODE.slice(0);
	
	        var fourthByteNodeIdx = this.decodeTables.length;
	        var fourthByteNode = this.decodeTables[fourthByteNodeIdx] = UNASSIGNED_NODE.slice(0);
	
	        for (var i = 0x81; i <= 0xFE; i++) {
	            var secondByteNodeIdx = NODE_START - this.decodeTables[0][i];
	            var secondByteNode = this.decodeTables[secondByteNodeIdx];
	            for (var j = 0x30; j <= 0x39; j++)
	                secondByteNode[j] = NODE_START - thirdByteNodeIdx;
	        }
	        for (var i = 0x81; i <= 0xFE; i++)
	            thirdByteNode[i] = NODE_START - fourthByteNodeIdx;
	        for (var i = 0x30; i <= 0x39; i++)
	            fourthByteNode[i] = GB18030_CODE
	    }        
	}
	
	// Public interface: create encoder and decoder objects. 
	// The methods (write, end) are simple functions to not inhibit optimizations.
	DBCSCodec.prototype.encoder = function encoderDBCS(options) {
	    return {
	        // Methods
	        write: encoderDBCSWrite,
	        end: encoderDBCSEnd,
	
	        // Encoder state
	        leadSurrogate: -1,
	        seqObj: undefined,
	        
	        // Static data
	        encodeTable: this.encodeTable,
	        encodeTableSeq: this.encodeTableSeq,
	        defaultCharSingleByte: this.defCharSB,
	        gb18030: this.gb18030,
	
	        // Export for testing
	        findIdx: findIdx,
	    }
	}
	
	DBCSCodec.prototype.decoder = function decoderDBCS(options) {
	    return {
	        // Methods
	        write: decoderDBCSWrite,
	        end: decoderDBCSEnd,
	
	        // Decoder state
	        nodeIdx: 0,
	        prevBuf: new Buffer(0),
	
	        // Static data
	        decodeTables: this.decodeTables,
	        decodeTableSeq: this.decodeTableSeq,
	        defaultCharUnicode: this.defaultCharUnicode,
	        gb18030: this.gb18030,
	    }
	}
	
	
	
	// Decoder helpers
	DBCSCodec.prototype._getDecodeTrieNode = function(addr) {
	    var bytes = [];
	    for (; addr > 0; addr >>= 8)
	        bytes.push(addr & 0xFF);
	    if (bytes.length == 0)
	        bytes.push(0);
	
	    var node = this.decodeTables[0];
	    for (var i = bytes.length-1; i > 0; i--) { // Traverse nodes deeper into the trie.
	        var val = node[bytes[i]];
	
	        if (val == UNASSIGNED) { // Create new node.
	            node[bytes[i]] = NODE_START - this.decodeTables.length;
	            this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
	        }
	        else if (val <= NODE_START) { // Existing node.
	            node = this.decodeTables[NODE_START - val];
	        }
	        else
	            throw new Error("Overwrite byte in " + this.options.encodingName + ", addr: " + addr.toString(16));
	    }
	    return node;
	}
	
	
	DBCSCodec.prototype._addDecodeChunk = function(chunk) {
	    // First element of chunk is the hex mbcs code where we start.
	    var curAddr = parseInt(chunk[0], 16);
	
	    // Choose the decoding node where we'll write our chars.
	    var writeTable = this._getDecodeTrieNode(curAddr);
	    curAddr = curAddr & 0xFF;
	
	    // Write all other elements of the chunk to the table.
	    for (var k = 1; k < chunk.length; k++) {
	        var part = chunk[k];
	        if (typeof part === "string") { // String, write as-is.
	            for (var l = 0; l < part.length;) {
	                var code = part.charCodeAt(l++);
	                if (0xD800 <= code && code < 0xDC00) { // Decode surrogate
	                    var codeTrail = part.charCodeAt(l++);
	                    if (0xDC00 <= codeTrail && codeTrail < 0xE000)
	                        writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00);
	                    else
	                        throw new Error("Incorrect surrogate pair in "  + this.options.encodingName + " at chunk " + chunk[0]);
	                }
	                else if (0x0FF0 < code && code <= 0x0FFF) { // Character sequence (our own encoding used)
	                    var len = 0xFFF - code + 2;
	                    var seq = [];
	                    for (var m = 0; m < len; m++)
	                        seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.
	
	                    writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
	                    this.decodeTableSeq.push(seq);
	                }
	                else
	                    writeTable[curAddr++] = code; // Basic char
	            }
	        } 
	        else if (typeof part === "number") { // Integer, meaning increasing sequence starting with prev character.
	            var charCode = writeTable[curAddr - 1] + 1;
	            for (var l = 0; l < part; l++)
	                writeTable[curAddr++] = charCode++;
	        }
	        else
	            throw new Error("Incorrect type '" + typeof part + "' given in "  + this.options.encodingName + " at chunk " + chunk[0]);
	    }
	    if (curAddr > 0xFF)
	        throw new Error("Incorrect chunk in "  + this.options.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
	}
	
	// Encoder helpers
	DBCSCodec.prototype._getEncodeBucket = function(uCode) {
	    var high = uCode >> 8; // This could be > 0xFF because of astral characters.
	    if (this.encodeTable[high] === undefined)
	        this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.
	    return this.encodeTable[high];
	}
	
	DBCSCodec.prototype._setEncodeChar = function(uCode, dbcsCode) {
	    var bucket = this._getEncodeBucket(uCode);
	    var low = uCode & 0xFF;
	    if (bucket[low] <= SEQ_START)
	        this.encodeTableSeq[SEQ_START-bucket[low]][DEF_CHAR] = dbcsCode; // There's already a sequence, set a single-char subsequence of it.
	    else if (bucket[low] == UNASSIGNED)
	        bucket[low] = dbcsCode;
	}
	
	DBCSCodec.prototype._setEncodeSequence = function(seq, dbcsCode) {
	    
	    // Get the root of character tree according to first character of the sequence.
	    var uCode = seq[0];
	    var bucket = this._getEncodeBucket(uCode);
	    var low = uCode & 0xFF;
	
	    var node;
	    if (bucket[low] <= SEQ_START) {
	        // There's already a sequence with  - use it.
	        node = this.encodeTableSeq[SEQ_START-bucket[low]];
	    }
	    else {
	        // There was no sequence object - allocate a new one.
	        node = {};
	        if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.
	        bucket[low] = SEQ_START - this.encodeTableSeq.length;
	        this.encodeTableSeq.push(node);
	    }
	
	    // Traverse the character tree, allocating new nodes as needed.
	    for (var j = 1; j < seq.length-1; j++) {
	        var oldVal = node[uCode];
	        if (typeof oldVal === 'object')
	            node = oldVal;
	        else {
	            node = node[uCode] = {}
	            if (oldVal !== undefined)
	                node[DEF_CHAR] = oldVal
	        }
	    }
	
	    // Set the leaf to given dbcsCode.
	    uCode = seq[seq.length-1];
	    node[uCode] = dbcsCode;
	}
	
	DBCSCodec.prototype._fillEncodeTable = function(nodeIdx, prefix, skipEncodeChars) {
	    var node = this.decodeTables[nodeIdx];
	    for (var i = 0; i < 0x100; i++) {
	        var uCode = node[i];
	        var mbCode = prefix + i;
	        if (skipEncodeChars[mbCode])
	            continue;
	
	        if (uCode >= 0)
	            this._setEncodeChar(uCode, mbCode);
	        else if (uCode <= NODE_START)
	            this._fillEncodeTable(NODE_START - uCode, mbCode << 8, skipEncodeChars);
	        else if (uCode <= SEQ_START)
	            this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
	    }
	}
	
	
	
	// == Actual Encoding ==========================================================
	
	
	function encoderDBCSWrite(str) {
	    var newBuf = new Buffer(str.length * (this.gb18030 ? 4 : 3)), 
	        leadSurrogate = this.leadSurrogate,
	        seqObj = this.seqObj, nextChar = -1,
	        i = 0, j = 0;
	
	    while (true) {
	        // 0. Get next character.
	        if (nextChar === -1) {
	            if (i == str.length) break;
	            var uCode = str.charCodeAt(i++);
	        }
	        else {
	            var uCode = nextChar;
	            nextChar = -1;    
	        }
	
	        // 1. Handle surrogates.
	        if (0xD800 <= uCode && uCode < 0xE000) { // Char is one of surrogates.
	            if (uCode < 0xDC00) { // We've got lead surrogate.
	                if (leadSurrogate === -1) {
	                    leadSurrogate = uCode;
	                    continue;
	                } else {
	                    leadSurrogate = uCode;
	                    // Double lead surrogate found.
	                    uCode = UNASSIGNED;
	                }
	            } else { // We've got trail surrogate.
	                if (leadSurrogate !== -1) {
	                    uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00);
	                    leadSurrogate = -1;
	                } else {
	                    // Incomplete surrogate pair - only trail surrogate found.
	                    uCode = UNASSIGNED;
	                }
	                
	            }
	        }
	        else if (leadSurrogate !== -1) {
	            // Incomplete surrogate pair - only lead surrogate found.
	            nextChar = uCode; uCode = UNASSIGNED; // Write an error, then current char.
	            leadSurrogate = -1;
	        }
	
	        // 2. Convert uCode character.
	        var dbcsCode = UNASSIGNED;
	        if (seqObj !== undefined && uCode != UNASSIGNED) { // We are in the middle of the sequence
	            var resCode = seqObj[uCode];
	            if (typeof resCode === 'object') { // Sequence continues.
	                seqObj = resCode;
	                continue;
	
	            } else if (typeof resCode == 'number') { // Sequence finished. Write it.
	                dbcsCode = resCode;
	
	            } else if (resCode == undefined) { // Current character is not part of the sequence.
	
	                // Try default character for this sequence
	                resCode = seqObj[DEF_CHAR];
	                if (resCode !== undefined) {
	                    dbcsCode = resCode; // Found. Write it.
	                    nextChar = uCode; // Current character will be written too in the next iteration.
	
	                } else {
	                    // TODO: What if we have no default? (resCode == undefined)
	                    // Then, we should write first char of the sequence as-is and try the rest recursively.
	                    // Didn't do it for now because no encoding has this situation yet.
	                    // Currently, just skip the sequence and write current char.
	                }
	            }
	            seqObj = undefined;
	        }
	        else if (uCode >= 0) {  // Regular character
	            var subtable = this.encodeTable[uCode >> 8];
	            if (subtable !== undefined)
	                dbcsCode = subtable[uCode & 0xFF];
	            
	            if (dbcsCode <= SEQ_START) { // Sequence start
	                seqObj = this.encodeTableSeq[SEQ_START-dbcsCode];
	                continue;
	            }
	
	            if (dbcsCode == UNASSIGNED && this.gb18030) {
	                // Use GB18030 algorithm to find character(s) to write.
	                var idx = findIdx(this.gb18030.uChars, uCode);
	                if (idx != -1) {
	                    var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
	                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600); dbcsCode = dbcsCode % 12600;
	                    newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260); dbcsCode = dbcsCode % 1260;
	                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10); dbcsCode = dbcsCode % 10;
	                    newBuf[j++] = 0x30 + dbcsCode;
	                    continue;
	                }
	            }
	        }
	
	        // 3. Write dbcsCode character.
	        if (dbcsCode === UNASSIGNED)
	            dbcsCode = this.defaultCharSingleByte;
	        
	        if (dbcsCode < 0x100) {
	            newBuf[j++] = dbcsCode;
	        }
	        else if (dbcsCode < 0x10000) {
	            newBuf[j++] = dbcsCode >> 8;   // high byte
	            newBuf[j++] = dbcsCode & 0xFF; // low byte
	        }
	        else {
	            newBuf[j++] = dbcsCode >> 16;
	            newBuf[j++] = (dbcsCode >> 8) & 0xFF;
	            newBuf[j++] = dbcsCode & 0xFF;
	        }
	    }
	
	    this.seqObj = seqObj;
	    this.leadSurrogate = leadSurrogate;
	    return newBuf.slice(0, j);
	}
	
	function encoderDBCSEnd() {
	    if (this.leadSurrogate === -1 && this.seqObj === undefined)
	        return; // All clean. Most often case.
	
	    var newBuf = new Buffer(10), j = 0;
	
	    if (this.seqObj) { // We're in the sequence.
	        var dbcsCode = this.seqObj[DEF_CHAR];
	        if (dbcsCode !== undefined) { // Write beginning of the sequence.
	            if (dbcsCode < 0x100) {
	                newBuf[j++] = dbcsCode;
	            }
	            else {
	                newBuf[j++] = dbcsCode >> 8;   // high byte
	                newBuf[j++] = dbcsCode & 0xFF; // low byte
	            }
	        } else {
	            // See todo above.
	        }
	        this.seqObj = undefined;
	    }
	
	    if (this.leadSurrogate !== -1) {
	        // Incomplete surrogate pair - only lead surrogate found.
	        newBuf[j++] = this.defaultCharSingleByte;
	        this.leadSurrogate = -1;
	    }
	    
	    return newBuf.slice(0, j);
	}
	
	
	// == Actual Decoding ==========================================================
	
	
	function decoderDBCSWrite(buf) {
	    var newBuf = new Buffer(buf.length*2),
	        nodeIdx = this.nodeIdx, 
	        prevBuf = this.prevBuf, prevBufOffset = this.prevBuf.length,
	        seqStart = -this.prevBuf.length, // idx of the start of current parsed sequence.
	        uCode;
	
	    if (prevBufOffset > 0) // Make prev buf overlap a little to make it easier to slice later.
	        prevBuf = Buffer.concat([prevBuf, buf.slice(0, 10)]);
	    
	    for (var i = 0, j = 0; i < buf.length; i++) {
	        var curByte = (i >= 0) ? buf[i] : prevBuf[i + prevBufOffset];
	
	        // TODO: Check curByte is number 0 <= < 256
	
	        // Lookup in current trie node.
	        var uCode = this.decodeTables[nodeIdx][curByte];
	
	        if (uCode >= 0) { 
	            // Normal character, just use it.
	        }
	        else if (uCode === UNASSIGNED) { // Unknown char.
	            // TODO: Callback with seq.
	            //var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
	            i = seqStart; // Try to parse again, after skipping first byte of the sequence ('i' will be incremented by 'for' cycle).
	            uCode = this.defaultCharUnicode.charCodeAt(0);
	        }
	        else if (uCode === GB18030_CODE) {
	            var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
	            var ptr = (curSeq[0]-0x81)*12600 + (curSeq[1]-0x30)*1260 + (curSeq[2]-0x81)*10 + (curSeq[3]-0x30);
	            var idx = findIdx(this.gb18030.gbChars, ptr);
	            uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
	        }
	        else if (uCode <= NODE_START) { // Go to next trie node.
	            nodeIdx = NODE_START - uCode;
	            continue;
	        }
	        else if (uCode <= SEQ_START) { // Output a sequence of chars.
	            var seq = this.decodeTableSeq[SEQ_START - uCode];
	            for (var k = 0; k < seq.length - 1; k++) {
	                uCode = seq[k];
	                newBuf[j++] = uCode & 0xFF;
	                newBuf[j++] = uCode >> 8;
	            }
	            uCode = seq[seq.length-1];
	        }
	        else
	            throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte);
	
	        // Write the character to buffer, handling higher planes using surrogate pair.
	        if (uCode > 0xFFFF) { 
	            uCode -= 0x10000;
	            var uCodeLead = 0xD800 + Math.floor(uCode / 0x400);
	            newBuf[j++] = uCodeLead & 0xFF;
	            newBuf[j++] = uCodeLead >> 8;
	
	            uCode = 0xDC00 + uCode % 0x400;
	        }
	        newBuf[j++] = uCode & 0xFF;
	        newBuf[j++] = uCode >> 8;
	
	        // Reset trie node.
	        nodeIdx = 0; seqStart = i+1;
	    }
	
	    this.nodeIdx = nodeIdx;
	    this.prevBuf = (seqStart >= 0) ? buf.slice(seqStart) : prevBuf.slice(seqStart + prevBufOffset);
	    return newBuf.slice(0, j).toString('ucs2');
	}
	
	function decoderDBCSEnd() {
	    var ret = '';
	
	    // Try to parse all remaining chars.
	    while (this.prevBuf.length > 0) {
	        // Skip 1 character in the buffer.
	        ret += this.defaultCharUnicode;
	        var buf = this.prevBuf.slice(1);
	
	        // Parse remaining as usual.
	        this.prevBuf = new Buffer(0);
	        this.nodeIdx = 0;
	        if (buf.length > 0)
	            ret += decoderDBCSWrite.call(this, buf);
	    }
	
	    this.nodeIdx = 0;
	    return ret;
	}
	
	// Binary search for GB18030. Returns largest i such that table[i] <= val.
	function findIdx(table, val) {
	    if (table[0] > val)
	        return -1;
	
	    var l = 0, r = table.length;
	    while (l < r-1) { // always table[l] <= val < table[r]
	        var mid = l + Math.floor((r-l+1)/2);
	        if (table[mid] <= val)
	            l = mid;
	        else
	            r = mid;
	    }
	    return l;
	}
	


/***/ },
/* 137 */
/*!***********************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/encodings/dbcs-data.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	// Description of supported double byte encodings and aliases.
	// Tables are not require()-d until they are needed to speed up library load.
	// require()-s are direct to support Browserify.
	
	module.exports = {
	    
	    // == Japanese/ShiftJIS ====================================================
	    // All japanese encodings are based on JIS X set of standards:
	    // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
	    // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
	    //              Has several variations in 1978, 1983, 1990 and 1997.
	    // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
	    // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
	    //              2 planes, first is superset of 0208, second - revised 0212.
	    //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)
	
	    // Byte encodings are:
	    //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
	    //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
	    //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
	    //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
	    //               0x00-0x7F       - lower part of 0201
	    //               0x8E, 0xA1-0xDF - upper part of 0201
	    //               (0xA1-0xFE)x2   - 0208 plane (94x94).
	    //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
	    //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
	    //               Used as-is in ISO2022 family.
	    //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
	    //                0201-1976 Roman, 0208-1978, 0208-1983.
	    //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
	    //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
	    //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
	    //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
	    //
	    // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
	    //
	    // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html
	
	
	    'shiftjis': {
	        type: '_dbcs',
	        table: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/shiftjis.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) },
	        encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
	        encodeSkipVals: [{from: 0xED40, to: 0xF940}],
	    },
	    'csshiftjis': 'shiftjis',
	    'mskanji': 'shiftjis',
	    'sjis': 'shiftjis',
	    'windows31j': 'shiftjis',
	    'xsjis': 'shiftjis',
	    'windows932': 'shiftjis',
	    '932': 'shiftjis',
	    'cp932': 'shiftjis',
	
	    'eucjp': {
	        type: '_dbcs',
	        table: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/eucjp.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) },
	        encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
	    },
	
	    // TODO: KDDI extension to Shift_JIS
	    // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
	    // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
	
	    // == Chinese/GBK ==========================================================
	    // http://en.wikipedia.org/wiki/GBK
	
	    // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
	    'gb2312': 'cp936',
	    'gb231280': 'cp936',
	    'gb23121980': 'cp936',
	    'csgb2312': 'cp936',
	    'csiso58gb231280': 'cp936',
	    'euccn': 'cp936',
	    'isoir58': 'gbk',
	
	    // Microsoft's CP936 is a subset and approximation of GBK.
	    // TODO: Euro = 0x80 in cp936, but not in GBK (where it's valid but undefined)
	    'windows936': 'cp936',
	    '936': 'cp936',
	    'cp936': {
	        type: '_dbcs',
	        table: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/cp936.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) },
	    },
	
	    // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
	    'gbk': {
	        type: '_dbcs',
	        table: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/cp936.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).concat(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/gbk-added.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) },
	    },
	    'xgbk': 'gbk',
	
	    // GB18030 is an algorithmic extension of GBK.
	    'gb18030': {
	        type: '_dbcs',
	        table: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/cp936.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).concat(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/gbk-added.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) },
	        gb18030: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/gb18030-ranges.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) },
	    },
	
	    'chinese': 'gb18030',
	
	    // TODO: Support GB18030 (~27000 chars + whole unicode mapping, cp54936)
	    // http://icu-project.org/docs/papers/gb18030.html
	    // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
	    // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
	
	    // == Korean ===============================================================
	    // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
	    'windows949': 'cp949',
	    '949': 'cp949',
	    'cp949': {
	        type: '_dbcs',
	        table: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/cp949.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) },
	    },
	
	    'cseuckr': 'cp949',
	    'csksc56011987': 'cp949',
	    'euckr': 'cp949',
	    'isoir149': 'cp949',
	    'korean': 'cp949',
	    'ksc56011987': 'cp949',
	    'ksc56011989': 'cp949',
	    'ksc5601': 'cp949',
	
	
	    // == Big5/Taiwan/Hong Kong ================================================
	    // There are lots of tables for Big5 and cp950. Please see the following links for history:
	    // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
	    // Variations, in roughly number of defined chars:
	    //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
	    //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
	    //  * Big5-2003 (Taiwan standard) almost superset of cp950.
	    //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
	    //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
	    //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
	    //    Plus, it has 4 combining sequences.
	    //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
	    //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
	    //    Implementations are not consistent within browsers; sometimes labeled as just big5.
	    //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
	    //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
	    //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
	    //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
	    //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
	    // 
	    // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
	    // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.
	
	    'windows950': 'cp950',
	    '950': 'cp950',
	    'cp950': {
	        type: '_dbcs',
	        table: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/cp950.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) },
	    },
	
	    // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
	    'big5': 'big5hkscs',
	    'big5hkscs': {
	        type: '_dbcs',
	        table: function() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/cp950.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).concat(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./tables/big5-added.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) },
	    },
	
	    'cnbig5': 'big5hkscs',
	    'csbig5': 'big5hkscs',
	    'xxbig5': 'big5hkscs',
	
	};


/***/ },
/* 138 */
/*!***************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/lib/streams.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Transform = __webpack_require__(/*! stream */ 27).Transform;
	
	
	// == Exports ==================================================================
	module.exports = function(iconv) {
	    
	    // Additional Public API.
	    iconv.encodeStream = function encodeStream(encoding, options) {
	        return new IconvLiteEncoderStream(iconv.getCodec(encoding).encoder(options), options);
	    }
	
	    iconv.decodeStream = function decodeStream(encoding, options) {
	        return new IconvLiteDecoderStream(iconv.getCodec(encoding).decoder(options), options);
	    }
	
	    iconv.supportsStreams = true;
	
	
	    // Not published yet.
	    iconv.IconvLiteEncoderStream = IconvLiteEncoderStream;
	    iconv.IconvLiteDecoderStream = IconvLiteDecoderStream;
	    iconv._collect = IconvLiteDecoderStream.prototype.collect;
	};
	
	
	// == Encoder stream =======================================================
	function IconvLiteEncoderStream(conv, options) {
	    this.conv = conv;
	    options = options || {};
	    options.decodeStrings = false; // We accept only strings, so we don't need to decode them.
	    Transform.call(this, options);
	}
	
	IconvLiteEncoderStream.prototype = Object.create(Transform.prototype, {
	    constructor: { value: IconvLiteEncoderStream }
	});
	
	IconvLiteEncoderStream.prototype._transform = function(chunk, encoding, done) {
	    if (typeof chunk != 'string')
	        return done(new Error("Iconv encoding stream needs strings as its input."));
	    try {
	        var res = this.conv.write(chunk);
	        if (res && res.length) this.push(res);
	        done();
	    }
	    catch (e) {
	        done(e);
	    }
	}
	
	IconvLiteEncoderStream.prototype._flush = function(done) {
	    try {
	        var res = this.conv.end();
	        if (res && res.length) this.push(res);
	        done();
	    }
	    catch (e) {
	        done(e);
	    }
	}
	
	IconvLiteEncoderStream.prototype.collect = function(cb) {
	    var chunks = [];
	    this.on('error', cb);
	    this.on('data', function(chunk) { chunks.push(chunk); });
	    this.on('end', function() {
	        cb(null, Buffer.concat(chunks));
	    });
	    return this;
	}
	
	
	// == Decoder stream =======================================================
	function IconvLiteDecoderStream(conv, options) {
	    this.conv = conv;
	    options = options || {};
	    options.encoding = this.encoding = 'utf8'; // We output strings.
	    Transform.call(this, options);
	}
	
	IconvLiteDecoderStream.prototype = Object.create(Transform.prototype, {
	    constructor: { value: IconvLiteDecoderStream }
	});
	
	IconvLiteDecoderStream.prototype._transform = function(chunk, encoding, done) {
	    if (!Buffer.isBuffer(chunk))
	        return done(new Error("Iconv decoding stream needs buffers as its input."));
	    try {
	        var res = this.conv.write(chunk);
	        if (res && res.length) this.push(res, this.encoding);
	        done();
	    }
	    catch (e) {
	        done(e);
	    }
	}
	
	IconvLiteDecoderStream.prototype._flush = function(done) {
	    try {
	        var res = this.conv.end();
	        if (res && res.length) this.push(res, this.encoding);                
	        done();
	    }
	    catch (e) {
	        done(e);
	    }
	}
	
	IconvLiteDecoderStream.prototype.collect = function(cb) {
	    var res = '';
	    this.on('error', cb);
	    this.on('data', function(chunk) { res += chunk; });
	    this.on('end', function() {
	        cb(null, res);
	    });
	    return this;
	}
	


/***/ },
/* 139 */
/*!*******************************************************!*\
  !*** ./~/body-parser/~/iconv-lite/lib/extend-node.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	// == Extend Node primitives to use iconv-lite =================================
	
	module.exports = function (iconv) {
	    var original = undefined; // Place to keep original methods.
	
	    iconv.extendNodeEncodings = function extendNodeEncodings() {
	        if (original) return;
	        original = {};
	
	        var nodeNativeEncodings = {
	            'hex': true, 'utf8': true, 'utf-8': true, 'ascii': true, 'binary': true, 
	            'base64': true, 'ucs2': true, 'ucs-2': true, 'utf16le': true, 'utf-16le': true,
	        };
	
	        Buffer.isNativeEncoding = function(enc) {
	            return nodeNativeEncodings[enc && enc.toLowerCase()];
	        }
	
	        // -- SlowBuffer -----------------------------------------------------------
	        var SlowBuffer = __webpack_require__(/*! buffer */ 34).SlowBuffer;
	
	        original.SlowBufferToString = SlowBuffer.prototype.toString;
	        SlowBuffer.prototype.toString = function(encoding, start, end) {
	            encoding = String(encoding || 'utf8').toLowerCase();
	            start = +start || 0;
	            if (typeof end !== 'number') end = this.length;
	
	            // Fastpath empty strings
	            if (+end == start)
	                return '';
	
	            // Use native conversion when possible
	            if (Buffer.isNativeEncoding(encoding))
	                return original.SlowBufferToString.call(this, encoding, start, end);
	
	            // Otherwise, use our decoding method.
	            if (typeof start == 'undefined') start = 0;
	            if (typeof end == 'undefined') end = this.length;
	            return iconv.decode(this.slice(start, end), encoding);
	        }
	
	        original.SlowBufferWrite = SlowBuffer.prototype.write;
	        SlowBuffer.prototype.write = function(string, offset, length, encoding) {
	            // Support both (string, offset, length, encoding)
	            // and the legacy (string, encoding, offset, length)
	            if (isFinite(offset)) {
	                if (!isFinite(length)) {
	                    encoding = length;
	                    length = undefined;
	                }
	            } else {  // legacy
	                var swap = encoding;
	                encoding = offset;
	                offset = length;
	                length = swap;
	            }
	
	            offset = +offset || 0;
	            var remaining = this.length - offset;
	            if (!length) {
	                length = remaining;
	            } else {
	                length = +length;
	                if (length > remaining) {
	                    length = remaining;
	                }
	            }
	            encoding = String(encoding || 'utf8').toLowerCase();
	
	            // Use native conversion when possible
	            if (Buffer.isNativeEncoding(encoding))
	                return original.SlowBufferWrite.call(this, string, offset, length, encoding);
	
	            if (string.length > 0 && (length < 0 || offset < 0))
	                throw new RangeError('attempt to write beyond buffer bounds');
	
	            // Otherwise, use our encoding method.
	            var buf = iconv.encode(string, encoding);
	            if (buf.length < length) length = buf.length;
	            buf.copy(this, offset, 0, length);
	            return length;
	        }
	
	        // -- Buffer ---------------------------------------------------------------
	
	        original.BufferIsEncoding = Buffer.isEncoding;
	        Buffer.isEncoding = function(encoding) {
	            return Buffer.isNativeEncoding(encoding) || iconv.encodingExists(encoding);
	        }
	
	        original.BufferByteLength = Buffer.byteLength;
	        Buffer.byteLength = SlowBuffer.byteLength = function(str, encoding) {
	            encoding = String(encoding || 'utf8').toLowerCase();
	
	            // Use native conversion when possible
	            if (Buffer.isNativeEncoding(encoding))
	                return original.BufferByteLength.call(this, str, encoding);
	
	            // Slow, I know, but we don't have a better way yet.
	            return iconv.encode(str, encoding).length;
	        }
	
	        original.BufferToString = Buffer.prototype.toString;
	        Buffer.prototype.toString = function(encoding, start, end) {
	            encoding = String(encoding || 'utf8').toLowerCase();
	
	            // Use native conversion when possible
	            if (Buffer.isNativeEncoding(encoding))
	                return original.BufferToString.call(this, encoding, start, end);
	
	            // Otherwise, use our decoding method.
	            if (typeof start == 'undefined') start = 0;
	            if (typeof end == 'undefined') end = this.length;
	            return iconv.decode(this.slice(start, end), encoding);
	        }
	
	        original.BufferWrite = Buffer.prototype.write;
	        Buffer.prototype.write = function(string, offset, length, encoding) {
	            var _offset = offset, _length = length, _encoding = encoding;
	            // Support both (string, offset, length, encoding)
	            // and the legacy (string, encoding, offset, length)
	            if (isFinite(offset)) {
	                if (!isFinite(length)) {
	                    encoding = length;
	                    length = undefined;
	                }
	            } else {  // legacy
	                var swap = encoding;
	                encoding = offset;
	                offset = length;
	                length = swap;
	            }
	
	            encoding = String(encoding || 'utf8').toLowerCase();
	
	            // Use native conversion when possible
	            if (Buffer.isNativeEncoding(encoding))
	                return original.BufferWrite.call(this, string, _offset, _length, _encoding);
	
	            offset = +offset || 0;
	            var remaining = this.length - offset;
	            if (!length) {
	                length = remaining;
	            } else {
	                length = +length;
	                if (length > remaining) {
	                    length = remaining;
	                }
	            }
	
	            if (string.length > 0 && (length < 0 || offset < 0))
	                throw new RangeError('attempt to write beyond buffer bounds');
	
	            // Otherwise, use our encoding method.
	            var buf = iconv.encode(string, encoding);
	            if (buf.length < length) length = buf.length;
	            buf.copy(this, offset, 0, length);
	            return length;
	
	            // TODO: Set _charsWritten.
	        }
	
	
	        // -- Readable -------------------------------------------------------------
	        if (iconv.supportsStreams) {
	            var Readable = __webpack_require__(/*! stream */ 27).Readable;
	
	            original.ReadableSetEncoding = Readable.prototype.setEncoding;
	            Readable.prototype.setEncoding = function setEncoding(enc, options) {
	                // Try to use original function when possible.
	                if (Buffer.isNativeEncoding(enc))
	                    return original.ReadableSetEncoding.call(this, enc);
	
	                // Try to use our own decoder, it has the same interface.
	                this._readableState.decoder = iconv.getCodec(enc).decoder(options);
	                this._readableState.encoding = enc;
	            }
	
	            Readable.prototype.collect = iconv._collect;
	        }
	    }
	
	    // Remove iconv-lite Node primitive extensions.
	    iconv.undoExtendNodeEncodings = function undoExtendNodeEncodings() {
	        if (!original)
	            throw new Error("require('iconv-lite').undoExtendNodeEncodings(): Nothing to undo; extendNodeEncodings() is not called.")
	
	        delete Buffer.isNativeEncoding;
	
	        var SlowBuffer = __webpack_require__(/*! buffer */ 34).SlowBuffer;
	
	        SlowBuffer.prototype.toString = original.SlowBufferToString;
	        SlowBuffer.prototype.write = original.SlowBufferWrite;
	
	        Buffer.isEncoding = original.BufferIsEncoding;
	        Buffer.byteLength = original.BufferByteLength;
	        Buffer.prototype.toString = original.BufferToString;
	        Buffer.prototype.write = original.BufferWrite;
	
	        if (iconv.supportsStreams) {
	            var Readable = __webpack_require__(/*! stream */ 27).Readable;
	
	            Readable.prototype.setEncoding = original.ReadableSetEncoding;
	            delete Readable.prototype.collect;
	        }
	
	        original = undefined;
	    }
	}


/***/ },
/* 140 */
/*!**********************************************!*\
  !*** ./~/body-parser/~/on-finished/index.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * on-finished
	 * Copyright(c) 2013 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = onFinished;
	module.exports.isFinished = isFinished;
	
	/**
	* Module dependencies.
	*/
	
	var first = __webpack_require__(/*! ee-first */ 141)
	
	/**
	* Variables.
	*/
	
	/* istanbul ignore next */
	var defer = typeof setImmediate === 'function'
	  ? setImmediate
	  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }
	
	/**
	 * Invoke callback when the response has finished, useful for
	 * cleaning up resources afterwards.
	 *
	 * @param {object} msg
	 * @param {function} listener
	 * @return {object}
	 * @api public
	 */
	
	function onFinished(msg, listener) {
	  if (isFinished(msg) !== false) {
	    defer(listener, null, msg)
	    return msg
	  }
	
	  // attach the listener to the message
	  attachListener(msg, listener)
	
	  return msg
	}
	
	/**
	 * Determine if message is already finished.
	 *
	 * @param {object} msg
	 * @return {boolean}
	 * @api public
	 */
	
	function isFinished(msg) {
	  var socket = msg.socket
	
	  if (typeof msg.finished === 'boolean') {
	    // OutgoingMessage
	    return Boolean(msg.finished || (socket && !socket.writable))
	  }
	
	  if (typeof msg.complete === 'boolean') {
	    // IncomingMessage
	    return Boolean(!socket || !socket.readable || (msg.complete && !msg.readable))
	  }
	
	  // don't know
	  return undefined
	}
	
	/**
	 * Attach a finished listener to the message.
	 *
	 * @param {object} msg
	 * @param {function} callback
	 * @private
	 */
	
	function attachFinishedListener(msg, callback) {
	  var eeMsg
	  var eeSocket
	  var finished = false
	
	  function onFinish(error) {
	    eeMsg.cancel()
	    eeSocket.cancel()
	
	    finished = true
	    callback(error)
	  }
	
	  // finished on first message event
	  eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish)
	
	  function onSocket(socket) {
	    // remove listener
	    msg.removeListener('socket', onSocket)
	
	    if (finished) return
	    if (eeMsg !== eeSocket) return
	
	    // finished on first socket event
	    eeSocket = first([[socket, 'error', 'close']], onFinish)
	  }
	
	  if (msg.socket) {
	    // socket already assigned
	    onSocket(msg.socket)
	    return
	  }
	
	  // wait for socket to be assigned
	  msg.on('socket', onSocket)
	
	  if (msg.socket === undefined) {
	    // node.js 0.8 patch
	    patchAssignSocket(msg, onSocket)
	  }
	}
	
	/**
	 * Attach the listener to the message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @api private
	 */
	
	function attachListener(msg, listener) {
	  var attached = msg.__onFinished
	
	  // create a private single listener with queue
	  if (!attached || !attached.queue) {
	    attached = msg.__onFinished = createListener(msg)
	    attachFinishedListener(msg, attached)
	  }
	
	  attached.queue.push(listener)
	}
	
	/**
	 * Create listener on message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @api private
	 */
	
	function createListener(msg) {
	  function listener(err) {
	    if (msg.__onFinished === listener) msg.__onFinished = null
	    if (!listener.queue) return
	
	    var queue = listener.queue
	    listener.queue = null
	
	    for (var i = 0; i < queue.length; i++) {
	      queue[i](err, msg)
	    }
	  }
	
	  listener.queue = []
	
	  return listener
	}
	
	/**
	 * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
	 *
	 * @param {ServerResponse} res
	 * @param {function} callback
	 * @private
	 */
	
	function patchAssignSocket(res, callback) {
	  var assignSocket = res.assignSocket
	
	  if (typeof assignSocket !== 'function') return
	
	  // res.on('socket', callback) is broken in 0.8
	  res.assignSocket = function _assignSocket(socket) {
	    assignSocket.call(this, socket)
	    callback(socket)
	  }
	}


/***/ },
/* 141 */
/*!*********************************************************!*\
  !*** ./~/body-parser/~/on-finished/~/ee-first/index.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	
	module.exports = function first(stuff, done) {
	  if (!Array.isArray(stuff))
	    throw new TypeError('arg must be an array of [ee, events...] arrays')
	
	  var cleanups = []
	
	  for (var i = 0; i < stuff.length; i++) {
	    var arr = stuff[i]
	
	    if (!Array.isArray(arr) || arr.length < 2)
	      throw new TypeError('each array member must be [ee, events...]')
	
	    var ee = arr[0]
	
	    for (var j = 1; j < arr.length; j++) {
	      var event = arr[j]
	      var fn = listener(event, callback)
	
	      // listen to the event
	      ee.on(event, fn)
	      // push this listener to the list of cleanups
	      cleanups.push({
	        ee: ee,
	        event: event,
	        fn: fn,
	      })
	    }
	  }
	
	  function callback() {
	    cleanup()
	    done.apply(null, arguments)
	  }
	
	  function cleanup() {
	    var x
	    for (var i = 0; i < cleanups.length; i++) {
	      x = cleanups[i]
	      x.ee.removeListener(x.event, x.fn)
	    }
	  }
	
	  function thunk(fn) {
	    done = fn
	  }
	
	  thunk.cancel = cleanup
	
	  return thunk
	}
	
	function listener(event, done) {
	  return function onevent(arg1) {
	    var args = new Array(arguments.length)
	    var ee = this
	    var err = event === 'error'
	      ? arg1
	      : null
	
	    // copy args to prevent arguments escaping scope
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i]
	    }
	
	    done(err, ee, event, args)
	  }
	}


/***/ },
/* 142 */
/*!**********************************************!*\
  !*** ./~/body-parser/~/media-typer/index.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/*!
	 * media-typer
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * RegExp to match *( ";" parameter ) in RFC 2616 sec 3.7
	 *
	 * parameter     = token "=" ( token | quoted-string )
	 * token         = 1*<any CHAR except CTLs or separators>
	 * separators    = "(" | ")" | "<" | ">" | "@"
	 *               | "," | ";" | ":" | "\" | <">
	 *               | "/" | "[" | "]" | "?" | "="
	 *               | "{" | "}" | SP | HT
	 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
	 * qdtext        = <any TEXT except <">>
	 * quoted-pair   = "\" CHAR
	 * CHAR          = <any US-ASCII character (octets 0 - 127)>
	 * TEXT          = <any OCTET except CTLs, but including LWS>
	 * LWS           = [CRLF] 1*( SP | HT )
	 * CRLF          = CR LF
	 * CR            = <US-ASCII CR, carriage return (13)>
	 * LF            = <US-ASCII LF, linefeed (10)>
	 * SP            = <US-ASCII SP, space (32)>
	 * SHT           = <US-ASCII HT, horizontal-tab (9)>
	 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
	 * OCTET         = <any 8-bit sequence of data>
	 */
	var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g;
	var textRegExp = /^[\u0020-\u007e\u0080-\u00ff]+$/
	var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/
	
	/**
	 * RegExp to match quoted-pair in RFC 2616
	 *
	 * quoted-pair = "\" CHAR
	 * CHAR        = <any US-ASCII character (octets 0 - 127)>
	 */
	var qescRegExp = /\\([\u0000-\u007f])/g;
	
	/**
	 * RegExp to match chars that must be quoted-pair in RFC 2616
	 */
	var quoteRegExp = /([\\"])/g;
	
	/**
	 * RegExp to match type in RFC 6838
	 *
	 * type-name = restricted-name
	 * subtype-name = restricted-name
	 * restricted-name = restricted-name-first *126restricted-name-chars
	 * restricted-name-first  = ALPHA / DIGIT
	 * restricted-name-chars  = ALPHA / DIGIT / "!" / "#" /
	 *                          "$" / "&" / "-" / "^" / "_"
	 * restricted-name-chars =/ "." ; Characters before first dot always
	 *                              ; specify a facet name
	 * restricted-name-chars =/ "+" ; Characters after last plus always
	 *                              ; specify a structured syntax suffix
	 * ALPHA =  %x41-5A / %x61-7A   ; A-Z / a-z
	 * DIGIT =  %x30-39             ; 0-9
	 */
	var subtypeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/
	var typeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/
	var typeRegExp = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
	
	/**
	 * Module exports.
	 */
	
	exports.format = format
	exports.parse = parse
	
	/**
	 * Format object to media type.
	 *
	 * @param {object} obj
	 * @return {string}
	 * @api public
	 */
	
	function format(obj) {
	  if (!obj || typeof obj !== 'object') {
	    throw new TypeError('argument obj is required')
	  }
	
	  var parameters = obj.parameters
	  var subtype = obj.subtype
	  var suffix = obj.suffix
	  var type = obj.type
	
	  if (!type || !typeNameRegExp.test(type)) {
	    throw new TypeError('invalid type')
	  }
	
	  if (!subtype || !subtypeNameRegExp.test(subtype)) {
	    throw new TypeError('invalid subtype')
	  }
	
	  // format as type/subtype
	  var string = type + '/' + subtype
	
	  // append +suffix
	  if (suffix) {
	    if (!typeNameRegExp.test(suffix)) {
	      throw new TypeError('invalid suffix')
	    }
	
	    string += '+' + suffix
	  }
	
	  // append parameters
	  if (parameters && typeof parameters === 'object') {
	    var param
	    var params = Object.keys(parameters).sort()
	
	    for (var i = 0; i < params.length; i++) {
	      param = params[i]
	
	      if (!tokenRegExp.test(param)) {
	        throw new TypeError('invalid parameter name')
	      }
	
	      string += '; ' + param + '=' + qstring(parameters[param])
	    }
	  }
	
	  return string
	}
	
	/**
	 * Parse media type to object.
	 *
	 * @param {string|object} string
	 * @return {Object}
	 * @api public
	 */
	
	function parse(string) {
	  if (!string) {
	    throw new TypeError('argument string is required')
	  }
	
	  // support req/res-like objects as argument
	  if (typeof string === 'object') {
	    string = getcontenttype(string)
	  }
	
	  if (typeof string !== 'string') {
	    throw new TypeError('argument string is required to be a string')
	  }
	
	  var index = string.indexOf(';')
	  var type = index !== -1
	    ? string.substr(0, index)
	    : string
	
	  var key
	  var match
	  var obj = splitType(type)
	  var params = {}
	  var value
	
	  paramRegExp.lastIndex = index
	
	  while (match = paramRegExp.exec(string)) {
	    if (match.index !== index) {
	      throw new TypeError('invalid parameter format')
	    }
	
	    index += match[0].length
	    key = match[1].toLowerCase()
	    value = match[2]
	
	    if (value[0] === '"') {
	      // remove quotes and escapes
	      value = value
	        .substr(1, value.length - 2)
	        .replace(qescRegExp, '$1')
	    }
	
	    params[key] = value
	  }
	
	  if (index !== -1 && index !== string.length) {
	    throw new TypeError('invalid parameter format')
	  }
	
	  obj.parameters = params
	
	  return obj
	}
	
	/**
	 * Get content-type from req/res objects.
	 *
	 * @param {object}
	 * @return {Object}
	 * @api private
	 */
	
	function getcontenttype(obj) {
	  if (typeof obj.getHeader === 'function') {
	    // res-like
	    return obj.getHeader('content-type')
	  }
	
	  if (typeof obj.headers === 'object') {
	    // req-like
	    return obj.headers && obj.headers['content-type']
	  }
	}
	
	/**
	 * Quote a string if necessary.
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */
	
	function qstring(val) {
	  var str = String(val)
	
	  // no need to quote tokens
	  if (tokenRegExp.test(str)) {
	    return str
	  }
	
	  if (str.length > 0 && !textRegExp.test(str)) {
	    throw new TypeError('invalid parameter value')
	  }
	
	  return '"' + str.replace(quoteRegExp, '\\$1') + '"'
	}
	
	/**
	 * Simply "type/subtype+siffx" into parts.
	 *
	 * @param {string} string
	 * @return {Object}
	 * @api private
	 */
	
	function splitType(string) {
	  var match = typeRegExp.exec(string.toLowerCase())
	
	  if (!match) {
	    throw new TypeError('invalid media type')
	  }
	
	  var type = match[1]
	  var subtype = match[2]
	  var suffix
	
	  // suffix after last +
	  var index = subtype.lastIndexOf('+')
	  if (index !== -1) {
	    suffix = subtype.substr(index + 1)
	    subtype = subtype.substr(0, index)
	  }
	
	  var obj = {
	    type: type,
	    subtype: subtype,
	    suffix: suffix
	  }
	
	  return obj
	}


/***/ },
/* 143 */
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = require("zlib");

/***/ },
/* 144 */
/*!*****************************************!*\
  !*** ./~/body-parser/lib/types/json.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * body-parser
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var bytes = __webpack_require__(/*! bytes */ 126)
	var read = __webpack_require__(/*! ../read */ 124)
	var typer = __webpack_require__(/*! media-typer */ 142)
	var typeis = __webpack_require__(/*! type-is */ 145)
	
	/**
	 * Module exports.
	 */
	
	module.exports = json
	
	/**
	 * RegExp to match the first non-space in a string.
	 *
	 * Allowed whitespace is defined in RFC 7159:
	 *
	 *    ws = *(
	 *            %x20 /              ; Space
	 *            %x09 /              ; Horizontal tab
	 *            %x0A /              ; Line feed or New line
	 *            %x0D )              ; Carriage return
	 */
	
	var firstcharRegExp = /^[\x20\x09\x0a\x0d]*(.)/
	
	/**
	 * Create a middleware to parse JSON bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @api public
	 */
	
	function json(options) {
	  options = options || {}
	
	  var limit = typeof options.limit !== 'number'
	    ? bytes(options.limit || '100kb')
	    : options.limit
	  var inflate = options.inflate !== false
	  var reviver = options.reviver
	  var strict = options.strict !== false
	  var type = options.type || 'json'
	  var verify = options.verify || false
	
	  if (verify !== false && typeof verify !== 'function') {
	    throw new TypeError('option verify must be function')
	  }
	
	  function parse(body) {
	    if (body.length === 0) {
	      // special-case empty json body, as it's a common client-side mistake
	      // TODO: maybe make this configurable or part of "strict" option
	      return {}
	    }
	
	    if (strict) {
	      var first = firstchar(body)
	
	      if (first !== '{' && first !== '[') {
	        throw new Error('invalid json')
	      }
	    }
	
	    return JSON.parse(body, reviver)
	  }
	
	  return function jsonParser(req, res, next) {
	    if (req._body) return next()
	    req.body = req.body || {}
	
	    if (!typeis(req, type)) return next()
	
	    // RFC 7159 sec 8.1
	    var charset = (typer.parse(req).parameters.charset || 'utf-8').toLowerCase()
	    if (charset.substr(0, 4) !== 'utf-') {
	      var err = new Error('unsupported charset "' + charset.toUpperCase() + '"')
	      err.charset = charset
	      err.status = 415
	      next(err)
	      return
	    }
	
	    // read
	    read(req, res, next, parse, {
	      encoding: charset,
	      inflate: inflate,
	      limit: limit,
	      verify: verify
	    })
	  }
	}
	
	/**
	 * Get the first non-whitespace character in a string.
	 *
	 * @param {string} str
	 * @return {function}
	 * @api public
	 */
	
	
	function firstchar(str) {
	  var match = firstcharRegExp.exec(str)
	  return match ? match[1] : ''
	}


/***/ },
/* 145 */
/*!******************************************!*\
  !*** ./~/body-parser/~/type-is/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var typer = __webpack_require__(/*! media-typer */ 142)
	var mime = __webpack_require__(/*! mime-types */ 146)
	
	module.exports = typeofrequest;
	typeofrequest.is = typeis;
	typeofrequest.hasBody = hasbody;
	typeofrequest.normalize = normalize;
	typeofrequest.match = mimeMatch;
	
	/**
	 * Compare a `value` content-type with `types`.
	 * Each `type` can be an extension like `html`,
	 * a special shortcut like `multipart` or `urlencoded`,
	 * or a mime type.
	 *
	 * If no types match, `false` is returned.
	 * Otherwise, the first `type` that matches is returned.
	 *
	 * @param {String} value
	 * @param {Array} types
	 * @return String
	 */
	
	function typeis(value, types_) {
	  var i
	  var types = types_
	
	  // remove parameters and normalize
	  var val = typenormalize(value)
	
	  // no type or invalid
	  if (!val) {
	    return false
	  }
	
	  // support flattened arguments
	  if (types && !Array.isArray(types)) {
	    types = new Array(arguments.length - 1)
	    for (i = 0; i < types.length; i++) {
	      types[i] = arguments[i + 1]
	    }
	  }
	
	  // no types, return the content type
	  if (!types || !types.length) {
	    return val
	  }
	
	  var type
	  for (i = 0; i < types.length; i++) {
	    if (mimeMatch(normalize(type = types[i]), val)) {
	      return type[0] === '+' || ~type.indexOf('*')
	        ? val
	        : type
	    }
	  }
	
	  // no matches
	  return false;
	}
	
	/**
	 * Check if a request has a request body.
	 * A request with a body __must__ either have `transfer-encoding`
	 * or `content-length` headers set.
	 * http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.3
	 *
	 * @param {Object} request
	 * @return {Boolean}
	 * @api public
	 */
	
	function hasbody(req) {
	  var headers = req.headers;
	  if ('transfer-encoding' in headers) return true;
	  return !isNaN(headers['content-length']);
	}
	
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains any of the give mime `type`s.
	 * If there is no request body, `null` is returned.
	 * If there is no content type, `false` is returned.
	 * Otherwise, it returns the first `type` that matches.
	 *
	 * Examples:
	 *
	 *     // With Content-Type: text/html; charset=utf-8
	 *     this.is('html'); // => 'html'
	 *     this.is('text/html'); // => 'text/html'
	 *     this.is('text/*', 'application/json'); // => 'text/html'
	 *
	 *     // When Content-Type is application/json
	 *     this.is('json', 'urlencoded'); // => 'json'
	 *     this.is('application/json'); // => 'application/json'
	 *     this.is('html', 'application/*'); // => 'application/json'
	 *
	 *     this.is('html'); // => false
	 *
	 * @param {String|Array} types...
	 * @return {String|false|null}
	 * @api public
	 */
	
	function typeofrequest(req, types_) {
	  var types = types_
	
	  // no body
	  if (!hasbody(req)) {
	    return null
	  }
	
	  // support flattened arguments
	  if (arguments.length > 2) {
	    types = new Array(arguments.length - 1)
	    for (var i = 0; i < types.length; i++) {
	      types[i] = arguments[i + 1]
	    }
	  }
	
	  // request content type
	  var value = req.headers['content-type']
	
	  return typeis(value, types);
	}
	
	/**
	 * Normalize a mime type.
	 * If it's a shorthand, expand it to a valid mime type.
	 *
	 * In general, you probably want:
	 *
	 *   var type = is(req, ['urlencoded', 'json', 'multipart']);
	 *
	 * Then use the appropriate body parsers.
	 * These three are the most common request body types
	 * and are thus ensured to work.
	 *
	 * @param {String} type
	 * @api private
	 */
	
	function normalize(type) {
	  switch (type) {
	    case 'urlencoded': return 'application/x-www-form-urlencoded';
	    case 'multipart':
	      type = 'multipart/*';
	      break;
	  }
	
	  return type[0] === '+' || ~type.indexOf('/')
	    ? type
	    : mime.lookup(type)
	}
	
	/**
	 * Check if `exected` mime type
	 * matches `actual` mime type with
	 * wildcard and +suffix support.
	 *
	 * @param {String} expected
	 * @param {String} actual
	 * @return {Boolean}
	 * @api private
	 */
	
	function mimeMatch(expected, actual) {
	  // invalid type
	  if (expected === false) {
	    return false
	  }
	
	  // exact match
	  if (expected === actual) {
	    return true
	  }
	
	  actual = actual.split('/');
	
	  if (expected[0] === '+') {
	    // support +suffix
	    return Boolean(actual[1])
	      && expected.length <= actual[1].length
	      && expected === actual[1].substr(0 - expected.length)
	  }
	
	  if (!~expected.indexOf('*')) return false;
	
	  expected = expected.split('/');
	
	  if (expected[0] === '*') {
	    // support */yyy
	    return expected[1] === actual[1]
	  }
	
	  if (expected[1] === '*') {
	    // support xxx/*
	    return expected[0] === actual[0]
	  }
	
	  if (expected[1][0] === '*' && expected[1][1] === '+') {
	    // support xxx/*+zzz
	    return expected[0] === actual[0]
	      && expected[1].length <= actual[1].length + 1
	      && expected[1].substr(1) === actual[1].substr(1 - expected[1].length)
	  }
	
	  return false
	}
	
	/**
	 * Normalize a type and remove parameters.
	 *
	 * @param {string} value
	 * @return {string}
	 * @api private
	 */
	
	function typenormalize(value) {
	  try {
	    var type = typer.parse(value)
	    delete type.parameters
	    return typer.format(type)
	  } catch (err) {
	    return null
	  }
	}


/***/ },
/* 146 */
/*!*******************************************************!*\
  !*** ./~/body-parser/~/type-is/~/mime-types/index.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var db = __webpack_require__(/*! mime-db */ 147)
	
	// types[extension] = type
	exports.types = Object.create(null)
	// extensions[type] = [extensions]
	exports.extensions = Object.create(null)
	
	Object.keys(db).forEach(function (name) {
	  var mime = db[name]
	  var exts = mime.extensions
	  if (!exts || !exts.length) return
	  exports.extensions[name] = exts
	  exts.forEach(function (ext) {
	    exports.types[ext] = name
	  })
	})
	
	exports.lookup = function (string) {
	  if (!string || typeof string !== "string") return false
	  // remove any leading paths, though we should just use path.basename
	  string = string.replace(/.*[\.\/\\]/, '').toLowerCase()
	  if (!string) return false
	  return exports.types[string] || false
	}
	
	exports.extension = function (type) {
	  if (!type || typeof type !== "string") return false
	  // to do: use media-typer
	  type = type.match(/^\s*([^;\s]*)(?:;|\s|$)/)
	  if (!type) return false
	  var exts = exports.extensions[type[1].toLowerCase()]
	  if (!exts || !exts.length) return false
	  return exts[0]
	}
	
	// type has to be an exact mime type
	exports.charset = function (type) {
	  var mime = db[type]
	  if (mime && mime.charset) return mime.charset
	
	  // default text/* to utf-8
	  if (/^text\//.test(type)) return 'UTF-8'
	
	  return false
	}
	
	// backwards compatibility
	exports.charsets = {
	  lookup: exports.charset
	}
	
	// to do: maybe use set-type module or something
	exports.contentType = function (type) {
	  if (!type || typeof type !== "string") return false
	  if (!~type.indexOf('/')) type = exports.lookup(type)
	  if (!type) return false
	  if (!~type.indexOf('charset')) {
	    var charset = exports.charset(type)
	    if (charset) type += '; charset=' + charset.toLowerCase()
	  }
	  return type
	}


/***/ },
/* 147 */
/*!*****************************************************************!*\
  !*** ./~/body-parser/~/type-is/~/mime-types/~/mime-db/index.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * mime-db
	 * Copyright(c) 2014 Jonathan Ong
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 */
	
	module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./db.json\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))


/***/ },
/* 148 */
/*!****************************************!*\
  !*** ./~/body-parser/lib/types/raw.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * body-parser
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var bytes = __webpack_require__(/*! bytes */ 126)
	var read = __webpack_require__(/*! ../read */ 124)
	var typeis = __webpack_require__(/*! type-is */ 145)
	
	/**
	 * Module exports.
	 */
	
	module.exports = raw
	
	/**
	 * Create a middleware to parse raw bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @api public
	 */
	
	function raw(options) {
	  options = options || {};
	
	  var inflate = options.inflate !== false
	  var limit = typeof options.limit !== 'number'
	    ? bytes(options.limit || '100kb')
	    : options.limit
	  var type = options.type || 'application/octet-stream'
	  var verify = options.verify || false
	
	  if (verify !== false && typeof verify !== 'function') {
	    throw new TypeError('option verify must be function')
	  }
	
	  function parse(buf) {
	    return buf
	  }
	
	  return function rawParser(req, res, next) {
	    if (req._body) return next()
	    req.body = req.body || {}
	
	    if (!typeis(req, type)) return next()
	
	    // read
	    read(req, res, next, parse, {
	      encoding: null,
	      inflate: inflate,
	      limit: limit,
	      verify: verify
	    })
	  }
	}


/***/ },
/* 149 */
/*!*****************************************!*\
  !*** ./~/body-parser/lib/types/text.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * body-parser
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var bytes = __webpack_require__(/*! bytes */ 126)
	var read = __webpack_require__(/*! ../read */ 124)
	var typeis = __webpack_require__(/*! type-is */ 145)
	var typer = __webpack_require__(/*! media-typer */ 142)
	
	/**
	 * Module exports.
	 */
	
	module.exports = text
	
	/**
	 * Create a middleware to parse text bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @api public
	 */
	
	function text(options) {
	  options = options || {};
	
	  var defaultCharset = options.defaultCharset || 'utf-8'
	  var inflate = options.inflate !== false
	  var limit = typeof options.limit !== 'number'
	    ? bytes(options.limit || '100kb')
	    : options.limit
	  var type = options.type || 'text/plain'
	  var verify = options.verify || false
	
	  if (verify !== false && typeof verify !== 'function') {
	    throw new TypeError('option verify must be function')
	  }
	
	  function parse(buf) {
	    return buf
	  }
	
	  return function textParser(req, res, next) {
	    if (req._body) return next()
	    req.body = req.body || {}
	
	    if (!typeis(req, type)) return next()
	
	    // get charset
	    var charset = typer.parse(req).parameters.charset || defaultCharset
	
	    // read
	    read(req, res, next, parse, {
	      encoding: charset,
	      inflate: inflate,
	      limit: limit,
	      verify: verify
	    })
	  }
	}


/***/ },
/* 150 */
/*!***********************************************!*\
  !*** ./~/body-parser/lib/types/urlencoded.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * body-parser
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module dependencies.
	 */
	
	var bytes = __webpack_require__(/*! bytes */ 126)
	var deprecate = __webpack_require__(/*! depd */ 116)('body-parser')
	var read = __webpack_require__(/*! ../read */ 124)
	var typer = __webpack_require__(/*! media-typer */ 142)
	var typeis = __webpack_require__(/*! type-is */ 145)
	
	/**
	 * Module exports.
	 */
	
	module.exports = urlencoded
	
	/**
	 * Cache of parser modules.
	 */
	
	var parsers = Object.create(null)
	
	/**
	 * Create a middleware to parse urlencoded bodies.
	 *
	 * @param {object} [options]
	 * @return {function}
	 * @api public
	 */
	
	function urlencoded(options){
	  options = options || {};
	
	  // notice because option default will flip in next major
	  if (options.extended === undefined) {
	    deprecate('undefined extended: provide extended option')
	  }
	
	  var extended = options.extended !== false
	  var inflate = options.inflate !== false
	  var limit = typeof options.limit !== 'number'
	    ? bytes(options.limit || '100kb')
	    : options.limit
	  var type = options.type || 'urlencoded'
	  var verify = options.verify || false
	
	  if (verify !== false && typeof verify !== 'function') {
	    throw new TypeError('option verify must be function')
	  }
	
	  var queryparse = extended
	    ? extendedparser(options)
	    : simpleparser(options)
	
	  function parse(body) {
	    return body.length
	      ? queryparse(body)
	      : {}
	  }
	
	  return function urlencodedParser(req, res, next) {
	    if (req._body) return next();
	    req.body = req.body || {}
	
	    if (!typeis(req, type)) return next();
	
	    var charset = (typer.parse(req).parameters.charset || 'utf-8').toLowerCase()
	    if (charset !== 'utf-8') {
	      var err = new Error('unsupported charset "' + charset.toUpperCase() + '"')
	      err.charset = charset
	      err.status = 415
	      next(err)
	      return
	    }
	
	    // read
	    read(req, res, next, parse, {
	      encoding: charset,
	      inflate: inflate,
	      limit: limit,
	      verify: verify
	    })
	  }
	}
	
	/**
	 * Get the extended query parser.
	 *
	 * @param {object} options
	 */
	
	function extendedparser(options) {
	  var parameterLimit = options.parameterLimit !== undefined
	    ? options.parameterLimit
	    : 1000
	  var parse = parser('qs')
	
	  if (isNaN(parameterLimit) || parameterLimit < 1) {
	    throw new TypeError('option parameterLimit must be a positive number')
	  }
	
	  if (isFinite(parameterLimit)) {
	    parameterLimit = parameterLimit | 0
	  }
	
	  return function queryparse(body) {
	    var paramCount = parameterCount(body, parameterLimit)
	
	    if (paramCount === undefined) {
	      var err = new Error('too many parameters')
	      err.status = 413
	      throw err
	    }
	
	    var arrayLimit = Math.max(100, paramCount)
	
	    return parse(body, {
	      arrayLimit: arrayLimit,
	      parameterLimit: parameterLimit
	    })
	  }
	}
	
	/**
	 * Count the number of parameters, stopping once limit reached
	 *
	 * @param {string} body
	 * @param {number} limit
	 * @api private
	 */
	
	function parameterCount(body, limit) {
	  var count = 0
	  var index = 0
	
	  while ((index = body.indexOf('&', index)) !== -1) {
	    count++
	    index++
	
	    if (count === limit) {
	      return undefined
	    }
	  }
	
	  return count
	}
	
	/**
	 * Get parser for module name dynamically.
	 *
	 * @param {string} name
	 * @return {function}
	 * @api private
	 */
	
	function parser(name) {
	  var mod = parsers[name]
	
	  if (mod) {
	    return mod.parse
	  }
	
	  // load module
	  mod = parsers[name] = __webpack_require__(/*! . */ 151)(name)
	
	  return mod.parse
	}
	
	/**
	 * Get the simple query parser.
	 *
	 * @param {object} options
	 */
	
	function simpleparser(options) {
	  var parameterLimit = options.parameterLimit !== undefined
	    ? options.parameterLimit
	    : 1000
	  var parse = parser('querystring')
	
	  if (isNaN(parameterLimit) || parameterLimit < 1) {
	    throw new TypeError('option parameterLimit must be a positive number')
	  }
	
	  if (isFinite(parameterLimit)) {
	    parameterLimit = parameterLimit | 0
	  }
	
	  return function queryparse(body) {
	    var paramCount = parameterCount(body, parameterLimit)
	
	    if (paramCount === undefined) {
	      var err = new Error('too many parameters')
	      err.status = 413
	      throw err
	    }
	
	    return parse(body, undefined, undefined, {maxKeys: parameterLimit})
	  }
	}


/***/ },
/* 151 */
/*!******************************************!*\
  !*** ./~/body-parser/lib/types ^\.\/.*$ ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./json": 144,
		"./json.js": 144,
		"./raw": 148,
		"./raw.js": 148,
		"./text": 149,
		"./text.js": 149,
		"./urlencoded": 150,
		"./urlencoded.js": 150
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 151;


/***/ },
/* 152 */
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var express = __webpack_require__(/*! express */ 1);
	var router = express.Router();
	
	router.get('/:page', function (req, res, next) {
	  res.render(req.params.page);
	});
	
	module.exports = router;

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map