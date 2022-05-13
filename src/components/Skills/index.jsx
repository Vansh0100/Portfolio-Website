import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function SmallScreen() {
  return (
    <>
      <div className="lg:hidden text-center text-white mt-6 mb-5  m-2" >
        <h1 className="text-6xl mb-3" id="heading3">
          Skills
        </h1>
        <div className="flex justify-center mt-16 m-10 italic">
          <div className="flex flex-col gap-4 sm:gap-4 w-4/5">
            <ProgressBar
              animated
              striped
              now={90}
              variant="success"
              label="90% HTML"
              className="w-full"
              style={{ height: "40px", borderRadius: "50px", fontSize: "20px",background:"gray" }}
            />
            <ProgressBar
              animated
              striped
              now={80}
              variant="info"
              label="80% CSS"
              className="w-full "
              style={{ height: "40px", borderRadius: "50px", fontSize: "20px"
            ,background:"gray" }}
            />
            <ProgressBar
              animated
              striped
              now={50}
              variant="warning"
              label="50% Javascript"
              className="w-full "
              style={{ height: "40px", borderRadius: "50px", fontSize: "16px"
            ,background:"gray" }}
            />
            <ProgressBar
              animated
              striped
              now={75}
              variant="danger"
              label="75% REACT"
              className="w-full "
              style={{ height: "40px", borderRadius: "50px", fontSize: "20px"
            ,background:"gray" }}
            />
            <ProgressBar
              animated
              striped
              now={90}
              variant="secondary"
              label="90% BOOTSTRAP"
              className="w-full "
              style={{ height: "40px", borderRadius: "50px", fontSize: "20px",background:"gray" }}
            />
            <ProgressBar
              animated
              striped
              now={90}
              variant="primary"
              label="90% TAILWIND CSS"
              className="w-full "
              style={{ height: "40px", borderRadius: "50px", fontSize: "20px",background:"gray" }}
            />
            <ProgressBar
              animated
              striped
              now={70}
              variant="dark"
              label="70% C++"
              className="w-full "
              style={{ height: "40px", borderRadius: "50px", fontSize: "20px"
            ,background:"gray" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function LargeScreen() {
  return (
    <>
      <div className="hidden lg:block text-center text-white relative bottom-20 m-10  2xl:bottom-30 mb-10 mt-28" >
        <h1 className="text-6xl xl:text-7xl 2xl:text-8xl" id="heading3">
          Skills
        </h1>
        <div className="flex gap-4 flex-wrap justify-center m-10 italic">
          <div style={{ width: 200, height: 200 }} className="p-3 m-2">
            <CircularProgressbar
              strokeWidth={2}
              value={90}
              text="90%"
              styles={buildStyles({
                pathColor: "green",
                textColor: "green",
                background:"gray"
              })}
            />
            <h3 className="m-2 text-green-700">HTML</h3>
          </div>
          <div style={{ width: 200, height: 200 }} className="p-3 m-2">
            <CircularProgressbar
              strokeWidth={2}
              value={80}
              text="80%"
              styles={buildStyles({})}
            />
            <h3 className="m-2 text-blue-400">CSS</h3>
          </div>
          <div style={{ width: 200, height: 200 }} className="p-3 m-2">
            <CircularProgressbar
              strokeWidth={2}
              value={50}
              text="50%"
              styles={buildStyles({
                pathColor: "yellow",
                textColor: "yellow",
                background:"gray"
              })}
            />
            <h3 className="m-2 text-yellow-300">JAVASCRIPT</h3>
          </div>
          <div style={{ width: 200, height: 200 }} className="p-3 m-2">
            <CircularProgressbar
              strokeWidth={2}
              value={75}
              text="75%"
              styles={buildStyles({
                pathColor: "red",
                textColor: "red",
                background:"gray"
              })}
            />
            <h3 className="m-2 text-red-600">REACT</h3>
          </div>
          <div style={{ width: 200, height: 200 }} className="p-3 m-2">
            <CircularProgressbar
              strokeWidth={2}
              value={90}
              text="90%"
              styles={buildStyles({
                pathColor: "gray",
                textColor: "gray",
                background:"gray"
              })}
            />
            <h3 className="m-2 text-gray-400">BOOTSTRAP</h3>
          </div>
          <div style={{ width: 200, height: 200 }} className="p-3 m-2">
            <CircularProgressbar
              strokeWidth={2}
              value={90}
              text="90%"
              styles={buildStyles({
                pathColor: "blue",
                textColor: "blue",
                background:"gray"
              })}
            />
            <h3 className="m-2 text-blue-700">TAILWIND CSS</h3>
          </div>
          <div style={{ width: 200, height: 200 }} className="p-3 m-2">
            <CircularProgressbar
              strokeWidth={2}
              value={70}
              text="70%"
              styles={buildStyles({
                pathColor: "violet",
                textColor: "violet",
                background:"gray"
              })}
            />
            <h3 className="m-2 text-pink-300">C++</h3>
          </div>
        </div>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
    <div id="skill" className='m-0 p-0'>

      <SmallScreen />
      <LargeScreen />
    </div>
    </>
  );
}

export default Skills;
