import React from 'react';
import { useState } from 'react';
import { getId } from '../helpers/getId';

const Form = ({users, setUsers}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault();

    if([name, email].includes('')){
        setError(true)
        return
        }

    setError(false)

    const userObject = {
        id: getId(),
        name,
        email,
    }

    setUsers([...users, userObject])    
    setName('')
    setEmail('')

    };

  return (
    <div className='container'>
        <h3 className='alert alert-info text-dark'>Agregar Colaboradores</h3>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre del Colaborador</label>
                        <input type="text" className="form-control" id="name" placeholder='Ingrese Nombre y Apellido' value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder='Ingrese correo electrónico' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-info text-white">Agregar</button>
                </form>
            </div>
        <br/>
        {error && <h6 className='alert alert-warning text-dark text-center'>Todos los campos son obligatorios  </h6>}
    </div>
  )
}

export default Form;