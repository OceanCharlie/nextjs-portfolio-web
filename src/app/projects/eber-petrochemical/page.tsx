import React from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Code, Youtube } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { YoutubeEmbed } from '@/components/ui/YoutubeEmbed';

export default function EberPetrochemicalPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/30">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[20%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20" />
            </div>

            <article className="relative z-10 pt-32 pb-20 px-8 lg:px-24 xl:px-28">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <Link href="/projects" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Projects
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Video Editing</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Eber Petrochemical</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                A compilation video featuring greetings and messages from various branches of Eber Petrochemical.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                            <ImageWithFallback
                                src="/images/eber.png"
                                alt="Eber Petrochemical"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                                    <h2 className="text-2xl font-bold text-white">Greeting Video</h2>
                                </div>
                                <div className="w-full">
                                    <YoutubeEmbed videoId="A2E9D2kmqZI" title="Eber Petrochemical Greeting Video" />
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-4 space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 sticky top-32">
                                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-white/10">Project Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><User className="w-3 h-3" /> Role</div>
                                        <div className="text-neutral-200">Video Editor</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Year</div>
                                        <div className="text-neutral-200">2022</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3" /> Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Premiere Pro</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">After Effects</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Button asChild className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white hover:opacity-90 border-0">
                                        <a href="https://www.youtube.com/watch?v=A2E9D2kmqZI" target="_blank" rel="noopener noreferrer">
                                            Watch on YouTube <Youtube className="w-4 h-4 ml-2" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}