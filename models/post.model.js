const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const postSchema = new Schema({
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
post_caption:{
  type:String,
  required:true,
},
media_id:{
  type:String,
  required:true,
},
media_type:{
  type:String,
  required:true,
},

date:{
  type:String,
  required:true,
},

},{
timestamps:true,
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;
