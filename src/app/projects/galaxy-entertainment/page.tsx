
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Code, User, CheckCircle2, Shield, Users, Layers, Layout, Lock, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {ImageGallery} from '@/components/shared/ImageGallery';

export default function GalaxyProjectPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20" />
            </div>

            <article className="relative z-10 pt-32 pb-20 px-8 lg:px-24 xl:px-28">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <Link href="/#work" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Projects
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Internal Portal</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Talent Management</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Galaxy Entertainment Group Website</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                A specialized Next.js web platform designed to support internal operations and talent management, facilitating reward distribution, SOP transparency, and efficient internal communication.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5">
                            <ImageWithFallback
                                src="/images/galaxy.png"
                                alt="Galaxy Entertainment Group Website"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                                <section>
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                        <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                                        About The Project
                                    </h2>
                                    <p className="text-neutral-300 leading-relaxed mb-6">
                                        This application serves as an integrated portal for both Administrators and Employees/Creators within the Galaxy Entertainment Group. It streamlines administrative needs through a robust dashboard while empowering employees with self-service tools for performance monitoring and information access.
                                    </p>
                                </section>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-8 text-white">Project Gallery</h2>
                                <ImageGallery images={[
                                    "/images/galaxy-1.png",
                                    "/images/galaxy-2.png"
                                ]} />
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-8 text-white">Key Contributions & Features</h2>
                                <div className="space-y-6">
                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-cyan-400 mb-3 flex items-center gap-2">
                                            <Layout className="w-5 h-5" /> Responsive Public Landing Page
                                        </h3>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>Modern front-facing page with interactive Framer Motion animations.</li>
                                            <li>Dynamic Hero, About, and Benefit sections to introduce the company.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-blue-400 mb-3 flex items-center gap-2">
                                            <Shield className="w-5 h-5" /> Management Dashboard (Admin)
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Complete control center for administrative operations.</p>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>User Management (CRUD for Employees & Agencies).</li>
                                            <li>Reward & Target distribution monitoring.</li>
                                            <li>Content Management System for SOPs and Announcements.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-indigo-400 mb-3 flex items-center gap-2">
                                            <Users className="w-5 h-5" /> Employee Portal
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Self-service area for employees and creators.</p>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>Profile personalization and account management.</li>
                                            <li>Real-time transparency of achieved rewards and incentives.</li>
                                            <li>Access to company documents and appeal services.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-emerald-400 mb-3 flex items-center gap-2">
                                            <Layers className="w-5 h-5" /> Modern Tech Architecture
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Built with Next.js 15 App Router and React 19. Utilizes TanStack Query for efficient server-state management and Framer Motion for premium user interactions.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Role & Contribution</h3>
                                <div className="space-y-4 text-neutral-300">
                                    <p className="border-l-4 border-cyan-500 pl-4 italic">
                                        "Developed the frontend architecture using Next.js App Router for optimal performance. I implemented pixel-perfect responsive designs and integrated complex REST APIs with TanStack Query to ensure efficient data management and caching across the application."
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-4 space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 sticky top-32">
                                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-white/10">Project Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><User className="w-3 h-3" /> Role</div>
                                        <div className="text-neutral-200">Frontend Developer</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Timeline</div>
                                        <div className="text-neutral-200">Sep - Nov 2025</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3" /> Tech Stack</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Next.js 15</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">React 19</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">TypeScript</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Tailwind 4</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">TanStack Query</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Database className="w-3 h-3" /> Key Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Framer Motion</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Axios</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">JWT</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Button disabled className="w-full bg-white/5 text-neutral-400 border border-white/10 cursor-not-allowed hover:bg-white/5">
                                        Visit Website <Lock className="w-4 h-4 ml-2" />
                                    </Button>
                                    <p className="text-xs text-neutral-500 text-center mt-3 leading-relaxed">
                                        Internal Portal - Restricted Access
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