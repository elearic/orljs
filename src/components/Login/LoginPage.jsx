import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './LoginPage.less';

const FormItem = Form.Item;

class LoginPage extends React.Component {

    constructor(props){
      super(props);
    }

    componentWillMount() {
      this.requiredDecorator = this.props.form.getFieldDecorator('required', {
        rules: [{required: true}],
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

   render(){
    let {getFieldDecorator} = this.props.form;
    return (
      <div className="login_form_container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    )}
  };

  LoginPage =  Form.create({})(LoginPage);

  // #components-form-demo-normal-login .login-form {
  //   max-width: 300px;
  // }
  // #components-form-demo-normal-login .login-form-forgot {
  //   float: right;
  // }
  // #components-form-demo-normal-login .login-form-button {
  //   width: 100%;
  // }

function mapStateToProps(){
  return{}
}
export default connect(mapStateToProps)(LoginPage);
