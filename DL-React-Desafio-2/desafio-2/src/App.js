import React from 'react'
import Login from './components/Login/Login'
import Alert from './components/Alert/Alert'
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <div className='container'>
      <br/>
      <Login />
      <br/>
      <Alert />
    </div>
  )
}

export default App