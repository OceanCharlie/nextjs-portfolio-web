"use client";

import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const educationData = [
    {
        school: "Universitas Tarumanagara",
        degree: "Bachelor of Information Systems",
        period: "August 2023 — Present",
        gpa: "3.66/4.00",
        courses: ['Web Development', 'Software Development', 'OOP', 'Oracle DBA', 'Database Design']
    },
    {
        school: "SMK Strada 1",
        degree: "Digital Marketing Communication",
        period: "August 2019 — May 2023",
        gpa: null,
        courses: ['Digital Marketing', 'Content Creation', 'Social Media Management', 'Communication', 'Branding', 'Graphic Design', 'Photography']
    }
];

export function About() {
    const [activeEducation, setActiveEducation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveEducation((prev) => (prev + 1) % educationData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="px-8 py-28 lg:py-32 lg:px-24 xl:px-28">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid gap-16 lg:grid-cols-2 xl:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeEducation}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-8 bg-gradient-to-br rounded-3xl border backdrop-blur-xl border-white/10 from-neutral-900/50 to-neutral-950/50"
                                >
                                    <div className="flex gap-4 items-start mb-6">
                                        <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 rounded-2xl border bg-blue-500/10 border-blue-500/20">
                                            <GraduationCap className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-xl">{educationData[activeEducation].school}</h3>
                                            <p className="text-neutral-400">{educationData[activeEducation].degree}</p>
                                            <p className="mt-2 text-sm text-neutral-400">{educationData[activeEducation].period}</p>
                                            {educationData[activeEducation].gpa && (
                                                <p className="text-sm text-neutral-500">GPA {educationData[activeEducation].gpa}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t border-white/5">
                                        <p className="mb-3 text-sm text-neutral-500">Relevant Courses/Skills:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {educationData[activeEducation].courses.map((course) => (
                                                <span key={course} className="px-3 py-1 text-xs rounded-full border bg-white/5 text-neutral-400 border-white/10">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex justify-center gap-2 mt-6">
                                {educationData.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveEducation(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeEducation === idx ? 'bg-blue-400 w-6' : 'bg-white/20 hover:bg-white/40'
                                            }`}
                                    />
                                ))}
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