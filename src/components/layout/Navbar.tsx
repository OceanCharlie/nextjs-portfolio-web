"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="flex relative z-50 justify-center px-8 mt-8 lg:px-24 xl:px-28">
            <div className="max-w-[1400px] w-full">
                <div className="flex relative z-50 justify-between items-center">
                    <Link href="/" className="flex gap-3 items-center group">
                        <div className="flex relative justify-center items-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                            <span className="text-sm">OC</span>

                        </div>
                        <span className="text-sm font-medium tracking-wide text-white md:text-base">Ocean Charlie Gunawan</span>
                    </Link>

                    <div className="hidden gap-10 items-center text-sm md:flex text-neutral-300">
                        <Link href="/#work" className="relative transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r from-blue-500 to-cyan-500 after:transition-[width] after:duration-300 hover:after:w-full">Work</Link>
                        <Link href="/#about" className="relative transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r from-blue-500 to-cyan-500 after:transition-[width] after:duration-300 hover:after:w-full">About</Link>
                        <Link href="/#experience" className="relative transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-gradient-to-r from-blue-500 to-cyan-500 after:transition-[width] after:duration-300 hover:after:w-full">Journey</Link>
                        <Link href="/#contact" className="px-4 py-2 rounded-full border transition-all group border-white/10 bg-white/5 hover:bg-white/10 text-neutral-200">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Contact</span>
                        </Link>
                    </div>

                    <button
                        className="p-2 transition-colors md:hidden text-neutral-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <div className="hidden mt-3 h-px from-transparent to-transparent md:block bg-linear-to-r via-white/10" />
            </div>

            {isMobileMenuOpen && (
                <div className="absolute left-0 top-full px-8 pt-4 pb-8 w-full md:hidden">
                    <div className="flex flex-col gap-4 p-6 rounded-3xl bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 animate-in slide-in-from-top-4 fade-in duration-300">
                        <Link
                            href="/#work"
                            className="py-2 text-lg border-b text-neutral-300 hover:text-white border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Work
                        </Link>
                        <Link
                            href="/#about"
                            className="py-2 text-lg border-b text-neutral-300 hover:text-white border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/#experience"
                            className="py-2 text-lg border-b text-neutral-300 hover:text-white border-white/5"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Journey
                        </Link>
                        <Link
                            href="/#contact"
                            className="py-2 text-lg font-medium text-blue-400"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
