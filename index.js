module.exports = scheme => {

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
