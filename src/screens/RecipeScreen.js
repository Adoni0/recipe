import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import RecipeSearchBar from '../components/RecipeSearchBar'
import Suggestions from '../components/Suggestions'
import RecipeCarousel from '../components/RecipeCarousel'
import { FontAwesome } from '@expo/vector-icons';

const RecipeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View style={styles.recipe}>
            <RecipeSearchBar
                term={searchTerm}
                setTerm={setSearchTerm}
            />
            <Suggestions />

            <View style={{ marginVertical: 20 }}>
                <RecipeCarousel />
            </View>
            <FontAwesome name="filter" size={24} color="black" />
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
