import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/ToolBar/Toolbar';
import Backdrop from './components/Backdrop/Backdrop';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import Intro from './Pages/Intro';

import './App.css';
import background from './Images/background.png'


class App extends Component {
  state = {
      sideDrawerOpen: false
    }
   
    // Hamburger menu button handler
   drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return {sideDrawerOpen: !prevState.sideDrawerOpen};
     });
   };
   
   //closes hamburger menu
   backdropClickHandler = () => {
     this.setState({sideDrawerOpen: false})
   };
   
   // if sideDrawer is true the then the extra hamburger menu will be seen.
   render() {
     let sideDrawer;
     let backdrop;
   
     if (this.state.sideDrawerOpen) {
       backdrop =    <Backdrop click={this.backdropClickHandler} />
     }
   
     // allowing handler to be clicked/fired
  return(
    <main>

<    div  >
  
    <Router>
    
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
     <SideDrawer show={this.state.sideDrawerOpen} />
     {backdrop}

     <Route
        render={({ location }) => (

     <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.pathname} >
        
         <Route path="/" exact component={Intro}> <Intro /> </Route>   
         <Route path="/home" component={Home}> <Home /> </Route>
         <Route path="/about" component={About}> <About /> </Route>
         <Route path="/contact" component={Contact} > <Contact /> </Route>
         
       </Switch>
       </AnimatePresence>
        )}
       />

    </Router>
    </div>
    </main>
  );
}
}

export default App;