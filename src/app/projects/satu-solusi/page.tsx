
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Code, User, Palette, Layout } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function SatuSolusiProjectPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
            <Navbar />
            
            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] bg-orange-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[20%] w-[50%] h-[50%] bg-red-500/5 rounded-full blur-[120px]" />
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
                                <span className="px-3 py-1 text-sm rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">UI/UX Design</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Figma</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">SatuSolusi Company Profile</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                Designed clean, intuitive, and brand-aligned interfaces to improve usability and readability for the company profile website.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5">
                             <ImageWithFallback
                                src="/images/satu-solusi.png"
                                alt="SatuSolusi Company Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                                    Design Philosophy
                                </h2>
                                <p className="text-neutral-300 leading-relaxed mb-6">
                                    The focus was on clarity and trust. As a corporate profile, the design needed to communicate professionalism while remaining accessible. We established a strong grid system and a harmonious color palette derived from the brand identity.
                                </p>
                            </section>

                             <section>
                                <h2 className="text-2xl font-bold mb-8 text-white">Project Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-white/10 group">
                                         <div className="absolute inset-0 flex items-center justify-center text-neutral-600 bg-neutral-900">
                                            <span>Image 1</span>
                                         </div>
                                    </div>
                                    <div className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-white/10 group">
                                         <div className="absolute inset-0 flex items-center justify-center text-neutral-600 bg-neutral-900">
                                            <span>Image 2</span>
                                         </div>
                                    </div>
                                </div>
                             </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-8 text-white">Design Process</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
                                            <Layout className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">Wireframing</h3>
                                        <p className="text-sm text-neutral-400">Started with low-fidelity wireframes to establish user flow and information architecture before touching pixels.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
                                            <Palette className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">Visual System</h3>
                                        <p className="text-sm text-neutral-400">Created a comprehensive component library in Figma to ensure consistency across all page states.</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-4 space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 sticky top-32">
                                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-white/10">Project Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><User className="w-3 h-3"/> Role</div>
                                        <div className="text-neutral-200">UI/UX Designer</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3"/> Timeline</div>
                                        <div className="text-neutral-200">Sep - Nov 2025</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3"/> Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Figma</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Illustrator</span>
                                        </div>
                                    </div>
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