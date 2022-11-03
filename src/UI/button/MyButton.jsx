import React from 'react'

function MyButton({children, ...props}) {
  return (
	<button {...props} className="px-4 py-1 rounded-lg  bg-blue-300 transition ease-in-out delay-150 hover:bg-blue-700 dark:bg-red-500 dark:hover:bg-red-800 text-white">
						{children}
					</button>
  )
}

export default MyButton