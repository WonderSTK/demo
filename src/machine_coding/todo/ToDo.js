import React, { useState } from 'react'

const ToDo = () => {

    const [input, setInput] = useState(null)
    const [editIndex, setEditIndex] = useState(0)
    const [items, setItems] = useState([])
    const updateItem = () => {

    }

    const addItem = () => {

    }

  return (
    <div className='max-w-sm mx-auto mt-10 p-4 border rounded'>
        <h1 className='font-semibold text-lg mb-4'>Todo application</h1>
        <div className='flex gap-2 mb-10'>
            <input 
                value={input}
                onChange={setInput((e) => e.target.value)}
                placeholder='Add your Item'
                className='flex-1 px-4 border border-l-amber-900 rounded'
            />
            {editIndex !== 0 ? (
                    <button
                        onClick={updateItem}
                        className='px-3 py-1 bg-blue-500 text-white rounded'
                    >Update</button>
                ) : (
                        <button
                            onClick={addItem}
                            className='px-3 py-1 bg-green-500 text-white rounded'
                        >
                            Add
                        </button>
                )
            }
        </div>
        <ul className='space-y-2'>
            {items}
        </ul>
    </div>
  )
}

export default ToDo