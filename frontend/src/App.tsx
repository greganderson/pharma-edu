import React from "react";
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
    </div>
  );
};

export default App;

