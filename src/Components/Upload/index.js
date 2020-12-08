import React from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../Header';

import "./Upload.css";

class Upload extends React.Component{

constructor(props){
super(props);

this.state = {
	files:[],
	redirect:false,
	postcaption:"",
};

this.handleSubmit = this.handleSubmit.bind(this);

}

handleSubmit(e){
e.preventDefault();
console.log("Entered Handlesubmit");
 const data = new FormData();
   data.append('postmedia', this.state.files[0]);
   data.append('postcaption',this.state.postcaption);
   data.append('media_type',this.state.files[0].type);
   data.append('username',this.props.location.state.username);
   data.append('useravatar',this.props.location.state.useravatar);
   data.append('date',Date(Date.now()).toString());
  fetch('/posts/upload', {
    method: 'POST',
    body: data,
  })
.then(console.log("Success"))
.catch((error) => {
  console.error('Error:', error);
  })

this.setState({redirect:true});
}



render(){
  if (this.state.redirect) {
    return <Redirect push to={{
            pathname: "/Home",
            state: {
		username:this.props.location.state.username,
		useravatar:this.props.location.state.useravatar
	}
          }} />;
  }

return(
 <div>
    <Header username={this.props.location.state.username} useravatar={this.props.location.state.useravatar}/>
   <form > 
   <h1>Post Something</h1><br/>
   <p>Put a caption!</p> <br/>
   <input type = "text" name = "postcaption" onChange = {(e)=>{this.setState({postcaption:e.target.value})}} value = {this.state.postcaption}/>
   <p>Add a photo or video : </p> <br/>
   <input type="file" name="postmedia" onChange = {(e)=>{this.setState({files: e.target.files})}}/>
   <button onClick = {this.handleSubmit}>Post</button>
   </form>
</div>
);

}
}

export default Upload;
