// Initializes Firebase once for the entire app (analytics + anonymous auth)
import "./firebase";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ProfileDetail from "./pages/ProfileDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  // Centralized favourites state so it can be shared across routes
  const [favourites, setFavourites] = useState([]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard 
                  favourites={favourites} 
                  setFavourites={setFavourites} 
                />
              }
            />
            <Route
              path="/favourites"
              element={
                <Dashboard 
                  favourites={favourites} 
                  setFavourites={setFavourites} 
                  showFavouritesOnly 
                />
              }
            />
            <Route 
              path="/profile/:id" 
              element={
                <ProfileDetail 
                  favourites={favourites} 
                  setFavourites={setFavourites} 
                />
              } 
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

