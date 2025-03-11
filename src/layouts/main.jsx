import React from 'react'
import { NavBar } from "@/widgets/layout"
import { WaabotCard } from "@/widgets/cards"
import { WaabotInfoCard } from "@/widgets/cards"

export const Main = () => {
    return (
        <div className='w-screen h-screen bg-lightBg dark:bg-darkBg '>
            <NavBar />
            <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                <WaabotInfoCard />
                <WaabotCard />
            </div>
        </div>
    )
}

export default Main