import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import RecipeScreen from './src/screens/RecipeScreen';
import FavScreen from './src/screens/FavScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as RecipeProvider } from './src/context/RecipeContext';

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
    <AuthProvider>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </AuthProvider>
  );
};