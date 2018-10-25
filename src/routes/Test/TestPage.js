import React from 'react';
import { connect } from 'dva';

function TestPage() {
  return (
    <div>
      hello world!!!
    </div>
  );
}

TestPage.propTypes = {
};

export default connect()(TestPage);
