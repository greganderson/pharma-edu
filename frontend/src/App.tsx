import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes";
import DixieTechLogo from "./assets/DixieTechLogo.png";

const Header: React.FC = () => {
  const location = useLocation();
  const currentRoute = routes.find((route) => route.path === location.pathname);
  const title = currentRoute ? currentRoute.name : "Page Not Found";
  const isHomePage = location.pathname === "/";

  return (
    <div className="header">
      <h1>{title}</h1>
      {!isHomePage && (
        <img src={DixieTechLogo} alt="Dixie Tech Logo" className="small-logo" />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router basename="/pharma-edu/">
      <Header />
      <Nav />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
