// src/components/Comment/index.js
import React from "react";
import "./User.css";
import {Redirect} from "react-router-dom";

class User extends React.Component {

  constructor(props){
  super(props);
  this.sendRequest = this.sendRequest.bind(this); 
  this.viewProfile = this.viewProfile.bind(this); 
  this.state = {
	redirect:false,
}
  }

  viewProfile(){
  this.setState({redirect:true})
}

  sendRequest(){

  fetch(
	"/friends/request",{
	method:"POST",
	body:JSON.stringify({"from":this.props.current_user,"to":this.props.username,"fromuseravatar":this.props.current_useravatar}),
	headers:{'Content-Type':'application/json'}		
	}
      )
      .then(res=>console.log(res))
      .catch(err=>console.log(err))

}

  render() {

if(this.state.redirect){
	return(
	<Redirect push to = {{pathname:'/Profile',state:{username:this.props.username,useravatar:this.props.useravatar, current_username:this.props.current_user,current_useravatar:this.props.current_useravatar} }} /> 
);
}

if(this.props.friends){
 return (
      <article className="Comments" ref="Comments">
        <header>
          <div className="Comments-user">
            <div className="Comments-user-avatar">
              <img
                src={this.props.useravatar}
                alt="Not Found"
              />
            </div>
            <div className="Comments-user-nickname">
              <span>{this.props.username} </span> 
            </div>
	    <div className="Comment-meta">
		<button onClick={this.viewProfile}>View Profile</button>
	    </div>
          </div>
        </header>
        <div className="Comments-caption">
         	<p>You are friends</p>
        </div>
      </article>
    );
}
else{
 return (
      <article className="Comments" ref="Comments">
        <header>
          <div className="Comments-user">
            <div className="Comments-user-avatar">
              <img
                src={this.props.useravatar}
                alt="Not Found"
              />
            </div>
            <div className="Comments-user-nickname">
              <span>{this.props.username} </span> 
            </div>
	    <div className="Comment-meta">
		<button onClick={this.viewProfile}>View Profile</button>
	    </div>
          </div>
        </header>
        <div className="Comments-caption">
         	<div><h3>Send a friend request : </h3> <button onClick = {this.sendRequest}>Request</button></div>
        </div>
      </article>
    );
}

}
}
export default User;
