import React, { useReducer } from 'react'
import createDataContext from './createDataContext'
import recipeApi from '../api/recipe'

const recipeReducer = (state, action) => {
    switch(action.type){
        case 'add_favorite':
            return { ...state, favs: [action.payload] }
        default:
            return state;
    }
};

const addFavorite = dispatch => async({ recipe }) => {
    try { //need to also post to server and database
        dispatch({ type: 'add_favorite', payload: recipe })
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Could not add to favorites' })
    }
};

const getFavorites = dispatch => async() => {};

const getList = dispatch => async() => {};

const addToList = dispatch => async() => {

};

export const { Context, Provoider } = createDataContext(
    recipeReducer,
    { addFavorite, addToList },
    { favs: [], list: [] }
);