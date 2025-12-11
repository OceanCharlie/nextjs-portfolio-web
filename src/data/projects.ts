
export interface Project {
    slug: string;
    number: string;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    content?: string;
    features?: string[];
    role?: string;
    year?: string;
    link?: string;
}

export const projects: Project[] = [
    {
        slug: 'galaxy-entertainment',
        number: '01',
        title: 'Galaxy Entertainment Group Website',
        category: 'Front-End Development',
        description: 'Designed the data flow and integrated frontend components with the CMS, ensuring efficient data retrieval and Role-Based Access Control (RBAC) security implementation.',
        image: '/images/galaxy.png',
        tags: ['Next.js', 'Tailwind', 'CMS', 'RBAC'],
        content: 'Detailed case study content regarding the Galaxy Entertainment Group project...',
        features: ['CMS Integration', 'RBAC Security', 'Responsive Design', 'Performance Optimization'],
        role: 'Frontend Developer',
        year: '2025'
    },
    {
        slug: 'it-knowledge-center',
        number: '02',
        title: 'IT Knowledge Center Booking System',
        category: 'Front-End Development',
        description: 'Optimized API consumption for reservation data, ensuring data consistency between the user interface and the backend database for FTI Untar.',
        image: '/images/it-knowledge.png',
        tags: ['Next.js', 'Tailwind', 'API Integration'],
        content: 'Detailed case study content regarding the IT Knowledge Center Booking System project...',
        features: ['Real-time Reservation', 'API Optimization', 'Admin Dashboard', 'Mobile Responsive'],
        role: 'Frontend Developer',
        year: '2025'
    },
    {
        slug: 'satu-solusi',
        number: '03',
        title: 'SatuSolusi Company Profile',
        category: 'UI/UX Design',
        description: 'Designed clean, intuitive, and brand-aligned interfaces to improve usability and readability for company profile website.',
        image: '/images/satu-solusi.png',
        tags: ['Figma', 'UI/UX', 'Design System'],
        content: 'Detailed case study content regarding the SatuSolusi Company Profile project...',
        features: ['Design System', 'User Research', 'Prototyping', 'Brand Identity'],
        role: 'UI/UX Designer',
        year: '2025'
    }
];