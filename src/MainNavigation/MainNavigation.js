import React from 'react'
import { createStackNavigator  } from 'react-navigation-stack'
import { createDrawerNavigator  } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import HomeController from '../Home/Controller/HomeController'
import DetailController from '../Detail/Controller/DetailController'

const AppLogged = createDrawerNavigator({
    Places: createStackNavigator({
        Home: HomeController,
        Detail: DetailController
    })
})

const AppContainer = createAppContainer(AppLogged)

export default class MainNavigation extends React.Component {
    render = () => {
        return <AppContainer />
    }
}