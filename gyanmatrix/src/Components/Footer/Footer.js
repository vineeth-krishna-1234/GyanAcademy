import React from "react";

function Footer() {
  return (
    <div>
      <div className="h-[248px] w-screen bg-gradient-to-r from-[#9D3991] via-[#3D61BF] to-[#427BA9] ">
        <div className="pt-[50px] pl-[135px] pr-[135px] divide-y-2 divide-[#D9D9D9B2]">
          <p className="w-[194px] h-[38px] text-[24.6857px] text-white font-bold pb-[74px]">
            Gyan Academy
          </p>
          <div className="flex gap-[28px] pt-[47px] text-white text-[16px]">
            <a className="w-[102px] h-[27px] " href="">
              Bootcamps
            </a>
            <a className="w-[102px] h-[27px] " href="">
              Pricing Plans
            </a>
            <a className="w-[51px] h-[27px] " href="">
              About
            </a>
            <a className="w-[101px] h-[27px] " href="">
              Learnin Path
            </a>
            <div className=" flex gap-1 pl-[45.90%] text-white text-[16px]">
              <p className="">© 2022</p>
              <p className="font-bold">Gyan Academy.</p>
              <p> All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
