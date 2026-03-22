import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    link?: string;
}

interface Pavilion {
    title: string;
    description: string;
    link: string;
}

interface PageProps {
    title: string;
    description: string;
    image?: string;
    features?: Feature[];
    pavilion?: Pavilion;
}

const SectionPage: React.FC<PageProps> = ({ title, description, image = "/placeholder-hero.jpg", features, pavilion }) => {
    // Separate the first feature as "Featured" if there are multiple
    const featuredFeature = features && features.length > 0 ? features[0] : null;
    const remainingFeatures = features && features.length > 1 ? features.slice(1) : [];

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title={title} />
            <Navbar />
            
            {/* Hero Image */}
            <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Breadcrumbs & Title Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <nav className="flex items-center gap-2 text-[14px] text-[#A0A0A0] font-bold uppercase tracking-wider mb-4">
                    <span>Understanding Expo</span>
                    <span>/</span>
                </nav>
                
                <h1 className="text-[48px] md:text-[64px] font-bold text-[#191919] leading-tight mb-8">
                    {title}
                </h1>
                
                <p className="text-[18px] md:text-[22px] text-[#555555] max-w-4xl leading-relaxed">
                    {description}
                </p>

                <div className="h-[0.8px] bg-[#EAEAEA] w-full mt-16" />
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                {/* Featured Card (Side-by-Side) */}
                {featuredFeature && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#F6F6F6] rounded-sm overflow-hidden flex flex-col md:flex-row mb-12"
                    >
                        <div className="flex-1 p-12 md:p-16 flex flex-col justify-center">
                            <h2 className="text-[32px] font-bold text-[#191919] mb-6">
                                {featuredFeature.title}
                            </h2>
                            <p className="text-[18px] text-[#555555] leading-[1.8] mb-8">
                                {featuredFeature.description}
                            </p>
                            {/* In the screenshot there isn't a button on every card, but just the content */}
                        </div>
                        <div className="flex-1 min-h-[300px] md:min-h-[450px]">
                            <img 
                                src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=1200"
                                alt={featuredFeature.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                )}

                {/* Grid for Remaining Features */}
                {remainingFeatures.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {remainingFeatures.map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#F6F6F6] rounded-sm overflow-hidden flex flex-col"
                            >
                                <div className="h-[240px]">
                                    <img 
                                        src={`https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800&sig=${idx}`}
                                        alt={feature.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-10 grow">
                                    <h3 className="text-[24px] font-bold text-[#191919] mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[16px] text-[#555555] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Newsletter Banner */}
            <section className="w-full bg-[#A38D56] relative py-12 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="text-white">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-[24px] font-bold text-white mb-1">Never miss an update</h3>
                            <p className="text-white/80 text-[14px]">Be the first to know about events and offers</p>
                        </div>
                    </div>
                </div>
                {/* Decorative Pattern (abstract circle/dome from screenshot) */}
                <div className="absolute right-[-50px] bottom-[-50px] opacity-10 pointer-events-none">
                    <div className="w-[300px] h-[300px] border-[20px] border-white rounded-full flex items-center justify-center">
                        <div className="w-[200px] h-[200px] border-[10px] border-white rounded-full" />
                    </div>
                </div>
            </section>

            {/* Pavilion Section (for Districts) */}
            {pavilion && (
                 <section className="py-24 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                         <h2 className="text-[44px] font-bold mb-12">{pavilion.title}</h2>
                         <div className="bg-[#F6F6F6] rounded-sm overflow-hidden flex flex-col md:flex-row-reverse">
                            <div className="flex-1 p-12 md:p-16 flex flex-col justify-center">
                                <p className="text-[18px] text-[#555555] leading-[1.8] mb-10">
                                    {pavilion.description}
                                </p>
                                <a 
                                    href={pavilion.link}
                                    className="inline-block self-start border-2 border-black rounded-lg px-10 py-4 text-[16px] font-bold hover:bg-black hover:text-white transition-all uppercase"
                                >
                                    Explore the Pavilion
                                </a>
                            </div>
                            <div className="flex-1 min-h-[350px]">
                                <img 
                                    src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=1200" 
                                    alt={pavilion.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                         </div>
                    </div>
                 </section>
            )}

            <Footer />
        </div>
    );
};

export default SectionPage;
