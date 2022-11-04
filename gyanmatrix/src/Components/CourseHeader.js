import React from "react";

function CourseHeader() {
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
    </div>
  );
}

export default CourseHeader;
