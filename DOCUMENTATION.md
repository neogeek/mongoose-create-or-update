# [mongoose-create-or-update](https://github.com/neogeek/mongoose-create-or-update) *1.0.3*

> A Promise-based Mongoose plugin for creating and updating documents in a single statement.


### index.js


#### scheme.statics.createOrUpdate(query[, update, options]) 

Creates or updates an existing document in a Mongoose model.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| query | `Object`  | Query object. | &nbsp; |
| update | `Object`  | Updated object. See <http://mongoosejs.com/docs/api.html#model_Model.update> for more information. | *Optional* |
| options | `Object`  | Options object. See <http://mongoosejs.com/docs/api.html#model_Model.update> for more information. | *Optional* |




##### Examples

```javascript
dataModel.createOrUpdate({'_id': 'xxxx'}, {'updatedAt': Date.now()}).then(function (data) { console.log(data); });
```


##### Returns


- `Object`  Promise




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
