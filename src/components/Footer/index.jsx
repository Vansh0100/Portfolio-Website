import React from 'react'

// importing social media svgs
import instagram from "../../images/icons8-instagram.svg";
import linkedin from "../../images/icons8-linkedin.svg";
import github from "../../images/icons8-github.svg";
import email from "../../images/icons8-email-open-48.png";


function Footer() {
  return (
    <>
        <div className='flex justify-center gap-3 relative lg:bottom-16 sm:bottom-8 p-1 m-1' id='contact'>
            <div >
                <a href="https://www.instagram.com/vanshjaiswal4" target="_blank"><img src={instagram} alt="instagram"/></a>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/vansh-jaiswal-15ba0b201" target="_blank"><img src={linkedin} alt="linkedin"/></a>
            </div>
            <div>
            <a href="https://github.com/Vansh0100" target="_blank"><img src={github} alt="github" style={{background:"white",borderRadius:"200px"}}/></a>
            </div>
            <div>
              <a href="mailto:vanshjaiswal945@gmail.com" target="_blank"><img src={email} alt="mail" /></a>
            </div>
        </div>
    </>
  )
}

export default Footer;