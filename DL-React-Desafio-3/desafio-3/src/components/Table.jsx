import React from 'react';
import { useState } from 'react';
import TableRow from './TableRow';

const Table = ({users, keyword}) => {
  
  let result = [];
  if (!keyword) {
    result = users;
  }
  else {
    result = users.filter(
    (user) => user.name.toLowerCase().includes(keyword.toLowerCase()) || user.email.toLowerCase().includes(keyword.toLowerCase())
    );
  }
      
  return (
    <div className='container'>
      <br/>
      <h3 className='alert alert-info text-dark'>Colaboradores</h3>
      <table className='table table-dark table-striped table-hover table-borderless'>
        <thead className='text-info'>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
            </tr>
        </thead>
        <tbody>
          {result.length > 0 ? (
            result.map((user) => <TableRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td className=' text-white'>No hay resultados</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

export default Table
