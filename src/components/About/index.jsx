import React from 'react'


function SmallScreen(){
    return (
        <>
        <div className='lg:hidden text-center text-white mt-5 mb-5 m-2' >
            <h1 className='text-6xl' id="heading1">About Me</h1>
            <p className='m-5 p-2 italic  text-2xl md:text-3xl rounded-lg leading-10 sm:leading-snug md:leading-normal' style={{fontFamily:"Lato,sans-serif"}} id="effect4">
                Hey everyone, I am an Undergraduate student at IIIT JABALPUR(2020-24) pursuing my B.Tech in Computer Science and Engineering. I am a React JS Developer. And talking about my experience, I have done an internship as a React JS Developer at BlokMiners. I have acquired the knowledge of full-stack web development with the help of an online course offered by Shape AI. During that course, I learned about different technologies such as React, Redux, Node JS, etc. And after completing that course, I received a Letter Of Recommendation from Shape AI for my excellent performance during the training period.
            </p>
        </div>
        </>
    )
}

function LargeScreen(){
    return (
        <>
            <div className='hidden lg:block text-center text-white relative bottom-10 m-10  mb-10 ' >
                <h1 className='text-6xl xl:text-7xl 2xl:text-8xl' id="heading1">About Me</h1>
                <p className='p-4 m-5 italic  text-2xl xl:text-3xl 2xl:text-4xl  rounded-2xl mt-8 lg:leading-10 xl:leading-snug 2xl:leading-normal' style={{fontFamily:"Lato,sans-serif"}} id="effect5">
Hey everyone, I am an Undergraduate student at IIIT JABALPUR(2020-24) pursuing my B.Tech in Computer Science and Engineering. I am a React JS Developer. And talking about my experience, I have done an internship as a React JS Developer at BlokMiners. I have acquired the knowledge of full-stack web development with the help of an online course offered by Shape AI. During that course, I learned about different technologies such as React, Redux, Node JS, etc. And after completing that course, I received a Letter Of Recommendation from Shape AI for my excellent performance during the training period.
                </p>
            </div>
        </>
    )
}

function About() {

  return (
    <>
    <div id="about" className='m-0 p-0'>
    <SmallScreen/>
        <LargeScreen/>
    </div>

    </>
  )
}

export default About