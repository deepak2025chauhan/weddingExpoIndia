import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const HoneymoonTravel = () => {
    const features = [
        {
            title: "Exotic Packages",
            description: "Curated honeymoon deals from travel agencies specializing in luxury and adventure getaways.",
        },
        {
            title: "Travel Tech",
            description: "Innovative tools and apps that make planning your post-wedding travel seamless and stress-free.",
        },
        {
            title: "Expert Advice",
            description: "Consult with travel gurus and destination experts to find your perfect honeymoon spot.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Honeymoon & Travel Zone" 
            description="Start your journey together. Explore the most romantic and exotic honeymoon destinations from around the world."
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default HoneymoonTravel;
