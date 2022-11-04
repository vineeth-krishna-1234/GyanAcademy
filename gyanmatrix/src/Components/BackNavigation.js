import React from "react";
import { useNavigate } from "react-router-dom";
//asserts
import path from "../GyanAcademyPages/coursePage/asserts/Path.png";
const BackNavigation = (props) => {
  const Navigate = useNavigate();
  const handelLibraryPage = () => {
    const NavigateThisPage = props.NavigateTo;

    Navigate(`${NavigateThisPage}`);
  };
  return (
    <div>
      <div className="flex flex-row items-center mt-[44px] mb-[42px]">
        <div className="cursor-pointer flex" onClick={handelLibraryPage}>
          <img src={path} className="w-3 m-2" />
          <h3 className="text-[20px] font-medium ml-[10px]">
            Back to {props.Navigation}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BackNavigation;
