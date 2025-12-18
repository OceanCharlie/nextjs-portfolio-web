import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Code, User, Instagram, Youtube, Newspaper } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { YoutubeEmbed } from '@/components/ui/YoutubeEmbed';

const VIDEOS = [
    { id: 'video1', videoId: 'aGbL-HJuYGw', title: 'TechConnect Hackathon Highlight' },
    { id: 'video2', videoId: 'CD1EXCQ_xSQ', title: 'TechConnect Hackathon Recap' },
];

const ARTICLES = [
    {
        id: 1,
        title: "Many Fascinating Ideas Emerged in the TechConnect Hackathon. Watch Out for the Second Installment",
        description: "On 30 – 31 March 2022, the first Techconnect Hackathon was held on-site at Sinarmas MSIG Tower. This hackathon, which was initiated by Techconnect through Techconnect Academy, partnered with Nanovest and Enigma Bootcamp, carries the theme of “Connect, Learn, Innovate.",
        url: "https://www.techconnect.co.id/post/many-fascinating-ideas-emerged-in-the-techconnect-hackathon-watch-out-for-the-second-installment-1",
        image: "/images/techconnect-bg.png"
    },
    {
        id: 2,
        title: "Mengenal Hackathon: Ajang Penemuan Solusi dan Inovasi",
        description: "Istilah Hackathon mungkin sudah tidak asing lagi di kalangan orang-orang yang memiliki minat dibidang IT, Programming, Teknologi, UI/UX, dan sebagainya",
        url: "https://www.techconnect.co.id/post/mengenal-hackathon-ajang-penemuan-solusi-dan-inovasi",
        image: "/images/techconnect-bg.png"
    }
];

export default function TechConnectHackathonPage() {
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
                                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Documentation</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Design</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">TechConnect Hackathon</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                Official Documentation work for TechConnect 2025 as a Documentation Team. Creating cohesive and engaging social media content to drive event awareness.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                            <ImageWithFallback
                                src="/images/hackathon.jpg"
                                alt="TechConnect Hackathon"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                                    <h2 className="text-2xl font-bold text-white">Event Highlights</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {VIDEOS.map((video) => (
                                        <div key={video.id} className="w-full">
                                            <YoutubeEmbed videoId={video.videoId} title={video.title} />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                                    <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
                                </div>

                                <div className="space-y-6">
                                    {ARTICLES.map((article) => (
                                        <a
                                            key={article.id}
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="flex flex-col md:flex-row h-full">
                                                <div className="p-6 flex flex-col justify-center">
                                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                                        {article.title}
                                                    </h3>
                                                    <p className="text-neutral-400 mb-4 line-clamp-2">
                                                        {article.description}
                                                    </p>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                                        <span className="text-cyan-400 font-medium flex items-center gap-2">
                                                            Read full article <ExternalLink className="w-4 h-4" />
                                                        </span>
                                                        <span className="text-neutral-500 italic">
                                                            Written by me
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
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
                                        <div className="text-neutral-200">Documentation Team</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Event Date</div>
                                        <div className="text-neutral-200">2022</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3" /> Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Photoshop</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Premiere Pro</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Illustrator</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                                    <Button asChild className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white hover:opacity-90 border-0">
                                        <a href="https://www.youtube.com/results?search_query=techconnect+hackathon" target="_blank" rel="noopener noreferrer">
                                            Watch on YouTube <Youtube className="w-4 h-4 ml-2" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 hover:text-white bg-transparent">
                                        <a href="https://www.techconnect.co.id" target="_blank" rel="noopener noreferrer">
                                            Visit Website <Newspaper className="w-4 h-4 ml-2" />
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