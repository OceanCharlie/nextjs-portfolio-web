import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { Repository } from '@/types/github';

async function getRepos(): Promise<Repository[]> {
    try {
        const res = await fetch('https://api.github.com/users/OceanCharlie/repos?sort=updated&per_page=100', {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch repositories');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching repos:', error);
        return [];
    }
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default async function ProjectsPage() {
    const repos = await getRepos();

    const sortedRepos = repos.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    return (
        <div className="min-h-screen bg-black text-neutral-50 relative overflow-hidden">
            <div className="fixed inset-0 opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)',
                backgroundSize: '80px 80px'
            }} />

            <div className="fixed top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10">
                <Navbar />

                <main className="pt-20 pb-20 px-8 lg:px-24 xl:px-28">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-8">
                                <Button asChild variant="ghost" className="hover:bg-white/5 pl-0 hover:pl-2 transition-all duration-300 -ml-2">
                                    <Link href="/" className="gap-2 text-neutral-400 hover:text-white">
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to Home
                                    </Link>
                                </Button>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6">
                                Open Source Projects
                            </h1>
                            <p className="text-neutral-400 max-w-2xl text-lg mb-8">
                                Explore my open source contributions and personal projects hosted on GitHub.
                            </p>
                            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedRepos.map((repo) => (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                            <Code2 className="w-5 h-5" />
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">
                                        {repo.name}
                                    </h3>

                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {repo.description || "No description available for this repository."}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-neutral-500 mt-auto pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-4">
                                            {repo.language && (
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-cyan-400/50" />
                                                    <span>{repo.language}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                                                <Star className="w-4 h-4" />
                                                <span>{repo.stargazers_count}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                                                <GitFork className="w-4 h-4" />
                                                <span>{repo.forks_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}