import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import {CommentsPage} from "../../componenets/CommentsPage";


const PostCommentsPage = ()=> {
  const [comments,setComments]=useState([]);

  useEffect(()=>{
    commentsService.getAll().then(value => setComments([...value]))
  },[]);
  console.log(comments)

  return (
    <div>

      {
        comments.map(value => <CommentsPage key={value.id} item={value}/>)
      }

      <Outlet/>

    </div>
  );
}

export {PostCommentsPage} ;