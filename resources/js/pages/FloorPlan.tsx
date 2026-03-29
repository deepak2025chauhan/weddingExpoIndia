import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronRight, CheckCircle2, MapPin, Building2, Users, ArrowRight } from 'lucide-react';

const FloorPlan = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        companyName: '',
        location: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) {
            if (formData.name && formData.contact && formData.email) {
                setStep(2);
            }
        } else {
            if (formData.companyName && formData.location) {
                setIsSubmitted(true);
            }
        }
    };

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title="Floor Plan & Pavilions" />
            <LeadCaptureModal onSuccess={() => setIsUnlocked(true)} />
            <Navbar />

            <div className={`${!isUnlocked ? 'blur-md pointer-events-none select-none' : 'transition-all duration-1000'}`}>
                {/* Hero Section */}
                <div className="relative bg-[#191919] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=2000" 
                        alt="Background" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-[48px] md:text-[64px] font-bold leading-tight mb-6">
                            Explore Our <span className="text-[--gold]">Floor Plan</span>
                        </h1>
                        <p className="text-[18px] md:text-[20px] text-gray-300 leading-relaxed mb-8">
                            Discover the layout of Wedding India Expo 2025 at Yashobhoomi. Plan your journey through our themed pavilions, luxury zones, and experience arenas.
                        </p>
                    </motion.div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Content Section */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-[32px] font-bold text-[#191919] mb-6">Yashobhoomi (IICC)</h2>
                            <p className="text-[17px] text-[#555555] leading-relaxed mb-8">
                                Yashobhoomi is India's premier Convention and Exhibition Centre, offering world-class infrastructure for global events. Spanning over 300,000 sqm, it features state-of-the-art exhibition halls, grand ballrooms, and luxury meeting spaces.
                            </p>
                            
                            {/* Yashobhoomi Media Placeholder */}
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 group shadow-lg">
                                <img 
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Yashobhoomi Pavilion" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 cursor-pointer hover:scale-110 transition-all">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-[#F9F9F9] rounded-xl border border-gray-100">
                                <Building2 className="text-[--gold] mb-4" size={28} />
                                <h3 className="font-bold text-[18px] mb-2">300K+ sqm</h3>
                                <p className="text-[14px] text-gray-500 uppercase font-bold tracking-wider">Total Area</p>
                            </div>
                            <div className="p-6 bg-[#F9F9F9] rounded-xl border border-gray-100">
                                <Users className="text-[--gold] mb-4" size={28} />
                                <h3 className="font-bold text-[18px] mb-2">500+</h3>
                                <p className="text-[14px] text-gray-500 uppercase font-bold tracking-wider">Exhibitors</p>
                            </div>
                            <div className="p-6 bg-[#F9F9F9] rounded-xl border border-gray-100">
                                <MapPin className="text-[--gold] mb-4" size={28} />
                                <h3 className="font-bold text-[18px] mb-2">New Delhi</h3>
                                <p className="text-[14px] text-gray-500 uppercase font-bold tracking-wider">Location</p>
                            </div>
                        </div>

                        <section className="bg-[--gold]/5 p-8 rounded-2xl border border-[--gold]/10">
                            <h3 className="text-[22px] font-bold text-[#191919] mb-4">Pavilion Description</h3>
                            <p className="text-[16px] text-[#555555] leading-relaxed">
                                Our floor plan includes specialized pavilions for International Destinations, Hospitality Partners, Wedding Planning, Luxury Lifestyle, jewelry, and more. Each area is strategically designed to maximize visitor engagement and brand visibility.
                            </p>
                        </section>
                    </div>

                    {/* Multi-step Form Section */}
                    <div className="relative">
                        <div className="sticky top-32">
                            {!isSubmitted ? (
                                <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 border border-gray-50">
                                    <div className="mb-10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-[--gold]' : 'bg-gray-200'}`} />
                                            <div className={`h-[2px] w-8 ${step >= 2 ? 'bg-[--gold]' : 'bg-gray-200'}`} />
                                            <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-[--gold]' : 'bg-gray-200'}`} />
                                        </div>
                                        <h3 className="text-[28px] font-bold text-[#191919]">
                                            {step === 1 ? 'Get the Floor Plan' : 'Company Details'}
                                        </h3>
                                        <p className="text-gray-500 mt-2">
                                            {step === 1 ? 'Please provide your basic contact information.' : 'Tell us more about your business.'}
                                        </p>
                                    </div>

                                    <form onSubmit={handleNext} className="space-y-6">
                                        <AnimatePresence mode="wait">
                                            {step === 1 ? (
                                                <motion.div 
                                                    key="step1"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 20 }}
                                                    className="space-y-6"
                                                >
                                                    <div>
                                                        <label className="block text-[14px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                                                        <input 
                                                            required
                                                            type="text" 
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#f8f8f8] border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[--gold] outline-none"
                                                            placeholder="Enter your name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[14px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Contact Number</label>
                                                        <input 
                                                            required
                                                            type="tel" 
                                                            name="contact"
                                                            value={formData.contact}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#f8f8f8] border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[--gold] outline-none"
                                                            placeholder="+91 00000 00000"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[14px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                                                        <input 
                                                            required
                                                            type="email" 
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#f8f8f8] border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[--gold] outline-none"
                                                            placeholder="example@company.com"
                                                        />
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <motion.div 
                                                    key="step2"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 20 }}
                                                    className="space-y-6"
                                                >
                                                    <div>
                                                        <label className="block text-[14px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Company Name</label>
                                                        <input 
                                                            required
                                                            type="text" 
                                                            name="companyName"
                                                            value={formData.companyName}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#f8f8f8] border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[--gold] outline-none"
                                                            placeholder="Your company name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[14px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Location / City</label>
                                                        <input 
                                                            required
                                                            type="text" 
                                                            name="location"
                                                            value={formData.location}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#f8f8f8] border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-[--gold] outline-none"
                                                            placeholder="City, State"
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <button 
                                            type="submit"
                                            className="w-full bg-[#191919] text-white py-5 rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 hover:bg-black transition-all group mt-8"
                                        >
                                            {step === 1 ? 'Next Step' : 'Download Floor Plan'}
                                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        
                                        {step === 2 && (
                                            <button 
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="w-full text-gray-500 font-bold py-2 text-[14px] hover:text-black transition-colors"
                                            >
                                                Back to Contact Info
                                            </button>
                                        )}
                                    </form>
                                </div>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-12 text-center border border-gray-50"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-[32px] font-bold text-[#191919] mb-4">Request Successful!</h3>
                                    <p className="text-gray-600 text-[17px] mb-10">
                                        Thank you for your interest. Your floor plan download should start automatically within a few seconds.
                                    </p>
                                    <div className="space-y-4">
                                        <a 
                                            href="/map.pdf" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-[--gold] text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                                        >
                                            <Download size={20} />
                                            Manual Download
                                        </a>
                                        <p className="text-[13px] text-gray-400">If the download hasn't started, click the button above.</p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* CTAs */}
            <section className="bg-gray-50 py-24 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-[36px] font-bold text-[#191919] mb-8">Ready to Exhibit with Us?</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link 
                            href="/register-now?type=exhibitor"
                            className="bg-black text-white px-10 py-5 rounded-sm font-bold text-[16px] hover:bg-[#191919] transition-all"
                        >
                            Book Your Stand
                        </Link>
                        <Link 
                            href="/understanding-expo/sponsorship-plan"
                            className="text-black font-bold text-[16px] flex items-center gap-2 hover:gap-4 transition-all"
                        >
                            Explore Sponsorship <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            </div>
            <Footer />
        </div>
    );
};

export default FloorPlan;
