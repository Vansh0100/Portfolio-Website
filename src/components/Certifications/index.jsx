import React from "react";

import Slider from 'react-slick';
import {PrevArrow,NextArrow} from "./Arrows";

import threatprism from "../../images/threatprism.png";
import cophtmlcss from "../../images/cophtml&css.png";
import cochtmlcss from "../../images/cochtmlcss.png";
import cocjavascript from "../../images/cocjavascript.png";
import cocnodejs from "../../images/cocnodejs.png";
import cocexpress from "../../images/cocexpress.png";
import cocreact from "../../images/cocreact.png";
import cocmongo from "../../images/cocmongo.png";
import cocredux from "../../images/cocredux.png";
import cocdevops from "../../images/cocdevops.png";
import cocdocker from "../../images/cocdocker.png";
import cocfullstack from "../../images/cocfullstack.png";



function Certifications() {
  const images=[
    threatprism,cophtmlcss,cochtmlcss,cocjavascript,cocnodejs,cocexpress,cocreact,cocmongo,cocredux,cocdevops,cocdocker,cocfullstack
  ]
  var settingsLg={
    // autoplay:true,
    speed:500,
    infinite:true,
    centerMode:true,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:true,
    centerPadding:"200px",
    centerMode:true
}
var settings={
    infinite:true,
    arrows:true,
    autoplay:true,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
    speed:500,
    slidesToScroll:1,
    slidesToShow:1
    // centerMode:true,
    // centerPadding:"200px"
}
  return (
    <>
    <div id="certification" className='m-0 p-0'>
    <div className="lg:hidden m-2 p-2 text-center">
      <h1 className='text-6xl sm:text-7xl md:text-8xl text-white text-center mb-6 ' id="heading4">Certifications</h1>
        <Slider {...settings}>
          {images.map((image)=>{
            return (
              <div className="w-full h-3/4 px-2 mt-12">
                <img src={image} alt="banner" className="w-full h-full  object-center object-cover rounded-lg"/>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className="hidden lg:block m-10 p-5   text-center">
      <h1 className='text-6xl xl:text-7xl 2xl:text-8xl text-white text-center mb-16' id="heading4">Certifications</h1>
            <Slider {...settingsLg}>
                {images.map((image)=>{
                    return (
                        <div className="w-96 px-4 mt-12">
                            <img src={image} alt="banner" className="w-full h-full object-center object-cover rounded-lg "/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    </div>

    </>
  );
}

export default Certifications;
