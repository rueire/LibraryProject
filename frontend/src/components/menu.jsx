import { NavLink } from "react-router"

export default function Menu() {

    return(
        <div className='menu'>
            <div className="menu-buttons">
                <div className="home-logo">
                    <NavLink to='/'>Logo here</NavLink></div>
                <div className="small-btns">
                    <div className="user-btn">
                        <NavLink to='/user'>User</NavLink>
                    </div>
                    <div className="faves-btn">faves</div>
                    <div className="settings-btn">
                        <NavLink to='/settings'>Settings</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}