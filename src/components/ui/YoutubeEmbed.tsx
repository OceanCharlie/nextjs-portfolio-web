'use client';

interface YoutubeEmbedProps {
    videoId: string;
    title?: string;
}

export function YoutubeEmbed({ videoId, title = "YouTube video player" }: YoutubeEmbedProps) {
    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            />
        </div>
    );
}