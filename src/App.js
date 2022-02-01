import {Routes, Route,Link} from "react-router-dom"


import {
    AlbumsPage, PhotosPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,UserDetailsPage,UsersPage,UserPage,
    UserPostsPage,HomePage,Layout,CommentsDetails
} from "./pages";


function App() {
  return (

   <div>
       <div>
           <ul>
               <li><Link to={'/'}>Home</Link></li>
               <li><Link to={'/layout'}>Layout</Link></li>
           </ul>
       </div>


       <Routes>
               <Route path={'/'} element={<HomePage/>}/>
               <Route path={'/layout'} element={<Layout/>}>
                   <Route path={'/layout/users'} element={<UsersPage/>}>
                       <Route path={'/layout/users/:id'} element={<UserDetailsPage/>}/>
                       <Route path={'/layout/users/:id/posts'} element={<UserPostsPage/>}/>
                   </Route>
                   <Route path={'/layout/posts'} element={<PostsPage/>}>
                       <Route path={'/layout/posts/comments'} element={<PostsPage/>}/>
               </Route>
               </Route>





               {/*    <Route path={':id/albums'} element={<AlbumsPage/>}>*/}
               {/*        <Route path={':albumsId/photos'} element={<PhotosPage/>}/>*/}
               {/*    </Route>*/}
               {/*</Route>*/}

               {/*<Route path={'posts'} element={<PostsPage/>}>*/}
               {/*    <Route path={':id'} element={<PostDetailsPage/>}>*/}
               {/*        <Route path={'comments'} element={<PostCommentsPage/>}/>*/}
               {/*    </Route>*/}



       </Routes>
   </div>

  );
}

export default App;
