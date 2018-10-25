import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TestPage from './Test/TestPage';
import MainLayout from '../MainLayout/MainLayout';

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
