"use client";

import React, {useEffect, useState} from 'react'
import { ReactLenis } from "lenis/react";
import Hero from "@/components/Hero";

import {useProgress} from "@react-three/drei";
import ServiceSummary from "@/components/ServiceSummary";
import Service from "@/components/Service";
import About from "@/components/About";
import Works from "@/components/Works";

const Page = () => {

    const { progress } = useProgress();
    const [ isReady, setIsReady ] = useState(false);

    useEffect(() => {
        if(progress === 100){
            setIsReady(true);
        }
    },[progress]);

    console.log(progress);

    return (
        <ReactLenis root>
            {!isReady && (
                <div className='fixed transition-all duration-200 top-0 left-0 w-full h-svh flex flex-col gap-3 items-center justify-center  bg-black z-[9999]'>
                    <p className='text-white/80 text-2xl transition-all duration-100'>{Math.floor(progress)}%</p>
                </div>
            )}

            <div className={`${ isReady ? "opacity-100" : "opacity-0" }`} >
                <Hero />
                <ServiceSummary />
                <Service />
                <About />
                <Works />
            </div>
        </ReactLenis>
    )
}
export default Page
