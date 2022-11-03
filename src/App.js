import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "Какой-то текст",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem veniam dicta corporis ut at pariatur libero, nisi magni laboriosam corrupti sunt illo. Optio voluptatibus, sunt facilis dignissimos perferendis officia.",
		},
		{
			id: 2,
			title: "Какой-то текст",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem veniam dicta corporis ut at pariatur libero, nisi magni laboriosam corrupti sunt illo. Optio voluptatibus, sunt facilis dignissimos perferendis officia.",
		},
		{
			id: 3,
			title: "Какой-то текст",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem veniam dicta corporis ut at pariatur libero, nisi magni laboriosam corrupti sunt illo. Optio voluptatibus, sunt facilis dignissimos perferendis officia.",
		},
		{
			id: 4,
			title: "Какой-то текст",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem veniam dicta corporis ut at pariatur libero, nisi magni laboriosam corrupti sunt illo. Optio voluptatibus, sunt facilis dignissimos perferendis officia.",
		},
	]);

  const inputFocus = useRef()
  useEffect(()=>{
    inputFocus.current.focus()
  }, [inputFocus])

  const [post, setPost]=useState({title:'', body:''})
  
 
  const addPost=()=>{
      setPost({title:'', body:''})
      setPosts([...posts, {...post, id:Date.now()}])
      
      inputFocus.current.focus()
      
  }
	return (
		<>
			<div className="container flex pt-5 flex-col  gap-5 items-center mx-auto h-screen bg-white dark:bg-slate-700">
        <form className="w-5/6" onSubmit={e=>e.preventDefault()}>
				<MyInput 
         ref={inputFocus}
         type="text"
         placeholder="Post Title"
         value={post.title}
         onChange={e=>setPost({...post, title:e.target.value})}/>
				<MyInput type="text" placeholder="Post" value={post.body}
        onChange={e=>setPost({...post, body: e.target.value})}/>
        <MyButton onClick={addPost}>Create Post</MyButton>
        </form>
				<PostList posts={posts} title="Post List" />
			</div>
		</>
	);
}

export default App;
