import React from 'react'
import HomeView from '../View/DetailView'
import DefaultController from '../../component/DefaultController/DefaultController'

export default class DetailController extends DefaultController {
    render = () => {
        return <DetailView />
    }
}