import React from 'react';
import { HashRouter as Router, Route, routerRedux } from 'dva/router';
import UserPage from './components/User/UserPage';
import IndexPage from  './components/Index/IndexPage';
import LoginPage from './components/Login/LoginPage';
const { ConnectedRouter } = routerRedux

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
       <Router >
        <div>
          <Route path="/index" exct  component={IndexPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/user" component={UserPage} />          
        </div>
        </Router>
    </ConnectedRouter>
  );
}

export default RouterConfig;
