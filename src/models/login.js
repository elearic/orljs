export default {

    namespace: 'login',
  
    state: {
        userName:null,
        password:null
    },
    
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
    
    //异步调用
    effects: {
      *login({ payload }, { call, put }) {  // eslint-disable-line
        console.log('{login}/effects/login',payload);
        yield put({ type: 'save' });
      },
    },
    
    //同步调用
    reducers: {
      login(state, action) {
        console.log("Login组件reducers的login方法执行了","{state}",state,"{action}",action);
        return { ...state, ...action.payload };
      },
    },
  
  };
  