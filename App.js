import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import RecipeScreen from './src/screens/RecipeScreen';
import FavScreen from './src/screens/FavScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    Recipe: AcctInfoScreen,
    Fav: GraphScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  );
};