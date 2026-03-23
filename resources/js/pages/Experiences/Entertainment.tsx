import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const Entertainment: React.FC = () => {
    const features = [
        {
            title: "Late Nights at Expo",
            description: "A nocturnal series of concerts and performances featuring global talent.",
        },
        {
            title: "Stars in the Wild",
            description: "Immersive shows of beautiful creatures in Al Wasl Plaza’s stunning garden.",
        },
        {
            title: "Dance and Sing Along",
            description: "Performances written and choreographed by UAE school students showcasing local talent.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Entertainment" 
            description="A sensory journey featuring everything from opera and A-list performers to pop-up theaters, flash mobs, and daily parades."
            image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default Entertainment;
