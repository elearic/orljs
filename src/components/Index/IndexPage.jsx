import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import MainLayout from '../../mainLayout/MainLayout';

class IndexPage extends React.Component {

    constructor(props){
      super(props);
    }

   render(){
    return (
            <MainLayout>IndexPage</MainLayout>
    )}
  };



  // #components-form-demo-normal-login .login-form {
  //   max-width: 300px;
  // }
  // #components-form-demo-normal-login .login-form-forgot {
  //   float: right;
  // }
  // #components-form-demo-normal-login .login-form-button {
  //   width: 100%;
  // }
  export default IndexPage;
// function mapStateToProps(){
//   return{}
// }
// export default connect(mapStateToProps)(IndexPage);
