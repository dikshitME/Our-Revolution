import React from "react";
import LocomotiveScroll from 'locomotive-scroll';
import { Link } from "react-router-dom";
import "./Works.css";

function Works(){
   const locomotiveScroll = new LocomotiveScroll();
    return(
        <>
        <div className="w-[100vw] bg-[#E7E4E5]">
           <div className="works flex gap-[1vw] " data-scroll data-scroll-speed="0.4">
           <Link to="/new-page1" >
                <div className="w-[28vw] h-[37vw]  mt-[-10vw] ml-[10vw]" data-scroll data-scroll-speed="0.1">
                    <img className="w-full h-full object-cover" src="Work1.webp" alt="Work 1" />
                    <h1 className="text-[1.5vw] mt-[1vw]">Designing for better sleep with UTS</h1>
                </div>
            </Link>
            <Link to="/new-page2"  data-scroll data-scroll-speed="0.5">
             <div className="w-[28vw] h-[37vw] ml-[30vw] mt-[20vw]">
                <img className="w-full h-full object-cover" src="Work2.webp" alt="" />
                <h1 className="text-[1.5vw] mt-[1vw]">The Azurial pickup Silver At FAB</h1>
                </div> 
                </Link>
           </div>
           <div className="works flex gap-[1vw] -mt[5vw]" data-scroll data-scroll-speed="0.2">
            <Link to="/new-page3">
             <div className="w-[28vw] h-[37vw]  ml-[10vw]">
                <img className="w-full h-full object-cover" src="Work3.webp" alt="" />
                <h1 className="text-[1.5vw] mt-[1vw]">CHOBANI NATURALS</h1>
             </div>
             </Link>
             <Link to="/new-page4">
             <div className="w-[28vw] h-[37vw]  ml-[25vw] mt-[15vw]">
                <img className="w-full h-full object-cover" src="Work4.webp" alt="" />
                <h1 className="text-[1.5vw] mt-[1vw]">Futre FOcus vol:! <br />Photographer ALICE</h1>
                </div> 
                </Link>
           </div>
           <div className="works flex gap-[1vw] -mt-[15vw]" data-scroll data-scroll-speed="0.5">
            <Link to="/new-page5">
             <div className="w-[28vw] h-[37vw] bg-red-500 ml-[5vw]">
                <img className="w-full h-full object-cover" src="Work5.webp" alt="" />
                <h1 className="text-[1.5vw] mt-[1vw]">WHY IS PACKAGING DESIGN IMPORTANT ?</h1>
             </div>
             </Link>
             <Link to="/new-page6" data-scroll data-scroll-speed="0.1">
             <div className="w-[28vw] h-[37vw] bg-red-500 ml-[30vw] mt-[20vw]">
                <img className="w-full h-full object-cover" src="Work6.webp" alt="" />
                <h1 className="text-[1.5vw] mt-[1vw]">CAN GIVING AWAY IDEAS FOR FREE BE VALUABLE ?</h1>
                </div> 
                </Link>
           </div>
           <div className="textNew  mt-[3vw] ">
           <h1 className=" main mr-[50vw] pt-[3vw]">(STAY CONNECTED)</h1>
            <h1 className=" middle text-[1.5vw] ml-[30vw] mt-[1vw]">New insights.New ideas.New opportunities.All delivered to your inbox</h1>
            <h1 className=" bottom  ">THE NEWSROOM</h1>
            <button className="subscribe-button border-[0.1vw] border-black rounded-[5vw] w-[8vw] h-[2.5vw] ml-[45vw] mt-[2vw] text-[1vw] mb-[20vw] transition duration-300 ease-in-out hover:bg-zinc-900 hover:text-white">Subscribe</button>
           </div>
        </div>
        </>
    )
}
export default Works;
