import React from 'react'
import { View, Text } from 'react-native'
import styles from './HomeStyle'

const HomeView = () => {
    // return (
    //     <View style = { styles.container }>
    //         <Text style = { styles.textInfo }> "Eaeee world!"</Text>
    //     </View>
    // )

    return (
        <View style={styles.boxContent}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

export default HomeView
