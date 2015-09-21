var route   = 'Product';
var url     = 'http://localhost:8080/' + route;
var request = require('request');

//debug
var debug = require('debug')('TEST:product');

//init data
var initData = {
  title: 'apple',
  img: 'asset/images/wireframe/demo-apple.jpg',
  info: '空運加上冷藏配送的日本富士山蘋果，不論品質、新鮮度皆是在最完美的情況下送達。為了保持鮮甜僅提供清洗的服務，避免切片影響完美品質！',
  cost: 'NT$100/份',
  status: '未上架',
  index: '0'
};

var uid = null;
var Product = require('../models/product.js');

describe('[ (03) API unit test - product ]', () => {

    before( () => {

          return  Product.removeAsync({title: 'apple'})
                    .then( result => {
                        return Product.removeAsync({account: ''});
                    })
                    .then( result => {

                    })
                    .catch( err=>{
                        debug('[ API unit test - Products ] 資料初始化錯誤', err);
                    });
    });

    describe('正常操作測試', () => {

        it('[POST] 新增 Product ', done => {

            request({
                url: url + '/',
                method: 'POST',
                json: true,
                form: initData
            }, (err, res, data) => {

                //test api exist
                should.exist(data);
                should.not.exist(err);
                res.statusCode.should.equal(200);

                //test data
                Object.keys(initData).map(( key, index ) => {
                    data.should.have.property( key, '' );
                });

                uid = data._id.toString();
                initData._id = data._id.toString();

                //set uid for next test
                return done();
            });
        });

        it('[PUT] 更新 Product 資料', done => {

            request({
                url: url + '/',
                method: 'PUT',
                json: true,
                form: initData
            }, (err, res, data) => {

                //test api exist
                should.exist(data);
                should.not.exist(err);
                res.statusCode.should.equal(200);

                //test data
                data.should.have.property( 'ok', 1 );
                data.should.have.property( 'nModified', 1 );
                data.should.have.property( 'n', 1 );

                //set uid for next test
                return done();
            });
        });

        it('[DELETE] 刪除 Product ', done => {

            request({
                url: url + '/',
                method: 'DELETE',
                json: true,
                form: { uid }
            }, (err, res, data) => {

                //test api exist
                should.exist(data);
                should.not.exist(err);
                res.statusCode.should.equal(200);

                //test data
                data.should.have.property( 'ok', 1 );
                data.should.have.property( 'n', 1 );

                //set uid for next test
                return done();
            });
        });
    });

    after( done => {

        return  Product.findOneAndRemove( { _id: uid } )
                    .removeAsync()
                    .then( result => {
                        done();
                    })
                    .catch( () => {
                        debug('[ API unit test - Products ] 資料還原錯誤', err);
                    });
    });
});
