// src/components/Comment/index.js
import React from "react";
import "./Comments.css";

class Comments extends React.Component {

  constructor(props){
  super(props);
  }

  render() {
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
		commented at {this.props.time}
	    </div>
          </div>
        </header>
        <div className="Comments-caption">
          {this.props.text}
        </div>
      </article>
    );
}
}
export default Comments;
