"use client";

import React from 'react';
import { Code2, Database, Palette, Terminal } from 'lucide-react';

export function Expertise() {
    return (
        <section className="py-28 lg:py-32 px-8 lg:px-24 xl:px-28 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-20">
                    <div className="text-sm text-blue-400 mb-4 tracking-widest">OVERVIEW</div>
                    <h2 className="text-4xl lg:text-5xl mb-4 leading-tight">Expertise</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="p-8 bg-gradient-to-br to-transparent rounded-3xl border backdrop-blur-xl transition-all border-white/10 from-cyan-500/5 hover:border-cyan-500/30 group">
                            <div className="flex gap-4 items-start">
                                <div className="flex flex-shrink-0 justify-center items-center w-14 h-14 rounded-2xl border transition-transform bg-cyan-500/10 border-cyan-500/20 group-hover:scale-110">
                                    <Code2 className="w-7 h-7 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-3 text-2xl">Frontend Development</h3>
                                    <p className="mb-4 leading-relaxed text-neutral-400">Building modern, responsive web applications with latest technologies</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                                            <span key={skill} className="px-3 py-1 text-xs text-cyan-400 rounded-full border bg-cyan-500/10 border-cyan-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-gradient-to-br to-transparent rounded-3xl border backdrop-blur-xl transition-all border-white/10 from-blue-500/5 hover:border-blue-500/30 group">
                            <div className="flex gap-4 items-start">
                                <div className="flex flex-shrink-0 justify-center items-center w-14 h-14 rounded-2xl border transition-transform bg-blue-500/10 border-blue-500/20 group-hover:scale-110">
                                    <Database className="w-7 h-7 text-blue-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-3 text-2xl">Database Administration</h3>
                                    <p className="mb-4 leading-relaxed text-neutral-400">Managing and optimizing database systems with enterprise-level tools</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Oracle DB 23ai', 'MySQL', 'SQL Server', 'PL/SQL'].map((skill) => (
                                            <span key={skill} className="px-3 py-1 text-xs text-blue-400 rounded-full border bg-blue-500/10 border-blue-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-gradient-to-br to-transparent rounded-3xl border backdrop-blur-xl transition-all border-white/10 from-blue-500/5 hover:border-blue-500/30 group">
                            <div className="flex gap-4 items-start">
                                <div className="flex flex-shrink-0 justify-center items-center w-14 h-14 rounded-2xl border transition-transform bg-blue-500/10 border-blue-500/20 group-hover:scale-110">
                                    <Palette className="w-7 h-7 text-blue-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-3 text-2xl">UI/UX Design</h3>
                                    <p className="mb-4 leading-relaxed text-neutral-400">Creating intuitive and brand-aligned user experiences</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Figma', 'Adobe Suite', 'Design Systems', 'Prototyping'].map((skill) => (
                                            <span key={skill} className="px-3 py-1 text-xs text-blue-400 rounded-full border bg-blue-500/10 border-blue-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-gradient-to-br to-transparent rounded-3xl border backdrop-blur-xl transition-all border-white/10 from-cyan-500/5 hover:border-cyan-500/30 group">
                            <div className="flex gap-4 items-start">
                                <div className="flex flex-shrink-0 justify-center items-center w-14 h-14 rounded-2xl border transition-transform bg-cyan-500/10 border-cyan-500/20 group-hover:scale-110">
                                    <Terminal className="w-7 h-7 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-3 text-2xl">Data-Driven Development</h3>
                                    <p className="mb-4 leading-relaxed text-neutral-400">Building applications powered by data analytics and ETL workflows</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Python ETL', 'Oracle Linux 8', 'Data Analytics', 'System Admin'].map((skill) => (
                                            <span key={skill} className="px-3 py-1 text-xs text-cyan-400 rounded-full border bg-cyan-500/10 border-cyan-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h3 className="text-2xl lg:text-3xl mb-6 lg:mb-8 font-medium">Tech Stack & Tools</h3>

                        <div className="space-y-8">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                                <div className="flex flex-col gap-6">
                                    <img
                                        src="https://skillicons.dev/icons?i=html,css,bootstrap,tailwind,js,ts,react,nextjs,nodejs&perline=9"
                                        alt="Frontend & Backend Tech"
                                        className="w-full h-auto"
                                    />
                                    <img
                                        src="https://skillicons.dev/icons?i=mysql,php,spring,git,linux,postman,py,tensorflow,vercel&perline=9"
                                        alt="Database, DevOps & AI"
                                        className="w-full h-auto"
                                    />
                                    <img
                                        src="https://skillicons.dev/icons?i=cpp,figma,xd,ps,ai,pr&perline=9"
                                        alt="Design & Tools"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                                <h4 className="text-sm text-neutral-400 mb-6 uppercase tracking-wider font-medium">Additional Technologies</h4>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Oracle Linux 8", "Oracle Database 23ai", "SQL*Plus",
                                        "SQL Server Management Studio (SSMS)", "Pandas", "Numpy",
                                        "Matplotlib", "Seaborn"
                                    ].map((tool) => (
                                        <span key={tool} className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm hover:bg-blue-500/20 transition-colors cursor-default">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}