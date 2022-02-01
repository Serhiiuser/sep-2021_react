import {Outlet} from "react-router-dom"
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import {UserPage} from "../../componenets/UserPage";



const UsersPage = ()=> {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        userService.getAll().then(value =>setUsers([...value]));
    },[]);
    console.log(users);

    return (
        <div>
            {
                users.map(value => <UserPage key={value.id} item={value} />)
            }

            <Outlet/>
        </div>
    );
}
export {UsersPage};

