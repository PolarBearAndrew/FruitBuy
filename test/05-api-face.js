var route   = 'Face';
var url     = 'http://localhost:8080/' + route;
var request = require('request');

//debug
var debug = require('debug')('TEST:Face');

//init data
var initData = {
  img: 'asset/images/wireframe/demo-apple.jpg',
  imgIndex: '99',
  note: '無備註'
};

var uid = null;
var Face = require('../models/face.js');

describe('[ (03) API unit test - Face ]', () => {

    before( () => {

          return  Face.removeAsync({ imgIndex: '99'})
                    .then( result => {
                        return Face.removeAsync({account: ''});
                    })
                    .then( result => {

                    })
                    .catch( err=>{
                        debug('[ API unit test - Face ] 資料初始化錯誤', err);
                    });
    });

    describe('正常操作測試', () => {

        it('[POST] 新增 Face ', done => {

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

        it('[PUT] 更新 Face 資料', done => {

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

        it('[DELETE] 刪除 Face ', done => {

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

        return  Face.findOneAndRemove( { _id: uid } )
                    .removeAsync()
                    .then( result => {
                        done();
                    })
                    .catch( () => {
                        debug('[ API unit test - Faces ] 資料還原錯誤', err);
                    });
    });
});
