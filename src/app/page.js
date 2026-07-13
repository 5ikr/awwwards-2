"use client";

import React, {useEffect, useState} from 'react'
import { ReactLenis } from "lenis/react";
import Hero from "@/components/Hero";

import {useProgress} from "@react-three/drei";

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
                    <div className="uppercase flex gap-3 items-center">
                        <h1 className='text-white text-2xl'>Loading</h1>
                        <p className='text-white/80 text-2xl transition-all duration-100'>{Math.floor(progress)}%</p>
                    </div>
                    <div className="w-[250px] md:w-[400px] h-2 bg-white/20 transition-all duration-200 rounded-full">
                        <div className="h-full bg-white/80 transition-all duration-200 rounded-full"
                            style={{ width: `${Math.floor(progress)}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div className={`${ isReady ? "opacity-100" : "opacity-0" }`} >

                <Hero />
            </div>
        </ReactLenis>
    )
}
export default Page
