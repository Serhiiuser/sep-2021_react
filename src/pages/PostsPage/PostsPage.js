import {Outlet} from "react-router-dom"


import {postService} from "../../services/post.service";
import {useEffect, useState} from "react";
import {PostDetailsPage} from "../PostDetailsPage/PostDetailsPage";

const PostsPage = ()=> {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    postService.getAll().then(value =>setPosts(value))
  },[])
  console.log(posts)

  return (
      <div>
        {posts.map(value=> <PostDetailsPage key={value.id} item={value}/>)}
        <Outlet/>
      </div>
  );
}

export {PostsPage};