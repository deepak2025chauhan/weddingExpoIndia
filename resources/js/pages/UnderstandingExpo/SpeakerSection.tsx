import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const SpeakerSection = () => {
    const features = [
        {
            title: "Thought Leadership",
            description: "Share your expertise on our main stage and position yourself as a leading authority in the wedding industry.",
        },
        {
            title: "Engage with Experts",
            description: "Join panel discussions with global tourism ministers, luxury brand CEOs, and celebrity wedding planners.",
        },
        {
            title: "Global Visibility",
            description: "Your sessions will be recorded and shared across our international digital networks, reaching millions online.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Speaker Section" 
            description="Inspire the next generation of wedding professionals. We are looking for visionary speakers to share insights on tourism, luxury, and technology."
            image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default SpeakerSection;
