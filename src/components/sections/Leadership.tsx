"use client";

import React from 'react';
import { Camera, PenTool, Megaphone, PartyPopper, MapPin, Palette } from 'lucide-react';

const organizationalExperience = [
    {
        role: 'UI/UX Bootcamp Instructor',
        company: 'Untar Computer Club Development',
        period: 'Oct 2024 - Jan 2025',
        description: 'Developed curriculum and taught UI/UX design fundamentals, user research, and design thinking using Figma',
        icon: PenTool
    },
    {
        role: 'Head of Media Information Department',
        company: 'BEM FTI Untar',
        period: 'Jul 2024 - Jul 2025',
        description: 'Led 13-member creative team, improved social media engagement by 62%',
        icon: Megaphone
    },
    {
        role: 'Project Leader',
        company: 'Welcoming Party FTI Untar 2024',
        period: '2024',
        description: 'Led and coordinated welcoming event for new students',
        icon: PartyPopper
    },
    {
        role: 'Deputy Project Leader',
        company: 'BEMF-IK UPNVJ Study Visit',
        period: '2025',
        description: 'Co-led inter-university study visit program',
        icon: MapPin
    },
    {
        role: 'Art & Creative Coordinator',
        company: 'I/O Festival 2025',
        period: '2025',
        description: 'Managed creative direction and visual assets for national tech festival',
        icon: Palette
    },
    {
        role: 'Publication & Documentation Coordinator',
        company: 'Desa Binaan FTI Untar',
        period: '2025',
        description: 'Coordinated documentation and publication for community service program',
        icon: Camera
    }
];

export function Leadership() {
    return (
        <section className="px-8 py-28 border-t lg:py-32 lg:px-24 xl:px-28 border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-16 lg:mb-20">
                    <div className="mb-4 text-sm tracking-widest text-blue-400">LEADERSHIP & INVOLVEMENT</div>
                    <h2 className="mb-4 text-4xl leading-tight lg:text-5xl">Organizational Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {organizationalExperience.map((exp, index) => (
                        <div
                            key={index}
                            className="p-8 bg-gradient-to-br rounded-3xl border backdrop-blur-xl transition-all border-white/10 from-neutral-900/50 to-neutral-950/50 hover:border-blue-500/30 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex justify-center items-center w-14 h-14 rounded-2xl border transition-transform bg-blue-500/10 border-blue-500/20 group-hover:scale-110">
                                    <exp.icon className="w-7 h-7 text-blue-400" />
                                </div>
                                <span className="px-3 py-1 text-xs rounded-full border bg-white/5 text-neutral-500 border-white/10">{exp.period}</span>
                            </div>
                            <h3 className="mb-2 text-2xl">{exp.role}</h3>
                            <p className="mb-4 text-neutral-400">{exp.company}</p>
                            <p className="text-sm leading-relaxed text-neutral-500">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}