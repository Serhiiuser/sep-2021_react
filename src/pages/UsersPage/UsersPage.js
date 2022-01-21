import {Outlet} from "react-router-dom"
import {useEffect, useState} from "react";
import {userService} from "../../services/user.service";

const UserPage = ()=> {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        userService.getAll(users).then(value =>setUsers([...value]))
    },[])
    console.log(users)
    return (
        <div>
            {users.map(value=> <UserPage key={value.id} item={value}/>)}
            <Outlet/>
        </div>
    );
}
export {UserPage};

