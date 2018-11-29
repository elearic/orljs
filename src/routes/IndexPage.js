import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../mainLayout/MainLayout';



function IndexPage() {
  return (
          <MainLayout></MainLayout>
      );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
