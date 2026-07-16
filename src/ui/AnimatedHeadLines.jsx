import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import AnimatedTextLines from "@/ui/AnimatedTextLines";
import { ScrollTrigger  } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const AnimatedHeadLines = ({upTitle, title1, title2, desc, colour, classname, trigger = false }) => {

    const contentRef = useRef(null);
    const headerRef = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: trigger ? {
                trigger: contentRef.current,
            } : undefined,
        })

        tl.from(contentRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out"
        })
        tl.from(headerRef.current, {
            y: "200",
            opacity: 0,
            duration: 1,
            ease: "circ.out",
        },"<+0.2")

    },[])

    return (
        <>
            <div  ref={contentRef} className={classname}
            >
                <div className={`flex w-full overflow-x-hidden justify-end border-b border-b-${colour}`}
                     style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",}}>
                    <div className="w-full overflow-hidden h-auto flex flex-col justify-end px-10 "

                         ref={headerRef}
                    >
                        <p className="uppercase text-xs sm:text-sm lg:text-lg tracking-[6px]">{upTitle}</p>
                        <h1 className="flex flex-col md:flex-row md:gap-11 -mb-5 sm:-mb-6 lg:-mb-9  text-7xl sm:text-9xl lg:text-[10rem] font-medium uppercase">
                            <span className="">{title1}</span>
                            <span className="">{title2}</span>
                        </h1>
                    </div>
                </div>
                <div className="px-10 w-full h-auto flex items-center justify-end">
                    <AnimatedTextLines text={desc} className='uppercase text-lg sm:text-2xl lg:text-4xl  text-right tracking-tight value-text-responsive'/>
                </div>
            </div>
        </>
    )
}
export default AnimatedHeadLines
