import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './LoginStyles'

const LoginView = (props) => {
    console.log('o props eh: ' + props)
    console.log('navigation eh:' + props.navigation)
    console.log(props.navigation)

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <TextInput styles={styles.input} placeholder={"Adicione o login"} type="email"></TextInput>
                <TextInput styles={styles.input} placeholder={"Adicione a senha"} secureTextEntry></TextInput>
                
                <View style={{ flex: 3, alignItems: "center", justifyContent:"center"}}>
                    <Button title='Login' onPress={() => Navega()}>
                        <Text>Teste111</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default LoginView