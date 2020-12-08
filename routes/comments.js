const router = require("express").Router();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Comment = require("../models/comment.model");

router.use(bodyParser.json());

router.get("/:id",(req,res)=>{
    console.log(req.body)
    Comment.find({post_id:req.params.id}).sort('-createdAt').lean()
    .then((docs)=>{
	res.json(docs);
	})
    .catch(error=>{console.log(error)})
});

router.post("/upload",(req,res,next)=>{

console.log(req.body)
const username = req.body.username;
const useravatar = req.body.useravatar;
const post_id = String(req.body.post_id);
const time = Date(Date.now()).toString();
const text = req.body.text;


const comment = new Comment({username,useravatar,text,post_id,time});

comment.save()
.then(console.log("Successfully saved"))
.catch(err=>console.log(err));

return false;
});

module.exports = router;
