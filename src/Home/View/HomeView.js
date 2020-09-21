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
        // <View style={styles.boxContent}>
        //     <View style={styles.box1}></View>
        //     <View style={styles.box2}></View>
        //     <View style={styles.box3}></View>
        //     <View style={styles.box1}></View>
        //     <View style={styles.box2}></View>
        //     <View style={styles.box3}></View>
        //     <View style={styles.box1}></View>
        //     <View style={styles.box2}></View>
        //     <View style={styles.box3}></View>
        // </View>

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
