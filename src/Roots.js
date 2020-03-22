import React from 'react';
import { BrowserRouter as Router, Switch, Redirect,Route } from 'react-router-dom';
import Async from 'react-code-splitting';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = props => (
    <Async load={import('./components/Layout')} componentProps={props} />
  );
  const Drag = props => (
    <Async load={import('./components/drag')} componentProps={props} />
  );
  const Drop = props => (
    <Async load={import('./components/Drop')} componentProps={props} />
  );
  const Todo = props => (
    <Async load={import('./components/Todo')} componentProps={props} />
  );
 
  const supportsHistory = 'pushState' in window.history;
  const Roots = props => {
    return (
      <Router forceRefresh={!supportsHistory}>
        <Switch>  
        <Redirect exact from="/" to="/Layout" />                                    
             <Route  exact  path="/Layout" component={(Layout)}/>  
             <Route  exact  path="/Drag" component={(Drag)}/>  
             <Route  exact  path="/Drop" component={(Drop)}/>      
             <Route  exact  path="/Todo" component={(Todo)}/>                                    
        </Switch>
    </Router>
  );
};

export default Roots;
