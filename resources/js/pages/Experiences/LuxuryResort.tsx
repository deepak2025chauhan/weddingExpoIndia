import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const LuxuryResort = () => {
    const features = [
        {
            title: "Elite Partners",
            description: "Meet representatives from Taj, Oberoi, Marriott, and other premier luxury hotel groups.",
        },
        {
            title: "Exclusive Preview",
            description: "Get a first look at upcoming luxury properties and wedding suites before they open to the public.",
        },
        {
            title: "Hospitality Workshops",
            description: "Learn about the latest trends in luxury guest management and high-end catering services.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Luxury Resort & Hotel Pavilion" 
            description="The pinnacle of hospitality. Discover the world's most luxurious wedding venues and resort partners all in one place."
            image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default LuxuryResort;
