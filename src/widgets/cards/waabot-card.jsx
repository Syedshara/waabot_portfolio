import React, { useState, useEffect } from "react";
import grp from "@/assets/group.svg";
import Lottie from "lottie-react";
import phone_lottie from "@/assets/lottie/phone_lottie.json";

export const WaabotCard = () => {
    const [hovered, setHovered] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="relative w-[550px] h-[620px] mt-20 flex justify-center items-center overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={grp}
                alt="Background Shape"
                className="absolute -top-[15%] right-0 w-[600px] h-[700px]"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.5, 80)}px)`, // Stronger parallax
                    transition: "transform 0.3s ease-out",
                }}
            />

            <Lottie
                animationData={phone_lottie}
                loop={hovered}
                className="relative"
                style={{
                    transform: `translateY(${Math.min(scrollY * 0.25, 50)}px)`, // More movement
                    transition: "transform 0.3s ease-out",
                }}
            />
        </div>
    );
};

export default WaabotCard;
