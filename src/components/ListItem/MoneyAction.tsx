import { BanknotesIcon } from '@heroicons/react/24/outline';
import type { Item } from "../types";

export default function MoneyAction({
  onDelete,
  item,
}: {
  onDelete: (id: string) => void;
  item: Item;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDelete(item.id);
      }}
      className={`transition !bg-slate-200 ${item.checked ? '!bg-transparent' : ''}`}
      title="Money Action"
    >
      <BanknotesIcon className="h-5 w-5 scale-125" />
    </button>
  );
}
