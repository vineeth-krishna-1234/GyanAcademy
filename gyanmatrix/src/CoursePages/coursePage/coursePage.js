import React from "react";

//components
import Search from "../../Components/Search";
import HeaderBanner from "../../Components/HeaderBanner";
import BackNavigation from "../../Components/BackNavigation";
import CourseCardContainer from "../../Components/CourseCardContainer";
//asserts
import bgImg from "./asserts/Banner.svg"
import Path from "./asserts/Path.png";
import search from "./asserts/search.png";
import preview from "./asserts/preview.png";
import profile from "./asserts/tutorProfile.png";
import ratings from "./asserts/star.png";

function CoursePage() {
  const Text = "JavaScript";
  return (
    <div>
      <div>Header</div>
      <div>
        <HeaderBanner bgImg={bgImg} BannerText="JavaScript" />
      </div>
      <div className="relative left-36 w-[1500px]">
        <div>
          <BackNavigation Path={Path} Navigation={"Course Library"} />
        </div>
        <div>
          <Search />
        </div>
 
  <div>
    <CourseCardContainer/>
  </div>
       
      
      </div>
    </div>
  );
}

export default CoursePage;
