const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const userSchema = new Schema({
username:{
  type:String,
  unique:true,
  required:true,
  trim:true,
  minlength:3,
},
useravatar:{
  type:String,
  required:true,
},
password:{
  type:String,
  required:true,
},
friends:[{type:String}]
},{
timestamps:true,
});

const User = mongoose.model('User',userSchema);

module.exports = User;
