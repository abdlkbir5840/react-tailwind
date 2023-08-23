import React from "react";
import illustration_intro from "/assets/images/illustration_intro.png";
const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container mx-auto">
        <div className="mx-auto pt-28 space-y-4 element-center flex-col">
          <div className="">
            <img
              src={illustration_intro}
              alt="image-intro"
              className="w-80 md:w-[90%]"
            />
          </div>
          <div className="text-white text-center space-y-6 md:space-y-6">
            <h1 className=" text-2xl w-[75%] mx-auto md:text-3xl">
              All your files in one secure location, accessible anywhere
            </h1>

            <p className="w-[75%] md:w-[50%] mx-auto text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur deleniti voluptate et odit reiciendis dolore nam, quis
              accusantium suscipit soluta?
            </p>
            <button type="button" className="font-bold rounded-full bg-blue-400 px-12 py-2 hover:bg-blue-500 md:px-20 md:py-4 transition-all duration-300">
              Get Startes
            </button>
          </div>
        </div>
      </div>
       <img src="assets/images/bg-curvy-desktop.svg" alt="curvy" className="w-full h-full hidden md:block"/>
       <img src="assets/images/bg-curvy-mobile.svg" alt="curvy" className="w-full h-full md:hidden"/>
    </section>
  );
};

export default Landing;
