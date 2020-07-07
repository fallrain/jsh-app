import Taro, {
Component
} from '@tarojs/taro';
import {
  Navigator,
  View
} from '@tarojs/components';
import pages from '../../../pages_data';

import './index.scss';

class Nav extends Component {

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='index'>
        {
          pages.map((v, index) =>
              <View key={index}>
                <Navigator url={`${v}`} className='nav-a'>{v}</Navigator>
              </View>
          )
        }
      </View>
    );
  }
}

export default Nav;

