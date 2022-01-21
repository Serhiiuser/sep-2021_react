import {Routes,Route,Navigate} from "react-router-dom"
import {Layout} from "./componenets";
import {
    AlbumsPage, PhotosPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage, UserDetailsPage, UserPage,
    UserPostsPage,
} from "./pages";



function App() {
  return (
      <Routes>
       <Route path={'/'} element={<Layout/>}>
            <Route index element={<Navigate to={'users'}/>}/>

           <Route path={'users'} element={<UserPage/>}>
               <Route path={':id'} element={<UserDetailsPage/>}>
                   <Route path={'posts'} element={<UserPostsPage/>}/>
               </Route>

               <Route path={':id/albums'} element={<AlbumsPage/>}>
                   <Route path={':albumsId/photos'} element={<PhotosPage/>}/>
               </Route>
           </Route>

           <Route path={'posts'} element={<PostsPage/>}>
               <Route path={':id'} element={<PostDetailsPage/>}>
                   <Route path={'comments'} element={<PostCommentsPage/>}/>
               </Route>

           </Route>

       </Route>
      </Routes>

  );
}

export default App;
