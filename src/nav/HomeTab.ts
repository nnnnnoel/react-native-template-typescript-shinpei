import Home from '@screens/Home';
import Setting from '@screens/Setting';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default createBottomTabNavigator(
  {
    Home: { screen: Home },
    Setting: { screen: Setting },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
    },
  }
);
