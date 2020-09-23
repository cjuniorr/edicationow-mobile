import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native'
import { Text, View, TextInput, Button } from 'react-native'
import LoginStyle from '../Login/View/LoginStyles'

import HomeController from '../Home/Controller/HomeController'

function LoginView({ navigation }){
        return (
        <View style={LoginStyle.main}>
            <View style={LoginStyle.container}>
                <TextInput styles={LoginStyle.input} placeholder={"Adicione o login"} type="email"></TextInput>
                <TextInput styles={LoginStyle.input} placeholder={"Adicione a senha"} secureTextEntry></TextInput>
                <Button title='Login' onPress={() => navigation.navigate('Home')}>
                    <Text>Teste111</Text>
                </Button>
            </View>
        </View>
    )
}

function DetailView({ navigation }){
    return (
        <View style={LoginStyle.main}>
            <Text>TESTE DETALHE</Text>
            <View style={LoginStyle.container}>
                <TextInput styles={LoginStyle.input} placeholder={"Adicione o login"} type="email"></TextInput>
                <TextInput styles={LoginStyle.input} placeholder={"Adicione a senha"} secureTextEntry></TextInput>
                <Button title='Login' onPress={() => navigation.navigate('Home')}>
                    <Text>Teste111</Text>
                </Button>
            </View>
        </View>
    )
}


const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginView} />
                <Stack.Screen name="Home" component={HomeController} />
                <Stack.Screen name="Detail" component={DetailView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation