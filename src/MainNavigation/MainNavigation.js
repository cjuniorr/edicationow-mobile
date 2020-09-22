import React from 'react'
import { createStackNavigator  } from 'react-navigation-stack'
import { createDrawerNavigator  } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import HomeController from '../Home/Controller/HomeController'
import DetailController from '../Detail/Controller/DetailController'
import SideMenuController from '../SideMenu/Controller/SideMenuController'
import LoginController from '../Login/Controller/LoginController'

const AppLogged = createStackNavigator({
    Login: {
        screen: LoginController
    },
    Home: {
        screen: HomeController
    }
},{
    initialRouteName: 'Login'
})

const AppContainer = createAppContainer(AppLogged)

const MainNavigation = () => {
    let navigator = null

    return (
        <AppContainer ref={ (nav) => { navigator = nav } }/>
    )
}

export default MainNavigation