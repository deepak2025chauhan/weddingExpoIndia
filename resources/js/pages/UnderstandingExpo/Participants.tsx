import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Send, CheckCircle2 } from 'lucide-react';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const pavilions = [
    { name: "Andhra Pradesh", desc: "Showcasing the 'Rice Bowl of India' and its emerging role in luxury destination weddings." },
    { name: "Arunachal Pradesh", desc: "Experience the pristine beauty of the 'Land of the Rising Sun' and its unique tribal wedding traditions." },
    { name: "Assam", desc: "Home to the world-famous tea gardens and the majestic Brahmaputra, perfect for riverside ceremonies." },
    { name: "Bihar", desc: "Exploring the roots of ancient civilization and the grandeur of heritage wedding venues." },
    { name: "Chhattisgarh", desc: "Discovering the hidden gems of tribal art and central India's lush forest wedding spots." },
    { name: "Goa", desc: "The beach wedding capital of India, showcasing sunset ceremonies and Portuguese-style venues." },
    { name: "Gujarat", desc: "From the Rann of Kutch to world-class urban hotels, Gujarat offers a mix of tradition and modernity." },
    { name: "Haryana", desc: "Highlighting modern luxury resorts and the heritage of the heart of India." },
    { name: "Himachal Pradesh", desc: "Mountain-top weddings and colonial-era charm in the 'Land of the Gods'." },
    { name: "Jharkhand", desc: "Natural waterfalls and rich cultural heritage for authentic tribal-inspired weddings." },
    { name: "Karnataka", desc: "Royal palaces of Mysore and the tech-forward wedding hubs of Bangalore." },
    { name: "Kerala", desc: "Backwater serenity and traditional 'Kalyanam' ceremonies in 'God's Own Country'." },
    { name: "Madhya Pradesh", desc: "The heart of incredible India, featuring ancient temples and royal forts of Gwalior." },
    { name: "Maharashtra", desc: "Mumbai's luxury hotels and the vineyard weddings of Nashik." },
    { name: "Manipur", desc: "Jewel of India, showcasing the elegance of classical dance and traditional wedding attire." },
    { name: "Meghalaya", desc: "Abode of Clouds, offering breathtaking waterfall backdrops for intimate weddings." },
    { name: "Mizoram", desc: "Stunning hill station ceremonies and the vibrant culture of Northeast India." },
    { name: "Nagaland", desc: "Experience the colorful Hornbill festival vibes and unique tribal wedding rituals." },
    { name: "Odisha", desc: "Temple architecture and the serene beaches of Puri for spiritual wedding journeys." },
    { name: "Punjab", desc: "Grand celebrations, vibrant colors, and the legendary hospitality of the land of five rivers." },
    { name: "Rajasthan", desc: "The ultimate destination for royal palace weddings and desert luxury." },
    { name: "Sikkim", desc: "Himalayan serenity and Buddhist-inspired wedding traditions in the heights." },
    { name: "Tamil Nadu", desc: "Dravidian temple architecture and the coastal beauty of Mahabalipuram." },
    { name: "Telangana", desc: "The city of pearls, Hyderabad, and its grand Nizami-style weddings." },
    { name: "Tripura", desc: "Royal palaces of Agartala and the lush green landscapes of the North East." },
    { name: "Uttar Pradesh", desc: "The timeless beauty of the Taj Mahal and the spiritual ghats of Varanasi." },
    { name: "Uttarakhand", desc: "River-side serenity in Rishikesh and snow-capped mountain weddings in Auli." },
    { name: "West Bengal", desc: "Colonial charm of Kolkata and the scenic tea gardens of Darjeeling." },
    { name: "Andaman and Nicobar", desc: "Island paradise for exclusive private beach weddings and scuba diving ceremonies." },
    { name: "Chandigarh", desc: "The planned city offering modern luxury and beautiful public gardens for events." },
    { name: "Dadra and Nagar Haveli", desc: "A blend of Portuguese heritage and natural beauty for unique boutique weddings." },
    { name: "Delhi", desc: "The capital's unmatched luxury, farmhouses, and historic Mughal-era backdrops." },
    { name: "Jammu and Kashmir", desc: "Shikara weddings on Dal Lake and the heavenly landscapes of Gulmarg." },
    { name: "Ladakh", desc: "High-altitude adventure weddings in the 'Land of High Passes'." },
    { name: "Lakshadweep", desc: "Pristine white sand beaches for the most exclusive intimate island weddings." },
    { name: "Puducherry", desc: "French colonial vibes and spiritual coastal ceremonies in the heart of Auroville." },
];

const Participants = () => {
    const [selectedPavilion, setSelectedPavilion] = useState<typeof pavilions[0] | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title="Pavilion Participants" />
            
            <LeadCaptureModal 
                onSuccess={() => setIsUnlocked(true)} 
                onClose={() => setIsUnlocked(true)} 
            />

            <Navbar />

            <div className={`${!isUnlocked ? 'blur-md pointer-events-none select-none' : 'transition-all duration-1000'}`}>
                {/* Hero */}
                <div className="bg-[#191919] text-white py-24 border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-[56px] md:text-[72px] font-bold leading-tight mb-6">
                                Our <span className="text-[--gold]">Pavilions</span>
                            </h1>
                            <p className="text-[18px] md:text-[20px] text-gray-400">
                                Explore the 36 unique state and union territory pavilions. Each pavilion tells a story of India's diverse wedding heritage.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Pavilions Grid */}
                <main className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {pavilions.map((pavilion, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => {
                                    setSelectedPavilion(pavilion);
                                    setIsSubmitted(false);
                                }}
                                className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100 hover:border-[--gold] hover:shadow-xl transition-all cursor-pointer group"
                            >
                                <MapPin className="text-gray-300 mb-4 group-hover:text-[--gold] transition-colors" size={24} />
                                <h3 className="text-[20px] font-bold text-[#191919] mb-2">{pavilion.name}</h3>
                                <p className="text-[13px] text-gray-400 font-bold uppercase tracking-wider">Explore Pavilion</p>
                            </motion.div>
                        ))}
                    </div>
                </main>

                {/* Modal for Pavilion Details & Form */}
                <AnimatePresence>
                    {selectedPavilion && (
                        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedPavilion(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <button 
                                    onClick={() => setSelectedPavilion(null)}
                                    className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                                >
                                    <X size={24} />
                                </button>

                                <div className="p-8 md:p-12">
                                    {!isSubmitted ? (
                                        <>
                                            <div className="mb-8">
                                                <div className="inline-block bg-[--gold]/10 text-[--gold] px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider mb-4">
                                                    Pavilion Description
                                                </div>
                                                <h2 className="text-[32px] font-bold text-[#191919] mb-4">{selectedPavilion.name}</h2>
                                                <p className="text-[17px] text-gray-600 leading-relaxed">
                                                    {selectedPavilion.desc}
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <h4 className="text-[18px] font-bold text-[#191919]">Enquire about this Pavilion</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <input required type="text" placeholder="Your Name" className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[--gold]" />
                                                    <input required type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[--gold]" />
                                                </div>
                                                <input required type="tel" placeholder="Contact Number" className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[--gold]" />
                                                <textarea placeholder="Message (Optional)" className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[--gold] min-h-[120px]" />
                                                
                                                <button className="w-full bg-black text-white py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#191919] transition-all">
                                                    <Send size={20} />
                                                    Send Enquiry
                                                </button>
                                            </form>
                                        </>
                                    ) : (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                                <CheckCircle2 size={40} />
                                            </div>
                                            <h3 className="text-[32px] font-bold text-[#191919] mb-4">Enquiry Sent!</h3>
                                            <p className="text-gray-600 text-[17px] mb-10">
                                                Thank you for your interest in the {selectedPavilion.name} pavilion. Our team will contact you shortly with more details.
                                            </p>
                                            <button 
                                                onClick={() => setSelectedPavilion(null)}
                                                className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <Footer />
            </div>
        </div>
    );
};

export default Participants;
