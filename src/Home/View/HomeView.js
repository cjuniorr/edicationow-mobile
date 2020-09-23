import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './HomeStyle'
import { NavigationContainer  } from '@react-navigation/native'

const HomeView = ({ navigation }) => {
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
            <View>
                <Button title='Detalhes' onPress={() => navigation.navigate('Login')} ></Button>
            </View>
        </View>
    )
}

export default HomeView
