// src/components/Comment/index.js
import React from "react";
import "./Comment-box.css";
import Comments from "../Comments"

class CommentBox extends React.Component {

  constructor(props){
  super(props);
	this.state = {
	jsx:[],
	comment_text : ""
	};
	this.handleClick = this.handleClick.bind(this);
	this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e){
  fetch("/comments/upload",{
  method:"POST",
  body:JSON.stringify({username:this.props.username,useravatar:this.props.useravatar,text:this.state.comment_text,
time:Date(Date.now()).toString(),post_id:this.props.post_id}),
headers:{'Content-Type':'application/json'}

}).then(res=>(console.log("Comment saved")));

this.forceUpdate();

}

 handleChange(e){
this.setState({comment_text:e.target.value});
}

  render() {
  var comments = [];
  var i = 0;
  fetch("/comments"+"/"+this.props.post_id,
  {
	method:"GET",
  }
  )
  .then(comments=>comments.json())
  .then(
         (comments) =>{
	 var comment_jsx = []
	 for(i=0;i<comments.length;i++){
	comment_jsx.push(<Comments post_id = {comments[i].post_id} username = {comments[i].username} useravatar = {comments[i].useravatar} text = {comments[i].text} time = {comments[i].time} />)
	}
	this.setState({jsx: comment_jsx})
	
});

   if(this.state.jsx.length === 0)
   {
	return(
	<div>
	<h3>Comments:</h3><br/>
		No comments yet.
	<br/>
	<textarea onChange = {this.handleChange} value = {this.state.comment_text}></textarea>
	<br/>
	<button onClick = {this.handleClick}>Comment</button>
      </div>


);
   }
else{
 return (
      <div>
	<h3>Comments:</h3><br/>
	{this.state.jsx}
	<br/>
	<textarea onChange = {this.handleChange} value = {this.state.comment_text}></textarea>
	<br/>
	<button onClick = {this.handleClick}>Comment</button>
      </div>
    );
}
}
}
export default CommentBox;
