import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
// redux
import { Provider } from 'react-redux'
import store from './src/Redux/store/'
// Component
// import LoginContainer from './src/Containers/LoginContainer'
import Main from './src/main'

function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};

export default App;
