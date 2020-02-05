import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationSwitchScreenComponent } from 'react-navigation';

const Loading: NavigationSwitchScreenComponent = ({ navigation }) => {
  React.useEffect(() => {
    navigation.navigate('Home');
  }, []);
  return (
    <>
      <ActivityIndicator size='large' hidesWhenStopped />
    </>
  );
};

Loading.navigationOptions = {
  header: null,
};

export default Loading;
