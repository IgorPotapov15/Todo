function TodoItem({item, removeItem}) {
  return(
    <li
      key={item.id}
    >
      {item.value}
      <input type="checkbox" />
      <button
        onClick={() => removeItem(item.id)}
      >[X]</button>
    </li>
  )
}

export default TodoItem;