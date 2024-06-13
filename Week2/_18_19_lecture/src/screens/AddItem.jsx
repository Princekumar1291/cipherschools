import React from 'react'

function AddItem() {
  return (
    <div className="w-full flex flex-row justify-between border gap-x-4 gap-y-2">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add New Item" />
      <button className='text-2xl bg-green-600 p-2 rounded-lg text-white h-12'
        onClick={(e) => {
          console.log()
        }}
      >Add Task</button>
    </div>
  )
}

export default AddItem
