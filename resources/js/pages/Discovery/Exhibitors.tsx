import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Search, Heart, ChevronDown, Play } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const exhibitors = [
    { id: 1, name: "Afghanistan Pavilion", category: "opportunity", location: "Main Hall", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800", slug: "afghanistan", status: "CLOSED", hours: "10:00 - 22:00" },
    { id: 2, name: "Albania Pavilion", category: "mobility", location: "Main Hall", image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=80&w=800", slug: "albania", status: "CLOSED", hours: "10:00 - 22:00" },
    { id: 3, name: "Algeria Pavilion", category: "mobility", location: "Hospitality Wing", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800", slug: "algeria", status: "CLOSED", hours: "10:00 - 22:00" },
    { id: 4, name: "Andorra Pavilion", category: "sustainability", location: "Main Hall", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800", slug: "andorra", status: "CLOSED", hours: "10:00 - 22:00" },
    { id: 5, name: "Angola Pavilion", category: "mobility", location: "Media Hub", image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800", slug: "angola", status: "CLOSED", hours: "10:00 - 22:00" },
    { id: 6, name: "Antigua and Barbuda", category: "mobility", location: "Luxury Galley", image: "https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?auto=format&fit=crop&q=80&w=800", slug: "antigua-barbuda", status: "CLOSED", hours: "10:00 - 22:00" },
    { id: 7, name: "Argentina Pavilion", category: "mobility", location: "Food Court", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800", slug: "argentina", status: "CLOSED", hours: "10:00 - 22:00" },
    { id: 8, name: "Armenia Pavilion", category: "opportunity", location: "Main Hall", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800", slug: "armenia", status: "CLOSED", hours: "10:00 - 22:00" },
];

const Exhibitors = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const filterBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (filterBarRef.current) {
                const navHeight = window.innerWidth >= 768 ? 145 : 83;
                const rect = filterBarRef.current.getBoundingClientRect();
                
                // Trigger transition when the filter bar reaches the bottom of the navbar
                if (rect.top <= navHeight + 5) {
                    setIsNavVisible(false);
                } else if (window.scrollY < 200) {
                    setIsNavVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const filteredExhibitors = exhibitors.filter(exhibitor => {
        const matchesSearch = exhibitor.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif] overflow-clip">
            <Head title="Country Pavilions" />
            
            {/* Unified Top Section that slides up together */}
            <div 
                className={`transition-all duration-500 ease-in-out ${
                    !isNavVisible ? "-mt-[83px] md:-mt-[145px]" : "mt-0"
                }`}
            >
                <Navbar visible={true} /> {/* Navbar is always visible relative to this container */}

                {/* Video Modal */}
                {isVideoModalOpen && (
                    <div 
                        className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setIsVideoModalOpen(false)}
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setIsVideoModalOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/SshM_wB0O70?autoplay=1" 
                                title="Expo 2020 Dubai | Official Trailer"
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </div>
                )}

                {/* Header Content Section */}
                <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-8">
                    <nav className="flex items-center gap-2 text-[13px] text-[#A0A0A0] font-bold uppercase tracking-wider mb-6">
                        <span className="hover:text-black cursor-pointer">Understanding Expo</span>
                        <span className="text-[10px] opacity-50">/</span>
                        <span className="hover:text-black cursor-pointer">Participants</span>
                        <span className="text-[10px] opacity-50">/</span>
                    </nav>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="max-w-3xl">
                            <h1 className="text-[44px] md:text-[56px] font-bold text-[#191919] leading-tight mb-6">
                                Country Pavilions
                            </h1>
                            <p className="text-[16px] md:text-[18px] text-[#555555] leading-relaxed">
                                For the first time in World Expo history, every participating country will have its own pavilion. Enjoy immersive cultural experiences and discover what makes each country unique as you explore hundreds of pavilions.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <button className="flex items-center gap-2 border-2 border-[#A38D56] text-[#A38D56] px-6 py-3 rounded-sm font-bold text-[14px] hover:bg-[#A38D56] hover:text-white transition-all uppercase tracking-wider">
                                Virtual Expo Dubai
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Media Section */}
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-sm overflow-hidden group">
                        <img 
                            src="https://www.expo2020dubai.com/-/media/expo2020/2021/understanding-expo/understandingexpo_video_1920x1080.jpg" 
                            alt="Hero" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div 
                                onClick={() => setIsVideoModalOpen(true)}
                                className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:scale-110 transition-transform"
                            >
                                <Play fill="white" className="text-white ml-1" size={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar Section - Separated to avoid sliding up too far */}
            <div 
                ref={filterBarRef}
                className="w-full bg-[#F6F6F6] border-y border-[#EAEAEA] sticky top-0 z-50 shadow-sm md:shadow-none"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-8 w-full md:w-auto">
                        <div className="hidden md:block">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="21" y1="10" x2="3" y2="10" />
                                <line x1="21" y1="6" x2="3" y2="6" />
                                <line x1="21" y1="14" x2="3" y2="14" />
                                <line x1="21" y1="18" x2="3" y2="18" />
                            </svg>
                        </div>
                        <div className="flex flex-wrap gap-8 items-center text-[14px] font-bold text-[#191919]">
                            <div className="flex items-center gap-2 cursor-pointer group">
                                <span>All Region</span>
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer group">
                                <span>All Locations</span>
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer group">
                                <span>Categories</span>
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder=""
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-[#D0D0D0] px-4 py-2 pr-10 rounded-sm focus:border-black outline-none"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <p className="text-[14px] text-[#A0A0A0]">1-16 of 191 results</p>
            </div>

            {/* Grid Section */}
            <main className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredExhibitors.map((exhibitor, idx) => (
                        <motion.div
                            key={exhibitor.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
                        >
                            <Link href={`/discover/exhibitors/${exhibitor.slug}`} className="block h-full">
                                <img 
                                    src={exhibitor.image} 
                                    alt={exhibitor.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                                <div className="absolute top-4 right-4 text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all">
                                    <Heart size={20} strokeWidth={2} />
                                </div>
                                <div className="absolute top-4 left-4 right-12">
                                    <h3 className="text-[17px] font-bold text-white leading-tight mb-2 drop-shadow-md">
                                        {exhibitor.name}
                                    </h3>
                                    <div className="inline-block bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-[2px]">
                                        {exhibitor.category}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-[36px] flex items-center px-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                            {exhibitor.status} <span className="opacity-60">•</span> {exhibitor.hours}
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Exhibitors;
