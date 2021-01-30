import axios from 'axios';

export const searchRecipe = axios.create({
    url: 'https://api.spoonacular.com/recipes'
});

export const searchIngredients = (id) => axios.create({
    url: `https://api.spoonacular.com/recipes/${id}/information`
});

export const searchInstructions = id => axios.create({
    url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`
})
