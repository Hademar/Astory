/**
 * Created by Delios on 11/30/13.
 */
var mongoose = require('mongoose')
    , Story = mongoose.model('Story');


exports.list = function (req, res) {
    var conditions, fields, options;
    console.log('LIST:' + req.params);

    conditions = {};

    if (req.params.isSold !== undefined) {
        conditions['isSold'] = req.params.isSold;
    } else if (req.params.hasBids !== undefined) {
        conditions['$where'] = "this.bids.length > 0";
    }
    fields = {};
    sort = {'make' : 1};

    Auto
        .find(conditions, fields, options)
        .sort(sort)
        .exec(function (err, doc) {
            var retObj = {
                meta: {"action": "list", 'timestamp': new Date(), filename: __filename},
                doc: doc,
                err: err
            };
            return res.send(retObj);
        })
}

exports.loggedin = function(req, res){

}
