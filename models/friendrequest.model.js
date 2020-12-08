const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const friendRequestSchema = new Schema({
from:{
  type:String,
  required:true,
},
fromuseravatar:{
  type:String,
  required:true,
},
to:{
  type:String,
  required:true,
},
status:{
  type:Number,
  required:true,
}
},{
timestamps:true,
});

const FriendRequest = mongoose.model('FriendRequest',friendRequestSchema);

module.exports = FriendRequest;
