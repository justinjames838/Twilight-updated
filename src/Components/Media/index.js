import React, { Component } from "react";
import "./Media.css";

class Media extends Component{

render(){
	if(this.props.media_type === "image")
	{
		return(
		 <img
              	 alt="Image Not Found"
	      	src = {this.props.media_id}
        	 />
		)
	}
	else
	{
		return(
		<video controls
		src = {this.props.media_id}
		/>
		)
	}

}


}


export default Media;
