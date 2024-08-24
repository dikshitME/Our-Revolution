import React from "react";
import Navbar from "../Navbar/Navbar";
import "./NewPage4.css";
import Footer from "../Footer/Footer";

function NewPage4() {
    return (
       <>
       <div className="w-full  bg-[#FFFFFF]">
         <Navbar/>
         <div className="text flex gap-[20vw] ml-[7vw] mt-[7vw]">
            <h2 className="text-[1vw] fonr-semibold tracking-tighter leading-none">(OUR REVOLUTION) <br />17 MARCH 2023</h2>
            <h1 className="text-[1.5vw] font-semibold tracking-tighter leading-none">Future Focus Vol 1: Photographer Alice </h1>
            <h2 className="text-[1vw] fonr-semibold tracking-tighter leading-none">news & opinions <br />(Interview)</h2>
         </div>
         <div className="image w-[95vw]  bg-red-200 ml-[2.5vw] mt-[5vw]">
            <img className="w-full h-[55vw]" src="Work4image.webp" alt="" />
         </div>
         <div className="text-2 h-[25vw]  ml-[22vw] mt-[4vw]">
            <h1 className="ml-[5vw] text-[1.5vw]">(What does the future hold?)</h1>
            <h1 className="text-[1.5vw] mt-[1vw]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Future Focus is a series of interviews with individuals from<br />various industries and backgrounds where we ask the question, what<br />lies ahead in the future of their industry and ours?<br /> <br /> <br />Each member of our team will take turns in interviewing inspirational <br />individuals, each gaining a different point of view and coming into the <br />interview from a place of curiosity and intrigue.</h1>
            <br />
        </div>
        <div className="w-[100vw] ">
            <img  className="w-[35vw] h-[32vw] ml-[32vw] pt-[2vw] " src="Work4-1.webp" alt="" />
            <h1 className="text-[1.7vw] leading-none tracking-tightier font-semibold ml-[30vw] mt-[3vw]">Is there anything you’d like to see change in the <br />industry to be better in the future?</h1>
            <h1 className="text-[1.2vw] ml-[30vw] mt-[2vw]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A union would be great! Haha. The industry has fundamentally <br /> been reshaped over the last decade and Iʼm happy to say womenʼs <br /> participation is high and continues to increase. I suspect the pay gap is <br /> still present as lower paying jobs are offered more frequently to women, <br /> and there is still an absence of maternity leave for freelancers. It will be <br /> interesting to see how these issues play out as photography enters a <br /> new era of AI.</h1>
            <video autoPlay muted loop playsInline className="pb-[5vw] pt-[3vw] ml-[30vw]" src="Work4-video.mp4"></video>

        </div>
         <div className="text-3 w-[100vw] mt-[10vw] h-[50vw]">
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

export default NewPage4;
