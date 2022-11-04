import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import path from "../GyanAcademyPages/coursePage/asserts/Path.png";
const BackNavigation = (props) =>
{
  const Navigate = useNavigate();
  // const handelLibraryPage = () =>
  // {
  //   Navigate("/")
  // }
  return (
    <div>
      <div /*onClick={handelLibraryPage}*/ className="flex flex-row items-center mt-[44px] mb-[42px]">
        <img src={path} className="w-3 m-2" />
        <h3 className="text-[20px] font-medium ml-[10px]">
          Back to {props.Navigation}
        </h3>
      </div>
    </div>
  );
};

export default BackNavigation;
