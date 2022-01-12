import {useEffect, useState} from "react";

function App() {
    let [comments,setCommets]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setCommets(value)
            });
    },[])
  return (
    <div>
        <ul>
            {
                comments.map(value=><li key={value.id}>Comment item = {value.body}</li>)
            }
        </ul>
    </div>
  );
}

export default App;