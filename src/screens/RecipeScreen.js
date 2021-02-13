import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import RecipeSearchBar from '../components/RecipeSearchBar'
import Suggestions from '../components/Suggestions'
// import RecipeCarousel from '../components/RecipeCarousel'

const RecipeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View style={styles.recipe}>
            <RecipeSearchBar 
            term={searchTerm}
            setTerm={setSearchTerm}
            />
            <Suggestions />
        </View>
    )
}

RecipeScreen.navigationOptions = {
    title: 'Recipes'
}

const styles = StyleSheet.create({
    recipe: {
        marginVertical: 60
    }
});

export default RecipeScreen
