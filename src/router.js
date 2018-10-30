import React from 'react';
import { Router, Route, routerRedux } from 'dva/router';
import UserPage from './components/User/UserPage';
import IndexPage from  './components/Index/IndexPage';
import LoginPage from './components/Login/LoginPage';
const { ConnectedRouter } = routerRedux

function RouterConfig({ history }) {
  console.log("history",history);

  return (
    <ConnectedRouter history={history}>
       <Router history={history}>
        <div>
         <Route path="/" exct component={IndexPage} />
          <Route path="/index" exct  component={IndexPage} />
          <Route path="/login" component={LoginPage} />
        </div>
        </Router>
    </ConnectedRouter>
  );
}

export default RouterConfig;
