const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const commentSchema = new Schema({
username:{
  type:String,
  required:true,
  trim:true,
  minlength:3,
},
useravatar:{
  type:String,
  required:true,
},
text:{
  type:String,
  required:true,
},
post_id:{
  type:String,
  required:true,
},
time:{
  type:String,
  required:true,
}

},{
timestamps:true,
});

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;
