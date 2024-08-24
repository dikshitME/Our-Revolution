import React from "react";
import Navbar from "../Navbar/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "./NewPage1.css";
import Footer from "../Footer/Footer";

function NewPage1() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full  bg-[#FFFFFF]">
        <Navbar />
        <div className="text flex gap-[20vw] ml-[7vw] mt-[7vw]">
          <h2 className="text-[1vw] fonr-semibold tracking-tighter leading-none">
            (OUR REVOLUTION) <br />
            24 august 2023
          </h2>
          <h1 className="text-[1.5vw] font-semibold tracking-tighter leading-none">
            {" "}
            DESIGINING FOR BETTER SLEEP WITH UTS
          </h1>
          <h2 className="text-[1vw] fonr-semibold tracking-tighter leading-none">
            news & opinions <br />
            (THROUGHT PEICE)
          </h2>
        </div>
        <div className="image w-[95vw] ml-[2.5vw] mt-[5vw]">
          <img className="w-full h-[55vw]" src="Work1image.webp" alt="" />
        </div>
        <div className="text-2 h-[41vw]  ml-[22vw] mt-[5vw]">
          <h2 className="text-[1vw]">(DESIGINING FOR BETTER SLEEP)</h2>
          <h1 className="text-[1.5vw] mt-[2vw]">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Earlier this
            year Our Revolution collaborated with the talented <br /> Visual
            Communication students of the University of Technology Sydney <br />{" "}
            (UTS). We created a unique industry-led brief that challenged the{" "}
            <br />
            students to design a new sleep-aid consumer brand.
          </h1>
          <br />
          <h1 className="text-[1.5vw] mt-[2vw]">
            Our intention was to create a brief that gave the opportunity to{" "}
            <br />
            improve a need we all have - quality sleep. It is essential for
            everyone. <br /> When it is compromised, it can affect our physical
            and mental well- <br /> being. With the rise of digital technologies
            and a fast-paced lifestyle,
            <br /> many people struggle to get enough restful sleep, leading to
            a host of <br /> negative consequences.
          </h1>
        </div>
        <div className=" w-full h-[35vw]  flex">
          <img
            className="w-[20vw] h-[20vw] ml-[17vw] mr-[-3vw] z-[100] mt-[7vw]"
            data-scroll
            data-scroll-speed="0.2"
            src="NEWPAGE1-2.webp"
            alt=""
          />
          <img className="w-[32vw] h-[34vw]   " src="NEWPAGE1-1.webp" alt="" />
          <img
            className="w-[15vw] h-[15vw] ml-[-2vw] mt-[14vw]"
            data-scroll
            data-scroll-speed="0.4"
            src="NEWPAGE1-3.webp"
            alt=""
          />
        </div>
        <div className="text-3 w-[100vw] h-[50vw] bg-[#FFFFFF]  mt-[10vw]">
          <h1 className="ml-[29vw] pt-[6vw] text-[7vw]  font-bold tracking-tighter leading-none">
            {" "}
            WHAT DOES
          </h1>
          <h1 className="ml-[29vw] text-[7vw]  font-bold tracking-tighter leading-none">
            THE FUTURE
          </h1>
          <h1 className="ml-[29vw] text-[7vw]  font-bold tracking-tighter leading-none">
            &nbsp;&nbsp;&nbsp;HOLD FOR{" "}
          </h1>
          <h1 className="ml-[29vw] text-[7vw]  font-bold tracking-tighter leading-none">
            YOUR BRAND
          </h1>
          <h2 className="ml-[42vw] text-[1.5vw] mt-[1vw]">(CONTACT US)</h2>
          <h2 className="text-[1vw] ml-[32vw]">
            Let's talk about how we can help you realize your brand's potential
          </h2>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default NewPage1;
