import React from 'react'
import AnimatedHeadLines from "@/ui/AnimatedHeadLines";

const Works = () => {

    const text = `Featured projects that have been meticulously
                        crafted with passion to drive
                        results and impact.`

    return (
        <section id='works' className='w-full min-h-screen text-black'>

            <div className="z-50 w-full h-full servicee flex">
                <div className="w-full h-full">
                    <AnimatedHeadLines trigger={true} upTitle='Logic meets Aesthetics, Seamlessly' title1='Works' title2={null} desc={text} colour='black' classname="z-10 h-auto my-20 flex flex-col gap-9 justify-center"/>
                </div>
            </div>

        </section>
    )
}
export default Works
