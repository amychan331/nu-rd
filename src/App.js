import React, { Component } from 'react'
import Input from './components/Input'
import AppHeader from './components/AppHeader'
import './App.css'

class App extends Component {
render () {
    return(
        <div>
        <AppHeader />
        <Input />
        </div>
    )
}
}

export default App;