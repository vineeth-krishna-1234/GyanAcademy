import React from "react";
//components
import HeaderBanner from "../../Components/HeaderBanner";
import BackNavigation from "../../Components/BackNavigation";
//asserts
import backimage from "./asserts/backimage.svg";
import path from "./asserts/Path.svg";
import userprofile from "./asserts/userprofile.svg";
import Ratings from "./asserts/ratings.svg";
import icon from "./asserts/Icon.svg";
import vedioPlayer from "./asserts/vedioPlayer.svg";

const courseVedioPage = () => {
  return (
    <div>
      <div>
        <HeaderBanner
          bgImg={backimage}
          BannerText="Learn Merge Sort in JavaScript"
        />
      </div>
      <div className="relative left-36 w-[1500px]">
        <div>
          <BackNavigation
            NavigateTo={"/courses"}
            Path={path}
            Navigation={"Javascript"}
          />
        </div>

        <div>
          <h1 className="font-semibold text-[30px] ">
            {" "}
            Learn Merge Sort in JavaScript
          </h1>
        </div>
        <div className="mt-10 flex items-center mb-10">
          <img className="mr-3" src={userprofile}></img>
          <p className="mr-10 opacity-60 font-semibold text-[22px]">
            Sophie Delgado
          </p>
          <img className="mr-3" src={Ratings}></img>
          <p>4.7</p>
        </div>
        <p className="font-medium text-[20px]">
          Learn the basics of JavaScript by solving 140+ interactive coding
          challenges and building three fun projects.
        </p>
        <div className=" mt-16 gap-y-6">
          <div className="mb-[26px] focus:bg-green-300">
            <div className="flex  items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]">
              <img className="ml-[35px] mr-[31px]" src={icon}></img>
              <p className="font-medium text-[22px]">
                Build a passenger counter app
              </p>
            </div>
            <div className=" focus:block">
              <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-none">
                <img className="ml-[35px] mr-[31px]" src={vedioPlayer}></img>
                <p className="font-medium text-[22px]">Build a pass</p>
              </div>
              <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-none">
                <img className="ml-[35px] mr-[31px]" src={vedioPlayer}></img>
                <p className="font-medium text-[22px]">Build a pass</p>
              </div>
              <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-none">
                <img className="ml-[35px] mr-[31px]" src={vedioPlayer}></img>
                <p className="font-medium text-[22px]">Build a pass</p>
              </div>
              <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]">
                <img className="ml-[35px] mr-[31px]" src={vedioPlayer}></img>
                <p className="font-medium text-[22px]">Build a pass</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]">
            <img className="ml-[35px] mr-[31px]" src={icon}></img>
            <p className="font-medium text-[22px]">
              Build a passenger counter app
            </p>
          </div>
          {/* <details
            class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
            open
          >
            <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              Why do they call it Ovaltine?
            </summary>
            <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>
              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>

              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>

              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>
            </div>
          </details> */}
          <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]">
            <img className="ml-[35px] mr-[31px]" src={icon}></img>
            <p className="font-medium text-[22px]">
              Build a passenger counter app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courseVedioPage;
