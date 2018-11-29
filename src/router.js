import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './components/Index/IndexPage';
import LoginPage from './components/Login/LoginPage';
import UserPage from './components/User/UserPage';
import Example from './components/Example';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/index" exact component={IndexPage} />
        <Route path="/user" exact component={UserPage} />  
        <Route path="/example" exact component={Example} />              
      </Switch>
    </Router>
  );
}

export default RouterConfig;
