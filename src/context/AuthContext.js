import React from 'react'
import createDataContext from './createDataContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import recipeApi from '../api/recipe'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signin':
           return { token: action.payload, errorMessage: '' }; 
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = dispatch => async ({ email, password }) => {
    try {
        const reponse = await recipeApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Issue with sign up' })
    }
}

const signin = dispatch => async({ email, password }) => {

    try {
        const response = await recipeApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Issue with sign in!' })
    }

};

export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signup },
    { token: null, errorMessage: '' }
)