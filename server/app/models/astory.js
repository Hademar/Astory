/**
 * Created by Delios on 11/30/13.
 */
var mongoose;
mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schemaName = Schema({
    author: {type: String, required: true},
    title: {type: String, required: true}
});

/* Custom server side validators
 * @see http://mongoosejs.com/docs/api.html#document_Document-validate
 * @see http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate
 * @see http://mongoosejs.com/docs/2.7.x/docs/validation.html
 *
 * if validation fails, then return false || if validation succeeds, then return true
 *
 **/
/**
 * TODO: Create custom validator
 */
/*
schemaName.path('title').validate(function(val){
    return(val !== undefined && val.length >= 8);
}, 'Invalid title');
*/

/*
 If collectionName is absent as third argument, than the modelName should always end with an -s.
 Mongoose pluralizes the model name. (This is not documented)
 */
var modelName = "Story";
var collectionName = "stories"; // Naming convention is plural.
mongoose.model(modelName, schemaName, collectionName);
