//express
let express = require('express');
let router = express.Router();

//debug
let debug = require('debug')('API: Order');

//model
let Order = require('../models/order.js');

//feature
let checkPorperty = require('../feature/checkProperty.js');
let check = checkPorperty.check;

//=======================================================

router.get('/', (req, res, next) => {
    let schema = [], data = [];
    schema = [
      { title: '訂單時間', ctrl: 'text', schema: 'time' },
      { title: '訂購帳號', ctrl: 'text', schema: 'userId' },
      { title: '購買項目', ctrl: 'text', schema: 'buy' },
      { title: '送貨地址', ctrl: 'text', schema: 'address' },
      { title: '總金額', ctrl: 'text', schema: 'cost' },
      { title: '狀態', ctrl: 'statusO', schema: 'status' }
    ];

    let initCustomer = [{
      _id: '0',
      time: '20130920',
      userId: 'AndrewChen',
      buy: '無資料',
      address: '新生南路一段123',
      cost: '999',
      status: '準備中',
    }]


    Order.find()
       .sort({ email: 1 })
       .execAsync()
       .then( result => {
          if(result.length === 0) result = initCustomer;

          result = result.map( val => {

            let tmp = [];
            tmp.push(val.time);
            tmp.push(val.userId);
            tmp.push(val.buy);
            tmp.push(val.address);
            tmp.push(val.cost);
            tmp.push(val.status);
            tmp.push(val._id.toString());

            return tmp;
          });

          res.render('bs_crud', { schema: schema, data: result, apiUrl: 'order' });
          debug('載入經 em 料成功', result);
        })
        .catch( err => {
          debug('載入經 em 料失敗', err);
          next(err);
        });
})

/*
 * [POST] 新增 Order
 * request : no
 * respone : db result
 */
router.post('/', (req, res, next) => {

    debug('[POST] 新增 Order req.body ->', req.body );

    let miss = check( req.body, [ 'userId', 'buy', 'address', 'cost'] );
    if(!miss.check){
        debug('[POST] 新增 Order miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    var d = new Date();

    let order = new Order({
        time: d.toLocaleString(),
        userId: req.body.userId,
        buy: req.body.buy,
        address: req.body.address,
        cost: req.body.cost,
        status: '準備中'
    });

    //db operation
    order.saveAsync()
        .spread( result => {
            debug('[POST] 新增 Order success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[POST] 新增 Order fail ->', err);
            return next(err);
        });
});

/*
 * [PUT] 更新 Order資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.put('/', (req, res, next) => {

    debug('[PUT] 更新 Order資料 req.body ->', req.body );

    //check
    let miss = check( req.body, ['userId', 'buy', 'address', 'cost'] );
    if(!miss.check){
        debug('[POST] 新增 Order miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db entity
    let info = {
        userId: req.body.userId,
        buy: req.body.buy,
        address: req.body.address,
        cost: req.body.cost,
        status: req.body.status
    };


    //db operation
    Order.findOneAndUpdate( { _id: req.body._id }, info)
        .updateAsync()
        .then( result => {
            debug('[PUT] 更新 Order資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[PUT] 更新 Order資料 fail ->', err);
            return next(err);
        });
});


/*
 * [PUT] 更新 Order資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.delete('/', (req, res, next) => {

    debug('[DELETE] 刪除 Order req.body ->', req.body );

    //check
    let miss = check( req.body, ['_id'] );
    if(!miss.check){
        debug('[POST] 新增 Order miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db operation
    Order.findOneAndRemove( { _id: req.body._id })
        .removeAsync()
        .then( result => {
            debug('[DELETE] 刪除 Order success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[DELETE] 刪除 Order fail ->', err);
            return next(err);
        });
});


/*
 * [GET] 取得 Order資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.get('/all', (req, res, next) => {

    debug('[GET] 取得 Order資料 req.body ->', req.body );

    //db operation
    Order.find({})
        .execAsync()
        .then( result => {
            debug('[GET] 取得 Order資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[GET] 取得 Order資料 fail ->', err);
            return next(err);
        });
});


module.exports = router;
