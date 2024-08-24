// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Works from "./Components/Works/Works";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import NewPage1 from "./Components/NewPage1/NewPage1"; 
import NewPage2 from "./Components/NewPage2/NewPage2";
import NewPage3 from "./Components/NewPage3/NewPage3";
import NewPage4 from "./Components/NewPage4/NewPage4";
import NewPage5 from "./Components/NewPage5/NewPage5";
import NewPage6 from "./Components/NewPage6/NewPage6";

function App() {
    const location = useLocation();

    // Define paths where only the specific page should be displayed
    const singlePagePaths = [
        "/menu",
        "/new-page1",
        "/new-page2", 
        "/new-page3", 
        "/new-page4",
        "/new-page5",
        "/new-page6",
    ];

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/new-page1" element={<NewPage1 />} />
                <Route path="/new-page2" element={<NewPage2 />} />
                <Route path="/new-page3" element={<NewPage3 />} />
                <Route path="/new-page4" element={<NewPage4 />} />
                <Route path="/new-page5" element={<NewPage5 />} />
                <Route path="/new-page6" element={<NewPage6 />} />
            </Routes>

            {/* Conditionally render Works and Footer based on the current path */}
            {!singlePagePaths.includes(location.pathname) && (
                <>
                    <Works />
                    <Footer />
                </>
            )}
        </>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
