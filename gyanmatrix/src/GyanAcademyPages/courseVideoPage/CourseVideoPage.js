import React from "react";
import { useLocation } from "react-router-dom";
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

const CourseVideoPage = () => {
  let passedData = useLocation();
  passedData = passedData.state;
  const tasks = passedData.tasks[0].tasks;
  console.log(tasks);
  const onClickHandler = (event) => {
    console.log(event);
    const selectedElement = document.getElementById(
      `${event.target.id}-videos`
    );
    console.log(selectedElement.style.display);
    selectedElement.style.display =
      selectedElement.style.display == "block" ? "none" : "block";
  };
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
          <h1 className="font-semibold text-[30px] "> {passedData.title}</h1>
        </div>
        <div className="mt-10 flex items-center mb-10">
          <img className="mr-3" src={userprofile}></img>
          <p className="mr-10 opacity-60 font-semibold text-[22px]">
            {passedData.tutor}
          </p>
          <img className="mr-3" src={Ratings}></img>
          <p>{passedData.ratings}</p>
        </div>
        <p className="font-medium text-[20px]">{passedData.description}</p>
        <div className=" mt-16 gap-y-6">
          {tasks.length &&
            tasks.map((obj, index) => (
              <div className="mb-[26px] focus:bg-green-300">
                <div
                  className="flex  items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-[20px]"
                  id={`index-${index}`}
                  onClick={(event) => {
                    onClickHandler(event);
                  }}
                >
                  <img className="ml-[35px] mr-[31px]" src={icon}></img>
                  <p className="font-medium text-[22px]">{obj.taskHeader}</p>
                </div>
                <div
                  className=" focus:block hidden"
                  id={`index-${index}-videos`}
                >
                  {obj.taskItems.length &&
                    obj.taskItems.map((obj) => (
                      <div className="flex items-center justify-start w-[1168px] border-2 border-gray-200 h-24 rounded-none">
                        <img
                          className="ml-[35px] mr-[31px]"
                          src={vedioPlayer}
                        ></img>
                        <p className="font-medium text-[22px]">{obj}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}

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
        </div>
      </div>
    </div>
  );
};

export default CourseVideoPage;
