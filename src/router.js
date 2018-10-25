import React from 'react';
import { Router, Route } from 'dva/router';
import MainLayout from './MainLayout/MainLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainLayout} />
    </Router>
  );
}

export default RouterConfig;
