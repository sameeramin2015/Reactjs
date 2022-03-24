import React, { useState } from "react";
import {useEffect} from "react";
import { Button, Container } from 'react-bootstrap';
function App() {
  // useEffect , useState , useRef , useContext >> react hooks
  const [posts, setPosts] = useState([]);  // posts and setPost are methods of useState // we saved posts json data in here
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
  return (
    
      <Container className="text-center mt-5 bg-primary p-5 ">
        <p>Singel Post title</p>
        <Button variant={'danger'} className="mx-1">Previous Post</Button>
        <Button variant={'warning'} >Next Post</Button>
      
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