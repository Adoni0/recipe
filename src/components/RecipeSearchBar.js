import React from 'react'
import { StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

const RecipeSearchBar = ({ term, setTerm }) => {
    return (
        <SearchBar
        placeholder="Search Recipes..."
        onChangeText={setTerm}
        value={term}
      />
    )
}

const styles = StyleSheet.create({});

export default RecipeSearchBar
