import {Routes, Route } from "react-router";
import '../CSS/App.css'
import MainPage from "../pages/mainPage";
import UserPage from "../pages/UserPage";
import SettingsPage from "../pages/settingsPage";
import ResultsPage from "../pages/resultsPage";

/*Add here navigation to home, user, settings and faves */

{/* <div className='all_books_wrap'><FetchBooks/></div> */}

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<div className="page-content"><MainPage /></div>} />
            <Route path="/user" element={<UserPage/>}/>
            {/* <Route path="/favorites" element={<FavePage />} />*/}
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/filter/:key/:value" element={<div className="results-content"><ResultsPage /></div>} />
        </Routes>
    )
}