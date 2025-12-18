import React from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Award, Briefcase, Users, Eye } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { InstagramEmbedWrapper } from '@/components/ui/InstagramEmbedWrapper';

export default function InsideBemFtiPage() {
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
                                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Leadership</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Organization</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Inside BEM FTI</h1>
                            <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                A look into my journey serving in the Student Executive Board (BEM) of the Faculty of Information Technology, Universitas Tarumanagara.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
                            <ImageWithFallback
                                src="/images/bem-fti.png"
                                alt="BEM FTI Untar"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-12">
                            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                                    Overview
                                </h2>
                                <p className="text-neutral-300 leading-relaxed mb-6">
                                    During my tenure at BEM FTI Untar, I was actively involved in bridging the communication between students and the faculty, as well as organizing events that fostered student growth and community engagement.
                                </p>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                                    <h2 className="text-2xl font-bold text-white">My Journey</h2>
                                </div>
                                <div className="space-y-8 pl-4 border-l-2 border-white/10 ml-2">
                                    <div className="relative pl-8">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500/20 border-2 border-purple-500 box-content"></div>
                                        <h3 className="text-xl font-bold text-white mb-2">Head of Media Information Department</h3>
                                        <div className="flex flex-wrap gap-3 text-sm text-neutral-500 mb-4">
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> July 2024 – July 2025</span>
                                            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 13 Members</span>
                                        </div>
                                        <ul className="space-y-3 text-neutral-300 list-disc list-outside ml-4">
                                            <li>Led a 13-member creative team in managing social media content, documentation, and digital branding.</li>
                                            <li>Implemented structured content planning, improving social media engagement by <span className="text-green-400 font-bold">62%</span>.</li>
                                            <li>Conducted internal training to enhance members’ design and communication skills.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="w-1 h-8 bg-green-500 rounded-full"></span>
                                    <h2 className="text-2xl font-bold text-white">Additional Leadership Roles</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-cyan-500/30 transition-colors">
                                        <Award className="w-8 h-8 text-cyan-500 mb-4" />
                                        <h3 className="text-lg font-bold text-white mb-2">Project Leader</h3>
                                        <p className="text-neutral-400 text-sm mb-1">Welcoming Party FTI Untar 2024</p>
                                        <p className="text-neutral-500 text-xs">Led the planning and execution of the orientation event for new students.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-purple-500/30 transition-colors">
                                        <Users className="w-8 h-8 text-purple-500 mb-4" />
                                        <h3 className="text-lg font-bold text-white mb-2">Deputy Project Leader</h3>
                                        <p className="text-neutral-400 text-sm mb-1">BEMF-IK UPNVJ Study Visit 2025</p>
                                        <p className="text-neutral-500 text-xs">Coordinated cross-university collaboration and event logistics.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-pink-500/30 transition-colors">
                                        <Briefcase className="w-8 h-8 text-pink-500 mb-4" />
                                        <h3 className="text-lg font-bold text-white mb-2">Art & Creative Coordinator</h3>
                                        <p className="text-neutral-400 text-sm mb-1">I/O Festival 2025</p>
                                        <p className="text-neutral-500 text-xs">Oversaw visual direction and creative assets for the festival.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-blue-500/30 transition-colors">
                                        <Award className="w-8 h-8 text-blue-500 mb-4" />
                                        <h3 className="text-lg font-bold text-white mb-2">Pub & Doc Coordinator</h3>
                                        <p className="text-neutral-400 text-sm mb-1">Desa Binaan FTI Untar 2025</p>
                                        <p className="text-neutral-500 text-xs">Managed documentation and publication for the community service program.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="w-1 h-8 bg-red-500 rounded-full"></span>
                                    <h2 className="text-2xl font-bold text-white">After Movies / Teasers</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                                        <div className="p-4 pb-0">
                                            <div className="rounded-2xl overflow-hidden bg-black aspect-[9/16] relative">
                                                <InstagramEmbedWrapper url="https://www.instagram.com/bemftiuntar/reel/C23s6XaLeYq/" />
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Aftermovie Desa Binaan 2024</h3>
                                            <div className="flex items-center gap-2 text-sm text-neutral-400">
                                                <Eye className="w-4 h-4 text-cyan-500" />
                                                <span>13.8k views</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                                        <div className="p-4 pb-0">
                                            <div className="rounded-2xl overflow-hidden bg-black aspect-[9/16] relative">
                                                <InstagramEmbedWrapper url="https://www.instagram.com/bemftiuntar/reel/C4mh43dry6V/" />
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Teaser I/O Festival 2024</h3>
                                            <div className="flex items-center gap-2 text-sm text-neutral-400">
                                                <Eye className="w-4 h-4 text-cyan-500" />
                                                <span>27.2k views</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                                        <div className="p-4 pb-0">
                                            <div className="rounded-2xl overflow-hidden bg-black aspect-[9/16] relative">
                                                <InstagramEmbedWrapper url="https://www.instagram.com/bemftiuntar/reel/C-Rlw1mSN8f/" />
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Aftermovie I/O Festival 2024</h3>
                                            <div className="flex items-center gap-2 text-sm text-neutral-400">
                                                <Eye className="w-4 h-4 text-cyan-500" />
                                                <span>13k views</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                                        <div className="p-4 pb-0">
                                            <div className="rounded-2xl overflow-hidden bg-black aspect-[9/16] relative">
                                                <InstagramEmbedWrapper url="https://www.instagram.com/bemftiuntar/reel/DNcWLf8Srwh/" />
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Aftermovie PKKMB FTI Untar 2025</h3>
                                            <div className="flex items-center gap-2 text-sm text-neutral-400">
                                                <Eye className="w-4 h-4 text-cyan-500" />
                                                <span>16.1k views</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-4 space-y-6">
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-white/10 sticky top-32">
                                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-white/10">Project Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><User className="w-3 h-3" /> Role</div>
                                        <div className="text-neutral-200">Head of Media Information Department</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Briefcase className="w-3 h-3" /> Organization</div>
                                        <div className="text-neutral-200">BEM FTI Untar</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500 mb-1 flex items-center gap-2"><Calendar className="w-3 h-3" /> Period</div>
                                        <div className="text-neutral-200">2024 - 2025</div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                                    <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:opacity-90 border-0">
                                        <a href="https://www.instagram.com/bemftiuntar" target="_blank" rel="noopener noreferrer">
                                            Visit BEM FTI Untar
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 hover:text-white bg-transparent">
                                        <a href="https://www.instagram.com/inside.bemftiuntar/" target="_blank" rel="noopener noreferrer">
                                            Visit Inside BEM FTI
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