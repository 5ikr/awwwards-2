import React, {useRef} from 'react'
import AnimatedHeadLines from "@/ui/AnimatedHeadLines";
import AnimatedTextLines from "@/ui/AnimatedTextLines";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const imgRef = useRef(null);

    const text = `Passionate about clean architecture
                        I build scalable, high-performance solutions
                        from prototype to production`

    const desc = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
                        When I’m not shipping:
                            ⚡️ Open-sourcing my latest experiment (or hacking on yours)
                            🎥 Teaching devs on Twitch/YouTube—because rising tides lift all ships
                            🧗 Rock climbing (problem-solving with real stakes)
                            🎸 Strumming chords while CI pipelines pass (multitasking at its finest)`

    useGSAP(() => {
        gsap.to('#about', {
            scale: 0.95,
            scrollTrigger: {
                trigger: '#about',
                start: 'bottom 80%',
                end: 'bottom 20%',
                scrub: true
            }
        })
    },[])

    return (
        <section id='about' className='w-full min-h-screen text-white bg-black rounded-b-4xl'>

            <div className="z-50 w-full h-full servicee flex">
                <div className="w-full h-full">
                    <AnimatedHeadLines trigger={true} upTitle='Code with purpose, Built to scale' title1='About' title2={null} desc={text} colour='white' classname="z-10 h-auto my-20 flex flex-col gap-9 justify-center"/>
                </div>
            </div>

            <div className="w-full h-full px-10 py-14 flex flex-col sm:flex-col lg:flex-row gap-8 items-center">
                <img ref={imgRef} src="/images/img1.png" alt="/" className='w-md rounded-4xl'/>
                <AnimatedTextLines text={desc} className='font-medium text-xl sm:text-2xl lg:text-3xl  text-left text-white/60'/>
            </div>



                </section>
    )
}
export default About
