import React from "react";

import lor from "../../images/lor.png";
import internship from "../../images/internship.png";

function SmallScreen() {
  return (
    <>
      <div className=" lg:hidden text-white mt-5 mb-5 m-2 text-center  p-2" >
        <h1 className="text-6xl sm:text-7xl md:text-8xl" id="heading2">
          Achievements
        </h1>
        <div className="flex flex-col gap-4 mt-8 p-2 italic">
          <div className=" sm:p-2 p-4 ">
            <h3 className=" text-4xl " id="effect2">
              Letter of Recommendation
            </h3>
            <div className="h-3/4 w-full">
              <img
                src={lor}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="p-4 sm:p-2 ">
            <h3 className="text-4xl " id="effect2">
              Internship Completion Certificate
            </h3>
            <div className="h-3/4 w-full">
              <img
                src={internship}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LargeScreen() {
  return (
    <>
      <div className="hidden  lg:block text-center text-white relative bottom-20 m-10 2xl:bottom-30 mb-10  mt-20" >
        <h1 className="text-6xl xl:text-7xl 2xl:text-8xl" id="heading1">
          Achievements
        </h1>
        <div className="flex w-full mt-24 gap-4 justify-center p-3 italic">
          <div className=" w-1/2 h-3/4 ">
            <h3 id="effect2" className="text-2xl xl:text-3xl 2xl:text-4xl">
              Letter of Recommendation
            </h3>
            <div className="h-3/4 w-full">
              <img
                src={lor}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className=" w-1/2 h-3/4">
            <h3 id="effect2" className="text-2xl xl:text-3xl 2xl:text-4xl">
              Internship Completion Certificate
            </h3>
            <div className="h-3/4 w-full">
              <img
                src={internship}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Achievements() {
  return (
    <>
    <div id="achievement" className='m-0 p-0'>

      <SmallScreen />
      <LargeScreen />
    </div>
    </>
  );
}

export default Achievements;
