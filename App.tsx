import * as React from 'react';
import AppContainer from '@nav/AppContainer';

const uriPrefix = 'app://';

const App = () => {
  return <AppContainer {...{ uriPrefix }} />;
};

export default App;
