import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import AcctInfoScreen from './src/screens/AcctInfoScreen';
import GraphScreen from './src/screens/GraphScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    AcctInfo: AcctInfoScreen,
    Graph: GraphScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  );
};