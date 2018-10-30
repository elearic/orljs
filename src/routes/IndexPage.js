import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TestPage from './Test/TestPage';
import MainLayout from '../mainLayout/MainLayout';

function IndexPage() {
  return (
    <div>
     <MainLayout></MainLayout>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
