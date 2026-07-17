import React from 'react'
import {Icon} from "@iconify/react";
import Marquee from "react-fast-marquee";

const ContactSummary = () => {
    return (
        <section id='contact-summary' className='w-full h-auto flex flex-col items-center justify-center'>
            <div className="w-full bg-black overflow-hidden text-white flex gap-32 text-3xl md:text-4xl h-auto py-5 uppercase mb-15">
                <Marquee >
                    {["Precision", "Innovation", "Excellence", "Collaboration", "Trust"].map((item, index) => (
                        <div key={index} className='flex gap-32 items-center'>

                            <div className="ml-32">
                                <p>{item}</p>
                            </div>
                            <div className="">
                                <Icon icon="mdi:star-four-points" className='size-5 md:size-6'/>
                            </div>

                        </div>
                    ))}
                </Marquee>
            </div>
            <div className="content text-4xl sm:text-5xl lg:text-7xl leading-normal text-center font-light px-5">
                <span> “ Let’s build a <br /> <span className='font-medium'>memorable</span> & <span className='italic'>inspiring</span> <br/>  web application <span className='text-[#A37E2C]'>together</span> “</span>
            </div>
            <div className="w-full mt-15 bg-transparent border-t-3 border-b-3 border-black overflow-hidden flex gap-32 text-3xl md:text-4xl h-auto py-5 uppercase">
                <Marquee direction='right' speed='55' >
                    {["Contact", "Contact", "Contact", "Contact", "Contact"].map((item, index) => (
                        <div key={index} className='flex gap-32 items-center'>

                            <div className="ml-32">
                                <p>{item}</p>
                            </div>
                            <div className="">
                                <Icon icon="material-symbols:circle" className='size-5 md:size-6 text-[#A37E2C]'/>
                            </div>

                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
export default ContactSummary
