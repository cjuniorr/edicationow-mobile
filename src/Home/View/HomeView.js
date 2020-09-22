import React from 'react'
import { View, Text } from 'react-native'
import styles from './HomeStyle'

const HomeView = () => {
    return (
        <View>
            <View style={styles.boxContent, styles.boxBorder}>
                <View style={styles.container}>
                    <View style={styles.boxContent}>
                        <Text style={styles.boxAvatar}>Avatar</Text>
                    </View>
                    <View style={styles.boxContent}>
                        <View style={styles.container}>
                            <Text style={styles.boxName}>Luis Alberto Souza</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.boxSchool}>E.M.E.F. Machado de Assis</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxContent, styles.boxBorder}>
                    <View style={styles.container}>
                        <Text>Notificações</Text>
                    </View>
                    <View style={styles.container}>
                        <Text>Notificações</Text>
                    </View>
                </View>
            </View>
            <View style={styles.boxContent, styles.boxBorder}>
                <View style={styles.container}>
                    <View style={styles.boxContent}>
                        <Text style={styles.boxAvatar}>Avatar</Text>
                    </View>
                    <View style={styles.boxContent}>
                        <View style={styles.container}>
                            <Text style={styles.boxName}>Luis Alberto Souza</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.boxSchool}>E.M.E.F. Machado de Assis</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default HomeView
