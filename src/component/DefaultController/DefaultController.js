import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
import { Icon } from 'react-native-elements';
  export default class DefaultController extends React.Component {
    static navigationOptions = ({ navigation }) => {

        let navigationProps = null;
        navigationProps = {
            headerTintColor: '#000000', //Alterando as cores do botões
            headerStyle: {
                backgroundColor: '#f5ffff', //Alterando a cor de fundo
            },
        };

        //Se não receber o parametro showBackButton ou se ele for false,
        // mostra botão de menu para mostrar Sidebar
        if(!navigation.getParam("showBackButton", false)){
            let view = (
                <TouchableOpacity onPress={ () => navigation.toggleDrawer()}>
                <View style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10}}>
                    <Icon name="bars" type="font-awesome" color="#000"/>
                </View>
                </TouchableOpacity>
            );
            //Adicionando botão menu na lateral esquerda
            navigationProps = {... navigationProps, headerLeft : view};
        }
        //Retornando as opções
        return navigationProps;
    };
}