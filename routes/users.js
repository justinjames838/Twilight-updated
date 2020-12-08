const router = require("express").Router();
const express = require('express'),
    mongoose = require('mongoose');
    multer = require('multer');
const User = require('../models/user.model')

const bodyParser = require('body-parser');

router.use(bodyParser.json())

router.get("/:username",(req,res)=>{
User.find({username:req.params.username}).lean()
.then((docs)=>{
	res.json(docs);
})
.catch(error=>{console.log(error)})

});

router.post("/",(req,res)=>{
     console.log(req.body)
  	
    User.find({username:req.body.username,password:req.body.password}).lean()
    .then((docs)=>{
	res.json(docs);
	})
    .catch(error=>{console.log(error)})
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
	

 if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      console.log(__dirname);
      cb(null, './public/user-avatars');
    } else {
      console.log(file.mimetype)
      cb({ error: 'Mime type not supported' });
    }
	
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
	 const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      cb(null, Date.now() + fileName);
}});


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype === 'video/mp4' || file.mimetype === 'video/x-matroska' || file.mimetype === 'video/x-flv' || file.mimetype === 'video/x-ms-wmv' || file.mimetype === 'video/webm') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg, .jpeg, .mp4, .mkv, .flv, .wmv and .webm format allowed!'));
        }
    }
});


router.post("/add",upload.single('userimg'),(req,res,next)=>{


const username = req.body.username;
const password = req.body.password;
const friends = req.body.friends;
const useravatar = '/user-avatars/'+req.file.filename;



const user = new User({username,useravatar,password,friends});

user.save((err)=>{
if(err){
res.status(500).send("Duplicate User")
}
else{
res.status(500).json({'username':username,'password':password})
}

})

});








module.exports = router;
