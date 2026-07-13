"use client";

import React, {useRef} from 'react'
import AnimatedTextLines from "@/ui/AnimatedTextLines";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {Canvas} from "@react-three/fiber";
import {Planet} from "@/ui/Planet";

const Hero = () => {

    const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`

    const contentRef = useRef(null);
    const headerRef = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({})

        tl.from(contentRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out"
        })
        tl.from(headerRef.current, {
            y: "200",
            opacity: 0,
            duration: 1,
            ease: "circ.out"
        },"<+0.2")

    },[])

    return (
        <>
            <section id='hero' className='min-h-screen w-full bg-[#E5E5E0] flex flex-col items-center justify-center'>
                <div  ref={contentRef} className="w-full h-svh grid grid-rows-[2.75fr_1.25fr]  sm:grid-rows-[2fr_1fr] lg:grid-rows-[1.75fr_1.25fr]"
                >
                    <div className="flex justify-end border-b border-b-black"
                         style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",}}>
                        <div className="w-full overflow-hidden h-auto pt-40 flex flex-col justify-end px-10 "

                             ref={headerRef}
                        >
                            <p className="uppercase text-xs sm:text-sm lg:text-lg tracking-[6px]">404 No Bugs Found</p>
                            <h1 className="flex flex-col md:flex-row md:gap-11 -mb-5 sm:-mb-6 lg:-mb-9  text-8xl sm:text-9xl lg:text-[10rem] font-medium uppercase">
                                <span className="">Ali</span>
                                <span className="">Sanati</span>
                            </h1>
                        </div>
                    </div>
                    <div className="px-10 w-full h-auto flex items-center justify-end">
                        <AnimatedTextLines text={text} className='uppercase text-xl sm:text-2xl lg:text-4xl  text-right tracking-tight value-text-responsive'/>
                    </div>
                </div>

                <figure className="absolute inset-0 -z-50"
                        style={{ width: "100vw", height: "100vh" }}
                >
                    <Canvas shadows camera={{ position: [0,0,-10], fov: 17.5, near: 1, far: 20 }}>
                        <Planet />
                    </Canvas>
                </figure>

            </section>
        </>
    )
}
export default Hero
