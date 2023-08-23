import React from "react";

const Cards = ({ descrpition, name, position, image }) => {
  return (
    <div className="  mx-auto bg-[#21293c] rounded-[5px] space-y-4 shadow-[0_0_10px_2px_gray] text-white w-[80%] md:w-[90%] h-50">
      <div className=" w-[90%] mx-auto m-6 shadow-slate-900">
        <p className="font-normal">{descrpition}</p>
        <div className="flex felx-row items-center space-x-4">
          <img
            src={`/src/assets/images/${image}`}
            alt="profile"
            className="rounded-full w-14"
          />
          <div>
            <h5 className="font-bold">{name}</h5>
            <h6 className="text-sm">{position}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
