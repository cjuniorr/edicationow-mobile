import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './LoginStyles'

const LoginView = () => {
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