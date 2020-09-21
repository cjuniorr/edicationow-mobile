import React from 'react'
import { createStackNavigator  } from 'react-navigation-stack'
import { createDrawerNavigator  } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import HomeController from '../Home/Controller/HomeController'
import DetailController from '../Detail/Controller/DetailController'
import SideMenuController from '../SideMenu/Controller/SideMenuController'
import LoginController from '../Login/Controller/LoginController'

const AppLogged = createDrawerNavigator({
    Places: createStackNavigator({
        Login: LoginController,
        Home: HomeController,
        Detail: DetailController
    })
},{
    initialRouteName: "Places",
    contentComponent: SideMenuController
})

const AppContainer = createAppContainer(AppLogged)

export default class MainNavigation extends React.Component {
    render = () => {
        return <AppContainer />
    }
}