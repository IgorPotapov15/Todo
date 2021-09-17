import React, { useState, useEffect } from 'react';
import TodoForm from './Todo-form';
import TodoItem from './Todo-item';
import TodoFilter from './Todo-filter';
import { v4 as uuidv4 } from 'uuid';
let mainArray = [];

function App() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [doneCounter, setDoneCounter] = useState(0);
  const [undoneCounter, setUndoneCounter] = useState(0);

  useEffect(() => {
    renewCounters();
  }, [items])

  useEffect(() => {
    if (localStorage.getItem('todo')) {
      mainArray = JSON.parse(localStorage.getItem("todo"));
      setItems([...mainArray])
      setFiltered([...mainArray])
    }
  }, [])

  const renewLocalStorage = () => {
    localStorage.setItem('todo', JSON.stringify(mainArray))
  }

  const renewCounters = () => {
    let doneArray = mainArray.filter((item) => item.done === true)
    let undoneArray = mainArray.filter((item) => item.done === false)
    setDoneCounter(doneArray.length)
    setUndoneCounter(undoneArray.length)
  }

  const addItem = (value) => {
    if (value) {
      const newItem = {
        id: uuidv4(),
        value: value,
        done: false
      }
      mainArray.push(newItem);
      setItems([...mainArray]);
    }
    renewLocalStorage()
  }

  const checkItem = (id) => {
    const arrAfterCheck = mainArray.map((item) => item.id === id ? {...item, done: !item.done} : {...item})
    mainArray = [...arrAfterCheck]
    setItems([...arrAfterCheck])
    renewLocalStorage()
  }

  const removeItem = (id) => {
    const arrAfterRemove = mainArray.filter((item) => item.id !== id);
    mainArray = [...arrAfterRemove]
    setItems([...arrAfterRemove])
    renewLocalStorage()
  }

  const filterItems = (status) => {
    let filteredArray;
    switch (status) {
      case 'all':
        setItems(mainArray);
        break;
      case 'done':
        filteredArray = mainArray.filter((item) => item.done === true)
        setItems([...filteredArray]);
        break;
      case 'undone':
        filteredArray = mainArray.filter((item) => item.done === false)
        setItems([...filteredArray])
        break;
    }
  }

  return (
    <main>
      <TodoForm
        addItem={addItem}
      />
      Done: {doneCounter}<br/>
      Undone: {undoneCounter}
      <TodoFilter
        filterItems={filterItems}
      />
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