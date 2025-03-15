import React from "react";
import Lottie from "lottie-react";
import { Parallax } from "react-scroll-parallax";
import market from "@/assets/lottie/market.json";

export const HeroSection = () => {
    return (
        <Parallax speed={-10}>
            <section className="container mx-auto px-6 lg:px-16 py-16 flex flex-col gap-8 justify-center items-center mt-32 pb-28">
                <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-8">
                    <div className="relative flex justify-center items-center w-full lg:w-5/12">
                        <Parallax speed={5} opacity={[0.1, 1.5]}>
                            <Lottie
                                animationData={market}
                                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] mx-auto"
                            />
                        </Parallax>
                    </div>

                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <Parallax speed={5} opacity={[0.1, 1.5]} >
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                                Smart Business Owners Are Scaling with <span className="text-textColor">WABot</span>
                            </h1>
                            <p className="mt-3 text-gray-700 dark:text-gray-300 text-base lg:text-lg">
                                Automate WhatsApp & Boost Your Revenue Effortlessly
                            </p>

                            <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300 text-sm lg:text-base">
                                <li>✅ <b>Laser-Targeted Campaigns</b> – Personalized WhatsApp messages.</li>
                                <li>✅ <b>Higher Open Rates</b> – 5X better than emails.</li>
                                <li>✅ <b>AI-Powered Chatbot</b> – 24/7 automated sales & support.</li>
                                <li>✅ <b>Seamless Interactions</b> – Manage all chats with a shared inbox.</li>
                            </ul>
                        </Parallax>
                    </div>
                </div>

                <Parallax speed={5} opacity={[1, 1.5]}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-5 shadow-md bg-white dark:bg-darkBg">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">📢 High-Converting Broadcasts</h2>
                            <ul className="mt-2 space-y-2 text-gray-800 dark:text-gray-300 text-sm lg:text-base">
                                <li>🎯 <b className="text-textColor">Scheduled Messaging</b> – Plan in advance.</li>
                                <li>👥 <b className="text-textColor">Customer Segmentation</b> – Personalized campaigns.</li>
                                <li>📊 <b className="text-textColor">Real-Time Insights</b> – Track messages instantly.</li>
                            </ul>
                        </div>

                        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-5 shadow-md bg-white dark:bg-darkBg">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">🚀 Key Engagement Metrics</h2>
                            <div className="grid grid-cols-2 gap-4 mt-3">
                                <div className="text-center border-r border-gray-300 dark:border-gray-600 pr-3">
                                    <h3 className="text-3xl font-bold text-textColor">98%</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">Open Rate</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-textColor">25%</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">Click Rate</p>
                                </div>
                                <div className="text-center border-r border-gray-300 dark:border-gray-600 pr-3">
                                    <h3 className="text-3xl font-bold text-textColor">75%</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">Engagement</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-textColor">5X</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">More Leads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>
        </Parallax>
    );
};

export default HeroSection;


