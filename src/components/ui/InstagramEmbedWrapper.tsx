'use client';

import { useEffect, useRef, useState } from 'react';

interface InstagramEmbedWrapperProps {
    url: string;
    width?: string | number;
    captioned?: boolean;
}

export function InstagramEmbedWrapper({ url, width = '100%', captioned = true }: InstagramEmbedWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const getCleanUrl = (rawUrl: string) => {
        try {
            const urlObj = new URL(rawUrl);
            const pathParts = urlObj.pathname.split('/').filter(Boolean);
            const typeIndex = pathParts.findIndex(part => ['p', 'reel', 'tv'].includes(part));

            if (typeIndex !== -1 && pathParts[typeIndex + 1]) {
                const type = pathParts[typeIndex];
                const code = pathParts[typeIndex + 1];
                return `https://www.instagram.com/${type}/${code}/`;
            }
            return rawUrl;
        } catch (e) {
            return rawUrl;
        }
    };

    useEffect(() => {
        let isMounted = true;
        const cleanUrl = getCleanUrl(url);

        const checkRender = () => {
            if (!containerRef.current) return false;

            const iframe = containerRef.current.querySelector('iframe');
            const processed = containerRef.current.querySelector('.instagram-media-rendered');

            if (iframe || processed) {
                if (isMounted) setIsLoaded(true);
                return true;
            }

            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }

            return false;
        };

        const injectEmbed = () => {
            if (!containerRef.current) return;

            containerRef.current.innerHTML = '';

            const blockquote = document.createElement('blockquote');
            blockquote.className = 'instagram-media';
            blockquote.setAttribute('data-instgrm-captioned', captioned ? '' : 'false');
            blockquote.setAttribute('data-instgrm-permalink', cleanUrl);
            blockquote.setAttribute('data-instgrm-version', '14');
            blockquote.style.maxWidth = typeof width === 'number' ? `${width}px` : width;
            blockquote.style.width = 'calc(100% - 2px)';
            blockquote.style.minWidth = '326px';
            blockquote.style.margin = '0 auto';
            blockquote.style.display = 'block';

            containerRef.current.appendChild(blockquote);

            if (checkRender()) return;

            const scriptId = 'instagram-embed-script';
            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = "https://www.instagram.com/embed.js";
                script.async = true;
                script.defer = true;
                script.onload = () => checkRender();
                document.head.appendChild(script);
            }

            const intervalId = setInterval(() => {
                if (checkRender()) {
                    clearInterval(intervalId);
                }
            }, 1000);

            setTimeout(() => {
                clearInterval(intervalId);
                if (isMounted) setIsLoaded(true);
            }, 15000);
        };

        injectEmbed();

        return () => {
            isMounted = false;
        };
    }, [url, width, captioned]);

    return (
        <div className="flex justify-center w-full min-h-[400px] relative" style={{ minHeight: '400px' }}>
            {!isLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0A0A0A] text-neutral-500 rounded-md border border-white/5">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
                        <span className="text-xs">Loading Instagram...</span>
                    </div>
                </div>
            )}

            <div ref={containerRef} className="w-full h-full flex justify-center" />
        </div>
    );
}

declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}