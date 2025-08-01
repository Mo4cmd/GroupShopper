import AddField from './components/AddField';
import ShowList from './components/ShowList';
import { useState } from 'react';
import './App.css'
import type { Item, User } from './components/types'

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [users, setUsers] = useState<User[]>([])

  return (
    <div className='min-h-screen p-4 grid grid-rows-[auto_1fr] gap-2 '>
      <AddField items={items} setItems={setItems}>
      </AddField>
      <ShowList items={items} setItems={setItems} users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
