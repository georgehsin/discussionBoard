console.log('Posts model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema 

var PostsSchema = new mongoose.Schema({
	_users: {type: Schema.Types.ObjectId, ref: 'Users'},
	_topics: {type: Schema.Types.ObjectId, ref: 'Topics'},
	text: {type: String, required: true},
	likes: {type: Number},
	dislikes: {type: Number},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}],
},
{
	timestamps: true
})
// register the schema as a model
var Posts = mongoose.model('Posts', PostsSchema);