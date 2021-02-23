import React from 'react'
import { StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

const RecipeSearchBar = ({ term, setTerm, searchByTerm }) => {
  return (
    <SearchBar
      lightTheme
      placeholder="Search Recipes..."
      onChangeText={setTerm}
      value={term}
      onEndEditing={() => searchByTerm(term)}
    />
  )
}

const styles = StyleSheet.create({});

export default RecipeSearchBar
