import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import styles from './LoginStyles'

const LoginView = (props) => {
    console.log('o props eh: ' + props)
    console.log('navigation eh:' + props.navigation)
    console.log(props.navigation)

    function Navega (){
        console.log(props.navigation)
        props.navigation.dispatch(
            NavigationActions.navigate({ routeName: 'Home' })
        )
        // props.navigation.navigate('Home')

    }

    return (

 
        <View style={styles.main}>
            <View style={styles.container}>
                <TextInput styles={styles.input} placeholder={"Adicione o login"} type="email"></TextInput>
                <TextInput styles={styles.input} placeholder={"Adicione a senha"} secureTextEntry></TextInput>
                {/* <TouchableOpacity style={styles.btn}>
                    <Text>TESTE</Text>
                </TouchableOpacity> */}

                {/* <Button title='Login' onPress={() => console.log('clicou')}> */}
                <Button title='Login' onPress={() => Navega()}>
                    <Text>Teste111</Text>
                </Button>
            </View>
        </View>
    )
}

export default LoginView