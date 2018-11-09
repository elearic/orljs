export default {

    namespace: 'index',
  
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
        yield put({ type: 'save' });
      },
    },
    
    //同步调用
    reducers: {
      login(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  