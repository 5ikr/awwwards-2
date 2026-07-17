"use client";

import React, {useRef, useState} from 'react'
import AnimatedHeadLines from "@/ui/AnimatedHeadLines";
import {projects} from "@/constants";
import {Icon} from "@iconify/react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Works = () => {

    const text = `Featured projects that have been meticulously
                        crafted with passion to drive
                        results and impact.`

    const [currentIndex, setCurrentIndex] = useState(null);

    const previewRef = useRef(null);
    const overlayRef = useRef([]);
    const projectRef = useRef([]);

    const moveX = useRef(null);
    const moveY = useRef(null);
    const mouse = useRef({ x:0, y:0 });


    useGSAP(() => {
        moveX.current = gsap.quickTo(previewRef.current, "x", {
            duration: 1.5,
            ease: "power3.out"
        })
        moveY.current = gsap.quickTo(previewRef.current, "y", {
            duration: 2,
            ease: "power3.out"
        })
        gsap.from('#project',{
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            ease: "back.out",
            stagger: 0.3,
            scrollTrigger: {
                trigger: '#project',
            }
        })
    })

    const handleMouseEnter = (index) => {
        if(window.innerWidth < 768) return;

        const el = overlayRef.current[index];
        if(!el) return;

        gsap.killTweensOf(el)

        gsap.fromTo(el, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
        },{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            duration: 0.15,
            ease: "power2.out"
        })

        gsap.to(previewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        })

        setCurrentIndex(index)
    }

    const handleMouseLeave = (index) => {
        if(window.innerWidth < 768) return;

        const el = overlayRef.current[index];
        if(!el) return;

        gsap.killTweensOf(el)

        gsap.to(el, {
            clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            duration: 0.2,
            ease: "power2.in"
        })

        gsap.to(previewRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: "power2.out"
        })

        setCurrentIndex(null)
    }

    const handleMouseMove = (e) => {

        if(window.innerWidth < 768) return;

        mouse.current.x = e.clientX + 24;
        mouse.current.y = e.clientY + 24;

        moveY.current(mouse.current.y);
        moveX.current(mouse.current.x);
    }

    return (
        <section id='works' className='w-full min-h-screen text-black'>

            <div className="z-50 w-full h-full flex">
                <div className="w-full h-full">
                    <AnimatedHeadLines trigger={true} upTitle='Logic meets Aesthetics, Seamlessly' title1='Works' title2={null} desc={text} colour='black' classname="z-10 h-auto my-20 flex flex-col gap-9 justify-center"/>
                </div>
            </div>

            <div id='project' onMouseMove={handleMouseMove} className="relative z-0 w-full h-full flex flex-col pb-10" >
                {projects.map((project, index) => (
                    <div key={index} className='relative py-5 flex flex-col w-full group' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>

                        <div
                            ref={(el) => { overlayRef.current[index] = el; }}
                            style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                            className="absolute inset-0 hidden md:block duration-200 bg-black -z-10"
                        />

                        <div className="flex cursor-pointer justify-between group-hover:px-12 transition-all duration-150 group-hover:text-white items-center px-5 md:px-10 w-full">
                            <h2 className='text-2xl font-medium sm:text-3xl lg:text-4xl'>{project.name}</h2>
                            <Icon icon="lucide:arrow-up-right" className='size-5 md:size-6'/>
                        </div>
                        <div className="w-full h-px bg-black"></div>
                        <div className="flex group-hover:px-12 group-hover:text-white transition-all duration-150 uppercase gap-4 md:gap-6 w-full px-5 pt-2 md:px-10 text-xs md:text-lg">
                            {project.frameworks.map((framework) => (
                                <div key={framework.id}>
                                    {framework.name}
                                </div>
                            ))}
                        </div>
                        {/*Mobile img holder*/}
                        <div className="w-full relative flex items-center justify-center px-5 md:px-10 block md:hidden">
                            <img src={project.bgImage} className='w-full h-full object-cover rounded-md brightness-50 mt-2' />
                            <img src={project.image} className='absolute bg-cover rounded-md px-14' />
                        </div>
                        {/*Desktop img floater*/}
                        <div ref={previewRef} className="fixed opacity-0 z-40 -top-2/6 left-0 pointer-events-none overflow-hidden w-[720px]">
                            {
                                currentIndex !== null &&
                                (
                                    <img src={projects[currentIndex].image} className='w-full h-full object-cover rounded-[14px] brightness-90 border-3 border-black'/>
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Works
