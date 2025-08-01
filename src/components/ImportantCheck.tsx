function ImportantCheck ({isImportant, toggleImportant} : { isImportant : boolean; toggleImportant : () => void; }) {

  return (
    <button type='button' onClick={toggleImportant} className={`h-10 w-10 transition p-1  ${isImportant ? '!bg-orange-300 text-white border !important' : 'bg-gray-100 text-gray-500'} `}>
      <div className='h-full w-full flex items-center justify-center'>!</div>
    </button>
  );
}

export default ImportantCheck;
