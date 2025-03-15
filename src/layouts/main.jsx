import React, { useState, useEffect } from 'react';
import { NavBar } from "@/widgets/layout";
import { WaabotCard, WaabotInfoCard } from "@/widgets/cards";

export const Main = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-screen min-h-screen bg-lightBg dark:bg-darkBg bg-fixed">
            {/* Fixed Navbar */}
            <div className="fixed top-0 w-full z-50">
                <NavBar />
            </div>

            {/* Main Content (Stronger Parallax) */}
            <div
                className="flex flex-col md:flex-row justify-center items-center gap-20 min-h-screen transition-transform duration-700 ease-out"
                style={{
                    transform: `scale(${1 - Math.min(scrollY * 0.0005, 0.12)}) translateY(-${Math.min(scrollY * 0.15, 120)}px)`, // More zoom & lift effect
                    opacity: `${1 - Math.min(scrollY * 0.003, 0.4)}`, // More gradual fade
                }}
            >
                <WaabotInfoCard />
                <WaabotCard />
            </div>

            {/* Next Section (More Gradual Reveal) */}
            <div
                className="w-full min-h-[90vh] flex justify-center items-center bg-lightBg dark:bg-darkBg transition-opacity duration-700 ease-out"
                style={{ opacity: Math.min(1, scrollY / 250) }} // Faster appearance
            >
                <div className="max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Next Section Content</h2>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                        This content smoothly appears as the first section zooms out.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
