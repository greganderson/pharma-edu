import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes";

const Header: React.FC = () => {
  const location = useLocation();
  const currentRoute = routes.find(route => route.path === location.pathname);
  const title = currentRoute ? currentRoute.name : "Default Title";

  return <h1>{title}</h1>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
