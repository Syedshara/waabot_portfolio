import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { NavBar } from "@/widgets/layout";
import { WaabotCard, WaabotInfoCard } from "@/widgets/cards";

export const Main = () => {
    return (
        <ParallaxProvider>
            <div className="w-screen min-h-screen bg-lightBg dark:bg-darkBg bg-fixed">

                <div className="fixed top-0 w-full z-50">
                    <NavBar />
                </div>


                <Parallax speed={10} scale={[0.8, 1.2]} opacity={[1, 0.6]}>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-20 min-h-screen">
                        <WaabotInfoCard />
                        <WaabotCard />
                    </div>
                </Parallax>


                <Parallax speed={5} opacity={[0, 1]}>
                    <div className="w-full min-h-[90vh] flex justify-center items-center bg-lightBg dark:bg-darkBg">
                        <div className="max-w-3xl text-center">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Next Section Content</h2>
                            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                                This content smoothly appears as the first section zooms out.
                            </p>
                        </div>
                    </div>
                </Parallax>
            </div>
        </ParallaxProvider>
    );
};

export default Main;
