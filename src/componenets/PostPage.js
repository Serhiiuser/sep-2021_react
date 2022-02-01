import {Link, Outlet} from "react-router-dom";
import React from "react"

const PostPage = ({item})=> {

    let {title} = item

    return (
        <div>
            {title}
            <button><Link to={`/layout/posts/comments`}>Comments</Link></button>
            <Outlet/>
        </div>
    );
}

export {PostPage};