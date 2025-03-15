import React, { useState, useEffect } from "react";
import grp from "@/assets/group.svg";
import Lottie from "lottie-react";
import robot_lottie from "@/assets/lottie/robot_lottie.json";
import phone_lottie from "@/assets/lottie/phone_lottie.json";
import textImg from "@/assets/text2.svg";
import { CNAME } from "@/utilities/constants";

export const WaabotCard = () => {
    const [hovered, setHovered] = useState(false);
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative w-[550px] h-[620px] mt-20 flex justify-center items-center overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>

            <img src={grp} alt="Text" className="absolute -top-[15%] right-0 w-[600px] h-[700px]" style={{ transform: `translateY(${scrollY * 0.6}px)` }} />
            <Lottie animationData={phone_lottie} loop={hovered} className="relative" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
        </div>
    );
};

export default WaabotCard;
