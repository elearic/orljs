import React from 'react';
import MainLayout from '../mainLayout/MainLayout';
import { connect } from 'dva';

class Example extends React.Component{
    
  constructor(props){
      super(props);
  }

  handleOnClick(){
    console.log("handleOnClick执行了");
    this.props.dispatch({
      type:'example/save',
      payload:{"name":"test"}
    })
  }

  render(){
      return (
          <MainLayout>
            <div onClick={this.handleOnClick.bind(this)}>Example</div>
          </MainLayout>
          );
      };
  }

  Example.propTypes = {
  }

function mapStateToProps(){
  return{}
}
export default connect(mapStateToProps)(Example);

