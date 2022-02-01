import {Outlet} from "react-router-dom"
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import {PostPage} from "../../componenets/PostPage";


const PostsPage = ()=> {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    postService.getAll().then(value =>setPosts([...value]))
  },[]);
  console.log(posts)

  return (
      <div>
          {
              posts.map(value => <PostPage key={value.id} item={value}/>)
          }

        <Outlet/>
      </div>
  );
}

export {PostsPage};