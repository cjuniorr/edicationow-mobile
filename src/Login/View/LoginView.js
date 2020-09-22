import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import styles from './LoginStyles'

const LoginView = () => {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <TextInput styles={styles.input} placeholder={"Adicione o login"} type="email"></TextInput>
                <TextInput styles={styles.input} placeholder={"Adicione a senha"} secureTextEntry></TextInput>
                {/* <TouchableOpacity style={styles.btn}>
                    <Text>TESTE</Text>
                </TouchableOpacity> */}

                <Button>
                    <Text>Teste111</Text>
                </Button>
            </View>
        </View>
    )
}

export default LoginView