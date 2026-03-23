import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const EducationProgrammes: React.FC = () => {
    const features = [
        {
            title: "Expo School Programme",
            description: "Unique educational journeys tailored for school groups from age 5 to 18.",
        },
        {
            title: "Expo University Programme",
            description: "Specialized opportunities for university students both locally and internationally.",
        },
        {
            title: "Young Stars",
            description: "Showcasing the talents of UAE school students through live performances on the Al Wasl stage.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Education Programmes" 
            description="Connecting students and teachers through once-in-a-lifetime learning journeys and cultural experiences."
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default EducationProgrammes;
