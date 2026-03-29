import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import { motion } from 'framer-motion';
import { Map, Layers, Maximize, Navigation, Search, Filter } from 'lucide-react';

const zones = [
    { name: "Sustainability District", color: "bg-green-500", pos: "top-1/4 left-1/4" },
    { name: "Mobility District", color: "bg-blue-500", pos: "top-1/3 right-1/4" },
    { name: "Opportunity District", color: "bg-orange-500", pos: "bottom-1/3 left-1/2" },
    { name: "Luxury Zone", color: "bg-amber-400", pos: "top-1/2 left-1/3" },
    { name: "Fashion Arena", color: "bg-pink-500", pos: "bottom-1/4 right-1/3" },
];

const ExpoMap = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    return (
        <div className="min-h-screen bg-[#111111] text-white font-['expoSans',sans-serif]">
            <Head title="Interactive Expo Map" />
            <LeadCaptureModal onSuccess={() => setIsUnlocked(true)} />
            <Navbar />

            <div className={`${!isUnlocked ? 'blur-md pointer-events-none select-none' : 'transition-all duration-1000'}`}>
                <div className="max-w-7xl mx-auto px-6 pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                        <div>
                            <h1 className="text-[48px] font-bold text-white mb-4">Expo <span className="text-[--gold]">Map</span></h1>
                            <p className="text-gray-400 text-[18px]">Navigate through the world's most beautiful wedding showcase at Yashobhoomi.</p>
                        </div>
                  <div className="flex gap-4">
                            <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 font-bold text-[14px]">
                                <Layers size={20} />
                                Layers
                            </button>
                            <button className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 font-bold text-[14px]">
                                <Maximize size={20} />
                                Fullscreen
                            </button>
                        </div>      
                    </div>

                {/* Map Container */}
                <div className="relative w-full aspect-[21/9] bg-[#1a1a1a] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl group mb-12">
                    {/* Simulated Map Visual */}
                    <img 
                        src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2000" 
                        alt="Map Background" 
                        className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[10s]"
                    />
                    
                    {/* Interactive Points */}
                    <div className="absolute inset-0">
                        {zones.map((zone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className={`absolute ${zone.pos} -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer`}
                            >
                                <div className="relative">
                                    <div className={`w-6 h-6 ${zone.color} rounded-full animate-ping opacity-40 absolute inset-0`} />
                                    <div className={`w-6 h-6 ${zone.color} rounded-full border-2 border-white shadow-lg relative z-10 scale-100 group-hover/pin:scale-125 transition-transform`} />
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white text-black px-4 py-2 rounded-lg text-[12px] font-bold whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none shadow-xl">
                                        {zone.name}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map Controls Floating */}
                    <div className="absolute bottom-8 right-8 flex flex-col gap-3">
                        <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"><Navigation size={20} /></button>
                        <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"><Search size={20} /></button>
                        <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"><Filter size={20} /></button>
                    </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-t border-white/5">
                    {zones.map((zone, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                            <div className={`w-4 h-4 rounded-full ${zone.color} group-hover:scale-125 transition-transform`} />
                            <span className="text-[14px] font-bold text-gray-400 group-hover:text-white transition-colors">{zone.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <section className="bg-white text-black py-24">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-[36px] font-bold mb-6">Plan Your Journey</h2>
                        <p className="text-gray-600 text-[18px] mb-8 leading-relaxed">
                            With over 190 pavilions to discover, the map is your best tool to find every destination, experience zone, and food hub at the expo.
                        </p>
                        <a 
                            href="/map.pdf" 
                            download 
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-sm font-bold hover:gap-4 transition-all uppercase tracking-widest text-[13px]"
                        >
                            Download Map <Navigation size={16} />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-gray-100 rounded-2xl p-6 flex flex-col justify-end group cursor-pointer overflow-hidden relative">
                            <Map className="text-[--gold] mb-4 group-hover:scale-120 transition-transform" size={40} />
                            <div className="font-bold relative z-10">Smart Navigation</div>
                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity"><Map size={160} /></div>
                        </div>
                        <div className="aspect-square bg-gray-100 rounded-2xl p-6 flex flex-col justify-end group cursor-pointer overflow-hidden relative">
                            <Layers className="text-[--gold] mb-4 group-hover:scale-120 transition-transform" size={40} />
                            <div className="font-bold relative z-10">Pavilion Details</div>
                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity"><Layers size={160} /></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    </div>
    );
};

export default ExpoMap;
