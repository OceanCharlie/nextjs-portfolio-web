
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Code, User, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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
                                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Next.js</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">CMS Integration</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Galaxy Entertainment Group Website</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                Designed the data flow and integrated frontend components with the CMS, ensuring efficient data retrieval and Role-Based Access Control (RBAC) security implementation.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5">
                             <ImageWithFallback
                                src="/images/galaxy.png"
                                alt="Galaxy Entertainment Group"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                                    Project Challenge
                                </h2>
                                <p className="text-neutral-300 leading-relaxed mb-6">
                                    The main challenge was to integrate a complex CMS with a high-performance Next.js frontend while maintaining strict security protocols through RBAC. The system needed to handle large volumes of media assets and provide real-time updates to the end-users without compromising page load speeds.
                                </p>
                                <p className="text-neutral-300 leading-relaxed">
                                    We focused on creating a seamless bridge between the content editors and the public-facing website, utilizing Incremental Static Regeneration (ISR) to ensure content freshness with static-like performance.
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
                                <h2 className="text-2xl font-bold mb-8 text-white">Technological Approach</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                                            <Code className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">Frontend Architecture</h3>
                                        <p className="text-sm text-neutral-400">Built with Next.js App Router for optimal performance and SEO capabilities using Server Components.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">Security & CMS</h3>
                                        <p className="text-sm text-neutral-400">Implemented granular RBAC to manage content access levels securely across different administrative roles.</p>
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
                                        <div className="text-neutral-200">Frontend Developer</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3"/> Timeline</div>
                                        <div className="text-neutral-200">Sep - Nov 2025</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3"/> Tech Stack</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Next.js</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Tailwind</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">TypeScript</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Button className="w-full bg-white text-black hover:bg-neutral-200">
                                        Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                                    </Button>
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