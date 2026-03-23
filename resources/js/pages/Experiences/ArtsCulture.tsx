import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const ArtsCulture: React.FC = () => {
    const features = [
        {
            title: "Visual Arts Programme",
            description: "Artistic creations designed to engage the senses and challenge perceptions.",
        },
        {
            title: "Design and Crafts Programme",
            description: "Challenging perceptions of traditional design in the UAE and beyond.",
        },
        {
            title: "Calligraphy Benches",
            description: "Imaginative Arabic calligraphy showcased through storied traditions in a public art format.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Arts & Culture" 
            description="A realm of contemporary creativity featuring Al Wasl Opera, diverse installations, artistic creations, and workshops."
            image="https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default ArtsCulture;
