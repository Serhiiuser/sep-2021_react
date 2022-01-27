import {Link,Outlet} from "react-router-dom";


const Layout = ()=> {
    return (
        <div>
            <div>
                <Link to={'/layout/users'}>users</Link>
            </div>

            <div>
                <Link to={'/layout/posts'}>posts</Link>
            </div>
<hr/>
            <Outlet/>
        </div>

    );
}

export {Layout};