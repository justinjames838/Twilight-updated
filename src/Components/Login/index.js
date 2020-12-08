//src/components/About/index.js

import React from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login  extends React.Component{

constructor(props){
	super(props);
	this.state = {
	username:"",
	useravatar:"",
	password:"",
	redirect:false,
	incorrect:false,
        register:false,
	};
	
	this.handleLogin = this.handleLogin.bind(this);
	
	
}

handleLogin(e){
  e.preventDefault();
  console.log("Entered login handle")
 fetch("/login",
 {
	method:"POST",
	body:JSON.stringify({username:this.state.username,password:this.state.password}),
	headers:{'Content-Type':'application/json'}
 }
)
.then(user=>user.json())
 .then((user)=>{
 if(user.length){
  this.setState({redirect:true,useravatar:user[0].useravatar,incorrect:false});
}else{this.setState({incorrect:true})}
})

}

render(){
if(this.state.register){
return(
<Redirect push to= "/Register"/>
);
}

if(this.state.redirect){
 return(
	<Redirect push
            to={{
            pathname: "/Home",
            state: {
		username:this.state.username,
		useravatar:this.state.useravatar
	}
          }}
        />

);
}
if(this.state.incorrect){
return(
<div>
      <form onSubmit={this.handleLogin}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={this.state.username}
        placeholder="enter a username"
        onChange={(e) => this.setState({username:e.target.value})}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={this.state.password}
          placeholder="enter a password"
          onChange={(e) => this.setState({password:e.target.value})}
        />
      </div>
      <button type="submit">Login</button>
	<br/>
	<button onClick = {(e)=>this.setState({register:true})}>Register</button>
    </form>

    <h2>Incorrect username or password entered</h2>
</div>
);
}
else{
return(
	<form onSubmit={this.handleLogin}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={this.state.username}
        placeholder="enter a username"
        onChange={(e) => this.setState({username:e.target.value})}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={this.state.password}
          placeholder="enter a password"
          onChange={(e) => this.setState({password:e.target.value})}
        />
      </div>
      <button type="submit">Login</button>
       <br/>
      <button onClick = {(e)=>this.setState({register:true})}>Register</button>
    </form>
);
}

}
}

export default Login;

