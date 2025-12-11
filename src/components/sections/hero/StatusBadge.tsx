import React from 'react';

export function StatusBadge() {
    return (
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-md text-sm text-blue-400 w-fit hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-300 shadow-sm shadow-blue-500/5 group cursor-default">
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 duration-1000"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 group-hover:bg-blue-400 transition-colors"></span>
            </span>
            <span className="font-medium tracking-wide text-xs uppercase opacity-90">Available for Opportunities</span>
        </div>
    );
}