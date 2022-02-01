import {Outlet} from "react-router-dom";

const PostDetailsPage = ({item})=> {
    let {title,body} = item;
  return (
    <div>
      {title}-{body}

      <Outlet/>
    </div>
  );
}

export {PostDetailsPage};