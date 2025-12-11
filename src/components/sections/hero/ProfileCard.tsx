import React from 'react';
import Image from 'next/image';
import { Database, Code2, Layout } from 'lucide-react';

export function ProfileCard() {
    return (
        <div className="relative group select-none">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-black/50 aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto h-[450px] sm:h-[550px] lg:h-[600px] w-full max-w-sm lg:max-w-none mx-auto">
                <div className="relative h-full w-full">
                    <Image
                        src="/images/profile.jpg"
                        alt="Ocean Charlie Gunawan"
                        fill
                        priority
                        quality={100}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent mix-blend-overlay" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                        {[
                            { Icon: Database, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                            { Icon: Code2, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                            { Icon: Layout, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`w-12 h-12 rounded-2xl ${item.bg} border ${item.border} backdrop-blur-md flex items-center justify-center transform hover:-translate-y-1 transition-transform duration-300`}
                            >
                                <item.Icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                        ))}
                    </div>

                    <div className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                        Teaching Oracle DBA Course
                    </div>
                </div>
            </div>
        </div>
    );
}