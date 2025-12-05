import { NavLink } from "react-router"

export default function Menu() {

    return(
        <div className='menu'>
            <div className="home-logo">
                <NavLink to='/'>Logo here</NavLink>
            </div>
        {/* <div className='user'></div>
            <div id='user_image'>image here</div>
            <div id='user_name'>user's name</div>
        */}
        <div className="user-btn">
                <NavLink to='/user'>User</NavLink>
            </div>
            <div className="faves-btn">faves</div>
            <div className="settings-btn">
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </div>
    )
}