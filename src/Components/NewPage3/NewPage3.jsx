import React from "react";
import Navbar from "../Navbar/Navbar";
import LocomotiveScroll from 'locomotive-scroll';
import "./NewPage3.css";
import Footer from "../Footer/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NewPage3() {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <>
            <div className="relative w-full h-screen text-white">
                <div className="absolute inset-0 z-10">
                    <Navbar />
                </div>
                <img className="w-full h-full object-cover" src="work3image.webp" alt="" />
                <div className="absolute inset-0 flex gap-[13vw]  justify-center items-center z-10">
                    <h1 className="text-center text-[1vw] font-bold mb-[1vw]">(FOOD) <br />28-04-2023</h1>
                    <h1 className="text-center text-[1vw] font-semibold mb-[8vw] ml-[2vw]"> <span className="chobani text-[4vw] "> CHOBANI NATURAL</span> <br /> <span className="ml-[2vw]">Creating Memories and moments of wonder at meal times with a global household brand</span></h1>
                    <h1 className="text-center text-[1vw] font-bold">CHOBANI NATURAL <br />(PACKAGING DESIGN)</h1>
                </div>
            </div>
            <div className=" page2 w-[100vw] h-[50vw] bg-[#EAF8FC] " data-scroll data-scroll-speed="0.1"> 
                <div className="text1 text-[2vw] leading-none flex tracking-tightier gap-[15vw] ml-[25vw] pt-[5vw]">
                <h1> CHOBANI NATURAL</h1>
                <h1 className="text-[1vw]">(Packaging Design)</h1>
                </div>
                <div className="text2">
                    <h1 className="text-[1.5vw] leading-none ml-[25vw] mt-[4vw]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Chobani Greek Yogurt is deliciously simple and at the heart of <br />their portfolio is their Natural and Natural Light core variants. Crafted <br />using Chobani’s traditional method of triple straining, they preserve the <br />nutritious goodness of Greek yogurt, while creating a luxuriously thick <br /> and creamy texture that is rich in natural protein and boasts a <br />delightful tangy taste.</h1> <br />
                    <h1 className="text-[1.5vw] leading-none ml-[25vw] mt-[4vw]">Whilst Chobani’s Natural variants are the perfect addition to lots of <br />food time occasions, it was important that it communicated specifically <br /> to the local Australian market. Previous iterations of the packaging <br />design carried variant names and colours associated with the US <br />market but it was essential these important core variants resonated <br />with how Australian customers shop dairy products. Available in <br />convenient single-serve tubs or versatile large tubs, the Natural range <br />is designed to satisfy your taste buds and add a touch of joy to any <br />dish.</h1>
                </div>
    
            </div>
            <div className="page3 w-[100vw] h-[50vw]"  data-scroll data-scroll-speed="0.3" >
               <img className="w-[100vw] h-full" src="Work3.webp" alt="" />
            </div>
            <div className="w-[100vw] pt-[5vw] bg-[#EAF8FC]">
                <div className="text flex gap-[10vw]">
                <div className="left h-[85vw]">
                    <img  className="w-[45vw] h-[70vw] ml-[2vw]" src="Work3-4.webp" alt="" />
                </div>
                <div className="right">
                      <h2 className="text-[1vw] mt-[20vw]">(THE SOLUTION)</h2>
                      <h2 className="text-[1.4vw] ml-[2vw]  mt-[2vw] tracking-wide"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Drawing inspiration from Chobani's distinctive <br />brand assets, we aimed to create packaging design <br />that was as simple and elegant as the product itself. <br />The cream colour palette paired with punchy blues <br />showcases their iconic leadership in Greek Yogurt. We <br />incorporated their authentic yogurt texture into the <br />design by featuring original illustrations of a silver and <br />wooden spoon asset that represents each variant <br />whilst evoking a wholesome eating occasion.</h2>
                </div>
                </div>
                <div className="spoon">
                    <img className="spoon ml-[40vw] w-[25vw] mt-[-25vw]" src="Work3-5.webp" alt="" />
                </div>
            </div>
            <div className="w-[100vw] h-[55vw] bg-[#EAF8FC] leading-none ">
                <h1 className="RusillaSerif  text-[5vw] ml-[25vw] pt-[10vw]">A DOLLAP OF WODNER </h1>
                <h1 className="Manifest text-[5vw] ml-[15vw]">IN EVERY SPOONFUL</h1>
                <h2 className= "pt-[11vw] ml-[30vw] text-[1.5vw]">  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;By utilising the brand's unique assets and incorporating them. <br />into the design, we created packaging design that stands out on the <br />shelf and communicates the simplicity, authenticity, and indulgence of <br />Chobani’s Natural Greek yogurts.</h2>
            </div>
            <div className="text-3 w-[100vw] h-[50vw] mt-[-3vw] bg-[#EAF8FC]">
            <h1 className="Exo-Black ml-[34vw] pt-[6vw] text-[7vw] mt-[-9vw] font-bold tracking-tighter leading-none">&nbsp; &nbsp; &nbsp;READY TO</h1>
            <h1 className="Exo-Black new ml-[37vw] text-[7vw] mt-[0.5vw]  font-bold tracking-tighter leading-none">CREATE WHAT</h1>
            <h1 className="Exo-Black ml-[35.4vw] text-[7vw] mt-[0.5vw] font-bold tracking-tighter leading-none">&nbsp; THE FUTURE</h1>
            <h1 className="Exo-Black ml-[35vw] text-[7vw]  mt-[0.5vw] font-bold tracking-tighter leading-none">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HOLDS?</h1>
            <h2 className="ml-[47vw] text-[1vw] mt-[0.5vw]">(CONTACT US)</h2>
            <h2 className="text-[1vw] ml-[45vw]">Let's chat about your brand...</h2>
         </div>
         <Footer/>
        </>

    );
}

export default NewPage3;