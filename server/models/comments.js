console.log('Comments model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CommentsSchema = new mongoose.Schema({
	_users: {type: Schema.Types.ObjectId, ref: 'Users'},
	_post: {type: Schema.Types.ObjectId, ref: 'Posts'},
	text: {type: String, required: true},
},
{
	timestamps: true
})
// register the schema as a model
var Comments = mongoose.model('Comments', CommentsSchema);