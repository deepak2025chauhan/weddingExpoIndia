import React from 'react';
import SectionPageLayout from '@/components/SectionPageTemplate';

const Blog = () => {
    const features = [
        {
            title: "Latest Trends",
            description: "Stay ahead with our monthly reports on wedding fashion, decor trends, and destination popularity.",
        },
        {
            title: "Exhibitor Stories",
            description: "Go behind the scenes with our featured exhibitors and discover the passion that drives their brands.",
        },
        {
            title: "Expo News",
            description: "Official announcements regarding celebrity appearances, new pavilion launches, and event schedule updates.",
        }
    ];

    return (
        <SectionPageLayout 
            title="Expo Blog" 
            description="Insights, stories, and updates from the heart of Wedding India Expo. Your source for all things related to luxury weddings and tourism."
            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1920"
            features={features}
        />
    );
};

export default Blog;
