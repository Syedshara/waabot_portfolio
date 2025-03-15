import React, { useState, useEffect } from 'react';
import { NavBar } from "@/widgets/layout";
import { WaabotCard } from "@/widgets/cards";
import { WaabotInfoCard } from "@/widgets/cards";

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

            {/* Main Content (Zoom Out + Fade) */}
            <div
                className="flex flex-col md:flex-row justify-center items-center gap-20 min-h-screen transition-all duration-700 ease-out"
                style={{
                    transform: `scale(${1 - scrollY * 0.0005}) translateY(-${scrollY * 0.1}px)`,
                    opacity: `${1 - scrollY * 0.002}`
                }}
            >
                <WaabotInfoCard />
                <WaabotCard />
            </div>

            {/* Next Content Section (Smoother Transition) */}
            <div
                className="w-full min-h-[90vh] flex justify-center items-center bg-lightBg dark:bg-darkBg transition-opacity duration-700 ease-out"
                style={{ opacity: Math.min(1, scrollY / 300) }}
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
