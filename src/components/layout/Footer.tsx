"use client";

import React from 'react';

export function Footer() {
    return (
        <footer className="py-12 px-8 lg:px-16 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-600">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <span className="text-xs">OC</span>
                        </div>
                        <span>© 2025 Ocean Charlie Gunawan</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-blue-400">·</span>
                        <span>Jakarta, Indonesia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}