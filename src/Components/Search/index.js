//src/components/About/index.js

import React from 'react';
import './Search.css';
import Header from '../Header';
import User from '../User';

class Search extends React.Component{

constructor(props){
	super(props);
	this.state = {
	username:"",
	useravatar:"",
	user_jsx:[]

	};
	this.handleClick = this.handleClick.bind(this);

}

handleClick(){



fetch("/login/"+this.state.username,{
method:"GET"
})
.then(res=>res.json())
.then((user)=>{
if(user.length>0){
var jsx = [];
if(user[0].friends.includes(this.props.location.state.username)){

	jsx.push(<User current_user = {this.props.location.state.username} current_useravatar ={this.props.location.state.useravatar}  friends={true} username = {this.state.username} useravatar = {user[0].useravatar}/>)
}
else{
	jsx.push(<User current_user = {this.props.location.state.username} current_useravatar ={this.props.location.state.useravatar} friends={false} username = {this.state.username} useravatar = {user[0].useravatar}/>)
}

this.setState({user_jsx:jsx});

}


})



}

render(){

return(
	<div>
	<Header username={this.props.location.state.username} useravatar={this.props.location.state.useravatar}/>

	<div className = "Search">
	<label>Search for Users : </label>
	<input type = "text" value = {this.state.username} onChange = {(e)=>{this.setState({username:e.target.value})}}/>
	<button onClick = {this.handleClick}>Search</button>
	</div>

	<div className = "Results">
		{this.state.user_jsx}
	</div>

        </div>	
);
}
}

export default Search;

