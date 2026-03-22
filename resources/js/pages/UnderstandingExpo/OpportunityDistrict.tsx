import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const OpportunityDistrict: React.FC = () => {
    const features = [
        {
            title: "The Good Place",
            description: "Meet and be inspired by the social innovators who are having a measurable impact on people’s lives across the world.",
        },
        {
            title: "Create connections",
            description: "Interact and exchange ideas with others, connect with changemakers and discover something new through collaborative sessions.",
        },
        {
            title: "Youth empowerment",
            description: "Participate in activities specifically designed with youth empowerment and skill-building in mind to shape a better future.",
        }
    ];

    const pavilion = {
        title: "Mission Possible - The Opportunity Pavilion",
        description: "See how even your small actions can make a big impact and be inspired to be a force of change for a better future for all.",
        link: "#"
    };

    return (
        <SectionPageLayout 
            title="Opportunity District" 
            description="Witness how our lives and actions are interconnected. Meet the people worldwide who are transforming dreams into reality."
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
            features={features}
            pavilion={pavilion}
        />
    );
};

export default OpportunityDistrict;
