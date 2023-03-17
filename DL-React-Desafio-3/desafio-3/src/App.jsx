import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import { Colaboradores } from './data-base';

function App() {
  const [users, setUsers] = useState(Colaboradores)
  return (
    <div className='container'>
      <Table users={users}/>
    </div>
  )
}

export default App
