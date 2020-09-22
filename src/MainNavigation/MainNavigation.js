import React from 'react'
// import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator  } from '@react-navigation/drawer'
import { NavigationContainer  } from '@react-navigation/native'
import { Text, View, TextInput, Button } from 'react-native'
import LoginStyle from '../Login/View/LoginStyles'
import HomeStyle from '../Home/View/HomeStyle'

import HomeController from '../Home/Controller/HomeController'
import DetailController from '../Detail/Controller/DetailController'
import SideMenuController from '../SideMenu/Controller/SideMenuController'
import LoginController from '../Login/Controller/LoginController'
import { Navigation } from 'react-native-navigation';


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

function HomeView(){
    return (
        <View>
            <View style={HomeStyle.boxContent, HomeStyle.boxBorder}>
                <View style={HomeStyle.container}>
                    <View style={HomeStyle.boxContent}>
                        <Text style={HomeStyle.boxAvatar}>Avatar</Text>
                    </View>
                    <View style={HomeStyle.boxContent}>
                        <View style={HomeStyle.container}>
                            <Text style={HomeStyle.boxName}>Luis Alberto Souza</Text>
                        </View>
                        <View style={HomeStyle.container}>
                            <Text style={HomeStyle.boxSchool}>E.M.E.F. Machado de Assis</Text>
                        </View>
                    </View>
                </View>
                <View style={HomeStyle.boxContent, HomeStyle.boxBorder}>
                    <View style={HomeStyle.container}>
                        <Text>Notificações</Text>
                    </View>
                    <View style={HomeStyle.container}>
                        <Text>Notificações</Text>
                    </View>
                </View>
            </View>
            <View style={HomeStyle.boxContent, HomeStyle.boxBorder}>
                <View style={HomeStyle.container}>
                    <View style={HomeStyle.boxContent}>
                        <Text style={HomeStyle.boxAvatar}>Avatar</Text>
                    </View>
                    <View style={HomeStyle.boxContent}>
                        <View style={HomeStyle.container}>
                            <Text style={HomeStyle.boxName}>Luis Alberto Souza</Text>
                        </View>
                        <View style={HomeStyle.container}>
                            <Text style={HomeStyle.boxSchool}>E.M.E.F. Machado de Assis</Text>
                        </View>
                    </View>
                </View>
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
                <Stack.Screen name="Home" component={HomeView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation