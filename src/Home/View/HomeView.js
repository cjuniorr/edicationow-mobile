import React from 'react'
import { View, Text } from 'react-native'
import styles from './HomeStyle'

const HomeView = () => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.textInfo }> "Eaeee world!"</Text>
        </View>
    )
}

export default HomeView
