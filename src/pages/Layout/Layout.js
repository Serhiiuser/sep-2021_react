import {Link,Outlet} from "react-router-dom";
import React from "react";



const Layout = ()=> {
    return (
        <div>
            <ol>
                <li><Link to={'/layout/users'}>users</Link></li>
                <li><Link to={'/layout/posts'}>posts</Link></li>
            </ol>
<hr/>
            <Outlet/>
        </div>

    );
}

export {Layout};