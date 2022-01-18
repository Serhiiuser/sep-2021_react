import Users from "./componets/Users/Users";
import UsersDetails from "./componets/UsersDetails/UsersDetails";
import Posts from "./componets/Posts/Posts";
import css from './App.moduls.css'
import {useState} from "react";



function App() {
    const [user,setUser] = useState([]);
    const [userId,setUserId] = useState(null);


    const getUser = (user)=>{
        setUser(user)
        setUserId(null);

    }
    const getUserId = (id) => {
        setUserId(id)

    }

  return (
      <div>
        <div className={css.wrap}>
          <Users getUser={getUser} />
            {user && <UsersDetails user={user} getUserId={getUserId}/>}
        </div>
          {userId && <Posts userId={userId}/>}
      </div>
  );
}

export default App;
