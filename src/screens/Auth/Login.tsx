import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const Login: NavigationStackScreenComponent = ({ navigation }) => {
  const onLogin = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View>
      <TouchableOpacity onPress={onLogin}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
