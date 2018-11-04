import React, { Component } from 'react'
import Input from './components/Input'
import Output from './components/Output'
import AppHeader from './components/AppHeader'
import './App.css'

class App extends Component {
render () {
    return(
        <div>
        <AppHeader />
          <div className="outer-wrapper">
              <div className="inner-container">
                <Input />
                <Output name1="Veronica" name2="Chris" amount1="3" amount2="2" noun="apples" verb="brings"/>
              </div>
          </div>
        </div>
    )
}
}

export default App;