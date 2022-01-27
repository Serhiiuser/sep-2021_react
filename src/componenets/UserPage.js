import {Outlet} from "react-router-dom";

const UserPage = ({item:id,name})=> {

    return (
        <div>
            {id}-{name}
            <Outlet/>
        </div>
    );
}

export {UserPage} ;