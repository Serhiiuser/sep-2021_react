import {Link, Outlet} from "react-router-dom";
import React from "react";

const UserPage = ({item})=> {
    let {name,id} = item;

    return (
        <div>
            {id}-{name}

        </div>
    );
}

export {UserPage} ;

{/*{id}-{name} <Link to={'/layout/users/'+ id}>details</Link>*/}