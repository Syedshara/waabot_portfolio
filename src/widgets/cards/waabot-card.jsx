import React, { useState, useEffect } from "react";
import grp from "@/assets/group2.svg";
import Lottie from "lottie-react";
import phone_lottie from "@/assets/lottie/phone_lottie.json";

export const WaabotCard = () => {
    const [hovered, setHovered] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMouseX((clientX / window.innerWidth) * 2 - 1);
        setMouseY((clientY / window.innerHeight) * 2 - 1);
    };

    return (
        <div
            className="relative w-[550px] h-[620px] mt-20 flex justify-center items-center overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
        >
            <img
                src={grp}
                alt="Background Shape"
                className="absolute -top-[10%] right-0 w-[600px] h-[700px]  "
                style={{
                    transform: `translate(${mouseX * 10}px, ${mouseY * 10}px) translateY(${Math.min(scrollY * 0.5, 80)}px)`,
                    transition: "transform 0.1s linear",
                }}
            />

            <Lottie
                animationData={phone_lottie}
                loop={true}
                className="relative"
                style={{
                    transform: `translate(${-mouseX * 15}px, ${-mouseY * 15}px) translateY(${Math.min(scrollY * 0.25, 50)}px)`,
                    transition: "transform 0.1s linear",
                }}
            />
        </div>
    );
};

export default WaabotCard;
