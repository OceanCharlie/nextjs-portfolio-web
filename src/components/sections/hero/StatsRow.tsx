import React from 'react';

export function StatsRow() {
    const stats = [
        { value: "3.71", label: "GPA / 4.00", gradient: "from-blue-400 to-cyan-400" },
        { value: "10+", label: "Projects Done", gradient: "from-cyan-400 to-blue-400" },
        { value: "2+", label: "Years Exp", gradient: "from-blue-400 to-purple-400" },
    ];

    return (
        <div className="flex flex-wrap items-center gap-8 lg:gap-12 pt-8 border-t border-white/5">
            {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                    <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent tracking-tight`}>
                        {stat.value}
                    </div>
                    <div className="text-sm text-neutral-500 font-medium tracking-wide uppercase">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}