import {Link, Outlet} from "react-router-dom";
import React from "react";

const UserPage = ({item})=> {
    let { id,name} = item;

    return (
        <div>
            {id}-{name}   <button><Link to={'/layout/users/'+ id} state={item}> details </Link></button>-
           <button> <Link to={`/layout/users/${id}/posts`}>Post of user</Link></button>

            <Outlet/>
        </div>
    );
}

export {UserPage} ;

