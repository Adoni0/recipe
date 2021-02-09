import axios from 'axios';

var apiKey = process.env.REACT_APP_API_KEY;

export const searchRecipe = term => axios.create({
    url: `https://api.spoonacular.com/recipes/${term}&apiKey=${apiKey}`
});

export const searchIngredients = id => axios.create({
    url: `https://api.spoonacular.com/recipes/${id}/information&apiKey=${apiKey}`
});

export const searchInstructions = id => axios.create({
    url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions&apiKey=${apiKey}`
});
