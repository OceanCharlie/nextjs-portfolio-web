import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

export function SocialActions() {
    return (
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
            <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-3 font-medium tracking-wide"
                aria-label="Contact Me"
            >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>

            <a
                href="#work"
                className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 flex items-center gap-2 text-neutral-300 hover:text-white"
                aria-label="View Projects"
            >
                View Projects
            </a>

            <a
                href="mailto:oceancgs@gmail.com"
                className="group px-6 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 flex items-center gap-3 text-neutral-300 hover:text-cyan-400"
                aria-label="Send Email"
            >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden sm:inline">Email</span>
            </a>
        </div>
    );
}