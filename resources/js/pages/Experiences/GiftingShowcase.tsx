import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const GiftingShowcase = () => {
    const features = [
        {
            title: "Luxury Gifting",
            description: "Explore a curated collection of high-end wedding favors, hampers, and personalized gifts.",
        },
        {
            title: "Trousseau Showcase",
            description: "Discover the latest bridal trousseau trends and personalized storage solutions for your wedding finery.",
        },
        {
            title: "Interactive Gifting Labs",
            description: "Participate in workshops where you can design your own wedding stationary and personalized favors.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Gifting & Showcase Area" 
            description="The art of giving. Discover unique and luxurious gifting solutions that will make your wedding truly memorable."
            image="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default GiftingShowcase;
