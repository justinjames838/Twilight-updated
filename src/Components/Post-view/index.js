// src/components/Post/index.js
import React, { Component } from "react";
import "./Post-view.css";
import Posts from "../Posts";
import CommentBox from "../Comment-box";
import Header from '../Header';

class ViewPost extends Component {
  constructor(props){
	super(props);
	this.state = {
	username:this.props.username,
	media_id:this.props.media_id,
	useravatar:this.props.useravatar,
	post_caption:this.props.post_caption,
	media_type:this.props.media_type,
	date:this.props.date,
	};
}


  render() {
    return (
     	<div>
	<Header username={this.props.location.state.current_user} useravatar={this.props.location.state.current_useravatar}/>

	<Posts current_user = {this.props.location.state.current_user} current_useravatar = {this.props.location.state.current_useravatar} enable_click = {this.props.location.state.enable_click} post_id = {this.props.location.state.post_id} media_id ={this.props.location.state.media_id}  username = {this.props.location.state.username} useravatar = {this.props.location.state.useravatar} post_caption = {this.props.location.state.post_caption} date = {this.props.location.state.date} media_type = {this.props.location.state.media_type} />

	<CommentBox post_id = {this.props.location.state.post_id} username = {this.props.location.state.current_user} useravatar = {this.props.location.state.current_useravatar}/>
	</div>
    );
  }
}
export default ViewPost;
