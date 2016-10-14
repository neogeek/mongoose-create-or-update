module.exports = scheme => {

    /**
    * Creates or updates an existing document in a Mongoose model.
    *
    * @example dataModel.createOrUpdate({'_id': 'xxxx'}, {'updatedAt': Date.now()}).then(function (data) { console.log(data); });
    * @param {Object} query Query object.
    * @param {Object} [update] Updated object. See <http://mongoosejs.com/docs/api.html#model_Model.update> for more information.
    * @param {Object} [options] Options object. See <http://mongoosejs.com/docs/api.html#model_Model.update> for more information.
    * @return {Object} Promise
    * @public
    */

    scheme.statics.createOrUpdate = function (query, update, options) {

        return this.findOne(query).exec().then(doc => {

            if (!doc) {

                return this.create(update);

            }

            return doc.update(update, options).exec().then(() =>
                this.findOne(query).exec());

        });

    };

};
