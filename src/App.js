import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homework1 from './Homework1'
import Homework2 from './Homework2'
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
          <h1>Welcome to my portfolio.</h1>
          <br></br>
          <h2>Choose an assignment.</h2>
          <Button
            style={{ marginBottom: '1vw', marginTop: '2vw' }}
            onClick={() => this.showHandler(1)}
          >
            Personas & Storyboarding
          </Button>
          <Button
            style={{ marginBottom: '1vw' }}
            onClick={() => this.showHandler(2)}
          >
            Responsive Redesign
          </Button>
          <Button
            variant='secondary'
            style={{ marginBottom: '3vw' }}
            onClick={() => this.showHandler(0)}
          >
            Reset
          </Button>
          {this.state.show != 0 && <h4>scroll down!</h4>}
        </header>
        {this.state.show == 1 && <Homework1 />}
        {this.state.show == 2 && <Homework2 />}
      </div>
    )
  }
}

export default App
