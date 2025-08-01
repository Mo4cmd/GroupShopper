import { useState } from 'react';
import type { Item } from "./types";
import ImportantCheck from './ImportantCheck';

function AddField({
  items,
  setItems,
}: {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}) {
  const [inputValue, setInputValue] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      const newItem: Item = { id: inputValue.trim(), checked: false, important: isImportant, };
      setItems([...items, newItem]);
      setInputValue('');
      setIsImportant(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter item"
      />
      <ImportantCheck isImportant={isImportant} toggleImportant={() => setIsImportant(!isImportant)}/>
      <button type="submit">Submit</button>
    </form>
  );
}


export default AddField;