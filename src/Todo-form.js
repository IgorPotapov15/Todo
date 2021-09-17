import React, { useState } from 'react';

function TodoForm({ addItem }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(value);
    setValue('');
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input 
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="text"
      />
      
    </form>
  )
}

export default TodoForm;