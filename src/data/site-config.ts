export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'CB Studios',
    subtitle: 'Ceramics for your Garden & Home',
    description: 'CB Studios is a collective of ceramics makers, plant enthusiasts, and design lovers based in San Francisco. We sell pottery and home furnishing!',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
    ],
    footerNavLinks: [
        {
            text: 'CB Studios',
            href: '/'
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'Etsy',
            href: 'https://etsy.com/'
        },
    ],
    hero: {
        title: 'Pottery Your Plants will Love',
        text: "At CB Studios, .",
        image: {
            src: '/hero.jpg',
            alt: 'Plant pots'
        },
        actions: [
            {
                text: 'Learn More',
                href: '/about'
            }
        ]
    },
    subscribe: {
        title: 'Upcoming Sales & Exhibitions',
        text: 'Find out about the latest styles, and where you can find us.',
        formUrl: '#'
    },
    postsPerPage: 4,
    projectsPerPage: 4
};

export default siteConfig;
