function TodoItem({item, removeItem, checkItem}) {
  return(
    <li
      key={item.id}
    >
      {item.value}
      <input 
        onClick={() => checkItem(item.id)}
        defaultChecked={item.done}
        type="checkbox"
      />
      <button
        onClick={() => removeItem(item.id)}
      >[X]</button>
    </li>
  )
}

export default TodoItem;