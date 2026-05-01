import { Routes, Route } from "react-router-dom";
// import "../CSS/App.css";
// import styles from "./AppRoutes.module.css";
import MainPage from "../pages/mainPage";
import UserPage from "../pages/userPage";
import SettingsPage from "../pages/settingsPage";
import ResultsPage from "../pages/resultsPage";
import BookPage from "../pages/bookPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/user" element={<UserPage />} />

      {/* <Route path="/favorites" element={<FavePage />} />*/}

      <Route path="/settings" element={<SettingsPage />} />

      <Route path="/filter/:key/:value" element={<ResultsPage />} />
      <Route path="/book/:isbn" element={<BookPage />} />
    </Routes>
  );
};
