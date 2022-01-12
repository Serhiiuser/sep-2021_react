import {useEffect, useState} from "react";

function App() {
  let [users,setUsers]= useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(value => value.json())
      .then(value => {
        setUsers(value)
      });
},[])
  return (
    <div>
      <ul>
        {
          users.map(value=> <li key = {value.id}> User item={value.name}</li>)

        }
      </ul>
    </div>
  );
}

export default App;