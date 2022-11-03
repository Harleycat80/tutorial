import React from 'react'

function PostItem({number, post}) {
 
	
  return (
	<div className="flex w-5/6 justify-between p-5 border-2 border-gray-500 dark: border-white">
           
	<div className="post__content">
	   <h3 className="pb-1 dark:text-white">{number}. {post.title}</h3>
	  <p className="text-sm dark:text-white tracking-wider ">{post.body}</p>
	</div>
	  <div className="flex items-center">
	<button className='px-2 py-1 rounded-lg mx-1 bg-blue-400 hover:bg-blue-700  dark:bg-red-500 dark:hover:bg-red-800 text-white'>Удалить</button>
  </div>
  </div>
  )
}

export default PostItem