import './App.css';
import Name from './Name';
import List from './List';
import Add from './Add';
import React, { useState } from 'react';

export default function App() {
  // Initialize state with a default item
  const initial = () => [
    { name: 'Collage', dueDate: '2020-07-22' }
  ];

  const [todoItems, setTodoItems] = useState(initial);

  const capitalizeFirstLetterOfEachWord = (text) => {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  };

  const onNewItem = (newItem, newDate) => {
    console.log(newDate);
    console.log(newItem);
    const capitalizedItem = capitalizeFirstLetterOfEachWord(newItem);
    const newTodoItem = [
      ...todoItems,
      { name: capitalizedItem, dueDate: newDate },
    ];
    setTodoItems(newTodoItem);
  };

  const onDeleteItem = (index) => {
    const updatedTodoItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedTodoItems);
  };

  return (
    <center>
      <Name />
      <br />
      <Add newItem={onNewItem} />
      <br />
      <List todoItems={todoItems} deleteItem={onDeleteItem} />
    </center>
  );
}
