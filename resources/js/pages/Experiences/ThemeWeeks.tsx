import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const ThemeWeeks: React.FC = () => {
    const features = [
        {
            title: "Climate & Biodiversity",
            description: "Managing emissions and protecting ecosystems through collective action.",
        },
        {
            title: "Space",
            description: "Exploring new frontiers safely and sustainably for the benefit of all humanity.",
        },
        {
            title: "Urban & Rural Development",
            description: "Living in harmony with our planet and creating resilient communities.",
        },
        {
            title: "Tolerance & Inclusivity",
            description: "Fostering common understanding for more inclusive and equitable societies."
        }
    ];

    return (
        <SectionPageLayout 
            title="Theme Weeks" 
            description="An exchange of inspiring new perspectives tackling challenges from climate to connectivity, space exploration to the future of human health."
            image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default ThemeWeeks;
