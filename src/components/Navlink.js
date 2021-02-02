import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

function Navlink({ navigation, linkText, routeName }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('mainFlow')}>
            <Text style={styles.link}>{linkText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
      color: 'blue'
    }
  });

export default withNavigation(Navlink);
