import React from 'react'
import { useState } from 'react'
import Login from './components/Login/Login'
import Alert from './components/Alert/Alert'

const App = () => {
  const [message, setMessage] = useState({msge: '', bsStyle: ''})
  return (
    <div className='container'>
      <br/>
      <Login setMessage={setMessage}/>
      <br/>
      <Alert message={message}/>
    </div>
  )
}

export default App