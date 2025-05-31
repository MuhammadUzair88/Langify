import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import OnBoarding from "./pages/OnBoarding";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Notifications from "./pages/Notifications";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button> */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboard" element={<OnBoarding />} />
        <Route
          path="/Home"
          element={
            <div className="flex">
              <SideBar />
              <div className="w-full min-h-screen">
                <Navbar />
                <Home />
              </div>
            </div>
          }
        />
        <Route
          path="/friends"
          element={
            <div className="flex">
              <SideBar />
              <Friends />
            </div>
          }
        />
        <Route
          path="/notifications"
          element={
            <div className="flex">
              <SideBar />
              <Notifications />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
