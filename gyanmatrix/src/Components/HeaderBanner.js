import React from "react";

const HeaderBanner = (props) => {
    console.log(props.BannerText)
  return (
    <div>
      <div
        className="bg-no-repeat w-screen h-64 bg-contain flex items-center justify-center"
        style={{ backgroundImage: `url(${props.bgImg})` }}
      >
        <h3 className="text-6xl text-white text-[40px] font-bold">
        {props.BannerText}
        </h3>
      </div>
    </div>
  );
};

export default HeaderBanner;
