import React from 'react'
import AnimatedHeadLines from "@/ui/AnimatedHeadLines";
import {socials} from "@/constants";

const Contacts = () => {

    const text = `Got a question, how or project Idea?
WE’D love to hear from you and discus further!`

    return (
        <section id='contact' className='min-h-screen pb-10 bg-black text-white w-full'>

            <div className="w-full h-full servicee flex">
                <div className="w-full h-full">
                    <AnimatedHeadLines trigger={true} upTitle='You Dream It, I Code it' title1='Reach' title2={null} desc={text} colour='white' classname="z-10 h-auto my-20 flex flex-col gap-9 justify-center"/>
                </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-8 px-10">
                <div className="w-full h-auto flex flex-col gap-2">
                    <p className="uppercase text-3xl md:text-4xl">Email</p>
                    <div className='w-full h-px bg-white/30 rounded-full' />
                    <p className="text-3xl md:text-4xl text-white/80">hello@gmail.com</p>
                </div>
                <div className="w-full h-auto flex flex-col gap-2">
                    <p className="uppercase text-3xl md:text-4xl">Phone</p>
                    <div className='w-full h-px bg-white/30 rounded-full' />
                    <p className="text-3xl md:text-4xl text-white/80">+9112345 67890</p>
                </div>
                <div className="w-full h-auto flex flex-col gap-2">
                    <p className="uppercase text-3xl md:text-4xl">Social Media</p>
                    <div className='w-full h-px bg-white/30 rounded-full' />
                    <div className="text-xs md:text-lg text-white/80 uppercase flex gap-1 md:gap-4">
                        <p className="">{"{"} instagram {"}"}</p>
                        <p className="">{"{"} youtube {"}"}</p>
                        <p className="">{"{"} linkedin {"}"}</p>
                        <p className="">{"{"} Github {"}"}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Contacts
