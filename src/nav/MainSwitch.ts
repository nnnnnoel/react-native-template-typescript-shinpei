import Loading from '@screens/Loading';
import { createSwitchNavigator } from 'react-navigation';

export default createSwitchNavigator({
  Loading: { screen: Loading, path: 'loading/' },
});
