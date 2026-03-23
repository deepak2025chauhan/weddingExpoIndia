import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const UAEGoldenJubilee: React.FC = () => {
    const features = [
        {
            title: "UAE Pavilion",
            description: "Witness the nation's journey since 1971 and what's to come in the next 50 years.",
        },
        {
            title: "Taste",
            description: "Feast on exceptional cuisines from talented chefs across the region.",
        },
        {
            title: "Celebratory Offers",
            description: "Special promotions and offers to celebrate the 50-year milestone.",
        }
    ];

    return (
        <SectionPageLayout 
            title="UAE Golden Jubilee" 
            description="A special set of activities and festivities commemorating the UAE's 50th anniversary, looking at the nation's journey since 1971 and what's to come in the next 50 years."
            image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default UAEGoldenJubilee;
