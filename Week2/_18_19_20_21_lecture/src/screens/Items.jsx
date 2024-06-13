import React from 'react'
import Item from './Item'

function Items() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";
  return (
    <div className="w-full flex flex-col justify-between border gap-x-2 gap-y-2 mt-8">
      <Item todoDate={todoDate} todoName={todoName}></Item>
      <Item todoDate={todoDate} todoName={todoName}></Item>
      <Item todoDate={todoDate} todoName={todoName}></Item>
      <Item todoDate={todoDate} todoName={todoName}></Item>
    </div>
  )
}

export default Items
