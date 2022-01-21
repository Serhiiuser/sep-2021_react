import {Outlet} from "react-router-dom";


const UserDetailsPage = ({item:{name}})=> {
    return (
        <div>
            {name}
            <Outlet/>
        </div>
    );
}
export {UserDetailsPage}