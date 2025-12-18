import React from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Code, ExternalLink, Instagram, Youtube, Newspaper } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { InstagramEmbedWrapper } from '@/components/ui/InstagramEmbedWrapper';
import { YoutubeEmbed } from '@/components/ui/YoutubeEmbed';

const POSTS = [
    { id: 701, url: "https://www.instagram.com/techconnect_id/p/CYoGhm5PQP8/" },
    { id: 702, url: "https://www.instagram.com/p/CZMLXbXPkql/" },
    { id: 703, url: "https://www.instagram.com/p/CZwIvnZvzd8/" },
    { id: 704, url: "https://www.instagram.com/p/CagPtBtPDOl/" },
    { id: 705, url: "https://www.instagram.com/p/CYtDvHal-wY/?utm_source=ig_web_copy_link" },
    { id: 706, url: "https://www.instagram.com/p/Can7vJyPOLc/" },
    { id: 707, url: "https://www.instagram.com/techconnect_id/reel/CdCMfpODxhS/" },
    { id: 708, url: "https://www.instagram.com/techconnect_id/p/CdmXaiAv0XW/" },
];

const VIDEOS = [
    { id: 'v1', videoId: 'xkU0AKynkQA', title: 'TechConnect Featured Video' },
    { id: 'v2', videoId: '7ORrdtl7Ajc', title: 'TechConnect Website Launch Teaser' },
];

const ARTICLE = {
    title: "Fasting Is Not An Obstacle To Stay Productive",
    description: "Discover how to maintain productivity and focus during the fasting month with these tips from TechConnect.",
    url: "https://www.techconnect.co.id/post/fasting-is-not-an-obstacle-to-stay-productive"
};

export default function TechConnectInternPage() {
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
                                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Design</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">TechConnect Internship</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                A collection of social media designs and content created during my internship at TechConnect, including work for TechConnect Academy.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                            <ImageWithFallback
                                src="/images/techconnect-intern.png"
                                alt="TechConnect Internship"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-1 h-8 bg-red-600 rounded-full"></span>
                                    <h3 className="text-xl font-bold text-white">Featured Videos</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {VIDEOS.map((video) => (
                                        <div key={video.id} className="w-full">
                                            <YoutubeEmbed videoId={video.videoId} title={video.title} />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                                    <h3 className="text-xl font-bold text-white">Featured Article</h3>
                                </div>
                                <a
                                    href={ARTICLE.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                                            {ARTICLE.title}
                                        </h4>
                                        <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                                            {ARTICLE.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
                                            Read article <ExternalLink className="w-3 h-3" />
                                        </div>
                                    </div>
                                </a>
                            </section>

                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                                <section>
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                        <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                                        Design Gallery
                                    </h2>
                                    <p className="text-neutral-300 leading-relaxed mb-6">
                                        Featured works comprising collaborative posts, event announcements, and educational content.
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
                                        <div className="text-neutral-200">Graphic Design & Multimedia Content Creator Intern</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Year</div>
                                        <div className="text-neutral-200">2022</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3" /> Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Photoshop</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Illustrator</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Adobe Premiere Pro</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                                    <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:opacity-90 border-0">
                                        <a href="https://www.instagram.com/techconnect_id/" target="_blank" rel="noopener noreferrer">
                                            Visit Instagram <Instagram className="w-4 h-4 ml-2" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 hover:text-white bg-transparent">
                                        <a href="https://www.youtube.com/watch?v=xkU0AKynkQA" target="_blank" rel="noopener noreferrer">
                                            Watch Video <Youtube className="w-4 h-4 ml-2" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 hover:text-white bg-transparent">
                                        <a href={ARTICLE.url} target="_blank" rel="noopener noreferrer">
                                            Read Article <Newspaper className="w-4 h-4 ml-2" />
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