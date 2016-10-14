'use strict';

const assert = require('assert');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dataSchema = new mongoose.Schema({
    'contents': String
});

dataSchema.plugin(require('../../index'));

const dataModel = mongoose.model('data', dataSchema);

describe('createOrUpdate', () => {

    let dataId = null;

    before(done => {

        mongoose.connect('mongodb://localhost/test');

        dataModel.find().remove(done);

    });

    after(done => {

        dataModel.find().remove(() => {

            mongoose.connection.close(done);

        });

    });

    it('create without document', done => {

        dataModel.createOrUpdate({
            '_id': dataId
        }, {
            'contents': 'Lorem ipsum dolor sit amet'
        }).then(data => {

            dataId = data._id.toString();

            done();

        }).catch(err => {

            console.log(err);

        });

    });

    it('update with existing document', done => {

        dataModel.createOrUpdate({
            '_id': dataId
        }, {
            'contents': 'Hello, world!'
        }).then(data => {

            assert.equal(data._id.toString(), dataId);
            assert.equal(data.contents, 'Hello, world!');

            done();

        }).catch(err => {

            console.log(err);

        });

    });

});
