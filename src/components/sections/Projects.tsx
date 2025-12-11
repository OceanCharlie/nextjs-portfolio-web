"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../shared/ImageWithFallback';

import { projects } from '@/data/projects';

export function Projects() {
    return (
        <section id="work" className="px-8 py-28 border-t lg:py-32 lg:px-24 xl:px-28 border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-16 lg:mb-20">
                    <div className="mb-4 text-sm tracking-widest text-blue-400">FEATURED WORK</div>
                    <h2 className="mb-4 text-4xl leading-tight lg:text-5xl">Selected Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>

                <div className="space-y-8">
                    {projects.map((work, index) => (
                        <div
                            key={work.slug}
                            className="overflow-hidden bg-gradient-to-br rounded-3xl border backdrop-blur-xl transition-all group border-white/10 from-neutral-900/50 to-neutral-950/50 hover:border-blue-500/30"
                        >
                            <div className="grid gap-0 lg:grid-cols-2">
                                <Link href={`/projects/${work.slug}`} className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden cursor-pointer ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <ImageWithFallback
                                        src={work.image}
                                        alt={work.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80 via-black/20 lg:bg-gradient-to-r" />
                                    <div className="flex absolute top-6 right-6 justify-center items-center w-12 h-12 rounded-full border opacity-0 backdrop-blur-xl transition-opacity bg-black/50 border-white/10 group-hover:opacity-100">
                                        <ArrowRight className="w-5 h-5 -rotate-45" />
                                    </div>
                                </Link>

                                <div className="flex flex-col justify-center p-12">
                                    <div className="mb-4 text-sm tracking-widest text-blue-400">{work.number}</div>
                                    <Link href={`/projects/${work.slug}`}>
                                        <h3 className="mb-4 text-4xl transition-colors cursor-pointer hover:text-blue-400">{work.title}</h3>
                                    </Link>
                                    <p className="mb-4 text-sm tracking-wider text-neutral-500">{work.category}</p>
                                    <p className="mb-6 text-lg leading-relaxed text-neutral-400">{work.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {work.tags.map((tag) => (
                                            <span key={tag} className="px-4 py-2 text-sm rounded-full border bg-white/5 text-neutral-400 border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="mt-16">
                    <Button asChild variant="outline" className="py-8 w-full text-base rounded-3xl transition-all duration-300 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-neutral-300 hover:text-white">
                        <Link href="/projects" className="flex gap-2 justify-center items-center">
                            See More Projects
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}