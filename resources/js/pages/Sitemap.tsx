import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Globe, Info, FileText } from 'lucide-react';

const Sitemap = () => {
    const sections = [
        {
            title: "Understanding Expo",
            icon: <Info className="text-[--gold]" size={24} />,
            links: [
                { name: "Pavilion Participants", href: "/understanding-expo/participants" },
                { name: "Exhibitor Benefits", href: "/understanding-expo/participants/benefits" },
                { name: "Opportunity District", href: "/understanding-expo/opportunity-district" },
                { name: "Expo Initiatives", href: "/understanding-expo/expo-initiatives" },
                { name: "Sponsorship Plan", href: "/understanding-expo/sponsorship-plan" },
                { name: "Speaker Section", href: "/understanding-expo/sponsorship-plan/speaker-section" },
                { name: "World Expos History", href: "/understanding-expo/world-expos-history" },
            ]
        },
        {
            title: "Experiences",
            icon: <Globe className="text-[--gold]" size={24} />,
            links: [
                { name: "Theme Weeks", href: "/experiences/theme-weeks" },
                { name: "Arts & Culture", href: "/experiences/arts-culture" },
                { name: "Entertainment", href: "/experiences/entertainment" },
                { name: "International Pavilion", href: "/experiences/international-destination-pavillion" },
                { name: "India Pavilion", href: "/experiences/india-destination-pavillion" },
                { name: "Luxury Resort & Hotel", href: "/experiences/luxury-resort-hotel-pavilion" },
            ]
        },
        {
            title: "Discovery & Tools",
            icon: <MapPin className="text-[--gold]" size={24} />,
            links: [
                { name: "Exhibitor Directory", href: "/discover/exhibitors" },
                { name: "Floor Plan", href: "/floor-plan" },
                { name: "Expo Map", href: "/expo-map" },
                { name: "Register Now", href: "/register-now" },
            ]
        },
        {
            title: "Support & Legal",
            icon: <FileText className="text-[--gold]" size={24} />,
            links: [
                { name: "FAQs", href: "/footer/faqs" },
                { name: "Contact Us", href: "/footer/contact-us" },
                { name: "Privacy Policy", href: "/footer/privacy-policy" },
                { name: "Terms & Conditions", href: "/footer/terms-conditions" },
                { name: "Cookie Policy", href: "/footer/cookie-policy" },
                { name: "Legal Disclaimer", href: "/footer/disclaimer" },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title="Sitemap | Wedding India Expo" />
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-[42px] md:text-[56px] font-bold text-[#191919] mb-4 uppercase tracking-wider">Site Map</h1>
                        <div className="w-20 h-1 bg-[--gold] mx-auto mb-6" />
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Navigate through our complete wedding expo showcase. From international pavilions to sponsorship opportunities, find everything here.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {sections.map((section, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    {section.icon}
                                    <h3 className="text-[18px] font-bold text-[#191919] uppercase tracking-widest">{section.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link 
                                                href={link.href}
                                                className="text-[15px] text-gray-600 hover:text-[--gold] transition-colors flex items-center gap-2 group"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[--gold] transition-colors" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Sitemap;
