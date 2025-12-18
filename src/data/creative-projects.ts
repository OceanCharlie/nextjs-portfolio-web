export interface CreativeItem {
    id: number;
    type: 'instagram' | 'youtube' | 'upload' | 'image';
    url: string;
    thumbnailUrl: string;
    title: string;
    description?: string;
}

export interface CreativeProject {
    id: number;
    title: string;
    slug: string;
    description: string;
    items: CreativeItem[];
    tags: string[];
}

export const creativeProjects: CreativeProject[] = [
    {
        id: 9,
        title: "Inside BEM FTI",
        slug: "inside-bem-fti",
        description: "My journey, leadership roles, and key achievements serving in the Student Executive Board (BEM) of FTI Untar.",
        tags: ["Leadership", "Organization", "Event Management"],
        items: [
            {
                id: 1101,
                type: 'image',
                title: "Inside BEM FTI Journey",
                url: "/images/untar.png",
                thumbnailUrl: "/images/bem-fti.png"
            }
        ]
    },
    {
        id: 8,
        title: "Visual Design - TechConnect 2025",
        slug: "techconnect-2025",
        description: "Official graphic design work for TechConnect 2025 as a Mitra TechConnect.",
        tags: ["Social Media", "Branding", "Graphic Design"],
        items: [
            { id: 201, type: 'instagram', title: "Post 1", url: "https://www.instagram.com/techconnect_id/p/DDJjtrzzz8V/", thumbnailUrl: "/images/techconnect-bg.png" },
            { id: 202, type: 'instagram', title: "Post 2", url: "https://www.instagram.com/techconnect_id/p/DE1D4gWz86d/", thumbnailUrl: "/images/techconnect-bg.png" },
            { id: 203, type: 'instagram', title: "Post 3", url: "https://www.instagram.com/techconnect_id/p/DGm1LGiT2mz/", thumbnailUrl: "/images/techconnect-bg.png" },
            { id: 204, type: 'instagram', title: "Post 4", url: "https://www.instagram.com/techconnect_id/p/DHITtn2TkCE/", thumbnailUrl: "/images/techconnect-bg.png" },
            { id: 205, type: 'instagram', title: "Post 5", url: "https://www.instagram.com/techconnect_id/p/DHqFhD6zk3A/", thumbnailUrl: "/images/techconnect-bg.png" },
            { id: 206, type: 'instagram', title: "Post 6", url: "https://www.instagram.com/techconnect_id/p/DJEP2P0TYb5/", thumbnailUrl: "/images/techconnect-bg.png" },
            { id: 207, type: 'instagram', title: "Post 7", url: "https://www.instagram.com/techconnect_id/p/DJVoFWfTLwM/", thumbnailUrl: "/images/techconnect-bg.png" },
            { id: 208, type: 'instagram', title: "Post 8", url: "https://www.instagram.com/techconnect_id/p/DJqIlURzvwD/", thumbnailUrl: "/images/techconnect-bg.png" },
            { id: 209, type: 'instagram', title: "Post 9", url: "https://www.instagram.com/techconnect_id/p/DKMGTbVTVsU/", thumbnailUrl: "/images/techconnect-bg.png" },
        ]
    },
    {
        id: 7,
        title: "SatuSolusi Company Profile",
        slug: "satu-solusi",
        description: "Designed clean, intuitive, and brand-aligned interfaces to improve usability and readability for company profile website.",
        tags: ["Figma", "UI/UX", "Design System"],
        items: [
            {
                id: 501,
                type: 'upload',
                title: "SatuSolusi Design",
                url: "/images/satu-solusi.png",
                thumbnailUrl: "/images/satu-solusi.png"
            }
        ]
    },
        {
        id: 6,
        title: "TechConnect Hackathon",
        slug: "techconnect-hackathon",
        description: "Participated in TechConnect Hackathon as a Documentation Team.",
        tags: ["Photography", "Videography", "Graphic Design"],
        items: [
            {
                id: 501,
                type: 'upload',
                title: "TechConnect Hackathon",
                url: "/images/hackathon.jpg",
                thumbnailUrl: "/images/hackathon.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "Gudang Kreasi Idea",
        slug: "gudang-kreasi-idea",
        description: "Layout and design for educational books (SD - SMP), focusing on engaging visuals for students.",
        tags: ["Graphic Design", "Layouting"],
        items: [
            {
                id: 1001,
                type: 'image',
                title: "Gudang Kreasi Idea Book Layout",
                url: "/images/gudang-kreasi.png",
                thumbnailUrl: "/images/gudang-kreasi.png"
            }
        ]
    },
    {
        id: 4,
        title: "TechConnect Career",
        slug: "techconnect-career",
        description: "Video teaser for the launch of the TechConnect Career website.",
        tags: ["Videography", "Video Editing"],
        items: [
            {
                id: 601,
                type: 'youtube',
                title: "TechConnect Career Launch Teaser",
                url: "https://www.youtube.com/watch?v=SIE0WWdsCu4",
                thumbnailUrl: "/images/hire.png"
            }
        ]
    },
    {
        id: 3,
        title: "TechConnect Internship",
        slug: "techconnect-intern",
        description: "Design work created during internship at TechConnect, featuring content for various campaigns and TechConnect Academy.",
        tags: ["Social Media", "Graphic Design", "Internship"],
        items: [
            {
                id: 701,
                type: 'instagram',
                title: "TechConnect Design 1",
                url: "https://www.instagram.com/techconnect_id/p/CYoGhm5PQP8/",
                thumbnailUrl: "/images/techconnect-intern.png"
            }
        ]
    },
    {
        id: 2,
        title: "Nanovest Townhall",
        slug: "nanovest-townhall",
        description: "Video production for Nanovest's townhall event, capturing key moments and internal communications.",
        tags: ["Videography", "Video Editing"],
        items: [
            {
                id: 801,
                type: 'youtube',
                title: "Nanovest Townhall",
                url: "https://www.youtube.com/watch?v=7yzl9wknwjk",
                thumbnailUrl: "/images/nanovest.png"
            }
        ]
    },
    {
        id: 1,
        title: "Eber Petrochemical",
        slug: "eber-petrochemical",
        description: "Compilation of greeting videos from various Eber Petrochemical branches.",
        tags: ["Video Editing"],
        items: [
            {
                id: 901,
                type: 'youtube',
                title: "Eber Petrochemical Greetings",
                url: "https://www.youtube.com/watch?v=A2E9D2kmqZI",
                thumbnailUrl: "/images/eber.png"
            }
        ]
    }
]