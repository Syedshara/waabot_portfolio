import { Button } from "@material-tailwind/react";
import React from "react";

export const WaabotInfoCard = () => {
    return (
        <div className="max-w-2xl py-6 px-4 mt-5  text-start">

            <div>
                <div className="text-3xl  font-bold text-gray-900 dark:text-white">Automate, Engage, and Grow on WhatsApp</div>
                <div className="mt-2 text-[#26B7A4]">
                    Smart WhatsApp Automation Built for Businesses That Scale
                </div>
            </div>

            <div className="mt-12 text-left space-y-3 text-gray-700 dark:text-gray-300">
                <li>💬 <strong>Effortless Conversations</strong> - Automate customer interactions with a flexible, no-code chatbot.</li>
                <li>⚡ <strong>Dynamic Workflows</strong> - Customize message flows on the fly—no developer required!</li>
                <li>📊 <strong>Real-Time Insights</strong> - Track responses, orders, and customer behavior with detailed analytics.</li>
                <li>🌍 <strong>Multi-Language Support</strong> - Speak your customers' language, instantly.</li>
                <li>🛒 <strong>E-commerce Ready</strong> - Seamlessly handle product catalogs, orders, and payments within WhatsApp.</li>
            </div>



            <div className="mt-12 flex flex-col md:flex-row gap-3 justify-start">
                <Button

                    className="px-6 py-2 bg-[#26B7A4] text-white rounded-lg shadow hover:bg-transparent dark:text-black border border-[#26B7A4] hover:!text-[#26B7A4] w-64 h-16"


                >
                    Book a Live Demo
                </Button>


                <Button
                    className="px-6 py-2 bg-gray-700  text-gray-900
                      dark:text-white rounded-lg shadow 
                       dark:hover:bg-[#26B7A4] hover:text-white w-64 h-16"
                >
                    🎉 Start Free Trial
                </Button>
            </div>
        </div>
    );
};

export default WaabotInfoCard;