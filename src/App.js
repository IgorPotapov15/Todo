import React, { useState, useEffect } from 'react';
import TodoForm from './Todo-form';
import TodoItem from './Todo-item';
import { v4 as uuidv4 } from 'uuid';
let tempArray = [];

function App() {
  const [items, setItems] = useState([]);

  const addItem = (value) => {
    if (value) {
      const newItem = {
        id: uuidv4(),
        value: value,
        done: false
      }
      tempArray.push(newItem);
      setItems([...tempArray])
      console.log(items)
    }
  }

  const removeItem = (id) => {
    const arrAfterRemove = items.filter((item) => item.id !== id);
    tempArray = [...arrAfterRemove]
    setItems([...arrAfterRemove])
  }

  return (
    <main>
      <TodoForm
        addItem={addItem}
      />
      <ul>
        {items.map((item) => (
          <TodoItem
            item={item}
            removeItem={removeItem}          
          />
        ))}
      </ul>
    </main>
  );
}

export default App;