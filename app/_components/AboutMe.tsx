'use client';

import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.slide-up-and-fade', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
                y: 120,
                opacity: 0,
                stagger: 0.06,
            });
        },
        { scope: container }
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container max-w-6xl mx-auto" ref={container}>
                
                {/* QUOTE */}
                <h2 className="text-4xl md:text-6xl font-light slide-up-and-fade text-green-400 leading-tight mb-16">
                    “Innovation distinguishes between a leader and a follower.”
                    <br />
                    <br />
                    <span className="text-white text-xl md:text-2xl font-normal">
                        — Steve Jobs
                    </span>
                </h2>

                {/* SUB INTRO */}
                <p className="pb-6 border-b text-muted-foreground slide-up-and-fade leading-relaxed max-w-3xl">
                    The goal of my work is to craft digital experiences that are not only visually appealing
                    <br />
                    but also functionally robust.
                    <br />
                    <br />
                    I believe that great design and development go hand in hand
                    <br />
                    to create solutions that truly resonate with users.
                </p>

                {/* MAIN CONTENT */}
                <div className="grid md:grid-cols-12 gap-12 mt-14 items-center">
                    
                    {/* LEFT PHOTO */}
                    <div className="md:col-span-4 slide-up-and-fade flex justify-center">
                        <div className="relative w-72 h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/me.jpg"
                                alt="Aadarsh B.K."
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="md:col-span-8">
                        <p className="text-5xl md:text-6xl slide-up-and-fade text-green-400 mb-10 leading-none">
                            Hi, I&apos;m Aadarsh.
                        </p>

                        <p className="text-lg md:text-xl text-muted-foreground slide-up-and-fade leading-relaxed max-w-3xl">
                            I&apos;m a full-stack MERN engineer with 3 years of experience,
                            <br />
                            building custom web applications, automation tools,
                            <br />
                            and AI-powered solutions for small businesses.
                            <br />
                            <br />
                            I create scalable, efficient, and user-friendly digital solutions
                            <br />
                            that streamline operations and drive growth,
                            <br />
                            turning your ideas into real-world applications
                            <br />
                            that save time and enhance productivity.
                            <br />
                            <br />
                            I am currently available for freelance projects
                            <br />
                            and ready to deliver solutions tailored to your business needs.
                        </p>

                        <p className="mt-10 slide-up-and-fade text-green-400 font-semibold tracking-wide text-lg">
                            TURN IDEAS INTO REALITY WITH AADARSH B.K.
                            <br />
                            YOUR PARTNER FOR CUSTOM WEB SOLUTIONS.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
