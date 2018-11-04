import React, { Component } from 'react'
// import Input from './components/Input'
import Output from './components/Output'
import AppHeader from './components/AppHeader'
import './App.css'

class App extends Component {
render () {
    return(
        <div>
        <AppHeader />
        {/* <Input /> */}
        <Output />
        </div>
    )
}
}

export default App;