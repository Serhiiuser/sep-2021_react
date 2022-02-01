import {useParams,Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {PostDetailsPage} from "../PostDetailsPage/PostDetailsPage";

const UserPostsPage = ()=> {

    let {id}=useParams()
    console.log(id)

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        postService.getAll().then(value =>setPosts([...value]))
    },[]);
    return (
        <div>
            {
                posts.map(value => <PostDetailsPage key={value.id} item={value}/> )
            }
            <Outlet/>
        </div>

    );
}

export {UserPostsPage};