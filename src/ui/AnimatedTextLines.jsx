"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const AnimatedTextLines = ({ className, text }) => {

    const lines = text.split('\n').filter((line) => line.trim() !== "");
    const containerRef = useRef(null);
    const linesRef = useRef([]);

    useGSAP(() => {
        if (linesRef.current.length > 0) {
            gsap.from(linesRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "back.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                },
            });
        }
    });


    return (
        <div className={className} ref={containerRef}>
            {lines.map((line, index) => (
                <span
                    key={index}
                    className="block leading-relaxed tracking-wide text-pretty"
                    ref={(el) =>( linesRef.current[index] = el)}
                >
                    {line}
                </span>
            ))}
        </div>
    )
}
export default AnimatedTextLines
