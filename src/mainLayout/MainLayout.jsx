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
    console.log("MainLayout..item.key",item.key);
    if(item.key == "1"){
      this.props.dispatch(routerRedux.push({pathname:'/login'}));
    }else if(item.key == "2"){
      this.props.dispatch(routerRedux.push({pathname:'/user'}));
    }
  }

  render(){ 
    return (
        <Layout>
         <Header>
          <div>
            <div className="logo" style={{width:'10%',color:'white',float: 'left'}}>智慧社区</div>
            <div style={{width:'80%'}}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                onClick={this.handleOnClick.bind(this)} 
              >
                <Menu.Item key="1" >首页_1</Menu.Item>
                <Menu.Item key="2" >功能_2</Menu.Item>
                <Menu.Item key="3" >功能_3</Menu.Item>
                <Menu.Item key="4" >功能_4</Menu.Item>
                <Menu.Item key="5" >功能_5</Menu.Item>
                <Menu.Item key="6" >功能_6</Menu.Item>
              </Menu>
            </div>
          </div>
       </Header>
       <div style={{backgroundColor: "#ffffff"}}>
          {this.props.children}
        </div>
      </Layout>
    )
  };
}

MainLayout.propTypes = {
}

function mapStateToProps(){
  return{}
}
export default connect(mapStateToProps)(MainLayout);