import React from "react";

//components

//asserts
import bgImg from "./asserts/bgImg.jpg";
import Path from "./asserts/Path.png";
import search from "./asserts/search.png";
import preview from "./asserts/preview.png";
import profile from "./asserts/tutorProfile.png";
import ratings from "./asserts/star.png";

function CoursePage() {
  return (
    <div>
      <div>Header</div>
      <div
        className="bg-fixed w-screen h-64 bg-contain flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h3 className="text-6xl text-white text-[40px] font-bold">
          Javascript
        </h3>
      </div>
      <div className="relative left-36 w-[1500px]">
        <div className="flex flex-row items-center mt-[44px] mb-[42px]">
          <img src={Path} className="w-3 m-2" />
          <h3 className="text-[20px] font-medium ml-[10px]">
            Back to Course Library
          </h3>
        </div>
        <div className="relative">
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="w-[1170px] h-14 border-2 border-gray-100 rounded-[10px] p-[30px]"
          />
          <img src={search} className="absolute top-[18px] left-[1130px]" />
        </div>
        <div className="flex  flex-row justify-start mt-[24px] w-[1162px] border-b-[1px] h-[40px]">
          {["Most Popular", "Highly Rated", "New"].map((obj) => (
            <span className="ml-12 h-full border-b-[2px] border-[#9D1C7F] p-[5px]">
              <h3>{obj}</h3>
            </span>
          ))}
        </div>
        <div className="flex flex-row mt-[0px]">
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
                    <li className="ml-[15px] text-[14px] font-normal">
                      3h 20m
                    </li>
                    <li className="ml-[15px] text-[14px] font-normal">
                      Beginner
                    </li>
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
                    Find out how far you can go with your JavaScript
                    abilities!Find out how far you can go with your JavaScript
                    abilities!
                  </p>
                  <button className="border-[2px] w-[174px] h-[42px] rounded-[25px] border-[#9D1C7F] left-[250px] relative">
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[380px] h-[230px] bg-[#FFFFFF] rounded-[25px] p-[30px] ml-[31px] justify-between flex flex-col">
            <h2 className="text-[20px] font-bold">Try for free</h2>
            <p className="text-[16px] font-medium">
              Get this learning path plus top-rated picks in tech skills and
              other popular topics.
            </p>
            <button className="text-[16px] font-bold bg-gradient-to-b from-[#282b85e6] to-[#9a1d80e6] text-white w-[143px] h-[50px] rounded-[12px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
