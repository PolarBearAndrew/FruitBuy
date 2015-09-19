//express
let express = require('express');
let router = express.Router();

//debug
let debug = require('debug')('API:em');

//model
let Em = require('../models/em.js');

//feature
let checkPorperty = require('../feature/checkProperty.js');
let check = checkPorperty.check;

//=======================================================

/*
 * [POST] 新增em
 * request : no
 * respone : db result
 */
router.post('/', (req, res, next) => {

    debug('[POST] 新增em req.body ->', req.body );

    let em = new Em({
        account: '',
        pwd: '',
        auth: ''
    });

    //db operation
    em.saveAsync()
        .spread( result => {
            debug('[POST] 新增em success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[POST] 新增em fail ->', err);
            return next(err);
        });
});

/*
 * [PUT] 更新em資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.put('/', (req, res, next) => {

    debug('[PUT] 更新em資料 req.body ->', req.body );

    //check
    let miss = check( req.body, ['account', 'pwd', 'auth', '_id'] );
    if(!miss.check){
        debug('[POST] 新增em miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db entity
    let info = {
        account: req.body.account,
        pwd: req.body.pwd,
        auth: req.body.auth
    };


    //db operation
    Em.findOneAndUpdate( { _id: req.body._id }, info)
        .updateAsync()
        .then( result => {
            debug('[PUT] 更新em資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[PUT] 更新em資料 fail ->', err);
            return next(err);
        });
});


/*
 * [PUT] 更新em資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.delete('/', (req, res, next) => {

    debug('[DELETE] 刪除em req.body ->', req.body );

    //check
    let miss = check( req.body, ['uid'] );
    if(!miss.check){
        debug('[POST] 新增em miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db operation
    Em.findOneAndRemove( { _id: req.body.uid })
        .removeAsync()
        .then( result => {
            debug('[DELETE] 刪除em success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[DELETE] 刪除em fail ->', err);
            return next(err);
        });
});


/*
 * [GET] 取得em資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.get('/all', (req, res, next) => {

    debug('[GET] 取得em資料 req.body ->', req.body );


    //db operation
    Em.find({})
        .execAsync()
        .then( result => {
            debug('[GET] 取得em資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[GET] 取得em資料 fail ->', err);
            return next(err);
        });
});


module.exports = router;
