var route   = 'User';
var url     = 'http://localhost:8080/' + route;
var request = require('request');

//debug
var debug = require('debug')('TEST:em');

//init data
var initData = {
    name: 'andrew',
    email: 'chenpoanandrew@gmail.com',
    pwd: '123',
    phone: '0930014167'
};

var uid = null;
var User = require('../models/user.js');

describe('[ (02) API unit test - user ]', () => {

    before( () => {

          return  User.removeAsync({name: 'andrew'})
                    .then( result => {
                        return User.removeAsync({account: ''});
                    })
                    .then( result => {

                    })
                    .catch( err=>{
                        debug('[ API unit test - users ] 資料初始化錯誤', err);
                    });
    });

    describe('正常操作測試', () => {

        it('[POST] 新增 User ', done => {

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

        it('[PUT] 更新 User 資料', done => {

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

        it('[DELETE] 刪除 User ', done => {

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

        return  User.findOneAndRemove( { _id: uid } )
                    .removeAsync()
                    .then( result => {
                        done();
                    })
                    .catch( () => {
                        debug('[ API unit test - users ] 資料還原錯誤', err);
                    });
    });
});
