import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { MapPin, Download, Share2, Check } from 'lucide-react';
import React from 'react';

interface RelatedExhibitor {
    id: number;
    name: string;
    category: string;
    location: string;
    image: string;
    slug: string;
}

const relatedExhibitors: RelatedExhibitor[] = [
    { id: 2, name: "Manish Malhotra", category: "mobility", location: "Main Hall", image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=80&w=800", slug: "manish-malhotra" },
    { id: 4, name: "Anita Dongre", category: "sustainability", location: "Main Hall", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800", slug: "anita-dongre" },
    { id: 8, name: "Ritu Kumar", category: "opportunity", location: "Main Hall", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800", slug: "ritu-kumar" },
];

interface ExhibitorContact {
    email: string;
    phone: string;
    website: string;
    address: string;
}

interface Exhibitor {
    name: string;
    category: string;
    location: string;
    image: string;
    description: string;
    contact: ExhibitorContact;
    type?: string;
    architects?: string;
}

const ExhibitorDetail = ({ exhibitor }: { exhibitor: Exhibitor | null }) => {
    const data = exhibitor || {
        name: "Sabyasachi Mukherjee",
        category: "Designer Pavilion",
        type: "Bridal Wear & Jewelry",
        architects: "Sabyasachi Art Foundation",
        location: "Main Hall - Stall A1",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=2000",
        description: "Step into the world of Sabyasachi, where traditional Indian craftsmanship meets modern luxury. The pavilion showcases an exquisite collection of bridal wear and fine jewelry, celebrating the rich heritage of Indian textiles and artisanal techniques. Visitors can explore the intricate details of hand-woven fabrics and the timeless beauty of handcrafted ornaments.",
        contact: {
            email: "contact@sabyasachi.com",
            phone: "+91 33 4031 6000",
            website: "www.sabyasachi.com",
            address: "80/2, Topsia Road South, Kolkata"
        }
    };

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title={`${data.name} | Wedding Expo India`} />
            <Navbar />

            {/* Hero Image Section */}
            <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden">
                <img 
                    src={data.image} 
                    alt={data.name} 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Breadcrumbs & Share Bar */}
            <div className="w-full bg-[#F0F7FA] border-b border-[#EAEAEA]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <nav className="flex items-center gap-2 text-[13px] text-[#555555] font-bold uppercase tracking-wider">
                        <Link href="/discover/exhibitors" className="hover:text-black transition-colors">Participants</Link>
                        <span className="text-[10px] opacity-50">/</span>
                        <span className="text-black">{data.name}</span>
                    </nav>
                    <button className="p-2 hover:bg-white/50 rounded-full transition-colors">
                        <Share2 size={18} className="text-[#555555]" />
                    </button>
                </div>
            </div>

            {/* Main Content Section */}
            <main className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="text-[14px] md:text-[16px] font-bold text-[#A38D56] uppercase tracking-[0.2em] mb-4">
                        {data.type}
                    </h4>
                    <h1 className="text-[44px] md:text-[64px] font-bold text-[#191919] leading-tight mb-12">
                        {data.name}
                    </h1>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-[#EAEAEA] mb-12">
                        <div className="flex flex-col items-center gap-2">
                            <MapPin size={24} className="text-[#A38D56]" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0]">Location</p>
                            <p className="text-[14px] font-bold text-[#191919]">{data.location}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[#A38D56] font-bold text-[20px]">@</span>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0]">Type</p>
                            <p className="text-[14px] font-bold text-[#191919]">{data.category}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Download size={22} className="text-[#A38D56]" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0]">Brochure</p>
                            <p className="text-[14px] font-bold text-[#191919]">Download</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Check size={24} className="text-[#A38D56]" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A0A0A0]">Status</p>
                            <p className="text-[14px] font-bold text-[#191919]">Available</p>
                        </div>
                    </div>

                    <p className="text-[20px] md:text-[24px] text-[#555555] leading-[1.8] mb-16 italic font-medium">
                        {data.description}
                    </p>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        <div className="aspect-square rounded-sm overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Gallery 1" />
                        </div>
                        <div className="aspect-square rounded-sm overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Gallery 2" />
                        </div>
                        <div className="aspect-square rounded-sm overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Gallery 3" />
                        </div>
                    </div>

                    <div className="h-[0.8px] bg-[#EAEAEA] w-full" />
                </motion.div>
            </main>

            {/* Related Exhibitors section */}
            <section className="bg-white py-24 px-6 border-t border-[#EAEAEA]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-[32px] md:text-[44px] font-bold text-[#191919]">
                            Related Exhibitors
                        </h2>
                        <Link 
                            href="/discover/exhibitors" 
                            className="text-[#A38D56] font-bold hover:text-[#8D7946] flex items-center gap-2 uppercase tracking-widest text-[14px]"
                        >
                            View all
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedExhibitors.map((item) => (
                            <Link key={item.id} href={`/discover/exhibitors/${item.slug}`} className="group relative h-[360px] overflow-hidden rounded-sm">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-[18px] font-bold text-white group-hover:text-[#A38D56] transition-colors leading-tight">
                                        {item.name}
                                    </h3>
                                    <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 mt-3 rounded-[1px]">
                                        {item.category}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ExhibitorDetail;
