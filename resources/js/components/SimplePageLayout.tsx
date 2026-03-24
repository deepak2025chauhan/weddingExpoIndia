import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';

interface SimplePageLayoutProps {
    title: string;
    children: React.ReactNode;
    subtitle?: string;
}

const SimplePageLayout: React.FC<SimplePageLayoutProps> = ({ title, children, subtitle }) => {
    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title={title} />
            <Navbar />

            {/* Header Section */}
            <div className="bg-[#F6F6F6] pt-32 pb-16 md:pt-40 md:pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-[40px] md:text-[60px] font-bold text-[#191919] leading-tight mb-6">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-[18px] md:text-[22px] text-[#555555] max-w-3xl leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg max-w-none text-[#333333] leading-relaxed"
                >
                    {children}
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default SimplePageLayout;
