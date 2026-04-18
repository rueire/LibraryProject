import "./CSS/App.css";
import "./CSS/menu.css";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./navigation/AppRoutes.jsx";
import Menu from "./components/layout/Menu.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Menu />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
