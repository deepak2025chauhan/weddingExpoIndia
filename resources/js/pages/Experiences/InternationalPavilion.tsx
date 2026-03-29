import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const InternationalPavilion = () => {
    const features = [
        {
            title: "Global Destinations",
            description: "Explore wedding offerings from Dubai, Thailand, Italy, and more participating nations.",
        },
        {
            title: "Cultural Exchanges",
            description: "Experience diverse wedding traditions and ceremonies from across the globe.",
        },
        {
            title: "International Networking",
            description: "Connect with global tourism ministers and international wedding planning agencies.",
        }
    ];

    return (
        <SectionPageLayout 
            title="International Destination Pavilion" 
            description="Travel the world in a single day. Our international pavilions bring the finest global wedding destinations to New Delhi."
            image="https://www.expo2020dubai.com/-/media/expo2020/2021/understanding-expo/ppp/theme-weeks-1920x1080.jpg"
            features={features}
        />
    );
};

export default InternationalPavilion;
