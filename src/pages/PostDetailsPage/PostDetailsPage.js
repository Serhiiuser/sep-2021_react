import {Outlet} from "react-router-dom";

const PostDetailsPage = ({item:title})=> {
  return (
    <div>
      {title}

      <Outlet/>
    </div>
  );
}

export {PostDetailsPage};