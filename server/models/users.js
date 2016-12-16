console.log('Users model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UsersSchema = new mongoose.Schema({
	name: {type: String, required: true},
	topics: [{type: Schema.Types.ObjectId, ref: 'Topics'}],
	comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}],
	post: [{type: Schema.Types.ObjectId, ref: 'Posts'}],
},
{
	timestamps: true
})
// register the schema as a model
var Users = mongoose.model('Users', UsersSchema);