import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="max-w-sm border-3 border-gray-300 rounded-xl p-4 m-6 shadow-lg">
        <div className="flex justify-center">
          <img
            src="https://m.media-amazon.com/images/I/41lkI6123IL._SX425_.jpg"
            alt="Cooler image"
            className="h-56"
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-medium text-amber-300">
            HOT DEAL 15-Year Warranty Portable Air Conditioner Fan | USB Mini AC
            with 600ml Water Tank & 7-Color LED | Personal Desk Fan for Home,
            Office, Cooling & Humidifier - Black
          </p>

          <div className="flex items-center gap-1 mt-2 text-red-600">
            <span className="text-black font-semibold">5.0</span>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <select className="text-black"></select>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-2xl font-bold">
              <FaRupeeSign />
              <span className="text-green-500">1499</span>
            </div>

            <div className="text-sm text-gray-600">
              M.R.P:
              <span className="line-through ml-1 text-red-600">₹2,999</span>
            </div>

            <span className="text-blue-600 font-semibold">(51% off)</span>
          </div>

          <p className="mt-2 text-sm">
            Up to 5% back with Amazon Pay ICICI Card
          </p>

          <p className="mt-1 text-sm">
            FREE delivery <b>Sun, 21 Jun</b>
          </p>

          <button className="w-full bg-amber-300 hover:bg-amber-400 p-2 rounded-full mt-4 font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="max-w-lg border-2 flex border-gray-300 rounded-xl p-4 m-6 bg-blue-50 shadow-lg">
        <div className="flex justify-center">
          <img
            src="https://m.media-amazon.com/images/I/71qnjApnRHL._AC_UL480_FMwebp_QL65_.jpg"
            alt="Cooler image"
            className="m-3 mr-11 "
          />
        </div>
        <div className="mt-3">
          <p className="text-sm font-medium">
            Techking 15 YEARS WARRANTY Mini Evaporative Air Cooler with 7 LED
            Lights – 3 Wind Speeds, Adjustable Timer, and Quiet Operation for
            Home, Office & More - BLUE_Multicolor
          </p>

          <div className="flex items-center gap-1 mt-2 text-red-600">
            <span className="text-black font-semibold">5.0</span>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <select className="text-black"></select>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-2xl font-bold">
              <FaRupeeSign />
              <span className="text-pink-500">1599</span>
            </div>

            <div className="text-sm text-gray-600">
              M.R.P:
              <span className="line-through ml-1 text-red-600">₹2,999</span>
            </div>

            <span className="text-violet-600 font-semibold">(48% off)</span>
          </div>

          <p className="mt-2 text-sm">
            Up to 5% back with Amazon Pay ICICI Card
          </p>

          <p className="mt-1 text-sm">
            FREE delivery <b>Sun, 21 Jun</b>
          </p>

          <button className="w-full bg-amber-300 hover:bg-amber-400 p-2 rounded-full mt-4 font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
