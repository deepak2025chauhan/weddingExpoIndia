import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const SustainabilityDistrict: React.FC = () => {
    const features = [
        {
            title: "Sustainable surroundings",
            description: "Stroll beneath solar energy and water condensing 'trees', alongside water flowing through traditional 'falaj' irrigation channels.",
        },
        {
            title: "Determine our planet’s future",
            description: "Play a game of high-stakes pinball and meet ‘Gnasher’, a giant, sharp-toothed machine representing endless consumption.",
        },
        {
            title: "District stage",
            description: "Watch cultural shows, music performances, dance and theatre in a large outdoor area that can accommodate up to 300 people.",
        }
    ];

    const pavilion = {
        title: "Terra - The Sustainability Pavilion",
        description: "Discover the global projects providing real life solutions to help preserve our planet for future generations and how you can play a part in creating a more sustainable planet.",
        link: "#"
    };

    return (
        <SectionPageLayout 
            title="Sustainability District" 
            description="Experience how the human race can enjoy living in harmony with nature in a high-tech future and discover what countries are doing to champion sustainability."
            image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000"
            features={features}
            pavilion={pavilion}
        />
    );
};

export default SustainabilityDistrict;
