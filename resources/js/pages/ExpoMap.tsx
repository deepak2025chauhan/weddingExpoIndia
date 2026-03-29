import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
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
                     
                    </div>

                {/* Map Container */}
              

          
            </div>

            {/* Bottom Section */}
            <section className="bg-white text-black py-24">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-[36px] font-bold mb-6">Plan Your Journey</h2>
                        <p className="text-gray-600 text-[18px] mb-8 leading-relaxed">
                            With over 190 pavilions to discover, the map is your best tool to find every destination, experience zone, and food hub at the expo.
                        </p>
                        <Link href="/floor-plan" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-sm font-bold hover:gap-4 transition-all uppercase tracking-widest text-[13px]">
                            Download PDF Map <Navigation size={16} />
                        </Link>
                    </div>
             
                </div>
            </section>

            </div>
            <Footer />
        </div>
    );
};

export default ExpoMap;
