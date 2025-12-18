'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Instagram, Youtube, Image as ImageScale } from 'lucide-react';
import { Repository } from '@/types/github';
import { CreativeProject } from '@/data/creative-projects';
import { projects } from '@/data/projects';


type TabType = 'programming' | 'creative';

interface ProjectsListProps {
    repos: Repository[];
    creativeProjects: CreativeProject[];
}

export function ProjectsList({ repos, creativeProjects }: ProjectsListProps) {
    const [activeTab, setActiveTab] = useState<TabType>('programming');
    const router = useRouter();

    return (
        <div className="space-y-12">
            <div className="flex justify-start border-b border-white/10">
                <div className="flex gap-8">
                    <button
                        onClick={() => setActiveTab('programming')}
                        className={`pb-4 text-lg font-medium transition-colors relative ${activeTab === 'programming'
                            ? 'text-blue-400'
                            : 'text-neutral-400 hover:text-white'
                            }`}
                    >
                        Programming
                        {activeTab === 'programming' && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                            />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('creative')}
                        className={`pb-4 text-lg font-medium transition-colors relative ${activeTab === 'creative'
                            ? 'text-purple-400'
                            : 'text-neutral-400 hover:text-white'
                            }`}
                    >
                        Creative
                        {activeTab === 'creative' && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                            />
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTab === 'programming' ? (
                    <>
                        {projects.map((project) => (
                            <div
                                key={project.slug}
                                onClick={() => router.push(`/projects/${project.slug}`)}
                                className="group flex flex-col bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full cursor-pointer"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-60" />

                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-neutral-400 text-sm line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {repos.map((repo) => (
                            <div
                                key={repo.id}
                                onClick={() => window.open(repo.html_url, '_blank')}
                                className="group flex flex-col bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full cursor-pointer"
                            >
                                <div className="relative h-48 w-full overflow-hidden bg-white/5">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-60" />

                                    <div className="absolute inset-0 flex items-center justify-center text-neutral-700">
                                        <Code2 className="w-12 h-12 opacity-20" />
                                    </div>

                                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-black/70 transition-colors border border-white/10"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                        {repo.homepage && (
                                            <a
                                                href={repo.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-blue-500/20 backdrop-blur-md rounded-full text-blue-300 hover:bg-blue-500/30 transition-colors border border-blue-500/20"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {repo.name}
                                        </h3>
                                        <p className="text-neutral-400 text-sm line-clamp-3">
                                            {repo.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                        {repo.topics?.map((topic) => (
                                            <span
                                                key={topic}
                                                className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                        {repo.language && (
                                            <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                                {repo.language}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    creativeProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => router.push(`/projects/${project.slug}`)}
                            className="group flex flex-col bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer h-full"
                        >
                            <div className="relative h-64 w-full overflow-hidden bg-[#111]">
                                <Image
                                    src={project.items[0].thumbnailUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 opacity-80" />

                                <div className="absolute top-4 right-4 z-20">
                                    <div className={`p-2 rounded-full backdrop-blur-md border border-white/20 text-white ${project.items[0].type === 'instagram' ? 'bg-pink-500/20' :
                                        project.items[0].type === 'youtube' ? 'bg-red-500/20' :
                                            'bg-white/10'
                                        }`}>
                                        {project.items[0].type === 'instagram' ? <Instagram className="w-4 h-4" /> :
                                            project.items[0].type === 'youtube' ? <Youtube className="w-4 h-4" /> :
                                                <ImageScale className="w-4 h-4" />}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow relative z-20 bg-[#0A0A0A]">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}