import React from 'react';

//Navigations
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Components
// import LoginScreen from "./Components/LoginScreen"
import SignUpScreen from "./Components/SignUpScreen"
import LoginContainer from "./Containers/LoginContainer"

const MainNavigator = createStackNavigator({
  LoginScreen: {screen: LoginContainer},
  SignUpScreen: {screen: SignUpScreen},
},
{
  initialRouteName: 'LoginScreen',
  headerMode: 'none'
});

const main = createAppContainer(MainNavigator);

export default main;
