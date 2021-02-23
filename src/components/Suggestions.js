import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import spoonacularApi from '../api/spoonacular'

const Suggestions = ({ suggestionSearch }) => {

    const suggested = [
        { type: 'Pasta' },
        { type: 'Mexican' },
        { type: 'Pizza' },
        { type: 'Chinese' },
        { type: 'Vegan' },
        { type: 'Desert' },
        { type: 'Burger' }
    ]

    return (
        <>
            <ScrollView style={{ marginVertical: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                {suggested && suggested.map((item, index) => (
                    <Button
                        key={index}
                        onPress={() => suggestionSearch(item.type)}
                        style={styles.spacing}
                        title={item.type} />
                ))}
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
