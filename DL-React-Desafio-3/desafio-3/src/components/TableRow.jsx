import React from 'react'

const TableRow = ({user}) => {
  return (           
        <tr>
            <td>{user.nombre}</td>
            <td>{user.correo}</td>
        </tr>
  )
}

export default TableRow;