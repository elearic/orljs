import React from 'react';
import MainLayout from '../../mainLayout/MainLayout';
import { connect } from 'dva';

class UserPage extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return (
        <MainLayout>
           <div>hello world!!!</div>
        </MainLayout>
            );
        };
    }

    UserPage.propTypes = {
    }

function mapStateToProps(){
    return{}
}
export default connect(mapStateToProps)(UserPage);
