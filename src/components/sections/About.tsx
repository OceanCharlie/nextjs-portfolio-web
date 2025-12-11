"use client";

import React from 'react';
import { GraduationCap } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="px-8 py-28 lg:py-32 lg:px-24 xl:px-28">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid gap-16 lg:grid-cols-2 xl:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="p-8 bg-gradient-to-br rounded-3xl border backdrop-blur-xl border-white/10 from-neutral-900/50 to-neutral-950/50">
                            <div className="flex gap-4 items-start mb-6">
                                <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 rounded-2xl border bg-blue-500/10 border-blue-500/20">
                                    <GraduationCap className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl">Universitas Tarumanagara</h3>
                                    <p className="text-neutral-400">Bachelor of Information Systems</p>
                                    <p className="mt-2 text-sm text-neutral-400">August 2023 — Present · GPA 3.66/4.00</p>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-white/5">
                                <p className="mb-3 text-sm text-neutral-500">Relevant Courses:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Oracle DBA', 'Database Design', 'Web Development', 'Software Development', 'OOP'].map((course) => (
                                        <span key={course} className="px-3 py-1 text-xs rounded-full border bg-white/5 text-neutral-400 border-white/10">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <div className="mb-4 text-sm tracking-widest text-blue-400">CURENTLY</div>
                            <h2 className="mb-6 text-4xl leading-tight lg:text-5xl lg:mb-8">
                                Building the<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Future
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                        </div>

                        <p className="text-xl leading-relaxed lg:text-2xl text-neutral-300">
                            As an undergraduate Information Systems student at Tarumanagara University with a specialized focus on Frontend Engineering, Database Administration, and Data-Driven Development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}