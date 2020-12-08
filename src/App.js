import logo from './logo.svg';
import './App.css';
import { Switch ,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Upload from './Components/Upload';
import ViewPost from './Components/Post-view';
import Login from './Components/Login';
import Register from './Components/Register';
import Search from './Components/Search';
import RequestBox from './Components/Request-Box';
import Profile from './Components/Profile';
function App() {
  
  return (
    <div className="App">
   <div className = "Content">
      <Switch>
	<Route exact path='/' component={Login}/>
 	<Route exact path='/Register' component = {Register}/>
	<Route exact path='/Home' render={(props) => <Home {...props}/>}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Contact' component={Contact}/>
	<Route exact path='/Upload' component = {Upload}/>
	<Route exact path="/Post-view" render={(props) => <ViewPost {...props}/>}/>
	<Route exact path="/Search" render={(props)=> <Search {...props}/>}/>
	<Route exact path="/Requests" render={(props)=> <RequestBox {...props}/>}/>
	<Route exact path="/Profile" render={(props)=> <Profile {...props}/>}/>
      </Switch>
  </div>


    </div>
  );



}

export default App;
