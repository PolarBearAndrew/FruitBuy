let express = require('express');
let router  = express.Router();

//debug
let debug = require('debug')('API: index route');

//model
let Product = require('../models/product.js');
let Order = require('../models/order.js');


router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/shop', (req, res, next) => {

  let data = [];

  let initCustomer = [{
      _id: '0',
      title: '系統精靈 蘋果',
      img: 'asset/images/wireframe/demo-apple.jpg',
      info: '空運加上冷藏配送的日本富士山蘋果，不論品質、新鮮度皆是在最完美的情況下送達。為了保持鮮甜僅提供清洗的服務，避免切片影響完美品質！',
      cost: 'NT$100/份',
      status: '未上架',
  }]

   Product.find()
           .sort({ index: 1 })
           .execAsync()
           .then( result => {

              if(result.length === 0) result = initCustomer;

              res.render('shop', { data: result});
              debug('載入經 em 料成功', result);
            })
            .catch( err => {
              debug('載入經 em 料失敗', err);
              next(err);
            });

});

router.post('/cart', (req, res, next) => {

  var data = req.body.cart || '[]';
  data = JSON.parse(data);

  debug('載入經 cart ', data);

  res.render('cart', { data: data });
});

router.get('/myOrder', (req, res, next) => {

  console.log('test', req.query.info);

  var info = req.query.info.toString();

  debug('載入 myOrder ', info);

   //db operation
   Order.find({ userId: info })
        .sort({ time: 1 })
        .execAsync()
        .then( result => {

            debug('[GET] 取得 Order資料 success ->', result);

            result = result.filter(function( val ){
              return val.status !== '結案'
            });

            res.render('myOrder', { data: result });
        })
        .catch( err => {
            debug('[GET] 取得 Order資料 fail ->', err);
            return next(err);
        });
});

router.get('/:page', (req, res, next) => {
  res.render(req.params.page.replace(/.html/,''));
});

router.get('/jsdc', (req, res, next) => {
  res.render(req.params.page);
});

module.exports = router;