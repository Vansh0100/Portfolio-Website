import React from "react";
import blokminers from "../../images/blokminers.png";

function SmallScreen() {
  return (
    <>
      <div className="  lg:hidden text-white mt-5 mb-5 m-2 text-center p-2" >
        <h1 className="text-6xl" id="heading6">Work Experience</h1>
        <div className="w-full mt-12 flex flex-col rounded-2xl gap-2 p-2" id="effect6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mt-4 text-red-200" style={{fontFamily:"Homemade Apple,cursive",wordSpacing:"10px"}}>
            {" "}
            React JS Developer Internship <br />
            (02/2022-04/2022)
          </h3>
          <div className=" w-full flex justify-center p-2">
            <img
              src={blokminers}
              alt=""
              className="h-32  object-center object-cover rounded-2xl"
            />
          </div>
          <div className=" w-full p-2">
            <p className="text-xl md:text-2xl leading-10 sm:leading-snug md:leading-normal" style={{fontFamily:"Lato, serif"}}>
              I have done an internship as a React JS Developer at Blokminers.
              During this internship, I have worked on three projects. My work
              as a frontend developer was to make webpages along with
              responsiveness, styling webpages, finding and fixing the bugs, and
              many more. This internship helped me in gaining industrial
              experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function LargeScreen() {
  return (
    <>
      <div className="hidden  lg:block text-center text-white relative bottom-20 m-10 2xl:bottom-30  mt-24 p-2" >
        <h1 className="text-7xl 2xl:text-8xl" id="heading6">Work Experience</h1>
        <div className="w-full rounded-lg flex gap-2 p-3 mt-20 " id="effect6">
          <div className=" w-2/5  flex justify-center p-2">
            <img
              src={blokminers}
              alt=""
              className="w-full object-center object-contain rounded-2xl"
            />
          </div>
          <div className=" w-4/5 p-2">
          <h3 className="text-red-200 text-5xl" style={{fontFamily:"Homemade Apple,cursive",wordSpacing:"10px"}}>
            {" "}
            React JS Developer Internship <br />
            (02/2022-04/2022)
          </h3>
            <p className="text-xl xl:text-2xl 2xl:text-3xl lg:leading-10 xl:leading-snug 2xl:leading-normal" style={{fontFamily:"Lato, serif"}}>
              I have done an internship as a React JS Developer at Blokminers.
              During this internship, I have worked on three projects. My work
              as a frontend developer was to make webpages along with
              responsiveness, styling webpages, finding and fixing the bugs, and
              many more. This internship helped me in gaining industrial
              experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
    <div id="experience" className='m-0 p-0'>

      <SmallScreen />
      <LargeScreen />
    </div>
    </>
  );
}

export default Experience;
