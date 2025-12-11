"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export function Contact() {
    return (
        <section id="contact" className="py-28 lg:py-32 px-8 lg:px-24 xl:px-28 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="text-sm text-blue-400 mb-8 tracking-widest">GET IN TOUCH</div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-[0.95]">
                            Want to know more?<br />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block mt-2">
                                Let&apos;s Connect
                            </span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-neutral-400 mb-8 leading-relaxed">
                            Currently seeking 6-month internship opportunities in Frontend Development, UI/UX Design, or Data-Driven Development.
                        </p>
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10">
                            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-blue-400">Available for Opportunities</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <a
                            href="mailto:oceancgs@gmail.com"
                            className="group block rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl p-6 md:p-10 hover:border-blue-500/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <div className="text-xs md:text-sm text-blue-400 tracking-widest">EMAIL</div>
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <p className="text-xl md:text-3xl group-hover:text-blue-400 transition-colors break-all">oceancgs@gmail.com</p>
                        </a>

                        <a
                            href="https://wa.me/+6282246101507"
                            className="group block rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl p-6 md:p-10 hover:border-cyan-500/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <div className="text-xs md:text-sm text-cyan-400 tracking-widest">PHONE</div>
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <p className="text-xl md:text-3xl group-hover:text-cyan-400 transition-colors">+62 822 4610 1507</p>
                        </a>

                        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl p-6 md:p-10">
                            <div className="text-sm text-blue-400 mb-6 tracking-widest">SOCIAL</div>
                            <div className="space-y-4">
                                <a
                                    href="https://linkedin.com/in/ocean-charlie-gunawan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <SiLinkedin className="w-6 h-6 text-blue-400" />
                                        <span className="text-lg">LinkedIn</span>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </a>

                                <a
                                    href="https://github.com/OceanCharlie"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/5 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <SiGithub className="w-6 h-6 text-cyan-400" />
                                        <span className="text-lg">GitHub</span>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}