import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const ProductShowcase = () => {
    const features = [
        {
            title: "Launch Platform",
            description: "A dedicated arena with professional lighting and staging for your product unveiling ceremony.",
        },
        {
            title: "Media Amplification",
            description: "Guaranteed coverage by our official media partners and live broadcasting of your product launch.",
        },
        {
            title: "Visitor Engagement",
            description: "Real-time feedback and pre-order opportunities from thousands of potential buyers and industry influencers.",
        }
    ];

    return (
        <SectionPageLayout 
            title="New Product Showcase" 
            description="Bring your latest innovations to the center stage. Launch your newest wedding collections, technologies, and services to a captive global audience."
            image="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default ProductShowcase;
