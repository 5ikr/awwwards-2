import React from 'react'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {

    useGSAP(() => {

        gsap.to("#title-1",{
            xPercent: 20,
            scrollTrigger: {
                target: "#title-1",
                scrub: true,
            }
        })
         gsap.to("#title-2",{
            xPercent: -30,
            scrollTrigger: {
                target: "#title-2",
                scrub: true,
            }
        })
             gsap.to("#title-3",{
            xPercent: 100,
            scrollTrigger: {
                target: "#title-3",
                scrub: true,
            }
        })
         gsap.to("#title-4",{
            xPercent: -100,
            scrollTrigger: {
                target: "#title-4",
                scrub: true,
            }
        })


    });

    return (
        <section className='mt-20 flex font-medium flex-col items-center gap-4 text-6xl sm:text-7xl lg:text-8xl mb-46 overflow-hidden leading-snug contact-text-responsive'>
            <div id="title-1">
                <p>Architecture</p>
            </div>
            <div id="title-2" className='flex items-center gap-2 translate-x-16 justify-center'>
                <p>Development</p>
                <div className='w-10 h-1 bg-[#A37E2C] md:w-32' />
                <p>Deployment</p>
            </div>
            <div id="title-3" className='flex items-center gap-2 -translate-x-48 justify-center'>
                <p>APIs</p>
                <div className='w-10 h-1 bg-[#A37E2C] md:w-32' />
                <p className='italic'>Frontends</p>
                <div className='w-10 h-1 bg-[#A37E2C] md:w-32' />
                <p>Scalability</p>
            </div>
            <div id="title-4" className='translate-x-36 md:translate-x-48'>
                <p>Databases</p>
            </div>
        </section>
    )
}
export default ServiceSummary
