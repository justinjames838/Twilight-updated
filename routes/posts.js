const router = require("express").Router();
const express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuidv4');
const Post = require("../models/post.model");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
	

    if (file.mimetype === 'video/mp4' || file.mimetype === 'video/x-matroska' || file.mimetype === 'video/x-flv' || file.mimetype === 'video/x-ms-wmv' || file.mimetype === 'video/webm') {
      cb(null, './public/post-videos');
    } else if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      console.log(__dirname);
      cb(null, './public/post-images');
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


router.get("/",(req,res)=>{
    Post.find().sort('-createdAt').lean()
    .then((docs)=>{
	res.json(docs);
	})
    .catch(error=>{console.log(error)})
});

router.post("/upload",upload.single('postmedia'),(req,res,next)=>{


const username = req.body.username;
const useravatar = req.body.useravatar;
const media_type = req.body.media_type.split('/')[0];
var media_id ="";
if(media_type === "image"){
  media_id = '/post-images/'+req.file.filename;
}
else{
  media_id = '/post-videos/'+req.file.filename;
}
const date = Date(Date.now()).toString();
const post_caption = req.body.postcaption;


const post = new Post({username,useravatar,post_caption,media_id,media_type,date});

post.save()
.then(console.log("Successfully saved"))
.catch(err=>console.log(err));

return false;
});





module.exports = router;
