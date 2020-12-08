// src/components/Comment/index.js
import React from "react";
import "./Friend.css";
import {Redirect} from "react-router-dom";

class Friend extends React.Component {

  constructor(props){
  super(props);
  this.viewProfile = this.viewProfile.bind(this); 
  this.state = {
	redirect:false,
}
  }



  viewProfile(){
  this.setState({redirect:true})
}

  render() {

if(this.state.redirect){
	return(
	<Redirect push to = {{pathname:'/Profile',state:{username:this.props.username,useravatar:this.state.useravatar, current_username:this.props.current_username,current_useravatar:this.props.current_useravatar} }} /> 
);
}


 return (
      <article className="Comments" ref="Comments">
        <header>
          <div className="Comments-user">
            <div className="Comments-user-nickname">
              <span>{this.props.username} </span> 
            </div>
          </div>
        </header>
      </article>
    );



}
}
export default Friend;
