import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './MainLayout.css';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';


import {UserPage} from '../components/User/UserPage';

const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

class MainLayout extends React.Component{

   constructor (props){
    super(props);
    this.state = {
      userpage:0
    }
  }

  handleOnClick(item){
    if(item.key == "1"){
      // this.props.dispatch(routerRedux.push("/login"));
    }
  }

  render(){ 
    return (
      //   <Layout>
      //    <Header>
      //     <div>
      //       <div className="logo" style={{width:'10%',color:'white',float: 'left'}}>Elearic Dva</div>
      //       <div style={{width:'80%'}}>
      //         <Menu
      //           theme="dark"
      //           mode="horizontal"
      //           defaultSelectedKeys={['2']}
      //           style={{ lineHeight: '64px' }}
      //           onClick={this.handleOnClick.bind(this)} 
      //         >
      //           <Menu.Item key="1" >首页_1</Menu.Item>
      //           <Menu.Item key="2" >用户管理_2</Menu.Item>
      //           <Menu.Item key="3" >政务管理</Menu.Item>
      //         </Menu>
      //       </div>
      //     </div>
      //  </Header>
      // </Layout>
      <div>hhhheheee</div>
    )
  };
}
function mapStateToProps(){
  return{}
}
export default connect(mapStateToProps)(MainLayout);