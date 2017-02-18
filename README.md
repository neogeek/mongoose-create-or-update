# mongoose-create-or-update

> A Promise-based Mongoose plugin for creating and updating documents in a single statement.

[![Build Status](https://travis-ci.org/neogeek/mongoose-create-or-update.svg?branch=master)](https://travis-ci.org/neogeek/mongoose-create-or-update)
[![codecov](https://img.shields.io/codecov/c/github/neogeek/mongoose-create-or-update/master.svg)](https://codecov.io/gh/neogeek/mongoose-create-or-update)
[![NPM Version](http://img.shields.io/npm/v/mongoose-create-or-update.svg?style=flat)](https://www.npmjs.org/package/mongoose-create-or-update)
[![Greenkeeper badge](https://badges.greenkeeper.io/neogeek/mongoose-create-or-update.svg)](https://greenkeeper.io/)
[![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/neogeek/mongoose-create-or-update)

## Install

```bash
$ npm install mongoose mongoose-create-or-update --save
```

## Usage

```javascript
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    'contents': String
});

dataSchema.plugin(require('mongoose-create-or-update'));

const dataModel = mongoose.model('data', dataSchema);
```

```javascript
let dataId = null;

dataModel.createOrUpdate({
    '_id': dataId
}, {
    'contents': 'Lorem ipsum dolor sit amet'
}).then(data => {

    dataId = data._id;

    done();

}).catch(err => {

    console.log(err);

});
```

## Documentation

View full documentation [here](https://doxdox.org/neogeek/mongoose-create-or-update).
