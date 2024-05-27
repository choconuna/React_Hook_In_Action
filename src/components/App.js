import "../App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import BookablePages from "./Bookables/BookablesPage";
import BookingsPage from "./Bookings/BookingsPage";
import UsersPage from "./Users/UsersPage";
import UserPicker from "./Users/UserPicker";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", padding: "0", marginRight: "auto" }}>
              <li style={{ marginRight: "10px" }}>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span> Bookings</span>
                </Link>
              </li>
              <li style={{ marginRight: "10px" }}>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span> Bookables</span>
                </Link>
              </li>
              <li style={{ marginRight: "10px" }}>
                <Link to="/users" className="btn btn-header">
                  <FaUsers />
                  <span> Users</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <UserPicker />
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookables" element={<BookablePages />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;