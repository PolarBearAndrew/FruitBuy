//express
let express = require('express');
let router = express.Router();

//debug
let debug = require('debug')('API: AdImg');

//model
let AdImg = require('../models/adImg.js');

//feature
let checkPorperty = require('../feature/checkProperty.js');
let check = checkPorperty.check;

//=======================================================

router.get('/', (req, res, next) => {
    let schema = [], data = [];
    schema = [
      { title: '廣告圖', ctrl: 'text', schema: 'img' },
      { title: '排序編號', ctrl: 'text', schema: 'imgIndex' }
    ];

    let initCustomer = [{
      _id: '0',
      img: '123123456456',
      imgIndex: '123'
    }]

    AdImg.find()
       .sort({ imgIndex: 1 })
       .execAsync()
       .then( result => {
          if(result.length === 0) result = initCustomer;

          result = result.map( val => {

            let tmp = [];
            tmp.push(val.img);
            tmp.push(val.imgIndex);
            tmp.push(val._id.toString());

            return tmp;
          });

          res.render('bs_crud', { schema: schema, data: result, apiUrl: 'adImg' });
          debug('載入經 AdImg 料成功', result);
        })
        .catch( err => {
          debug('載入經 AdImg 料失敗', err);
          next(err);
        });
})

/*
 * [POST] 新增 AdImg
 * request : no
 * respone : db result
 */
router.post('/', (req, res, next) => {

    debug('[POST] 新增 AdImg req.body ->', req.body );

    let adImg = new AdImg({
        img: '',
        imgIndex: ''
    });

    //db operation
    adImg.saveAsync()
        .spread( result => {
            debug('[POST] 新增 AdImg success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[POST] 新增 AdImg fail ->', err);
            return next(err);
        });
});

/*
 * [PUT] 更新 AdImg資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.put('/', (req, res, next) => {

    debug('[PUT] 更新 AdImg資料 req.body ->', req.body );

    //check
    let miss = check( req.body, ['img', 'imgIndex'] );
    if(!miss.check){
        debug('[POST] 新增 AdImg miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db entity
    let info = {
        img: req.body.img,
        imgIndex: req.body.imgIndex
    };


    //db operation
    AdImg.findOneAndUpdate( { _id: req.body._id }, info)
        .updateAsync()
        .then( result => {
            debug('[PUT] 更新 AdImg資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[PUT] 更新 AdImg資料 fail ->', err);
            return next(err);
        });
});


/*
 * [PUT] 更新 AdImg資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.delete('/', (req, res, next) => {

    debug('[DELETE] 刪除 AdImg req.body ->', req.body );

    //check
    let miss = check( req.body, ['uid'] );
    if(!miss.check){
        debug('[POST] 新增 AdImg miss data ->', miss.miss);
        return res.status(500).send('缺少必要參數', miss.miss);
    }

    //db operation
    AdImg.findOneAndRemove( { _id: req.body.uid })
        .removeAsync()
        .then( result => {
            debug('[DELETE] 刪除 AdImg success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[DELETE] 刪除 AdImg fail ->', err);
            return next(err);
        });
});


/*
 * [GET] 取得 AdImg資料
 * request : body.uid, body.name, body.account, body.pwd, body.auth
 * respone : db result
 */
router.get('/all', (req, res, next) => {

    debug('[GET] 取得 AdImg資料 req.body ->', req.body );


    //db operation
    AdImg.find({})
        .execAsync()
        .then( result => {
            debug('[GET] 取得 AdImg資料 success ->', result);
            res.json(result);
            return;
        })
        .catch( err => {
            debug('[GET] 取得 AdImg資料 fail ->', err);
            return next(err);
        });
});


module.exports = router;
