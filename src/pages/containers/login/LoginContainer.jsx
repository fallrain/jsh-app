import Login from '../../views/login/index.jsx';

import {
connect
} from '@tarojs/redux';

const props = state => ({
  userInfo: state
});

export default connect(
  props
)(Login);
