import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Repository } from '@/types/github';
import { creativeProjects } from '@/data/creative-projects';
import { ProjectsList } from '@/components/projects/ProjectsList';

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
                                My Projects
                            </h1>
                            <p className="text-neutral-400 max-w-2xl text-lg mb-8">
                                A collection of my technical work and creative endeavors.
                            </p>
                            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                        </div>

                        <ProjectsList repos={sortedRepos} creativeProjects={creativeProjects} />
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}