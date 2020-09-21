import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
// import LoginView from '/'


export default class LoginController extends React.Component{

    render () {
        return (
            <View style={styles.main}>
                <View style={styles.container}>
                    <TextInput styles={styles.input} placeholder={"Adicione o login"} type="email"></TextInput>
                    <TextInput styles={styles.input} placeholder={"Adicione a senha"} secureTextEntry></TextInput>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    main: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 35
    }
})