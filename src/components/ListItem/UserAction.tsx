import { UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import type { Item, User } from "../types";

function UserAction({
  onAdd,
  item,
  user,
}: {
  onAdd: (userName: string, color: string, ItemId: string) => void;
  item: Item;
  user?: User
}) {
  const [expanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation()

    if (inputValue.trim()) {
      onAdd(inputValue.trim(), generateRandomColor(), item.id);
      setInputValue("");
      setExpanded(false);
    }
  }

  function generateRandomColor() {
    const colors = ["red", "blue", "green", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  

  return (
      <div className="flex items-center gap-2">
        {!expanded ? (
          <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(true);
          }}
          className={`transition !bg-slate-200 flex items-center gap-4 px-2 py-1 rounded ${
            item.checked ? "!bg-transparent" : ""
          }`}
          >        
            <UserIcon className="w-5 h-5 scale-125" />
            {user && (
              <span>
                {user.name}
              </span>              
            )}
          </button>
        ) : (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <UserIcon className="w-5 h-5 scale-125" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add Name"
            className="rounded w-25 overflow-hidden focus:outline-none"
            autoFocus
            onBlur={() => setExpanded(false)}
            onClick={e => e.stopPropagation()}
          />
        </form>
        )}
      </div>
    );
  };



export default UserAction;