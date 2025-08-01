import { motion } from "framer-motion";
import type { Item, User } from "../types";
import ImportantBadge from "./ImportantBadge";
import ColorBadge from "./ColorBadge";
import UserAction from "./UserAction";
import MoneyAction from "./MoneyAction";

export default function ListItem({
  item,
  user,
  onDelete,
  onCheck,
  onAdd,
}: {
  item: Item;
  user: User;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onAdd: (userId: string, color: string, itemId: string) => void;
}) {

  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      key={item.id}
      layout
      initial={{ opacity: 0, scale: 0.55 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, height: 0}}
      transition={{ duration: 0.15 }}
      onClick={() => onCheck(item.id)}
      onDoubleClick={() => onDelete(item.id)}
      className={`overflow-hidden px-4 py-3 m-2 flex items-center justify-between rounded-md ${
        item.checked ? " bg-teal-400 text-white" : "bg-gray-100/50"
      }`}
    >
      <div className="flex items-center gap-3 cursor-pointer">
        <span className={` ${item.checked ? "line-through" : ""}`}>{item.id}</span>
        {item.important && <ImportantBadge />}
        {user?.color && <ColorBadge color={user.color} />}
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <UserAction onAdd={onAdd} item={item} user={user} />
        <MoneyAction onDelete={onDelete} item={item} />
      </div>
    </motion.li>
  );
}
