import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Code, User, Instagram } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { InstagramEmbedWrapper } from '@/components/ui/InstagramEmbedWrapper';

const POSTS = [
    { id: 201, title: "Post 1", url: "https://www.instagram.com/techconnect_id/p/DDJjtrzzz8V/" },
    { id: 202, title: "Post 2", url: "https://www.instagram.com/techconnect_id/p/DE1D4gWz86d/" },
    { id: 203, title: "Post 3", url: "https://www.instagram.com/techconnect_id/p/DGm1LGiT2mz/" },
    { id: 204, title: "Post 4", url: "https://www.instagram.com/techconnect_id/p/DHITtn2TkCE/" },
    { id: 205, title: "Post 5", url: "https://www.instagram.com/techconnect_id/p/DHqFhD6zk3A/" },
    { id: 206, title: "Post 6", url: "https://www.instagram.com/techconnect_id/p/DJEP2P0TYb5/" },
    { id: 207, title: "Post 7", url: "https://www.instagram.com/techconnect_id/p/DJVoFWfTLwM/" },
    { id: 208, title: "Post 8", url: "https://www.instagram.com/techconnect_id/p/DJqIlURzvwD/" },
    { id: 209, title: "Post 9", url: "https://www.instagram.com/techconnect_id/p/DKMGTbVTVsU/" },
];

export default function TechConnectProjectPage() {
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
                                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Social Media</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Branding</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Visual Design - TechConnect 2025</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                Official graphic design work for TechConnect 2025 as a Mitra TechConnect. Creating cohesive and engaging social media content to drive event awareness.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                            <ImageWithFallback
                                src="/images/techconnect-bg.png"
                                alt="Visual Design - TechConnect 2025"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                                <section>
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                        <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                                        Instagram Feed
                                    </h2>
                                    <p className="text-neutral-300 leading-relaxed mb-6">
                                        A curated collection of social media posts designed to boost engagement and communicate event details effectively.
                                    </p>
                                </section>
                            </section>

                            <section>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {POSTS.map((post) => (
                                        <div key={post.id} className="flex justify-center bg-[#0A0A0A] rounded-3xl overflow-hidden border border-white/10 h-[500px] overflow-y-auto custom-scrollbar">
                                            <div className="w-full">
                                                <InstagramEmbedWrapper url={post.url} width="100%" captioned />
                                            </div>
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
                                        <div className="text-neutral-200">Graphic Designer</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Event Date</div>
                                        <div className="text-neutral-200">2025</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3" /> Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Photoshop</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Illustrator</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-purple-800 text-white hover:opacity-90 border-0">
                                        <a href="https://www.instagram.com/techconnect_id/" target="_blank" rel="noopener noreferrer">
                                            Visit Instagram <Instagram className="w-4 h-4 ml-2" />
                                        </a>
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