//src/components/Contact/index.js

import React from 'react';
import './Contact.css';
import Header from '../Header';

class Contact extends React.Component{

render(){
return(
	<div>
	<Header username={this.props.location.state.username} useravatar={this.props.location.state.useravatar}/>
	<h1>Contact</h1>
	</div>
);
}
}

export default Contact;

