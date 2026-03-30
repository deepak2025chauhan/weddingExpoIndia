import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MapPin, 
    Globe, 
    Calendar, 
    Clock, 
    ArrowLeft, 
    Share2, 
    Heart, 
    Info, 
    Phone, 
    Mail, 
    ExternalLink,
    Star,
    Camera,
    Image as ImageIcon
} from 'lucide-react';
import React, { useState } from 'react';
import LeadCaptureModal from '@/components/LeadCaptureModal';

interface ExhibitorProps {
    exhibitor: {
        id: number;
        name: string;
        category: string;
        location: string;
        image: string;
        slug: string;
        status: string;
        hours: string;
        description?: string;
        website?: string;
        phone?: string;
        email?: string;
        gallery?: string[];
    }
}

const ExhibitorDetail: React.FC<ExhibitorProps> = ({ exhibitor }) => {
    const [activeTab, setActiveTab] = useState<'info' | 'gallery'>('info');
    const [isUnlocked, setIsUnlocked] = useState(false);

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title={`${exhibitor.name} - State Pavilion`} />
            
            <LeadCaptureModal 
                onSuccess={() => setIsUnlocked(true)} 
                onClose={() => setIsUnlocked(true)} 
            />

            <Navbar />

            <div className={`${!isUnlocked ? 'blur-md pointer-events-none select-none' : 'transition-all duration-1000'}`}>
                {/* Hero Section */}
                <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                    <img 
                        src={exhibitor.image} 
                        alt={exhibitor.name} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-7xl mx-auto">
                            <Link 
                                href="/discover/exhibitors"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-[14px] font-bold uppercase tracking-wider">Back to Pavilions</span>
                            </Link>
                            
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="bg-[--gold] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                                            {exhibitor.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-white/60 text-[10px] uppercase font-bold tracking-widest">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            {exhibitor.status} • {exhibitor.hours}
                                        </span>
                                    </div>
                                    <h1 className="text-[48px] md:text-[72px] font-bold text-white leading-tight">
                                        {exhibitor.name}
                                    </h1>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <button className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/20">
                                        <Heart size={20} />
                                    </button>
                                    <button className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/20">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <main className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                            {/* Tabs */}
                            <div className="flex items-center gap-10 border-b border-gray-100 mb-12">
                                <button 
                                    onClick={() => setActiveTab('info')}
                                    className={`pb-4 text-[14px] font-bold uppercase tracking-wider transition-all relative ${
                                        activeTab === 'info' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                >
                                    Information
                                    {activeTab === 'info' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
                                </button>
                                <button 
                                    onClick={() => setActiveTab('gallery')}
                                    className={`pb-4 text-[14px] font-bold uppercase tracking-wider transition-all relative ${
                                        activeTab === 'gallery' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                >
                                    Pavilion Gallery
                                    {activeTab === 'gallery' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                {activeTab === 'info' ? (
                                    <motion.div 
                                        key="info"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="space-y-12"
                                    >
                                        <div className="prose prose-lg max-w-none">
                                            <p className="text-[18px] text-[#555555] leading-relaxed">
                                                {exhibitor.description || `Welcome to the ${exhibitor.name} Pavilion. Experience the unique heritage and wedding tourism opportunities of our state. From traditional ceremonies to breathtaking destination venues, explore why we are the perfect choice for your upcoming celebration.`}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="p-3 bg-white rounded-xl shadow-sm text-[--gold]">
                                                        <MapPin size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#191919]">Pavilion Location</h3>
                                                        <p className="text-[#555555]">{exhibitor.location}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-white rounded-xl shadow-sm text-[--gold]">
                                                        <ExternalLink size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#191919]">Official Website</h3>
                                                        <p className="text-[#555555]">{exhibitor.website || 'Visit Tourism Board'}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="p-3 bg-white rounded-xl shadow-sm text-[--gold]">
                                                        <Phone size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#191919]">Contact Helpline</h3>
                                                        <p className="text-[#555555]">{exhibitor.phone || '+91 1800-XXX-XXXX'}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-white rounded-xl shadow-sm text-[--gold]">
                                                        <Mail size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-[14px] font-bold uppercase tracking-widest text-[#191919]">Email Support</h3>
                                                        <p className="text-[#555555]">{exhibitor.email || `contact@${exhibitor.slug}-tourism.com`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="gallery"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="grid grid-cols-2 gap-4"
                                    >
                                        {[1,2,3,4].map((i) => (
                                            <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                                                <img 
                                                    src={`https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800&sig=${i}`}
                                                    alt="Gallery"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-12">
                            {/* Schedule Visit */}
                            <div className="p-10 bg-black text-white rounded-3xl sticky top-32">
                                <h3 className="text-[24px] font-bold mb-6">Visit our Pavilion</h3>
                                <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                                    Book a guided tour or a business consultation meeting with our representatives during the expo.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[14px] font-medium text-white/80">
                                        <Calendar size={18} className="text-[--gold]" />
                                        October 25 - 28, 2025
                                    </div>
                                    <div className="flex items-center gap-4 text-[14px] font-medium text-white/80">
                                        <Clock size={18} className="text-[--gold]" />
                                        10:00 AM - 06:00 PM
                                    </div>
                                </div>
                                <Link 
                                    href="/register-now"
                                    className="w-full mt-10 inline-block bg-[--gold] text-black text-center py-5 rounded-2xl font-bold text-[16px] hover:scale-105 transition-transform"
                                >
                                    Register to Visit
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ExhibitorDetail;
