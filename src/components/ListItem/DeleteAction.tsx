import { XMarkIcon } from '@heroicons/react/24/outline';
import type { Item } from '../types';

function DeleteAction({
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
      className={`! text-red-400 ${item.checked && ""}`}
      title="Delete"
    >
      <XMarkIcon className="h-5 w-5 scale-125" />
    </button>
  );
}

export default DeleteAction;
