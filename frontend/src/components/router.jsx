import {Routes, Route } from "react-router";
import Home from "./Home";
import UserPage from "./UserPage";
import SettingsPage from "./settingsPage";

/*Add here navigation to home, user, settings and faves */

{/* <div className='all_books_wrap'><FetchBooks/></div> */}

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserPage/>}/>
            {/* <Route path="/favorites" element={<FavePage />} />*/}
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>
    )
}