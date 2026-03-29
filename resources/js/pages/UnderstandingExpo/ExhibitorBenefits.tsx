import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Award, Briefcase, Camera } from 'lucide-react';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const benefits = [
    {
        title: "Massive Brand Exposure",
        desc: "Reach over 50,000+ targeted visitors and benefit from our 100M+ media impressions across digital and traditional platforms.",
        icon: <TrendingUp className="text-[--gold]" size={32} />
    },
    {
        title: "Direct Access to HNIs",
        desc: "Connect directly with high-net-worth individuals and serious buyers looking for premium wedding services and luxury products.",
        icon: <Users className="text-[--gold]" size={32} />
    },
    {
        title: "Global Networking",
        desc: "Meet vendors, planners, and tourism boards from over 20+ countries, opening doors for international collaborations.",
        icon: <Globe className="text-[--gold]" size={32} />
    },
    {
        title: "Premium Pavilion Showcase",
        desc: "Display your brand at Yashobhoomi, India's most prestigious convention center, designed for world-class exhibitions.",
        icon: <Award className="text-[--gold]" size={32} />
    },
    {
        title: "B2B Matchmaking",
        desc: "Utilize our dedicated B2B zone to schedule one-on-one meetings with corporate partners and agency representatives.",
        icon: <Briefcase className="text-[--gold]" size={32} />
    },
    {
        title: "Media & PR Coverage",
        desc: "Be featured in national press releases, influencer campaigns, and our official event documentary and social media live-streams.",
        icon: <Camera className="text-[--gold]" size={32} />
    }
];

const ExhibitorBenefits = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title="Benefits as an Exhibitor" />
            
            <LeadCaptureModal onSuccess={() => setIsUnlocked(true)} />

            <Navbar />

            <div className={`${!isUnlocked ? 'blur-md pointer-events-none select-none' : 'transition-all duration-1000'}`}>
                {/* Hero */}
                <div className="bg-[#191919] text-white py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-[48px] md:text-[60px] font-bold leading-tight mb-6">
                                Why Exhibit at <span className="text-[--gold]">Wedding India Expo?</span>
                            </h1>
                            <p className="text-[18px] md:text-[20px] text-gray-400">
                                Discover the unprecedented advantages of showcasing your brand at India's largest wedding tourism event.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-8 bg-[#F9F9F9] rounded-2xl border border-gray-100 hover:border-[--gold] transition-all"
                                >
                                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-[22px] font-bold text-[#191919] mb-4">{benefit.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-[15px]">
                                        {benefit.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[--gold] text-black">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-[36px] font-bold mb-8">Ready to grow your business?</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/register-now?type=exhibitor" className="bg-black text-white px-12 py-5 rounded-sm font-bold text-[18px] hover:opacity-90 transition-all">
                                Apply to Exhibit
                            </Link>
                            <Link href="/floor-plan" className="text-black font-bold text-[18px] border-b-2 border-black hover:pb-2 transition-all">
                                View Floor Plan
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default ExhibitorBenefits;
