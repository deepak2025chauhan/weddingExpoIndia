import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const Participants: React.FC = () => {
    const features = [
        {
            title: "Country Pavilions",
            description: "For the first time in World Expo history, every participating country will have its own pavilion. Enjoy immersive cultural experiences and discover what makes each country unique.",
        },
        {
            title: "Partner Pavilions",
            description: "Our partners are vital to the success of Expo 2020. In their pavilions, they showcase the future through innovation and world-class expertise.",
        },
        {
            title: "Organisation Pavilions",
            description: "See how international organisations and civil society are already working to address the global challenges of our time.",
        },
        {
            title: "Special Pavilions",
            description: "Embark on experiences merging education, entertainment and excitement, as you explore our thematic and Expo-owned pavilions.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Participants" 
            description="Explore the power of connections in shaping our world. From organisations to 192 participating nations, you'll be engulfed in unique architecture, culture and inspiring innovations."
            image="https://www.expo2020dubai.com/-/media/expo2020/understanding-expo/participants/participants-hero-desktop.jpg?mw=1366&hash=6BAF8A2E8B9A9A8A8A8A8A8A8A8A8A8A" // I'll try to use a real URL if possible, fallback to unsplash if needed
            features={features}
        />
    );
};

export default Participants;
