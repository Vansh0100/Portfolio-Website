import React from 'react'
import Vansh from "../../images/vansh.png";
import play from "../../images/play.png";
function SmallScreen(){
    return (
        <>
            <div className='flex flex-col align-middle gap-2 m-2 mt-4  lg:hidden p-1' >
                <div className='w-full p-2 flex justify-center'>
                <div className='w-1/3 h-1/3 rounded-full  bg-white'>
                    <img src={Vansh} alt="" className='w-full h-full rounded-full'/>
                </div>
                </div>
                <div className='w-full flex justify-center text-center p-3'>
                    <h1 className='text-7xl  md:text-8xl text-white'>
                        Hi,I'm Vansh Jaiswal <br /> <strong id='effect'>
                            <em >
                                Frontend Developer
                            </em>
                        </strong>
                    </h1>
                </div>
            </div>
        </>
    )
}
function LargeScreen(){
    return (
        <>
            <div className='hidden lg:block' >
                <div className='flex justify-evenly p-5'>
                    <div className='w-1/2 lg:w-3/5 text-center'>
                    <h1 className='lg:text-7xl text-white xl:text-8xl 2xl:text-9xl relative  p-2  leading-normal' >
                        Hi,I'm Vansh Jaiswal <br />  <strong id='effect1'>
                            <em className='text-blue-200 text-8xl 2xl:text-9xl'>
                                Frontend Developer
                            </em>
                        </strong>
                    </h1>
                    </div>
                    <div className='w-2/5 lg:w-1/4 rounded-full '>
                        <img src={play} alt="" className='w-full h-5/6 object-cover rounded-full'/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

function Profile() {
  return (
    <>
    <div id="profile" className='m-0 p-0'>

    <SmallScreen/>
    <LargeScreen/>
    </div>
    </>
  )
}

export default Profile