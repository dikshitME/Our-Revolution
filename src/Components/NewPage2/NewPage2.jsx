import React from "react";
import Navbar from "../Navbar/Navbar";
import LocomotiveScroll from 'locomotive-scroll';
import "./NewPage2.css";
import Footer from "../Footer/Footer";

function NewPage2() {
    const locomotiveScroll = new LocomotiveScroll();
    return (
       <>
       <div className="w-full  bg-[#FFFFFF]">
         <Navbar/>
         <div className="text flex gap-[20vw] ml-[7vw] mt-[7vw]">
            <h2 className="text-[1vw] fonr-semibold tracking-tighter leading-none">(OUR REVOLUTION) <br />17 october 2022</h2>
            <h1 className="text-[1.5vw] font-semibold tracking-tighter leading-none"> THE AZURIAL PICKS UP SILVER AT FAB </h1>
            <h2 className="text-[1vw] fonr-semibold tracking-tighter leading-none">news & opinions <br />(AWARDS)</h2>
         </div>
         <div className="image w-[95vw]  bg-red-200 ml-[2.5vw] mt-[5vw]">
            <img className="w-full h-[55vw]" src="Work2image.webp" alt="" />
         </div>
         <div className="text-2 h-[25vw]  ml-[22vw] mt-[5vw]">
            <h1 className="text-[1.5vw] mt-[2vw]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We’re delighted to be a Silver winner in this year’s FAB Awards in<br />the Alcohol Packaging Design category for our work on The Azurial. We<br /> couldn’t be prouder of the creative work and our team! There were <br />smany incredible entries and we are privileged to be included in such <br />great creative company!</h1>
            <br />
        </div>
        <div>
         <img  className="w-[38vw] h-[50vw] ml-[30vw] mt-[-6vw]" src="NEWPAGE2-2.jpg" alt="" />
        </div>
         <div className="text-3 w-[100vw] h-[50vw] bg-[#FFFFFF]  leading-none tracking-tighter">
            <h1 className="ml-[29vw] pt-[6vw] text-[7vw]  font-bold tracking-tighter leading-none"> WHAT DOES</h1>
            <h1 className="ml-[29vw] text-[7vw]  font-bold tracking-tighter leading-none">THE FUTURE</h1>
            <h1 className="ml-[29vw] text-[7vw]  font-bold tracking-tighter leading-none">&nbsp;&nbsp;&nbsp;HOLD FOR </h1>
            <h1 className="ml-[29vw] text-[7vw]  font-bold tracking-tighter leading-none">YOUR BRAND</h1>
            <h2 className="ml-[42vw] text-[1.5vw] mt-[1vw]">(CONTACT US)</h2>
            <h2 className="text-[1vw] ml-[32vw]">Let's talk about how we can help you realize your brand's potential</h2>
         </div>
         <Footer/>
       </div>
       </>
    );
}

export default NewPage2;
