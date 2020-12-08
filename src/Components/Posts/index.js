// src/components/Post/index.js
import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import "./Post.css";
import Media from "../Media";

class Post extends Component {
  constructor(props){
	super(props);
	this.state = {
	redirect:false,
        enable_click :this.props.enable_click,
	username:this.props.username,
	media_id:this.props.media_id,
	useravatar:this.props.useravatar,
	post_caption:this.props.post_caption,
	media_type:this.props.media_type,
	date:this.props.date,
	};
	this.handleClick = this.handleClick.bind(this);
}
	
  handleClick(e){
	console.log("Entered Click");
	if(this.state.enable_click === "true"){
	console.log("entered click");
	this.setState({redirect:true});
	
}

}


  render() {

    if(this.state.redirect){
	return(
	<Redirect push
            to={{
            pathname: "/Post-view",
            state: { enable_click: "false",
	username:this.props.username,
	media_id:this.props.media_id,
	useravatar:this.props.useravatar,
	post_caption:this.props.post_caption,
	media_type:this.props.media_type,
	date:this.props.date,
	post_id:this.props.post_id,
	current_user:this.props.current_user,
	current_useravatar:this.props.current_useravatar
	}
          }}
        />


	);
    }

    return (
      <div onClick = {this.handleClick}>
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img
                src={this.state.useravatar}
                alt={this.state.username}
              />
            </div>
            <div className="Post-user-nickname">
              <span>{this.state.username}</span>
            </div>
	    <div className="Post-meta">
		posted at {this.state.date}
	    </div>
          </div>
        </header>
        <div className="Post-media">
          <div className="Post-media-bg">
         	<Media media_type = {this.state.media_type} media_id = {this.state.media_id}/>
          </div>
        </div>
        <div className="Post-caption">
            {this.props.post_caption}
        </div>
      </article>
      </div>
    );
  }
}
export default Post;
