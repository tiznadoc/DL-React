import React from 'react';
import TableRow from './TableRow';

const Table = ({users}) => {
  return (
    <div>
        <br/>
        <h3 className='alert alert-info text-dark'>Lista de Colaboradores</h3>
        <table className='table table-dark table-striped table-hover table-borderless'>
        <thead className='text-info'>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => <TableRow user={user}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default Table
