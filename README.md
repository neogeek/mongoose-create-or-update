# mongoose-create-or-update

> Mongoose plugin for creating and updating documents in a single statement that returns Promises.

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

    '_id': dataId,
    'contents': 'Lorem ipsum dolor sit amet'
}).then(data => {

    dataId = data._id;

    done();

}).catch(err => {

    console.log(err);

});
```
