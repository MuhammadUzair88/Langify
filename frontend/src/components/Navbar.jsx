import React from "react";

import { IoMdLogOut } from "react-icons/io";
import { PiBellRinging, PiPaintBucketFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="border-b border-base-300 sticky top-0 z-30 h-16 flex items-center"
      data-theme="luxury"
    >
      <div className="w-full flex justify-end items-center p-7 text-white gap-5 cursor-pointer">
        <div className="w-full flex lg:hidden justify-start items-center">
          <h1 className="text-xl font-medium text-green-300">Langify</h1>
        </div>
        <Link to={"/notifications"}>
          <div className="text-lg">
            <PiBellRinging />
          </div>
        </Link>
        <div className="text-lg">
          <PiPaintBucketFill />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s"
            alt="avatar"
            className="w-8 rounded-full object-cover"
          />
        </div>
        <div className="text-lg">
          <IoMdLogOut />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
