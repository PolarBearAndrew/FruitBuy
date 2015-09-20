//express
let express = require('express');
let router = express.Router();

//debug
let debug = require('debug')('API: AD');

//model
let AD = require('../models/myAd.js');

//feature
let checkPorperty = require('../feature/checkProperty.js');
let check = checkPorperty.check;

//=======================================================

router.get('/', (req, res, next) => {

        let schema = [], data = [];
        schema = [
          { title: '廣告圖片', ctrl: 'img', schema: 'url' },
          { title: '排序', ctrl: 'text', schema: 'index' }
        ];

        let initCustomer = [{
          _id: '0',
          url: '<img src="uploads\\cute-kitten-wallpaper-53a1a72817685.jpg">',
          index: '0'
        }];

          AD.find()
            .sort({ index: 1 })
            .execAsync()
            .then( result => {
              if(result.length === 0) result = initCustomer;

                result = result.map( val => {

                let tmp = [];
                tmp.push(val.url);
                tmp.push(val.index);
                tmp.push(val._id.toString());

                return tmp;
              });

              res.render('bs_crud', { schema: schema, data: result, apiUrl: 'ad' });
              debug('載入經 em 料成功', result);
            })
            .catch( err => {
              debug('載入經 em 料失敗', err);
              next(err);
            });
});

/*
 * [POST] 新增 AD
 * request : no
 * respone : db result
 */
router.post('/', (req, res, next) => {

    debug('[POST] 新增 AD req.body ->', req.body );

    let ad = new AD({
        url: '',
        index: '0'
    });

    //db operation
    ad.saveAsync()
        .spread( result => {
            debug('[POST] 新增 AD success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[POST] 新增 AD fail ->', err);
            return next(err);
        });
});

/*
 * [PUT] 更新 AD資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.put('/', (req, res, next) => {

    debug('[PUT] 更新 AD資料 req.body ->', req.body );

    //check
    let miss = check( req.body, ['url', 'index'] );
    if(!miss.check){
        debug('[POST] 新增 AD miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db entity
    let info = {
        url: req.body.url,
        index: req.body.index
    };

    //db operation
    AD.findOneAndUpdate( { _id: req.body._id }, info)
        .updateAsync()
        .then( result => {
            debug('[PUT] 更新 AD資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[PUT] 更新 AD資料 fail ->', err);
            return next(err);
        });
});


/*
 * [PUT] 更新 AD 資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.delete('/', (req, res, next) => {

    debug('[DELETE] 刪除 AD req.body ->', req.body );

    //check
    let miss = check( req.body, ['uid'] );
    if(!miss.check){
        debug('[POST] 新增 AD miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db operation
    AD.findOneAndRemove( { _id: req.body.uid })
        .removeAsync()
        .then( result => {
            debug('[DELETE] 刪除 AD success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[DELETE] 刪除 AD fail ->', err);
            return next(err);
        });
});


/*
 * [GET] 取得 AD 資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.get('/all', (req, res, next) => {

    debug('[GET] 取得 AD資料 req.body ->', req.body );


    //db operation
    AD.find({})
        .execAsync()
        .then( result => {
            debug('[GET] 取得 AD資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[GET] 取得 AD資料 fail ->', err);
            return next(err);
        });
});


module.exports = router;
