import React from "react";
import { FaRandom } from "react-icons/fa";

const OnBoarding = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center p-4 sm:p-8 lg:p-20"
      data-theme="forest"
    >
      <div className="bg-black w-full max-w-5xl p-6 sm:p-10 lg:p-20 rounded-3xl flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-2xl text-white">
            Complete Your Profile
          </h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s"
            alt="avatar"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
          />
          <button className="btn btn-wide rounded-2xl bg-green-300 text-black flex items-center gap-2">
            <FaRandom /> Generate Random Avatar
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-sm font-light pl-2 pb-1 text-white">
              Full Name
            </label>
            <input type="text" className="input rounded-full w-full" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-light pl-2 pb-1 text-white">
              Bio
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows={3}
            ></textarea>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-sm font-light pl-2 pb-1 text-white">
                Native Language
              </label>
              <select className="select select-success w-full">
                <option disabled selected>
                  Pick your favorite anime
                </option>
                <option>One Piece</option>
                <option>Naruto</option>
                <option>Death Note</option>
                <option>Attack on Titan</option>
                <option>Bleach</option>
                <option>Fullmetal Alchemist</option>
                <option>Jojo's Bizarre Adventure</option>
              </select>
            </div>

            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-sm font-light pl-2 pb-1 text-white">
                Learning Language
              </label>
              <select className="select select-success w-full">
                <option disabled selected>
                  Pick your favorite anime
                </option>
                <option>One Piece</option>
                <option>Naruto</option>
                <option>Death Note</option>
                <option>Attack on Titan</option>
                <option>Bleach</option>
                <option>Fullmetal Alchemist</option>
                <option>Jojo's Bizarre Adventure</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-light pl-2 pb-1 text-white">
              Location
            </label>
            <input type="text" className="input rounded-full w-full" />
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn bg-green-600 text-white hover:bg-green-500 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
