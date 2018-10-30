import React from 'react';
import MainLayout from '../../mainLayout/MainLayout';
import { connect } from 'dva';

class UserPage extends React.Component{
    

    render(){
        console.log("UserPage渲染了")
        return (
            <MainLayout>
           <div>hello world!!!</div>
           </MainLayout>
            );
        };
}
function mapStateToProps(){
    return{}
}
export default connect(mapStateToProps)(UserPage);
