import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homework from './Homework'
import { useState, Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = { show: 0 }
    this.showHandler = this.showHandler.bind(this)
  }
  showHandler = x => {
    this.setState({ show: x })
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to our iterative design portfolio.</h1>
          <br></br>
          <h2>Scroll down!</h2>
        </header>
        <Homework/>
      </div>
    )
  }
}

export default App
