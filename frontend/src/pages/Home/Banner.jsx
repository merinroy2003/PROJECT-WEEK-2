import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/images/banner1.png";  // Adjust path as needed

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4 relative">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>

      <div className="relative z-10 py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        {/* Banner Image with Hover Effect */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <img
            src={bannerImg}
            alt="Shop Collections"
            className="mx-auto h-full md:h-[562px] w-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Banner Content with Strong CTA */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold mb-5 text-white">Shop Our Latest Collections</h1>
          <p className="text-lg md:text-xl mb-7 text-white opacity-80">
            Explore and shop from a wide variety of collections across different brands. Find the best deals here.
          </p>
          <button className="bg-black hover:bg-orange-500 px-8 py-3 text-white font-semibold flex gap-2 items-center rounded-full transition-colors duration-300">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
