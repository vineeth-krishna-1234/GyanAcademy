import React from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/Footer'

//components
import HeaderBanner from '../../Components/HeaderBanner';
import Search from "../../Components/Search";
import BackNavigation from "../../Components/BackNavigation";
import CourseHeader from "../../Components/CourseHeader";
import CourseLibraryCard from '../../Components/CourseLibraryCard';
//images
import background from './Images/coursebg.png'

function courseLibrary() {
  return (
    <div>
      <div><Header /></div>
      {/* background */}
      <div>
        <HeaderBanner bgImg={background} BannerText="Course Library" />
      </div>
      <div className="relative left-36 w-[1500px]">
        <div>
          <BackNavigation Navigation={"Home"} />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <CourseHeader />
        </div>
      </div>
      <div>
        <CourseLibraryCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default courseLibrary