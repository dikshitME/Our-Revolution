import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Navbar(){
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
    return(
        <>
        <div className="Navbar">
                    <h2 onClick={handleMenuClick} style={{ cursor: "pointer" }}>(Menu)</h2>
                    <h1>OUR REVOLUTION</h1>
                    <h2>(WORKS*)</h2>
                </div>
        </>
    )
}
export default Navbar