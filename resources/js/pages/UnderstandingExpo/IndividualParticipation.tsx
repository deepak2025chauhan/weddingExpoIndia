import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const IndividualParticipation = () => {
    const features = [
        {
            title: "Showcase Your Talent",
            description: "From wedding photographers to makeup artists, individual professionals can showcase their portfolios to a global audience.",
        },
        {
            title: "Networking Opportunities",
            description: "Directly connect with top-tier wedding planners and agencies looking for niche talent and specialized services.",
        },
        {
            title: "Skill Workshops",
            description: "Participate in exclusive workshops and masterclasses led by industry veterans to sharpen your professional edge.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Individual Participation" 
            description="Are you a freelance professional or an independent artist in the wedding industry? Wedding India Expo offers unique opportunities for individuals to shine alongside global brands."
            image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default IndividualParticipation;
