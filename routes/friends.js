const router = require("express").Router();
const express = require('express'),
    mongoose = require('mongoose');
    multer = require('multer');
const User = require('../models/user.model')
const FriendRequest = require('../models/friendrequest.model')

const bodyParser = require('body-parser');

router.use(bodyParser.json())

router.get("/:username",(req,res)=>{
FriendRequest.find({"to":req.params.username}).lean()
.then((docs)=>{
	res.json(docs);
})
.catch(error=>{console.log(error)})

});


router.post("/request",(req,res,next)=>{


const from = req.body.from;
const to = req.body.to;
const fromuseravatar = req.body.fromuseravatar
const status = 3;

const friend_request = new FriendRequest({from,fromuseravatar,to,status});

FriendRequest.exists({"from":from,"to":to},(err,docs)=>{

if(docs){
res.send("Request already exists")	
}
else{
friend_request.save().then(docs=>res.send("Request saved"))
}

})

});

router.post("/close",(req,res)=>{
FriendRequest.find({"from":req.body.from,"to":req.body.to}).lean().exec((err,docs)=>{

if(docs.length>0){

	if(req.body.status==1){
		User.find({"username":req.body.from},(err,users)=>{
		users[0].friends.push(req.body.to)
		users[0].save().then(console.log("User saved"))
		})
		
		User.find({"username":req.body.to},(err,users)=>{
		users[0].friends.push(req.body.from)
		users[0].save().then(console.log("User saved"))
		})
	}
	
		FriendRequest.findOneAndDelete({"from":req.body.from,"to":req.body.to},(err)=>{console.log(err)})
}

})

res.send("Request Closed")

})


router.get("/showrequest/:id",(req,res)=>{
FriendRequest.find({"to":req.params.id}).lean().exec((err,docs)=>{
if(err){ console.log(err) }

res.json(docs)

})

})



module.exports = router;
