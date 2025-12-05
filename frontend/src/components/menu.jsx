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
            <div id='menu_buttons'>
                <NavLink to='/user'>User</NavLink>
                {/* <button>your faves</button> */}
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </div>
    )
}