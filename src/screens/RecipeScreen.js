import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import RecipeSearchBar from '../components/RecipeSearchBar'
import Suggestions from '../components/Suggestions'
import RecipeCarousel from '../components/RecipeCarousel'
import { FontAwesome } from '@expo/vector-icons';
import spoonacularApi from '../api/spoonacular'
import { Context as RecipeContext } from '../context/RecipeContext'

const RecipeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // const [recipes, setRecipes] = useState([]);
    const { addFavorite } = useContext(RecipeContext);

    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);

    useEffect(() => {
        spoonacularApi.randomRecipes()
            .then(res => {
                const allRecipes = res.data.recipes;
                // console.log(allRecipes[0].image)
                var half = allRecipes.length / 2;
                var firstRow = allRecipes.filter(recipe => allRecipes.indexOf(recipe) <= (half - 1));
                var secondRow = allRecipes.filter(recipe => allRecipes.indexOf(recipe) > (half - 1));
                setRow1(firstRow);
                setRow2(secondRow);
            })
            .catch(err => console.log(err))
    }, [])

    const suggestionSearch = (suggestion) => {
        spoonacularApi.searchRecipe(suggestion)
            .then(res => {
                const allRecipes = res.data.results;
                var half = allRecipes.length / 2;
                var firstRow = allRecipes.filter(recipe => allRecipes.indexOf(recipe) <= (half - 1));
                var secondRow = allRecipes.filter(recipe => allRecipes.indexOf(recipe) > (half - 1));
                setRow1(firstRow);
                setRow2(secondRow);
            })
            .catch(err => console.log(err))
    }

    const searchByTerm = () => {
        spoonacularApi.searchRecipe(searchTerm)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.recipe}>
            <RecipeSearchBar
                term={searchTerm}
                setTerm={setSearchTerm}
            />
            <Suggestions suggestionSearch={suggestionSearch} />

            <View style={styles.carouselContainer}>
                <RecipeCarousel
                    addFav={addFavorite}
                    recipes={row1} />
                <RecipeCarousel
                    addFav={addFavorite}
                    recipes={row2} />
            </View>
            <Button
                icon={
                    <FontAwesome style={styles.filter} name="filter" size={24} color="black" />
                }
                title="Filter"
                type="outline"
                buttonStyle={{ width: 100, marginHorizontal: 150, marginVertical: 40 }}
            />
        </View>
    )
}

RecipeScreen.navigationOptions = {
    title: 'Recipes'
}

const styles = StyleSheet.create({
    recipe: {
        marginVertical: 60,
        backgroundColor: 'rgb(242,242,242)',
        paddingBottom: 55
    },
    filter: {
        paddingRight: 5,
    },
    carouselContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    }
});

export default RecipeScreen
