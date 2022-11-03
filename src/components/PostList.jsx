import React from 'react'
import PostItem from './PostItem'

function PostList({posts, title}) {
	
  return (
	<>
	<h1 className="text-center text-xl font-bold tracking-wide dark:text-white">{title}</h1>
		  {
	  posts.map((item, index) =>
		<PostItem number={index+1} post={item} key={item.id}/>
	  )
	}
	</>
  )
}

export default PostList