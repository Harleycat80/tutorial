import React, { useState } from 'react'

function Counter() {
	const [count, setCount]= useState(0)
	const increment =()=>{
		setCount(prev=>prev+1)
	}
	const decrement =()=>{
		setCount(prev=>prev-1)
	}
  return (
	<div>
	<h1 className="text-black text-center mb-5 dark:text-white">{count}</h1>
	<button className='bg-gray-600  text-white px-4 py-2 mr-4 rounded-md dark:bg-red-500' onClick={increment}>Increment</button>
    <button className='bg-gray-600  text-white px-4 py-2 rounded-md dark:bg-green-500'  onClick={decrement}>Decrement</button>
	</div>
  )
}

export default Counter