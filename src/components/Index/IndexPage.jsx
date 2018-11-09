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
  
  IndexPage.propTypes = {
  }

function mapStateToProps(){
  return{}
}
export default connect(mapStateToProps)(IndexPage);
