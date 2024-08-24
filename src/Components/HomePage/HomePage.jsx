import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HomePage() {
    const locomotiveScroll = new LocomotiveScroll();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleMenuClick = () => {
        navigate("/menu");
    };

    

    return (
        <>
            <div className="page-1  w-[100vw] h-[65vw] bg-[#E7E4E5]">
            <Navbar/>
                <div className="Content ml-[15vw] mt-[6.5vw] leading-none tracking-tighter">
                    <h1 className=" text-1 text-[7vw] ml-[18vw] pt-[2vw]">WE BELIEVE</h1>
                    <br />
                    <h1 className="text-[7vw] ml-[4vw] ">Brands Shape <span>the</span> </h1>
                    <br />
                    <h2 className="text-[9vw] ml-[22vw]">FUTURE</h2>
                </div>
                <div className="bottom ml-[65vw] mt-[-2vw]">
                    <div className="text flex gap-[15vw] text-[1vw]">
                        <h1 className="leading-none" >(Selected projects)</h1>
                        <h1 className="leading-none" > (01 - 04)</h1>
                    </div>  
                    <div className="images flex gap-[1vw] ml-[4vw] mt-[1vw]">
                        <div
                            className="hover-div w-[5vw] h-[5vw] bg-red-800"
                            onMouseEnter={() => handleMouseEnter(0)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img className=" img w-full h-full" src="food-logo.png" alt="" />
                        </div>
                        <div className={`target-div ${hoveredIndex === 0 ? "expanded" : ""}`}>
                            <img className=" img w-full h-full" src="food.png" alt="" />
                        </div>

                        <div
                            className="hover-div w-[5vw] h-[5vw] bg-red-800"
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img className=" img w-full h-full" src="alchohal-logo.png" alt="" />
                        </div>
                        <div className={`target-div ${hoveredIndex === 1 ? "expanded" : ""}`}>
                            <img className=" img w-full h-full" src="alchohal.png" alt="" />
                        </div>

                        <div
                            className="hover-div w-[5vw] h-[5vw] bg-red-800"
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img className=" img w-full h-full" src="food-2-logo.png" alt="" />
                        </div>
                        <div className={`target-div ${hoveredIndex === 2 ? "expanded" : ""}`}>
                            <img className=" img w-full h-full" src="food-2.png" alt="" />
                        </div>

                        <div
                            className="hover-div w-[5vw] h-[5vw] bg-red-800"
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img className=" img w-full h-full" src="food-3-logo.png" alt="" />
                        </div>
                        <div className={`target-div ${hoveredIndex === 3 ? "expanded" : ""}`}>
                            <img className=" img w-full h-full" src="food-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-2 w-[100vw] bg-[#E7E4E5]">
                <div className="w-[100vw]">
                    <h1 className="page-2-text text-[2vw] ml-[45vw]">(ABOUT US)</h1>
                    <h1
                        className="page-2-text text-[4vw] leading-none ml-[58vw] mt-[7vw]"
                        data-scroll
                        data-scroll-speed="0.2"
                    >
                        We are a design <br />
                        company that helps <br />
                        brands define and <br />
                        thrive in culture. <br />
                        Creating influential <br />
                        strategy, brand <br />
                        identity, packaging <br />
                        design and <br />
                        communications.
                    </h1>
                </div>
            </div>
        </>
    );
}

export default HomePage;
