import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Menu.css";

function Menu() {
    const navigate = useNavigate();

    const handleCloseClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <>
            <div className="w-[100vw] relative h-[55vw] bg-[#BCBEB3]">
                <div className="navbar w-[50vw] ml-[5vw] pt-[2vw] flex items-center justify-between">
                    <h1 className="text-[1vw] cursor-pointer" onClick={handleCloseClick}>close</h1>
                    <h1 className="main-text text-[2vw]">OUR REVOLUTION</h1>
                </div>
                <div className="content absolute left-[35vw] top-[10vw]">
                    <h1 className=" home text-[6vw] leading-none">&nbsp;&nbsp;&nbsp;HOME</h1>
                    <h1 className="about-us text-[6vw] leading-none">ABOUT US</h1>
                    <h1 className=" news text-[6vw] leading-none">&nbsp;&nbsp;&nbsp;NEWS </h1>
                    <h1 className="contact text-[6vw] leading-none">&nbsp;CONTACT</h1>
                    <h1 className="ventures text-[6vw] leading-none">VENTURES</h1>
                </div>
            </div>
        </>
    );
}

export default Menu;
