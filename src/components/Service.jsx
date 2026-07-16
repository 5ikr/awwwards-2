"use client";

import React, {useRef} from 'react'
import AnimatedHeadLines from "@/ui/AnimatedHeadLines";
import {servicesData} from "@/constants";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {

    const secRef = useRef(null);
    const serviceRef = useRef([]);

    const text = `I build secure, high-performance full-stack apps 
                        with smooth UX to drive growth
                        not headaches.`

    useGSAP(() => {

        serviceRef.current.forEach((el) => {

            if(!el) return;

            gsap.from(el, {
                y: 200,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                },
                duration: 1,
                ease: 'circ.out'
            })

        })

    },[])

    return (
        <>
            <section ref={secRef} className='bg-black text-white rounded-t-4xl w-full min-h-screen flex flex-col justify-start' id='services'>

                <div className="w-full h-full servicee flex">
                    <div className="w-full h-full">
                        <AnimatedHeadLines trigger={true} upTitle='Behind the scene, Beyond the screen' title1='Service' title2={null} desc={text} colour='white' classname="z-10 h-auto my-20 flex flex-col gap-9 justify-center"/>
                    </div>
                </div>


                            {servicesData.map((item, index) => (
                                <div ref={(el) => serviceRef.current[index] = el} className="sticky w-full h-full bg-black service-sticky"
                                     style={{
                                         "--top-desktop": `calc(10vh + ${index * 5}em)`,
                                         "--mb-desktop": `${(servicesData.length - index - 1) * 5}rem`,
                                     }}
                                     key={index} >
                                    <div className='flex flex-col px-14 pb-10 pt-5 gap-3 border-t-2 border-white/80'>
                                        <h2 className='text-4xl md:text-6xl'>{item.title}</h2>
                                        <p className='text-xl md:text-2xl text-white/60'>{item.description}</p>
                                        <div className="">
                                            {item.items.map((it, itemIndex) => (
                                                <div key={`item-${it}--${itemIndex}`} className='flex flex-col gap-4'>
                                                    <h2 className='flex text-2xl md:text-4xl mt-4'>
                                                        <p className='mr-12'>0{itemIndex + 1}</p>
                                                        {it.title}
                                                    </h2>
                                                    {itemIndex < item.items.length - 1 && (
                                                        <div className='w-full h-px bg-white/30' />
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                </div>
                            ))}


            </section>
        </>
    )
}
export default Service
