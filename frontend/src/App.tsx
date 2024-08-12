import React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
=======
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navigation from "./component/Navigation"
import routes from "./routes";


const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className="centerRoutes">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.routeName}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
>>>>>>> 6856b3d (Add seperate pages)
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 6856b3d (Add seperate pages)
