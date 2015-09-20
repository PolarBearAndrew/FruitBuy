//express
let express = require('express');
let router = express.Router();

//debug
let debug = require('debug')('API: User');

//model
let User = require('../models/user.js');

//feature
let checkPorperty = require('../feature/checkProperty.js');
let check = checkPorperty.check;

//=======================================================

router.get('/', (req, res, next) => {
    let schema = [], data = [];
    schema = [
      { title: '姓名', ctrl: 'text', schema: 'name' },
      { title: 'Email', ctrl: 'text', schema: 'email' },
      { title: '密碼', ctrl: 'text', schema: 'pwd' },
      { title: '手機號碼', ctrl: 'text', schema: 'phone' }
    ];

    let initCustomer = [{
      _id: '0',
      name: '系統精靈 使用者',
      email: 'chenpoanandrew@gmail.com',
      pwd: '123',
      phone: '0930014167',
    }]


       User.find()
           .sort({ email: 1 })
           .execAsync()
           .then( result => {
              if(result.length === 0) result = initCustomer;

              result = result.map( val => {

                let tmp = [];
                tmp.push(val.name);
                tmp.push(val.pwd);
                tmp.push(val.email);
                tmp.push(val.phone);
                tmp.push(val._id.toString());

                return tmp;
              });

              res.render('bs_crud', { schema: schema, data: result, apiUrl: 'user' });
              debug('載入經 em 料成功', result);
            })
            .catch( err => {
              debug('載入經 em 料失敗', err);
              next(err);
            });
})

/*
 * [POST] 新增 User
 * request : no
 * respone : db result
 */
router.post('/', (req, res, next) => {

    debug('[POST] 新增 User req.body ->', req.body );

    let  user = new User({
        name: '',
        email: '',
        pwd: '',
        phone: ''
    });

    //db operation
    user.saveAsync()
        .spread( result => {
            debug('[POST] 新增 User success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[POST] 新增 User fail ->', err);
            return next(err);
        });
});

/*
 * [PUT] 更新 User資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.put('/', (req, res, next) => {

    debug('[PUT] 更新 User資料 req.body ->', req.body );

    //check
    let miss = check( req.body, ['name', 'email', 'pwd', 'phone'] );
    if(!miss.check){
        debug('[POST] 新增 User miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db entity
    let info = {
        name: req.body.name,
        email: req.body.email,
        pwd: req.body.pwd,
        phone: req.body.phone
    };


    //db operation
    User.findOneAndUpdate( { _id: req.body._id }, info)
        .updateAsync()
        .then( result => {
            debug('[PUT] 更新 User資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[PUT] 更新 User資料 fail ->', err);
            return next(err);
        });
});


/*
 * [PUT] 更新 User資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.delete('/', (req, res, next) => {

    debug('[DELETE] 刪除 User req.body ->', req.body );

    //check
    let miss = check( req.body, ['uid'] );
    if(!miss.check){
        debug('[POST] 新增 User miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db operation
    User.findOneAndRemove( { _id: req.body.uid })
        .removeAsync()
        .then( result => {
            debug('[DELETE] 刪除 User success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[DELETE] 刪除 User fail ->', err);
            return next(err);
        });
});


/*
 * [GET] 取得 User資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.get('/all', (req, res, next) => {

    debug('[GET] 取得 User資料 req.body ->', req.body );


    //db operation
    User.find({})
        .execAsync()
        .then( result => {
            debug('[GET] 取得 User資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[GET] 取得 User資料 fail ->', err);
            return next(err);
        });
});


module.exports = router;
