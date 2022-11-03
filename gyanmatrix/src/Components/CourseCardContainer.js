import React from "react";

import GetStarted from "./GetStarted";
import CourseCard from "./CourseCard";



const CardContainer = () => {
  return (
    <div>
      {" "}
      <div className="flex  flex-row justify-start mt-[24px] w-[1162px] border-b-[1px] h-[40px]">
        {["Most Popular", "Highly Rated", "New"].map((obj) => (
          <span className="ml-12 h-full border-b-[2px] border-[#9D1C7F] p-[5px]">
            <h3>{obj}</h3>
          </span>
        ))}
      </div>
      <div className="flex flex-row mt-[0px]">
        <div>
          <CourseCard />
        </div>
        <div>
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
