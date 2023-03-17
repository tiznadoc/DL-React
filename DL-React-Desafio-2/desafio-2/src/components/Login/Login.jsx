import React, { useCallback } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submit = (e) => {
    e.preventDefault()
    if(email.trim() === 'victor@desafio.2' && password.trim() === 'perfect10'){
      console.log('welcome {setEmail}')
    }
    else{
      console.log('try again')
    }
  }
  return (
      <div className='container'>
        <h1>Desafio - Eventos & Componentes</h1>
        <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="info" type="submit" disabled={!email.trim() ||!password.trim()}>
                Submit
            </Button>
        </Form>
      </div>
  )
}

export default Login