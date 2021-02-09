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
import { setNavigator } from './src/navigationRef';
import AttemptSignin from './src/screens/AttemptSignin';

const switchNavigator = createSwitchNavigator({
  AttemptSignin: AttemptSignin,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    Recipe: RecipeScreen,
    Fav: FavScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <RecipeProvider>
      <AuthProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </RecipeProvider>
  );
};