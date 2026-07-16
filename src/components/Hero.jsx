"use client";

import React, {useRef, Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {Planet} from "@/ui/Planet";
import {Environment, Float, Lightformer} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import AnimatedHeadLines from "@/ui/AnimatedHeadLines";

const Hero = () => {

    const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`

    const isMobile = useMediaQuery({ maxWidth: 853 })

    return (
        <>
            <section id='home' className='min-h-screen w-full bg-[#E5E5E0] flex flex-col items-center justify-center'>

                <AnimatedHeadLines upTitle='404 bug not found' title1='Ali' title2='Sanati' desc={text} colour='black' classname="z-10 w-full overflow-hidden h-svh grid grid-rows-[2.75fr_1.25fr]  sm:grid-rows-[2fr_1fr] lg:grid-rows-[1.75fr_1fr]" />

                <figure className="absolute inset-0"
                        style={{ width: "100vw", height: "100vh" }}
                >
                    <Canvas shadows camera={{ position: [0,0,-10], fov: 17.5, near: 1, far: 20 }}>

                        <ambientLight intensity={0.5} />

                       <Float speed={0.5}>
                           <Planet scale={isMobile ? 0.7 : 1} />
                       </Float>

                        <Environment resolution={256}>
                            <group rotation={[-Math.PI / 3, 4, 1]}>
                                <Lightformer form={'circle'} intensity={2} position={[0,5,-9]} scale={10} />
                                <Lightformer form={'circle'} intensity={2} position={[0,3,1]} scale={10} />
                                <Lightformer form={'circle'} intensity={2} position={[-5,-1,-1]} scale={10} />
                                <Lightformer form={'circle'} intensity={2} position={[10,1,0]} scale={16} />
                            </group>
                        </Environment>

                    </Canvas>
                </figure>

            </section>
        </>
    )
}
export default Hero