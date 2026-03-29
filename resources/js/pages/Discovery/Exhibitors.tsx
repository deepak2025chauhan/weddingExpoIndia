import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Search, Heart, ChevronDown, Play } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const exhibitors = [
    { id: 1, name: "Andhra Pradesh Tourism", category: "South India", location: "Pavilion 1", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800", slug: "andhra-pradesh", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 2, name: "Arunachal Pradesh Tourism", category: "North East", location: "Pavilion 2", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800", slug: "arunachal-pradesh", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 3, name: "Assam Tourism", category: "North East", location: "Pavilion 3", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=800", slug: "assam", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 4, name: "Bihar Tourism", category: "East India", location: "Pavilion 4", image: "https://images.unsplash.com/photo-1622359529501-1b6a125bc460?auto=format&fit=crop&q=80&w=800", slug: "bihar", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 5, name: "Chhattisgarh Tourism", category: "Central India", location: "Pavilion 5", image: "https://images.unsplash.com/photo-1582218778473-4550407cd427?auto=format&fit=crop&q=80&w=800", slug: "chhattisgarh", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 6, name: "Goa Tourism", category: "West India", location: "Pavilion 6", image: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&q=80&w=800", slug: "goa", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 7, name: "Gujarat Tourism", category: "West India", location: "Pavilion 7", image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc6bbd?auto=format&fit=crop&q=80&w=800", slug: "gujarat", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 8, name: "Haryana Tourism", category: "North India", location: "Pavilion 8", image: "https://images.unsplash.com/photo-1622359529501-1b6a125bc460?auto=format&fit=crop&q=80&w=800", slug: "haryana", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 9, name: "Himachal Pradesh Tourism", category: "North India", location: "Pavilion 9", image: "https://images.unsplash.com/photo-1594247551021-ef788a18386c?auto=format&fit=crop&q=80&w=800", slug: "himachal-pradesh", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 10, name: "Jharkhand Tourism", category: "East India", location: "Pavilion 10", image: "https://images.unsplash.com/photo-1616423908868-80df2447935a?auto=format&fit=crop&q=80&w=800", slug: "jharkhand", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 11, name: "Karnataka Tourism", category: "South India", location: "Pavilion 11", image: "https://images.unsplash.com/photo-1542397284385-6014165c711a?auto=format&fit=crop&q=80&w=800", slug: "karnataka", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 12, name: "Kerala Tourism", category: "South India", location: "Pavilion 12", image: "https://images.unsplash.com/photo-1602216056096-3c40cc0c9944?auto=format&fit=crop&q=80&w=800", slug: "kerala", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 13, name: "Madhya Pradesh Tourism", category: "Central India", location: "Pavilion 13", image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80&w=800", slug: "madhya-pradesh", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 14, name: "Maharashtra Tourism", category: "West India", location: "Pavilion 14", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=800", slug: "maharashtra", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 15, name: "Manipur Tourism", category: "North East", location: "Pavilion 15", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800", slug: "manipur", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 16, name: "Meghalaya Tourism", category: "North East", location: "Pavilion 16", image: "https://images.unsplash.com/photo-1500614922032-b6ddca5ca614?auto=format&fit=crop&q=80&w=800", slug: "meghalaya", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 17, name: "Mizoram Tourism", category: "North East", location: "Pavilion 17", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800", slug: "mizoram", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 18, name: "Nagaland Tourism", category: "North East", location: "Pavilion 18", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800", slug: "nagaland", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 19, name: "Odisha Tourism", category: "East India", location: "Pavilion 19", image: "https://images.unsplash.com/photo-1563200140-1014f36c5720?auto=format&fit=crop&q=80&w=800", slug: "odisha", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 20, name: "Punjab Tourism", category: "North India", location: "Pavilion 20", image: "https://images.unsplash.com/photo-1514222139-1796b23c7233?auto=format&fit=crop&q=80&w=800", slug: "punjab", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 21, name: "Rajasthan Tourism", category: "West India", location: "Pavilion 21", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800", slug: "rajasthan", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 22, name: "Sikkim Tourism", category: "North East", location: "Pavilion 22", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800", slug: "sikkim", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 23, name: "Tamil Nadu Tourism", category: "South India", location: "Pavilion 23", image: "https://images.unsplash.com/photo-1582510003544-2d095ccc81ea?auto=format&fit=crop&q=80&w=800", slug: "tamil-nadu", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 24, name: "Telangana Tourism", category: "South India", location: "Pavilion 24", image: "https://images.unsplash.com/photo-1551221434-75422e70df42?auto=format&fit=crop&q=80&w=800", slug: "telangana", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 25, name: "Tripura Tourism", category: "North East", location: "Pavilion 25", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800", slug: "tripura", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 26, name: "Uttar Pradesh Tourism", category: "North India", location: "Pavilion 26", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800", slug: "uttar-pradesh", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 27, name: "Uttarakhand Tourism", category: "North India", location: "Pavilion 27", image: "https://images.unsplash.com/photo-1594247551021-ef788a18386c?auto=format&fit=crop&q=80&w=800", slug: "uttarakhand", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 28, name: "West Bengal Tourism", category: "East India", location: "Pavilion 28", image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=800", slug: "west-bengal", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 29, name: "Andaman and Nicobar Tourism", category: "Union Territory", location: "Pavilion 29", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800", slug: "andaman-nicobar", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 30, name: "Chandigarh Tourism", category: "Union Territory", location: "Pavilion 30", image: "https://images.unsplash.com/photo-1517427677506-228f80031fbf?auto=format&fit=crop&q=80&w=800", slug: "chandigarh", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 31, name: "Dadra and Nagar Haveli and Daman and Diu Tourism", category: "Union Territory", location: "Pavilion 31", image: "https://images.unsplash.com/photo-1582310111111-1a2b3c4d5e6f?auto=format&fit=crop&q=80&w=800", slug: "dadra-nagar-haveli-daman-diu", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 32, name: "Delhi Tourism", category: "Union Territory", location: "Pavilion 32", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800", slug: "delhi", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 33, name: "Jammu and Kashmir Tourism", category: "Union Territory", location: "Pavilion 33", image: "https://images.unsplash.com/photo-1598305315570-55e1db8c156f?auto=format&fit=crop&q=80&w=800", slug: "jammu-kashmir", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 34, name: "Ladakh Tourism", category: "Union Territory", location: "Pavilion 34", image: "https://images.unsplash.com/photo-1524443169398-9aa1ceab67d3?auto=format&fit=crop&q=80&w=800", slug: "ladakh", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 35, name: "Lakshadweep Tourism", category: "Union Territory", location: "Pavilion 35", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800", slug: "lakshadweep", status: "OPEN", hours: "10:00 - 18:00" },
    { id: 36, name: "Puducherry Tourism", category: "Union Territory", location: "Pavilion 36", image: "https://images.unsplash.com/photo-1582310111111-1a2b3c4d5e6f?auto=format&fit=crop&q=80&w=800", slug: "puducherry", status: "OPEN", hours: "10:00 - 18:00" },
];

const Exhibitors = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const filterBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (filterBarRef.current) {
                const navHeight = window.innerWidth >= 768 ? 145 : 83;
                const rect = filterBarRef.current.getBoundingClientRect();
                
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
            
            <LeadCaptureModal onSuccess={() => setIsUnlocked(true)} />

            <div className={`${!isUnlocked ? 'blur-md pointer-events-none select-none' : 'transition-all duration-1000'}`}>
                {/* Unified Top Section that slides up together */}
                <div 
                    className={`transition-all duration-500 ease-in-out ${
                        !isNavVisible ? "-mt-[83px] md:-mt-[145px]" : "mt-0"
                    }`}
                >
                    <Navbar visible={true} />

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
                                    State Tourism Pavilions
                                </h1>
                                <p className="text-[16px] md:text-[18px] text-[#555555] leading-relaxed">
                                    Explore the vibrant culture, heritage, and tourism potential of India's states and union territories. Each pavilion showcases the unique beauty and wedding destination opportunities across the country.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <button className="flex items-center gap-2 border-2 border-[#A38D56] text-[#A38D56] px-6 py-3 rounded-sm font-bold text-[14px] hover:bg-[#A38D56] hover:text-white transition-all uppercase tracking-wider">
                                    Download Brochure
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

                {/* Filter Bar Section */}
                <div 
                    ref={filterBarRef}
                    className="w-full bg-[#F6F6F6] border-y border-[#EAEAEA] sticky top-0 z-50 shadow-sm md:shadow-none"
                >
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-8 w-full md:w-auto" />
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

                {/* Grid Section */}
                <main className="max-w-7xl mx-auto px-6 pb-24 pt-12">
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
        </div>
    );
};

export default Exhibitors;
