import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import spoonacularApi from '../api/spoonacular'

const Suggestions = () => {

    const suggestionSearch = (suggestion) => {
        spoonacularApi.searchRecipe(suggestion)
        .then(res => console.log(res))
    }

    return (
        <>
            <ScrollView style={{ marginVertical: 20 }} horizontal>
                <Button onPress={() => suggestionSearch('pasta')} style={styles.spacing} title="Pasta" />
                <Button style={styles.spacing} title="Mexican" />
                <Button style={styles.spacing} title="Pizza" />
                <Button style={styles.spacing} title="Asian" />
                <Button style={styles.spacing} title="Vegan" />
                <Button style={styles.spacing} title="Desert" />
                <Button style={styles.spacing} title="Burger" />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    spacing: {
        marginHorizontal: 5
    }
});

export default Suggestions
