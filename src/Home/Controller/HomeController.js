import React from 'react'
import HomeView from '../View/HomeView'
import HomeModel from '../Model/HomeModel'

class HomeController extends React.Component {
    constructor() {
        super()
        let homeModel = new HomeModel()
        console.log(homeModel.returnText())
    }

    render = () => {
        return (
            <HomeView />   
        )
    } 
}

export default HomeController
