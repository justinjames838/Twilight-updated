// src/components/Post/index.js
import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import "./Profile.css";
import Media from "../Media";
import Header from "../Header";
import Friend from "../Friend";

class Profile extends Component {
  constructor(props){
	super(props);
	this.state = {friends:[]}
}

  render() {
	  var friendsjsx = [];
    var i = 0;
    fetch("/login/"+this.props.location.state.username,
	{
		method:"GET"
	}
	)
	.then(res=>res.json())
	.then(user=>{
	for(i=1;i<user[0].friends.length;i++){

		friendsjsx.push(<Friend username = {user[0].friends[i]} current_username = {this.props.location.state.current_username} current_useravatar = {this.props.location.state.current_useravatar}/>)
}
	
	this.setState({friends:friendsjsx})
})

    return (
      <div >
      <Header username={this.props.location.state.current_username} useravatar={this.props.location.state.current_useravatar}/>

      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-nickname">
              <span>{this.props.location.state.username}</span>
            </div>
          </div>
        </header>
        <div className="Post-media">
          <div className="Post-media-bg">
         	<Media media_type = "image" media_id = {this.props.location.state.useravatar}/>
          </div>
	<div className="Post-caption">
		Friends:
	</div>
	<div className="Post-caption">
		{this.state.friends}
	</div>
        </div>
      </article>
      </div>
    );
  }
}
export default Profile;
