import React from "react";

function StayProductive() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="pt-16  grid grid-cols-1 space-y-8  md:space-x-10 md:grid-cols-2">
          <img
            src="assets/images/illustration_stay_productive.png"
            alt="image"
            className="w-[90%] mx-auto"
          />
          <div className="text-white md:my-auto space-y-4 w-[90%] mx-auto">
            <h1 className="font-bold text-xl md:text-5xl">
              Stay productive, wherever you are{" "}
            </h1>
            <p className="font-normal text-sm">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your the storage needs. Securely share
              riles and folders with friends, family and colleagues for live
              collaboration. No email attachments required.
            </p>
            <div className="flex flex-row space-x-4 border-b w-fit">
              <a href="">See how Frio works</a>
              <img src="assets/images/icon_arrow.svg" alt="arrow" className="w-6 h-6 animate-moveRight" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
