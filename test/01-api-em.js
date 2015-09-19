var route   = 'Em';
var url     = 'http://localhost:8080/' + route;
var request = require('request');

//debug
var debug = require('debug')('TEST:em');

//init data
var initData = {
    account: 'andrew',
    pwd: '123',
    auth: '員工'
};

var uid = null;
var Em = require('../models/em.js');

describe('[ (01) API unit test - em ]', () => {

    before( () => {

          return  Em.removeAsync({account: 'andrew'})
                    .then( result => {
                        return Em.removeAsync({account: ''});
                    })
                    .then( result => {

                    })
                    .catch( err=>{
                        debug('[ API unit test - users ] 資料初始化錯誤', err);
                    });
    });

    describe('正常操作測試', () => {

        it('[POST] 新增 Em ', done => {

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

        it('[PUT] 更新 Em 資料', done => {

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

        it('[DELETE] 刪除 Em ', done => {

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

        return  Em.findOneAndRemove( { _id: uid } )
                    .removeAsync()
                    .then( result => {
                        done();
                    })
                    .catch( () => {
                        debug('[ API unit test - users ] 資料還原錯誤', err);
                    });
    });
});
