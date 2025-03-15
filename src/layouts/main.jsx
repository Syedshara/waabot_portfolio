import React from "react";
import { Parallax, ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { NavBar } from "@/widgets/layout";
import { WaabotCard, WaabotInfoCard } from "@/widgets/cards";
import { HeroSection } from "@/widgets/layout";
import BGPattern from "@/assets/pattern_bg.png";

export const Main = () => {
    return (
        <ParallaxProvider>
            <div className="max-w-screen min-h-screen bg-lightBg dark:bg-darkBg bg-fixed overflow-x-hidden scrollbar-hide">

                <div className="fixed top-0 w-full z-50">
                    <NavBar />
                </div>


                {/* Section with One Card from Left & One from Right */}
                <Parallax speed={15} scale={[0.6, 1.3]} opacity={[2, 0.0001]}>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-20 min-h-screen">
                        {/* WaabotInfoCard slides in from the left */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <WaabotInfoCard />
                        </motion.div>

                        {/* WaabotCard slides in from the right */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <WaabotCard />
                        </motion.div>
                    </div>
                </Parallax>
                <ParallaxBanner
                    layers={[
                        {
                            image: BGPattern,
                            speed: -10,
                            className: "w-full h-full mt-20  object-cover opacity-100 dark:opacity-50",
                        }
                    ]}
                    className="w-full min-h-screen  flex items-center justify-center"
                >
                    <HeroSection />
                </ParallaxBanner>



                {/* Dummy Section for Testing */}
                <section className="w-full min-h-screen flex items-center justify-center bg-ligtBg dark:bg-darkBg">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dummy Section for Testing</h2>
                </section>



            </div>
        </ParallaxProvider >
    );
};

export default Main;
