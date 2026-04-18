import { Routes, Route } from "react-router";
// import "../CSS/App.css";
import styles from "./AppRoutes.module.css"
import MainPage from "../pages/mainPage";
import UserPage from "../pages/userPage";
import SettingsPage from "../pages/settingsPage";
import ResultsPage from "../pages/resultsPage";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.mainPageContent}>
            <MainPage />
          </div>
        }
      />

      <Route path="/user" element={<UserPage />} />

      {/* <Route path="/favorites" element={<FavePage />} />*/}

      <Route path="/settings" element={<SettingsPage />} />

      <Route
        path="/filter/:key/:value"
        element={
          <div className={styles.resultsPageContent}>
            <ResultsPage />
          </div>
        }
      />
    </Routes>
  );
};
