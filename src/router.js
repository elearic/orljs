import React from 'react';
import { Router, Route } from 'dva/router';
import MainLayout from './MainLayout/MainLayout';
import UserPage from './components/User/UserPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
     <div>
      <Route path="/" component={MainLayout} />
      <Route path="/page01" component={UserPage} />
      </div>
    </Router>
  );
}

export default RouterConfig;
