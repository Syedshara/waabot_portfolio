import React, { useState } from "react";
import phoneImg from "@/assets/phone.png";
import msgImg from "@/assets/msg.png";
import whatsIcon from "@/assets/icon.png";
import chatBubble from "@/assets/chat-bubble.png";
import robotImg from "@/assets/robot.png";
import { CNAME } from "@/utilities/constants";

export const WaabotCard = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="relative w-[550px] h-[600px] mt-20   flex justify-center items-center" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="absolute w-[220px] h-[420px] top-[15%] left-[50%] -translate-x-1/2 bg-blue-gray-600/30 dark:bg-blue-gray-600/30 backdrop-blur-lg rounded-3xl shadow-md z-10"></div>

            <img src={phoneImg} alt="Phone" className="relative min-w-[300px] z-10" />



            <img
                src={chatBubble}
                alt="Chat Bubble 1"
                className="absolute top-[36%] left-[30%] w-56  z-20"
            />
            <div className="absolute top-[50%] left-[3%] w-32 h-32 z-30 ">

                <img
                    src={msgImg}
                    alt="Message Box 1"
                    className=" transform scale-x-[-1] relative animate-float-flip min-w-40 min-h-40"
                />
                <div className="transform scale-x-[-1] absolute bottom-[30%] left-[36%] text-sm -mt-32 animate-float text-[#26B7A4] -rotate-12 min-w-32">
                    No Hidden <br /> Setup  Costs
                </div>
            </div>


            <div className="absolute top-[5%] right-[-6%]">

                <img
                    src={msgImg}
                    alt="Message Box 2"
                    className=" w-52 h-48 z-30 rotate-3 animate-float relative"
                />
                <div className=" absolute bottom-[44%] left-[25%] text-sm animate-float text-[#26B7A4]  min-w-32">
                    Verified WhatsApp <br /> Business API
                </div>
            </div>

            <div className="absolute bottom-[20%] left-[68%]">
                <img
                    src={msgImg}
                    alt="Message Box 3"
                    className="min-w-56 h-48 z-30 animate-float"
                />
                <div className="transform scale-x-[-1] absolute bottom-[44%] left-[23%] text-sm -mt-32 animate-float text-[#26B7A4] -rotate-12 min-w-32">
                    24/7 Support & <br /> Continuous Updates
                </div>
            </div>

            <div className="absolute top-[30%] left-[38%] text-4xl dark:text-lightBg text-darkBg  font-custom tracking-widest  z-40">
                {CNAME}
            </div>

            <img
                src={whatsIcon}
                alt="WhatsApp Icon"
                className="absolute top-[20%] right-[45%] w-14 h-14 z-40"
            />

            <div
                className={`absolute top-[-40px] left-[50px] transition-all duration-500 ease-in-out ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
                <img src={robotImg} alt='Robot' className='w-[250px] h-[250px]  -rotate-[20deg]' />
                <div className='absolute top-[-10px] left-[120px] border  text-[#26B7A4]  border-[#26B7A4]  px-3 py-2 rounded-full shadow-lg font-custom tracking-widest font-light'>
                    Hi
                </div>
            </div>

        </div>
    );
};

export default WaabotCard;
