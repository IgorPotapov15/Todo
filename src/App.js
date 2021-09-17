import React, { useState, useEffect } from 'react';
import TodoForm from './Todo-form';
import TodoItem from './Todo-item';
import { v4 as uuidv4 } from 'uuid';
let tempArray = [];

function App() {
  const [items, setItems] = useState([]);
  const [doneCounter, setDoneCounter] = useState(0);
  const [undoneCounter, setUndoneCounter] = useState(0);

  useEffect(() => {
    let doneArray = items.filter((item) => item.done === true)
    let undoneArray = items.filter((item) => item.done === false)
    setDoneCounter(doneArray.length)
    setUndoneCounter(undoneArray.length)
    console.log(doneCounter, undoneCounter)
  }, [items])

  const addItem = (value) => {
    if (value) {
      const newItem = {
        id: uuidv4(),
        value: value,
        done: false
      }
      tempArray.push(newItem);
      setItems([...tempArray])
    }
  }

  const checkItem = (id) => {
    const arrAfterCheck = items.map((item) => item.id === id ? {...item, done: !item.done} : {...item})
    tempArray = [...arrAfterCheck]
    setItems([...arrAfterCheck])
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
      Done: {doneCounter}<br/>
      Undone: {undoneCounter}
      <ul>
        {items.map((item) => (
          <TodoItem
            item={item}
            removeItem={removeItem} 
            checkItem={checkItem}         
          />
        ))}
      </ul>
    </main>
  );
}

export default App;