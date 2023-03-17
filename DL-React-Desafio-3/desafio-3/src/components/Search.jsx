import React from 'react';
import { useState } from 'react';

const Search = ({keyword, setKeyword}) => {

  return (
    <div className='container'>
        <div className="container alert alert-info">
            <h3 className='text-dark'>Busqueda de Colaboradores</h3>
            <input className="form-control" type="text" placeholder="Ingrese nombre, apellido o correo elctrónico" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </div>
    </div>
  );
};

export default Search