import React from 'react'
import HomeView from '../View/HomeView'
import HomeModel from '../Model/HomeModel'
import DefaultController from '../../component/DefaultController/DefaultController'

class HomeController extends DefaultController {
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
