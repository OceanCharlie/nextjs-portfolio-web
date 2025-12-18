
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Code, User, Database, Shield, BarChart3, Clock, Layout, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ImageGallery } from '@/components/shared/ImageGallery';

export default function ITKnowledgeProjectPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20" />
            </div>

            <article className="relative z-10 pt-32 pb-20 px-8 lg:px-24 xl:px-28">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <Link href="/projects" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Projects
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Web Application</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Booking System</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">IT Knowledge Center Booking System</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                A modern web application designed to facilitate the reservation of meeting rooms at the IT Knowledge Center, Faculty of Information Technology, Tarumanagara University.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5">
                            <ImageWithFallback
                                src="/images/it-knowledge.png"
                                alt="IT Knowledge Center Booking System"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                                <section>
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                        <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                                        About The Project
                                    </h2>
                                    <p className="text-neutral-300 leading-relaxed mb-6">
                                        This application acts as a bridge between students/lecturers and the IT Knowledge Center&apos;s facilities, replacing manual systems with an efficient digital platform. Integrated with a Laravel backend, it is designed for scalability and ease of use.
                                    </p>
                                    <h3 className="text-lg font-semibold text-white mb-2">Key Objectives:</h3>
                                    <ul className="list-disc list-inside text-neutral-300 space-y-2 mb-6">
                                        <li>Drastically simplify the meeting room reservation process.</li>
                                        <li>Provide real-time transparency of room availability schedules.</li>
                                        <li>Centralized and structured administrative management.</li>
                                    </ul>
                                </section>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-8 text-white">Project Gallery</h2>
                                <ImageGallery images={[
                                    "/images/it-knowledge-1.png",
                                    "/images/it-knowledge-2.png"
                                ]} />
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-8 text-white">Key Contributions & Features</h2>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-purple-400 mb-3 flex items-center gap-2">
                                            <Shield className="w-5 h-5" /> Authentication & Security
                                        </h3>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>Developed secure Login & Register systems.</li>
                                            <li>Implemented Protected Routes using Next.js Middleware.</li>
                                            <li>Integrated JWT for secure client-side session management.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-indigo-400 mb-3 flex items-center gap-2">
                                            <BarChart3 className="w-5 h-5" /> Interactive Admin Dashboard
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Comprehensive analytics for faculties using Recharts for responsive statistical visualization.</p>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>Real-time indicators for pending bookings.</li>
                                            <li>Automated CSV export for monthly administrative reports.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-blue-400 mb-3 flex items-center gap-2">
                                            <Clock className="w-5 h-5" /> Reservation Management
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Built dynamic Booking Forms with complex validation using React Hook Form and automatic conflict detection.</p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-emerald-400 mb-3 flex items-center gap-2">
                                            <Layout className="w-5 h-5" /> Modern & Responsive UI/UX
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Premium interface design with Glassmorphism, Tailwind CSS styling, and Framer Motion animations. Optimized state management with SWR.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Technical Highlight</h3>
                                <blockquote className="text-lg text-neutral-300 italic border-l-4 border-blue-500 pl-4">
                                    &quot;In this project, I utilized the Next.js App Router to enhance SEO performance and initial load times. I also implemented Custom Hooks patterns (such as useDashboardData, usePagination) to separate business logic from UI, resulting in cleaner, maintainable, and testable code.&quot;
                                </blockquote>
                            </section>
                        </div>

                        <div className="lg:col-span-4 space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 sticky top-32">
                                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-white/10">Project Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><User className="w-3 h-3" /> Role</div>
                                        <div className="text-neutral-200">Front-End Developer</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Timeline</div>
                                        <div className="text-neutral-200">Aug - Sep 2025</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3" /> Tech Stack</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Next.js 15</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">React 19</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">TypeScript 5</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Tailwind CSS 4</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">SWR</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Database className="w-3 h-3" /> Key Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Recharts</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Framer Motion</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">React Hook Form</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Button disabled className="w-full bg-white/5 text-neutral-400 border border-white/10 cursor-not-allowed hover:bg-white/5">
                                        Visit Website <Lock className="w-4 h-4 ml-2" />
                                    </Button>
                                    <p className="text-xs text-neutral-500 text-center mt-3 leading-relaxed">
                                        This project is deployed on a local server and is only accessible within the campus intranet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}