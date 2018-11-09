import React from 'react';
import { HashRouter as Router, Route, routerRedux, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
const { ConnectedRouter } = routerRedux

class  RouterConfig extends React.component{

  render(){
     const routers = [
    {
      //login 页面router
      path: '/login',
      component: () => import('./components/Login/LoginPage'),
      model:() => [import('./models/login')]
    },
    {
      //首页router
      path: '/index',
      component: () => import('./components/Index/IndexPage'),
      model:() => [import('./models/index')]
    }
  ];

    return (
      <ConnectedRouter history={history}>
        <Router >
            <Switch>
              {
                routers.map(({ path, ...dynamics }, key) => (
                  <Route key={key}
                    exact
                    path={path}
                    component={dynamic({
                      ...dynamics,
                    })}
                  />
                ))
              }
            </Switch>
          </Router>
      </ConnectedRouter>
    );
  }
}

export default RouterConfig;
