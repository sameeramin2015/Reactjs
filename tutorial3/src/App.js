import React, { useState } from "react";
import {useEffect} from "react";
import { Button, Container } from 'react-bootstrap';
function App() {
  // useEffect , useState , useRef , useContext >> react hooks
  const [posts, setPosts] = useState([]); // posts and setPost are methods of useState // we saved posts json data in here
  const [IndexNumber, setIndexNumber] = useState(1); 
  const [singlePost, setSinglePosts] = useState({}); 
  useEffect (() => {
    console.log ('hello world')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=>{
      //console.log(data)
      setPosts(data)
    })
    .catch(err=> console.log(err))
  },[])
  //https://jsonplaceholder.typicode.com/posts/1
  const nextPost = (e)=> {
    e.preventDefault()
    console.log(IndexNumber)
    setIndexNumber(IndexNumber+1)
    // {/*fetch('https://jsonplaceholder.typicode.com/posts/'+IndexNumber)*/}
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
    .then(res=>res.json())
    .then (data=>{
      console.log(data)
      setSinglePosts(data)
    })

  }
  const prevPost =(e)=>{
    e.preventDefault()
    
    
    if (IndexNumber<=0){
      //false
      alert('No post found')
    } else{
      setIndexNumber(IndexNumber-1)
      // {/*fetch('https://jsonplaceholder.typicode.com/posts/'+IndexNumber)*/}
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
    .then(res=>res.json())
    .then (data=>{
      console.log(data)
      setSinglePosts(data)
    })
  }
    }
    
  return (
    
      <Container className="text-center mt-5 bg-primary p-5 ">
        <p>{singlePost.title}</p>
        <Button variant={'danger'} className="mx-1 font-weight-bold" onClick={prevPost}>Previous Post</Button>
        <Button variant={'warning'} onClick={nextPost}>Next Post</Button>
      
        {/*
        posts.map((post, index)=>(
          <div key={index}>
            <p>{console.log(post)}</p>
            <p>{post.title}</p>
          </div>

        ))
        */}
        
      </Container>
    
  );
}

export default App;

{/* npm install react-bootstrap */}
