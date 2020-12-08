// src/components/Header/index.js
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

class Header extends React.Component {

  constructor(props){
  super(props);
  this.state = {
  username:this.props.username,
  useravatar:this.props.useravatar,
  }
}

  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Instagram
            </a>
          </div>
    <header>
      <nav>
        <ul>
          <li><Link to={{
            pathname: "/Home",
            state: {
		username:this.state.username,
		useravatar:this.state.useravatar
	}
          }}>Home</Link></li>
          <li><Link to={{
            pathname: "/About",
            state: {
		username:this.state.username,
		useravatar:this.state.useravatar
	}
          }}>About</Link></li>
          <li><Link to={{
            pathname: "/Contact",
            state: {
		username:this.state.username,
		useravatar:this.state.useravatar
	}
          }}>Contact</Link></li>
	<li><Link to={{
            pathname: "/Search",
            state: {
		username:this.state.username,
		useravatar:this.state.useravatar
	}
          }}>Search</Link></li>
	<li><Link to={{
            pathname: "/Requests",
            state: {
		username:this.state.username,
		useravatar:this.state.useravatar
	}
          }}>Requests</Link></li>
	<li><Link to={{
            pathname: "/Profile",
            state: {
		username:this.state.username,
		useravatar:this.state.useravatar,
	        current_username:this.state.username,
                current_useravatar:this.state.useravatar,
	}
          }}>My Profile</Link></li>
        </ul>
      </nav>
    </header>
        </div>
      </nav>
    );
  }
}
export default Header;
