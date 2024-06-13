import React from 'react'

function Item({todoDate,todoName}) {
  return (
    <div className="w-full flex flex-row justify-between border gap-x-4 items-center">
      <div>
        {todoName}
      </div>
      <div>
        {todoDate}
      </div>
      <div>
        <button className='text-2xl bg-red-600 p-2 rounded-lg text-white h-12 '>Delete</button>
      </div>
    </div>
  )
}

export default Item
