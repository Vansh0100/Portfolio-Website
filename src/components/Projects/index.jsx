import React from "react";

function SmallScreen() {
  return (
    <>
      <div className="  lg:hidden text-white mt-5 mb-5 m-2 text-center p-2" >
        <h1 className="text-7xl" id="heading5">Projects</h1>
        <div className="flex flex-col gap-5 justify-center align-middle p-2 mt-5 italic" id="project">
          <div className="  rounded-lg p-2" >
            <h1 className="text:3xl sm:text:4xl md:text-5xl " id="pr1">Quotes App</h1>{" "}
            <p className=" text-xl md:text-2xl leading-10 sm:leading-snug md:leading-normal mt-2" style={{fontFamily:"Lato, serif"}}>
              It is a <strong>CRUD</strong> App where you can create, read,
              update & delete your own quotes. It is made using HTML, CSS,
              BOOTSTRAP & JAVASCRIPT only. I have deployed this project on Vercel.
            </p>
            <div id="button1" className="flex flex-wrap  justify-center">
              <a href="https://github.com/Vansh0100/QUOTES-APP" target="_blank" className="block  sm:text-sm md:text-lg " >
                <span></span>
        <span></span>
        <span></span>
        <span></span>
        Github Repo
              </a>
            
              <a href="https://quotes-app-phi.vercel.app/" target="_blank" className="block sm:text-sm md:text-lg ">
                <span></span>
        <span></span>
        <span></span>
        <span></span>
        Deployment Link
              </a>
            </div>
          </div>
          
          <div className=" rounded-lg p-2">
            <h1 className="text:3xl sm:text:4xl md:text-5xl " id="pr2">Myntra Landing Page</h1>
            <p className="italic text-xl md:text-2xl leading-10 sm:leading-snug md:leading-normal mt-2" style={{fontFamily:"Lato, serif"}}>
            It is a clone of the myntra landing page. The tech stack used in this project is JAVASCRIPT, BOOTSTRAP, TAILWIND CSS & REACT JS. I have deployed this project on Netlify.
            </p>
            <div id="button2" className="flex  justify-center flex-wrap">
              <a href="https://github.com/Vansh0100/Myntra-Landing-Page-Using-React" target="_blank" className="sm:text-sm md:text-lg block">
              <span></span>
        <span></span>
        <span></span>
        <span></span>
        Github Repo
              </a>
            
              <a href="https://myntra-landing-page.netlify.app/" target="_blank" className="sm:text-sm md:text-lg block">
                <span></span>
        <span></span>
        <span></span>
        <span></span>
        Deployment Link
              </a>
            </div>
            
          </div>
          <div className=" rounded-lg p-2">
            <h1 className="text:4xl md:text-5xl" id="pr3">Book My Show Clone</h1>
            <p className="italic text-xl md:text-2xl leading-10 sm:leading-snug md:leading-normal mt-2" style={{fontFamily:"Lato, serif"}}>
            It is a clone of the Book My Show website.  It is a full-stack project. For this project, the tech stack used were React JS, Redux, Tailwind CSS, BOOTSTRAP, JAVASCRIPT &, etc. The API used in this project was TMDB API which was available online. In this project, I have implemented Razorpay Integration also for demo purposes for purchasing a particular movie. I have deployed this project on Vercel.
            </p>
            <div id="button3" className="flex  justify-center flex-wrap">
              <a href="https://github.com/Vansh0100/BookMyShow-ReactApp" target="_blank" className=" sm:text-sm md:text-lg block">
              <span></span>
        <span></span>
        <span></span>
        <span></span>
        Github Repo
              </a>
            
              <a href="https://bookmyshow-murex.vercel.app/" target="_blank" className="sm:text-sm md:text-lg block">
                <span></span>
        <span></span>
        <span></span>
        <span></span>
        Deployment Link
              </a>
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
      <div className="hidden lg:block text-center text-white relative bottom-20 m-10 p-5  2xl:bottom-30 mb-10  mt-20" >
        <h1 className="text-6xl xl:text-7xl 2xl:text-8xl" id="heading5">Projects</h1>
        <div className="flex gap-4 justify-center mt-24 p-2 italic" id="project2">
          <div className=" p-4 w-1/3 rounded-lg">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl" id="pr1">Quotes App</h1>
            <p className=" italic  text-2xl xl:text-3xl 2xl:text-4xl mt-4 lg:leading-10 xl:leading-snug 2xl:leading-normal" style={{fontFamily:"Lato, serif"}}>
              It is a <strong>CRUD</strong> App where you can create, read,
              update & delete your own quotes. It is made using HTML, CSS,
              BOOTSTRAP & JAVASCRIPT only. I have deployed this project on Vercel.
            </p>
            <div className=" p-3" id="button1">
              <a href="https://github.com/Vansh0100/QUOTES-APP" target="_blank" className="px-3 text-xl">
              <span></span>
        <span></span>
        <span></span>
        <span></span>
        Github Repo
              </a>
            
              <a href="https://quotes-app-phi.vercel.app/" target="_blank" className="text-xl">
              <span></span>
        <span></span>
        <span></span>
        <span></span>
        Deployment Link
              </a>
            </div>
          </div>
          <div className="p-4 w-1/3 rounded-lg">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl" id="pr2">Myntra Landing Page</h1>
            <p className="italic  text-2xl xl:text-3xl 2xl:text-4xl mt-4 lg:leading-10 xl:leading-snug 2xl:leading-normal" style={{fontFamily:"Lato, serif"}}>
            It is a clone of the myntra landing page. The tech stack used in this project is JAVASCRIPT, BOOTSTRAP, TAILWIND CSS & REACT JS. I have deployed this project on Netlify.
            </p>
            <div className=" p-3" id="button2">
              <a href="https://github.com/Vansh0100/Myntra-Landing-Page-Using-React" target="_blank" className="px-3 text-xl">
              <span></span>
        <span></span>
        <span></span>
        <span></span>
        Github Repo
              </a>
            
              <a href="https://myntra-landing-page.netlify.app/" target="_blank" className="text-xl">
              <span></span>
        <span></span>
        <span></span>
        <span></span>
        Deployment Link
              </a>
            </div>
          </div>
          <div className=" p-4 w-1/3 rounded-lg">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl" id="pr3">Book My Show Clone</h1>
            <p className="italic  text-xl xl:text-2xl 2xl:text-3xl mt-4 lg:leading-10 xl:leading-snug 2xl:leading-normal" style={{fontFamily:"Lato, serif"}}>
            It is a clone of the Book My Show website.  It is a full-stack project. For this project, the tech stack used were React JS, Redux, Tailwind CSS, BOOTSTRAP, JAVASCRIPT &, etc. The API used in this project was TMDB API which was available online. In this project, I have implemented Razorpay Integration also for demo purposes for purchasing a particular movie. I have deployed this project on Vercel.
            </p>
            <div className="p-2" id="button3">
              <a href="https://github.com/Vansh0100/BookMyShow-ReactApp" target="_blank" className="px-3 text-xl">
              <span></span>
        <span></span>
        <span></span>
        <span></span>
        Github Repo
              </a>
            
              <a href="https://bookmyshow-murex.vercel.app/" target="_blank" className="text-xl">
              <span></span>
        <span></span>
        <span></span>
        <span></span>
        Deployment Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
    <div id="proj" className='m-0 p-0'>

      <SmallScreen />
      <LargeScreen />
    </div>
    </>
  );
}

export default Projects;
