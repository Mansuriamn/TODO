import React from 'react';

export default function List({ todoItems, deleteItem }) {
  return (
    <div className="container text-center">
      {todoItems.map((item, index) => (
        <div className="row" key={index}>
          <div className="col-6">
            {item.name}
          </div>
          <div className="col-4">
            {item.dueDate}
          </div>
          <div className="col-2">
            <button type="button" onClick={() => deleteItem(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
