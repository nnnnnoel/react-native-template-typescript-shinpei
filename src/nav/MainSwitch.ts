import HomeTab from '@nav/HomeTab';
import LoginStack from '@nav/LoginStack';
import Loading from '@screens/Loading';
import { createSwitchNavigator } from 'react-navigation';

export default createSwitchNavigator({
  Loading: { screen: Loading, path: 'loading/' },
  Login: { screen: LoginStack, path: 'login/' },
  Home: { screen: HomeTab, path: 'home/' },
});
