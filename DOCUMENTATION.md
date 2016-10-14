# [mongoose-create-or-update](https://github.com/neogeek/mongoose-create-or-update) *1.0.1*

> A Promise-based Mongoose plugin for creating and updating documents in a single statement.


### index.js


#### scheme.statics.createOrUpdate(query[, update, options]) 

Creates or updates an existing document in a Mongoose model.




##### Parameters

- **query** `Object`   Query object.
- **update** `Object`  *Optional* Updated object. See <http://mongoosejs.com/docs/api.html#model_Model.update> for more information.
- **options** `Object`  *Optional* Options object. See <http://mongoosejs.com/docs/api.html#model_Model.update> for more information.




##### Examples

```javascript
dataModel.createOrUpdate({'_id': 'xxxx'}, {'updatedAt': Date.now()}).then(function (data) { console.log(data); });
```


##### Returns


- `Object`   Promise




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
