const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

const multer = require('multer');

require('dotenv').config();

app = express();

app.use(cors());


app.use(bodyParser.urlencoded({"extended":true,}));



const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open',()=>{
console.log("MongoDB database connection established successfully")
}
)

const userRouter = require('./routes/users');
app.use("/login",userRouter);

const postsRouter = require('./routes/posts');
app.use("/posts",postsRouter);

const commentsRouter = require('./routes/comments');
app.use("/comments",commentsRouter);

const friendsRouter = require('./routes/friends');
app.use("/friends",friendsRouter);



const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log("Listening on 5000 ")});
