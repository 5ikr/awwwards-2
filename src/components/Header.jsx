"use client";

import React, {useState, useRef, useEffect} from 'react'
import { Link } from "react-scroll";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Header = () => {

    const navRef = useRef(null);
    const linksRef = useRef([]);
    const contactRef = useRef(null);

    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);

    const tl = useRef(null);
    const tlIcon = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [showBurger, setShowBurger] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const shouldShow = currentScrollY <= lastScrollY || currentScrollY < 10;

            setShowBurger(shouldShow);

            // Fix the loop: Close the menu safely inside the event handler when scrolling down
            if (!shouldShow) {
                setIsOpen(false);
                if (tl.current) tl.current.reverse();
                if (tlIcon.current) tlIcon.current.reverse();
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useGSAP(() => {

        const validLinks = linksRef.current.filter(Boolean);

        gsap.set(navRef.current, { xPercent:100 });
        gsap.set([...validLinks, contactRef.current], {
            autoAlpha: 0,
            x: -20,
        });

        tl.current = gsap
            .timeline({ paused: true })
            .to(navRef.current, {
                xPercent: 0,
                duration: 1,
                ease: "power3.out"
            })
            .to(linksRef.current, {
                x: 0,
                autoAlpha: 1,
                ease: "power2.inOut",
                duration: 0.5,
                stagger: 0.1,
            } , "<+0.1")
            .to(contactRef.current, {
                x:0,
                autoAlpha: 1,
                ease: "power2.inOut",
                duration: 0.5,
            } , "<+0.2")

        tlIcon.current = gsap
            .timeline({ paused: true })
            .to(topLineRef.current, {
                rotate: 45,
                y: 3.3,
                duration: 0.3,
                ease: "power2.inOut",
            })
            .to(bottomLineRef.current, {
                rotate: -45,
                y: -2,
                duration: 0.3,
                ease: "power2.inOut",
            }, "<")

    },[])

    const toggleMenu = () => {
        if(isOpen){
            tl.current.reverse();
            tlIcon.current.reverse();
        }
        else{
            tl.current.play();
            tlIcon.current.play();
        }
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav
                style={
                    showBurger ? { opacity: "1", transition: "all", duration: "100" } : { opacity: "0" }
                }
                ref={navRef} className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2">
                <ul className="flex flex-col w-full h-auto items-start gap-3">
                    {["Home","Services","About","Work","Contact"].map((item,index) => (
                        <div ref={(el) => linksRef.current[index] = el} key={index}>
                            <Link
                                to={item.toLowerCase()} onClick={toggleMenu} className='uppercase cursor-pointer text-5xl md:text-8xl font-medium hover:text-white transition-all duration-300'>
                                {item}
                            </Link>
                        </div>
                    ))}
                </ul>
                <div ref={contactRef} className="flex flex-col md:flex-row gap-4  w-full justify-between items-start md:items-center">
                    <p className="flex flex-col text-white/70">
                        Email: {" "}
                        <a href="#" className="font-medium text-white/90">hello@gmail.com</a>
                    </p>
                    <p className="flex flex-col">
                        Social Media: {" "}
                        <span className="flex flex-col md:flex-row gap-2 font-medium text-white/90">
                                {[  {
                                    media: "Instagram",
                                    link: "https://www.instagram.com/instagram/",
                                },
                                    {
                                        media: "Facebook",
                                        link: "https://www.facebook.com/",
                                    },
                                    {
                                        media: "Twitter",
                                        link: "https://twitter.com/",
                                    },{
                                        media: "Linkedin",
                                        link: "https://www.linkedin.com/company/",
                                    }].map((item) => (
                                    <a key={item.media} className='hover:text-white transition-all duration-200' href={item.link}>
                                        {"{ "}{"   "} {item.media}{"   "} {" }"}
                                    </a>
                                ))}
                            </span>
                    </p>


                </div>
            </nav>
            <div onClick={toggleMenu} className="fixed cursor-pointer z-50 w-14 h-14 transition-all duration-300 rounded-full md:w-20 md:h-20 top-4 right-10 bg-black flex flex-col items-center justify-center gap-1"
                 style={
                     showBurger ? { clipPath: "circle(50% at 50% 50%)" } : { clipPath: "circle(0% at 50% 50%)" }
                 }
            >
                <span ref={topLineRef} className="w-8 h-0.5 bg-white/90"></span>
                <span ref={bottomLineRef} className="w-8 h-0.5 bg-white/90"></span>
            </div>

        </>
    )
}
export default Header