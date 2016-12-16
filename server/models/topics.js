console.log('Topics model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var TopicsSchema = new mongoose.Schema({
	_users: {type: Schema.Types.ObjectId, ref: 'Users'},
	topic: {type: String, required: true},
	description: {type: String, required: true},
	category: {type: String, required: true},
	posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}],
},
{
	timestamps: true
})
// register the schema as a model
var Topics = mongoose.model('Topics', TopicsSchema);



