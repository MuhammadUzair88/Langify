import React from "react";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="w-64 h-screen  border-r border-base-300 hidden lg:flex flex-col sticky top-0"
      data-theme="luxury"
    >
      <div className="flex items-center gap-3 text-green-800 mb-6 justify-center pt-4">
        <img
          className="w-8 rounded-xl object-cover"
          src="https://static.vecteezy.com/system/resources/previews/002/159/401/non_2x/language-translation-icon-free-vector.jpg"
          alt=""
        />
        <h1 className="text-xl font-bold">Langify</h1>
      </div>
      <div className="p-5 flex flex-col gap-6">
        <Link to="/home">
          <div className="flex gap-2 text-white items-center text-lg  ">
            <FaHome />
            <h1>Home</h1>
          </div>
        </Link>
        <Link to="/friends">
          <div className="flex gap-2 text-white items-center text-lg  ">
            <FaUserFriends />
            <h1>Friends</h1>
          </div>
        </Link>
        <Link to="/notifications">
          <div className="flex gap-2 text-white items-center text-lg  ">
            <IoMdNotifications />
            <h1>Notifications</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
