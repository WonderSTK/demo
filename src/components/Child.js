import React, { useState } from "react";

const Child = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const hadleChange = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input]);
    setInput("");
  };

  const updateItem = () => {
    if (!input.trim()) return;

    const updated = [...items];
    updated[editIndex] = input;
    setItems(updated);
    setInput("");
  };

  const editItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 boorder rounded">
      <h1 className="text-lg font-semibold mb-4">CRUD App</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={hadleChange}
          placeholder="Enter item"
          className="flex-1 px-4 py-2 border border-l-amber-900 rounded"
        />

        {editIndex !== null ? (
          <button
            onClick={updateItem}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addItem}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Add
          </button>
        )}
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border px-3 py-1 rounded"
          >
            <span>{item}</span>
            <div className="flex gap-2">
              <button onClick={() => editItem(index)} className="text-sm text-blue-600">
                Edit
              </button>
              <button onClick={() => deleteItem(index)} className="text-sm text-green-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
