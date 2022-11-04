import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import preview from "../GyanAcademyPages/coursePage/asserts/preview.png";
import profile from "../GyanAcademyPages/coursePage/asserts/tutorProfile.png";
import ratings from "../GyanAcademyPages/coursePage/asserts/star.png"

const CourseCard = () => {
  const Navigate = useNavigate();
  
  const handelCoursevideo = () => {
    Navigate("/coursevideo");
  };

  return (
    <div>
      <div className="h-[1515px] overflow-y-scroll no-scrollbar">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((obj) => (
          <div className="flex flex-row max-w-[760px] h-[280px] bg-[#FFFFFF] rounded-[25px] my-[50px]">
            <img src={preview} className="p-[24px]" />
            <div className="flex flex-col justify-between p-[24px]">
              <h2 className="border-l-[4px] border-[#9D1C7F] pl-[7px] text-[20px] font-semibold">
                Learn Merge Sort in JavaScript
              </h2>
              <div className="flex flex-row items-center ">
                <p className="text-[14px] font-normal">32 lessons</p>
                <li className="ml-[15px] text-[14px] font-normal">3h 20m</li>
                <li className="ml-[15px] text-[14px] font-normal">Beginner</li>
              </div>
              <div className="flex flex-row items-center ">
                <img src={profile} className="mr-[7px]" />
                <p className="mr-[15px] text-[12px] font-medium">
                  Sophie Delgado
                </p>
                <img src={ratings} className="h-[11px] w-[11px] mr-[5px]" />
                <p className="text-[12px] font-medium">4.5</p>
              </div>
              <p className="text-[14px] font-normal">
                Find out how far you can go with your JavaScript abilities!Find
                out how far you can go with your JavaScript abilities!
              </p>
              <button
                onClick={handelCoursevideo}
                className="border-[2px] w-[174px] h-[42px] rounded-[25px] border-[#9D1C7F] left-[250px] relative"
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
