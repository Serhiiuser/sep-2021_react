import {useEffect, useState} from "react";

function App() {
    let [posts,setPosts]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });
    },[])
  return (
    <div>

        <ul>
            {
                posts.map(value=><li key={value.id}>Post item={value.title}</li>)
            }
        </ul>
    </div>
  );
}

export default App;