//src/components/About/index.js

import React from 'react';
import './About.css';
import Header from '../Header';

class About extends React.Component{

render(){
return(
	<div>
	<Header username={this.props.location.state.username} useravatar={this.props.location.state.useravatar}/>
	<h1>About</h1>
        </div>
);
}
}

export default About;

