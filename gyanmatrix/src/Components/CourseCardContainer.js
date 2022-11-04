import React from "react";
//components
import GetStarted from "./GetStarted";
import CourseCard from "./CourseCard";

const CardContainer = () => {
  return (
    <div>
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
