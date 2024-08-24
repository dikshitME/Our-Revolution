import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <>
        <div className="w-[100vw] relative h-[40vw] bg-[#030304] text-white">
          <div className="top flex justify-between">
            <div className="left w-[40vw]  ml-[3vw] mt-[5vw] text-[1vw] flex flex-col gap-[1vw]">
                <h1>(SITEMAP)</h1>
                <a className="text-[#AFAFAF]" href="">Home</a>
                <a className="text-[#AFAFAF]" href="">Work</a>
                <a className="text-[#AFAFAF]" href="">About</a>
                <a className="text-[#AFAFAF]" href="">Privacy</a>
                <a className="text-[#AFAFAF]" href="">Terms</a>
            </div>
            <div className="right w-[60vw] text-[1vw] mr-[5vw] mt-[5vw]  gap-[15vw] flex">
                <div className="1 flex flex-col ml-[7vw]  gap-[3vw]">
                     <div className="copyright">
                        <h1>(COPYRIGHT)</h1>
                        <h1 className="text-[#AFAFAF]">2023 Our Revolution PTY Ltd</h1>
                     </div>
                     <div className="social flex flex-col">
                        <h1>(SOCIAL)</h1>
                        <a className="text-[#AFAFAF]" href="">LINKEDIN</a>
                        <a className="text-[#AFAFAF]" href="">BEHNACE</a>
                        <a className="text-[#AFAFAF]" href="">INSTAGRAM</a>
                        <a className="text-[#AFAFAF]" href="">PINTEREST</a>
                     </div>
                </div>
                <div className="2 flex flex-col ml-[2vw]  gap-[4vw]">
                     <div className="new-business">
                        <h1>(NEW BUSINESS)</h1>
                        <a className="text-[#AFAFAF]" href="">hello@our-revolution.com</a>
                     </div>
                     <div className="sydney">
                        <h1>(SYDNEY)</h1>
                        <h1 className="text-[#AFAFAF]">C26, 99 Jones Street, <br />Ultimo, Sydney, 2007,<br />NSW, Australia <br /></h1>
                     </div>
                </div>
                

            </div>
          </div>
          <div className="bottom  absolute bottom-0">
            <h1 className="text-[7.5vw] ml-[-20vw]">OUR REVOLUTION</h1>
          </div>
        </div>
        </>
    )
}
export default Footer;
