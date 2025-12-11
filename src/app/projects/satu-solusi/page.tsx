
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Code, User, Palette, Layout, Globe, DollarSign, FileText, MessageCircle, Lock } from 'lucide-react';
import { ImageGallery } from '@/components/shared/ImageGallery';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';
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
                                <span className="px-3 py-1 text-sm rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Company Profile</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">SatuSolusi Company Profile</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                Designed a comprehensive corporate website focusing on service clarity, pricing transparency, and lead generation through strategic layouting of services, articles, and consultation points.
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
                                <section>
                                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                        <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                                        About The Project
                                    </h2>
                                    <p className="text-neutral-300 leading-relaxed mb-6">
                                        The goal was to create a digital presence that builds trust and clearly communicates value. We structured the site to guide users naturally from understanding the "Services" to checking "Prices & Promos", and finally taking action via "Consultation".
                                    </p>
                                </section>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-8 text-white">Project Gallery</h2>
                                <ImageGallery images={[
                                    "/images/satu-solusi-1.png",
                                    "/images/satu-solusi-2.png"
                                ]} />
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-8 text-white">Key Pages & Features</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-orange-400 mb-3 flex items-center gap-2">
                                            <Globe className="w-5 h-5" /> Service Catalog
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Homepage integration.</p>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>Showcasing core services clearly on the homepage.</li>
                                            <li>Intuitive navigation to detailed service offerings.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-red-400 mb-3 flex items-center gap-2">
                                            <DollarSign className="w-5 h-5" /> Pricing & Promo
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Commercial sections.</p>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>Clear pricing tier visualizations.</li>
                                            <li>Dedicated sections for seasonal promotions and offers.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-yellow-400 mb-3 flex items-center gap-2">
                                            <Globe className="w-5 h-5" /> Market News Aggregator
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Bloomberg-style News Scraper.</p>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>Automated scraping of financial news from major global sources.</li>
                                            <li>Real-time market data integration and consolidated news feed.</li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10">
                                        <h3 className="font-semibold text-lg text-pink-400 mb-3 flex items-center gap-2">
                                            <MessageCircle className="w-5 h-5" /> Consultation
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-3">Lead generation flow.</p>
                                        <ul className="list-disc list-inside text-neutral-400 space-y-2 text-sm">
                                            <li>Streamlined contact forms for consultation booking.</li>
                                            <li>Direct integration with messaging platforms.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Design Philosophy</h3>
                                <div className="space-y-4 text-neutral-300">
                                    <p className="border-l-4 border-orange-500 pl-4 italic">
                                        "The focus was on clarity and trust. As a corporate profile, the design needed to communicate professionalism while remaining accessible. We established a strong grid system and a harmonious color palette derived from the brand identity to ensure a consistent user experience across all key pages."
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
                                        <div className="text-neutral-200">UI/UX Designer</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Timeline</div>
                                        <div className="text-neutral-200">Sep - Nov 2025</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Code className="w-3 h-3" /> Tools</div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Figma</span>
                                            <span className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">Illustrator</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Button asChild className="w-full bg-white text-black hover:bg-neutral-200">
                                        <a href="http://159.65.3.124:5675/" target="_blank" rel="noopener noreferrer">
                                            Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                                        </a>
                                    </Button>
                                    <p className="text-xs text-neutral-500 text-center mt-3 leading-relaxed">
                                        Live Preview (Staging URL)
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