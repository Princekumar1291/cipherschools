import React, { useState } from 'react'
import AppName from './AppName';
import AddItem from './AddItem';
import Items from './Items';

function TodoScreen() {
  return (
    <div className='w-[80%] border flex items-center flex-col m-auto'>
      <AppName></AppName>
      <AddItem></AddItem>
      <Items></Items> 
    </div> 
  )
}

export default TodoScreen