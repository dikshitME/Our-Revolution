import React from "react";
import Navbar from "../Navbar/Navbar";
import "./NewPage5.css";
import Footer from "../Footer/Footer";

function NewPage5() {
    return (
       <>
       <div className="w-full  bg-[#FFFFFF]">
         <Navbar/>
         <div className="text flex gap-[20vw] ml-[7vw] mt-[7vw]">
            <h2 className="text-[1vw] w-[10vw] font-semibold tracking-tighter leading-none">(OUR REVOLUTION) <br />17 MARCH 2023</h2>
            <h1 className="text-[1.5vw] w-[75vw] font-semibold tracking-tighter leading-none">WHY IS PACKAGING  DESIGN IMPORTANT</h1>
            <h2 className="text-[1vw] font-semibold tracking-tighter leading-none">news & opinions <br />(Interview)</h2>
         </div>
         <div className="image w-[95vw]  bg-red-200 ml-[2.5vw] mt-[5vw]">
            <img className="w-full h-[55vw]" src="Work5-1.jpg" alt="" />
         </div>
         <div className="text-2 h-[25vw]  ml-[22vw] mt-[4vw]">
            <h1 className="text-[1.5vw] mt-[1vw]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;In the bustling realm of consumerism, where products vie for<br />vattention amidst vast choice, there is a discreet art - the art of<br />packaging design. It is more than a box or bottle; it is a strategic and<br /> <br /> artistic endeavour that captures brand identity, consumer engagement,<br />and product preservation. Here we delve into the subtle yet profound <br />importance of packaging design, its purpose, the role of packaging <br />design agencies, and the delicate craft of designing packaging that <br />resonates with consumers.</h1>
            <br />
        </div>
        <div className="w-[100vw]  ">
            <img  className="w-[40vw] h-[32vw]  contain ml-[30vw] pt-[2vw] " src="Work5-2.jpg" alt="" />
            <h1 className="text-[1.7vw] leading-none tracking-tightier font-semibold ml-[30vw] mt-[3vw]">(What is the Purpose of Packaging Design?)</h1>
            <h1 className="text-[1.2vw] ml-[30vw] mt-[2vw]">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The Ambassador of First Impressions: Packaging often stands as <br />the first ambassador of a product, introducing it to the discerning gaze <br /> of the consumer. It sets the initial tone of the consumer's encounter. A <br /> thoughtfully designed package can convey the essence of quality,<br /> trustworthiness, and uniqueness. <br /><br /> When creating a new brand for a yerba mate energy drink called Yerbi, <br />we knew first impressions were critical to ensure people understood <br /> what the drink was and what the drink could do. From naming, to <br />graphic execution with new distinctive brand assets, the packaging <br />design creates impact at shelf and captures attention.  <br /> <br /> <br />The Communicator of Information: Beyond aesthetics, packaging <br />design serves a functional role as an information communicator. It can <br />convey essential details such as nutritional facts or usage instructions, <br /></h1>
            <img className=" pt-[3vw] w-[35vw] h-[45vw] ml-[35vw]" src="Work5-3.jpg"></img>

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

export default NewPage5;
