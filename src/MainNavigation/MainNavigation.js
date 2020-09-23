import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native'
import { Text, View, TextInput, Button } from 'react-native'
import LoginStyle from '../Login/View/LoginStyles'
import HomeStyle from '../Home/View/HomeStyle'

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
        <View style={{ alignItems: 'left', justifyContent: 'center', margin: 10, padding: 5 }}>
            <View style={ { padding: 8, background: '#afe5f0', borderRadius: 9, borderColor: '#46c8e3', marginBottom: 5}}>
                <Text style={{ paddingBottom: 10}}>Festival de dança</Text>
                <Text>Haverá um festival de dança e será necessário levar os sapatos para dança.</Text>
            </View>
            <View style={ { padding: 8, background: '#afe5f0', borderRadius: 9, borderColor: '#46c8e3'}}>
                <Text style={{ paddingBottom: 10,  borderRadius: 9, borderColor: '#46c8e3'}}>Prova</Text>
                <Text>Prova de matemática</Text>
            </View>
        </View>
    )
}

function HomeView( { navigation } ) {
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
                </View>
            </View>
            <View style={HomeStyle.boxContent, HomeStyle.boxBorder}>
                <View style={{ margin: 8}}>
                    <Text>Próxima Aula</Text>
                </View>
                <View style={{ margin: 8, flex: 2, flexDirection:"row"}}>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>Matéria</Text></View>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>Horário</Text></View>
                </View>
                <View style={{ margin: 8, flex: 2, flexDirection:"row"}}>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>Português</Text></View>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>08h00</Text></View>
                </View>
                <View style={{ margin: 8, flex: 2, flexDirection:"row"}}>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>Matemática</Text></View>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>11h00</Text></View>
                </View>
                <View style={{ margin: 8, flex: 2, flexDirection:"row"}}>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>Biologia</Text></View>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>13h00</Text></View>
                </View>
                <View style={{ margin: 8, flex: 2, flexDirection:"row"}}>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>Inglês</Text></View>
                    <View style={{flex: 2, flexDirection: "column"}}><Text>15h00</Text></View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center"}}>
                <Button title='Detalhes' onPress={() => navigation.navigate('Detail')} ></Button>
            </View>
        </View>
    )
}

const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" options={{ title: 'Login EducatioNow' }} component={ LoginView } />
                <Stack.Screen name="Home" options={{ title: 'Home' }} component={ HomeView } />
                <Stack.Screen name="Detail" options={{ title: 'Detalhes' }} component={ DetailView } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation