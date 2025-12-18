import React from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Code, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const IMAGES = [
    { id: 1, src: "/images/gki-1.png", alt: "Gudang Kreasi Idea Book Layout 1" },
    { id: 2, src: "/images/gki-2.png", alt: "Gudang Kreasi Idea Book Layout 2" },
    { id: 3, src: "/images/gki-3.png", alt: "Gudang Kreasi Idea Book Layout 3" },
    { id: 4, src: "/images/gki-4.png", alt: "Gudang Kreasi Idea Book Layout 4" },
];

export default function GudangKreasiIdeaPage() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/30">
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
                                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Graphic Design</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Layouting</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Gudang Kreasi Idea</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                Designed and layouted educational books for Elementary (SD) to Junior High School (SMP) students, focusing on readability and engaging visuals.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                            <ImageWithFallback
                                src="/images/gudang-kreasi.png"
                                alt="Gudang Kreasi Idea"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                                    <h2 className="text-2xl font-bold text-white">Layout Gallery</h2>
                                </div>
                                <div className="space-y-8">
                                    {IMAGES.map((image) => (
                                        <div key={image.id} className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                            <ImageWithFallback
                                                src={image.src}
                                                alt={image.alt}
                                                width={1920}
                                                height={1080}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-4 space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 sticky top-32">
                                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-white/10">Project Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><User className="w-3 h-3" /> Role</div>
                                        <div className="text-neutral-200">Graphic Designer & Layout Artist</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3" /> Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe InDesign</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Photoshop</span>
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