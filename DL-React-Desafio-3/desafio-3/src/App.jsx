import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Search from './components/Search';
import Table from './components/Table';
import { Colaboradores } from './data-base';

function App() {
  const [users, setUsers] = useState(Colaboradores)
  const [keyword, setKeyword] = useState('')

  return (
    <div className='container'>
      <br/>
      <Form users={users} setUsers={setUsers}/>
      <Search users={users} setUsers={setUsers} keyword={keyword} setKeyword={setKeyword}/>
      <Table users={users} keyword={keyword}/>
    </div>
  );
}

export default App;
