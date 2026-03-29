import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    isFeatured?: boolean;
}

const News: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const newsItems: NewsItem[] = [
        {
            id: 1,
            title: "Wedding India Expo 2026: Setting New Benchmarks in Luxury Tourism",
            excerpt: "Explore how the upcoming expo is set to redefine the global wedding destination landscape with over 36 Indian states participating in a grand showcase of heritage and innovation.",
            category: "Press Release",
            date: "March 28, 2026",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000",
            isFeatured: true
        },
        {
            id: 2,
            title: "Cultural Diversity: 36 States to Showcase Traditional Wedding Rituals",
            excerpt: "From the royal weddings of Rajasthan to the serene celebrations in Kerala, witness the rich tapestry of Indian wedding traditions at the Cultural Arena.",
            category: "Stories",
            date: "March 25, 2026",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Sustainability at the Heart of Modern Wedding Planning",
            excerpt: "How the Wedding India Expo is promoting eco-friendly practices in the multi-billion dollar wedding industry through dedicated green zones.",
            category: "Announcements",
            date: "March 22, 2026",
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 4,
            title: "B2B Matchmaking: Connecting Global Planners with Local Artisans",
            excerpt: "The new digital platform within the expo aims to facilitate seamless collaborations between international event planners and authentic Indian craftspeople.",
            category: "Events",
            date: "March 20, 2026",
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 5,
            title: "Exhibitor Spotlight: Luxury Resort Pavilions to Feature VR Site Visits",
            excerpt: "Leading luxury hotel chains to offer immersive virtual reality experiences of their premium properties across India at the International Destination Pavilion.",
            category: "Stories",
            date: "March 18, 2026",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 6,
            title: "Celebrity Designers Join the Speaker Section Lineup",
            excerpt: "World-renowned fashion designers to share insights on the future of couture and bridal aesthetics during the three-day seminar programme.",
            category: "Announcements",
            date: "March 15, 2026",
            image: "https://images.unsplash.com/photo-1539109136881-3be061694b9b?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const categories = ['All', 'Press Release', 'Stories', 'Announcements', 'Events'];

    const filteredItems = activeCategory === 'All' 
        ? newsItems 
        : newsItems.filter(item => item.category === activeCategory);

    const featuredItem = newsItems.find(item => item.isFeatured);

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title="News & Stories" />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-5 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f5f0] translate-x-1/4 -skew-x-12 -z-10" />
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
                    >
                        <div className="max-w-2xl">
                           
                            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight leading-[0.9]">
                                News & Stories
                            </h1>
                        </div>
                       
                    </motion.div>

                    {/* Featured Item */}
                    {featuredItem && activeCategory === 'All' && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden group mb-20 shadow-2xl"
                        >
                            <img 
                                src={featuredItem.image} 
                                alt={featuredItem.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                                <span className="bg-[--gold] text-white px-4 py-1 rounded-sm text-xs font-bold w-fit mb-6 uppercase tracking-widest">
                                    {featuredItem.category}
                                </span>
                                <div className="max-w-3xl">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-[--gold] transition-colors leading-[1.1]">
                                        {featuredItem.title}
                                    </h2>
                                    <p className="text-gray-200 text-lg mb-8 line-clamp-2 md:line-clamp-none max-w-2xl">
                                        {featuredItem.excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-white/80 text-sm font-medium">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-[--gold]" />
                                            {featuredItem.date}
                                        </div>
                                        <Link 
                                            href="#"
                                            className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all"
                                        >
                                            Read Full Story <ArrowRight size={18} className="text-[--gold]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.filter(i => !i.isFeatured || activeCategory !== 'All').map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 relative">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-black hover:bg-[--gold] hover:text-white transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                                <Share2 size={18} />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-black/80 backdrop-blur text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400 text-xs font-bold mb-3 tracking-widest uppercase">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-[--gold]" />
                                            {item.date}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                                        <span>5 min read</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[--gold] transition-colors line-clamp-2 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                                        {item.excerpt}
                                    </p>
                                    <div className="w-full h-px bg-gray-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[--gold] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Load More/Pagination */}
                    {filteredItems.length > 5 && (
                        <div className="mt-20 flex justify-center">
                            <button className="group relative px-12 py-4 font-bold text-sm tracking-widest uppercase overflow-hidden border border-black hover:text-white transition-colors duration-500">
                                <span className="relative z-10">Load More Stories</span>
                                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-black py-24 px-6 overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Be the first to know about Expo 2026.
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Get exclusive insights, updates and community stories delivered straight to your inbox.
                        </p>
                    </div>
                    <div className="w-full max-w-md">
                        <form className="relative flex items-center">
                            <input 
                                type="email" 
                                placeholder="Email address"
                                className="w-full bg-transparent border-b-2 border-white/20 py-4 px-2 text-white focus:outline-none focus:border-[--gold] transition-colors"
                            />
                            <button className="absolute right-0 p-2 text-white hover:text-[--gold] transition-colors">
                                <ArrowRight size={24} />
                            </button>
                        </form>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[--gold] rounded-full blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[150px] opacity-5 translate-y-1/2 -translate-x-1/2" />
            </section>

            <Footer />
        </div>
    );
};

export default News;
