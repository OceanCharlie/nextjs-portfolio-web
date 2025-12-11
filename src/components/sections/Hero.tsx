"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { StatusBadge } from './hero/StatusBadge';
import { SocialActions } from './hero/SocialActions';
import { ProfileCard } from './hero/ProfileCard';
import { StatsRow } from './hero/StatsRow';

export function Hero() {
    return (
        <section className="flex overflow-hidden relative justify-center items-center px-8 pt-28 pb-16 min-h-screen lg:px-24 xl:px-28 lg:pt-32 lg:pb-20">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
            <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse delay-700" />
            <div className="max-w-[1400px] w-full">
                <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-12 lg:gap-16">
                    <div className="flex z-10 flex-col justify-center space-y-8 lg:col-span-7 lg:space-y-10">
                        <StatusBadge />
                        <div className="space-y-4 lg:space-y-6">
                            <div>
                                <div className="mb-3 lg:mb-5 min-h-[12vw] sm:min-h-[7rem] lg:min-h-[6rem] xl:min-h-[6.5rem] flex items-center">
                                    <TypeAnimation
                                        sequence={[
                                            "Hi There",
                                            2000,
                                            "Ocean Here",
                                            2000,
                                        ]}
                                        wrapper="h1"
                                        speed={50}
                                        className="text-[10vw] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.95] tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-bold"
                                        repeat={Infinity}
                                        cursor={false}
                                    />
                                    <span className="animate-pulse text-[10vw] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.95] text-blue-400 font-bold ml-1">.</span>
                                </div>
                                <div className="flex flex-wrap gap-3 items-center text-base font-light tracking-wide sm:text-xl text-neutral-400">
                                    <span className="font-medium text-neutral-300">Information Systems Student</span>
                                    <span className="hidden text-blue-500/50 sm:inline">•</span>
                                    <span className="block w-full sm:inline sm:w-auto">Tarumanagara University</span>
                                </div>
                            </div>
                            <p className="max-w-2xl text-base font-light leading-relaxed sm:text-xl lg:text-2xl text-neutral-300">
                                Specializing in building scalable
                                <span className="text-cyan-400 font-medium bg-cyan-500/5 px-2 py-0.5 rounded-lg mx-1 inline-block">Next.js Applications</span>
                                and optimizing
                                <span className="text-blue-400 font-medium bg-blue-500/5 px-2 py-0.5 rounded-lg mx-1 inline-block">Data Warehousing Workflows</span>.
                                <span className="block mt-4 text-neutral-400 text-base sm:text-lg lg:text-xl">
                                    I bridge the gap between complex backend logic and beautiful user interfaces.
                                </span>
                            </p>
                        </div>
                        <SocialActions />
                        <StatsRow />
                    </div>
                    <div className="relative z-10 lg:col-span-5 perspective-1000">
                        <ProfileCard />
                    </div>
                </div>
                <div className="flex justify-center mt-20 opacity-50 transition-opacity duration-300 lg:mt-32 hover:opacity-100">
                    <div className="flex flex-col gap-3 items-center animate-bounce cursor-default text-neutral-500">
                        <span className="text-[10px] tracking-[0.3em] font-medium uppercase">Scroll Down</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}