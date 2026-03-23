import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const SportsFitnessWellbeing: React.FC = () => {
    const features = [
        {
            title: "Play Cricket at Expo",
            description: "Batting and bowling nets plus masterclasses with cricket legends.",
        },
        {
            title: "Join a Fitness Class",
            description: "Range of sessions from high-intensity HIIT to relaxing yoga and meditation.",
        },
        {
            title: "The Aussie Park",
            description: "Aussie-style sports and fitness sessions to get the heart rate up and blood pumping.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Sports, Fitness & Wellbeing" 
            description="A wide array of activities including football, cricket sessions, gym classes, and tournaments with favorite teams."
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default SportsFitnessWellbeing;
