import React from 'react'
import LoginView from '../View/LoginView'

export default class LoginController extends React.Component{

    render() {
        console.log('sssssssssss')
        console.log(this.props)
        return (
            <LoginView navigation={ this.props }/>
        )
    }
}