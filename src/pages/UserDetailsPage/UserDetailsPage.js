import {useLocation} from 'react-router-dom'
const UserDetailsPage = ()=> {
    let {state:user} = useLocation()
    console.log(user)

    return (
        <div className={'details'}>
            {JSON.stringify(user)
            }
        </div>
    );
}
export {UserDetailsPage}