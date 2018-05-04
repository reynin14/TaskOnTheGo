import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Provider } from 'react-redux';
import store from './config/store';


import Home from './screens/Home';
import { Container } from './components/Container';

EStyleSheet.build({})

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
