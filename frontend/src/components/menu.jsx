import { NavLink } from "react-router"

export default function Menu() {

    return(
        <div className='menu'>
            <div className="menu-buttons">
                <div id="home-logo">
                    <NavLink to='/'>Logo here</NavLink></div>
                <div className="small-btns">
                    <div id="user-btn">
                        <NavLink to='/user'>User</NavLink>
                    </div>
                    <div id="faves-btn">faves</div>
                    <div id="settings-btn">
                        <NavLink to='/settings'>Settings</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}