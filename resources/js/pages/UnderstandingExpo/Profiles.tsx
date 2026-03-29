import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const Profiles = () => {
    const features = [
        {
            title: "Exhibitor Profile",
            description: "From national tourism boards to boutique jewelry designers, our exhibitors represent the pinnacle of the wedding industry.",
        },
        {
            title: "Visitor Profile",
            description: "Attracting HNIs, NRIs, destination wedding planners, corporate travel managers, and global tourists.",
        },
        {
            title: "Partner Profile",
            description: "Collaborate with airlines, hotel chains, and technology providers who power the modern wedding ecosystem.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Exhibitor & Visitor Profile" 
            description="Understand who you'll meet at Wedding India Expo. We bring together a curated mix of the world's most influential wedding professionals and buyers."
            image="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default Profiles;
