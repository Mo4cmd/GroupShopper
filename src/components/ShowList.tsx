import type React from "react";
import ListItem from "./ListItem";
import type { Item, User } from "./types";
import { AnimatePresence } from "framer-motion"; // ✅ import this

export default function ShowList({
  items,
  setItems,
  users,
  setUsers
}: {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  users : User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>

}) {
  const handleDelete = (removableItem: string) => {
    setItems(prevItems =>
      prevItems.filter(item => item.id !== removableItem)
    );
  };

  const handleCheck = (checkedItemId: string) => {
    setItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === checkedItemId
          ? { ...item, checked: !item.checked }
          : item
      );

      return updatedItems;
    });
  };

  const handleUser = (userName: string, color: string, itemId: string) => {
    let user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());
  
    if (!user) {
      user = {
        id: crypto.randomUUID(),
        name: userName,
        color,
      };
  
      setUsers(prev => [...prev, user]);
    }
  
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, userId: user!.id } : item
      )
    );
  };
  
  

  return (
    <div className="">
      <ul>
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              user={users.find(u => u.id === item.userId)}
              onDelete={handleDelete}
              onCheck={handleCheck}
              onAdd={handleUser}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
