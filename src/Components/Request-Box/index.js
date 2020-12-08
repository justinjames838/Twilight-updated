//src/components/About/index.js

import React from 'react';
import './Request-Box.css';
import Header from '../Header';
import Requests from '../Requests';

class RequestBox extends React.Component{

constructor(props){
	super(props);
	this.state = {
	userjsx:[],
	};

}


render(){

	
	var i = 0;
 	fetch("/friends/showrequest/"+this.props.location.state.username,{
	method:"GET"
	})
	.then(res=>res.json())
	.then((requests)=>{
	var jsx = [];
	for(i=0;i<requests.length;i++){
		jsx.push(<Requests fromusername={requests[i].from} fromuseravatar = {requests[i].fromuseravatar} tousername = {requests[i].to} />)
	}

	this.setState({userjsx:jsx})	

	});

if(this.state.userjsx.length== 0){
return(
	<div>
	<Header username={this.props.location.state.username} useravatar={this.props.location.state.useravatar}/>
	<div className = "Results">
		You have no friend requests
	</div>

        </div>	
);
}	

return(
	<div>
	<Header username={this.props.location.state.username} useravatar={this.props.location.state.useravatar}/>
	<div className = "Results">
		{this.state.userjsx}
	</div>

        </div>	
);
}

}

export default RequestBox;

