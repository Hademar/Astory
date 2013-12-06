/**
 * Created by Delios on 11/30/13.
 */

module.exports = function (app) {

    var controller = require('../app/controllers/astory.js'),
    passport = require('passport');

    var auth = function(req, res, next){
        if (!req.isAuthenticated()) res.send(401);
        else next();
    };

    //PASSPORT
    app.get('/loggedin', controller.loggedin);

}