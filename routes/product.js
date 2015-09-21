//express
let express = require('express');
let router = express.Router();

//debug
let debug = require('debug')('API: Product');

//model
let Product = require('../models/product.js');

//feature
let checkPorperty = require('../feature/checkProperty.js');
let check = checkPorperty.check;

//=======================================================

router.get('/', (req, res, next) => {
    let schema = [], data = [];
    schema = [
      { title: '產品標題', ctrl: 'text', schema: 'title' },
      { title: '產品圖片', ctrl: 'img', schema: 'img' },
      { title: '產品說明', ctrl: 'textarea', schema: 'info' },
      { title: '價格', ctrl: 'text', schema: 'cost' },
      { title: '產品狀態', ctrl: 'status', schema: 'status' },
      { title: '產品排序編碼', ctrl: 'num', schema: 'index' }
    ];

    let initCustomer = [{
      _id: '0',
      title: '系統精靈 蘋果',
      img: 'asset/images/wireframe/demo-apple.jpg',
      info: '空運加上冷藏配送的日本富士山蘋果，不論品質、新鮮度皆是在最完美的情況下送達。為了保持鮮甜僅提供清洗的服務，避免切片影響完美品質！',
      cost: 'NT$100/份',
      status: '未上架',
      index: '0'
    }]


    Product.find()
           .sort({ index: 1 })
           .execAsync()
           .then( result => {
              if(result.length === 0) result = initCustomer;

              result = result.map( val => {

                let tmp = [];
                tmp.push(val.title);
                tmp.push(val.img);
                tmp.push(val.info);
                tmp.push(val.cost);
                tmp.push(val.status);
                tmp.push(val.index);
                tmp.push(val._id.toString());

                return tmp;
              });

              res.render('bs_crud', { schema: schema, data: result, apiUrl: 'Product' });
              debug('載入經 em 料成功', result);
            })
            .catch( err => {
              debug('載入經 em 料失敗', err);
              next(err);
            });
})

/*
 * [POST] 新增 Product
 * request : no
 * respone : db result
 */
router.post('/', (req, res, next) => {

    debug('[POST] 新增 Product req.body ->', req.body );

    let  product = new Product({
        title: '',
        img: '',
        cost: '',
        info: '',
        status: '',
        index: ''
    });

    //db operation
    product.saveAsync()
        .spread( result => {
            debug('[POST] 新增 Product success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[POST] 新增 Product fail ->', err);
            return next(err);
        });
});

/*
 * [PUT] 更新 Product資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.put('/', (req, res, next) => {

    debug('[PUT] 更新 Product資料 req.body ->', req.body );

    //check
    let miss = check( req.body, ['title', 'img', 'cost', 'info', 'status', 'index'] );
    if(!miss.check){
        debug('[POST] 新增 Product miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db entity
    let info = {
        title: req.body.title,
        img: req.body.img,
        cost: req.body.cost,
        info: req.body.info,
        status: req.body.status,
        index: req.body.index
    };


    //db operation
    Product.findOneAndUpdate( { _id: req.body._id }, info )
        .updateAsync()
        .then( result => {
            debug('[PUT] 更新 Product資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[PUT] 更新 Product資料 fail ->', err);
            return next(err);
        });
});


/*
 * [PUT] 更新 Product資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.delete('/', (req, res, next) => {

    debug('[DELETE] 刪除 Product req.body ->', req.body );

    //check
    let miss = check( req.body, ['uid'] );
    if(!miss.check){
        debug('[POST] 新增 Product miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db operation
    Product.findOneAndRemove( { _id: req.body.uid })
        .removeAsync()
        .then( result => {
            debug('[DELETE] 刪除 Product success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[DELETE] 刪除 Product fail ->', err);
            return next(err);
        });
});


/*
 * [GET] 取得 Product資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.get('/all', (req, res, next) => {

    debug('[GET] 取得 Product資料 req.body ->', req.body );


    //db operation
    Product.find({})
        .execAsync()
        .then( result => {
            debug('[GET] 取得 Product資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[GET] 取得 Product資料 fail ->', err);
            return next(err);
        });
});


module.exports = router;
