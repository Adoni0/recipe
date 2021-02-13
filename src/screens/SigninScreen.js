import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import { Context } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import Navlink from '../components/Navlink'

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                authText="Sign In For Delicious Recipes"
                submitButtonText="Sign In"
                submit={signin}
                errorMessage={state.errorMessage}
            />
            <Navlink
                linkText="Don't have an account? Sign up here!"
                routeName="Signup"
            />
        </View>
    )
};

SigninScreen.navigationOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({});

export default SigninScreen
