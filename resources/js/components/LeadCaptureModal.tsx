import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface LeadCaptureModalProps {
    onSuccess: () => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ onSuccess }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const isLeadsCaptured = localStorage.getItem('wedding_expo_leads_captured');
        if (isLeadsCaptured) {
            setIsOpen(false);
            onSuccess();
        } else {
            setIsOpen(true);
        }
    }, [onSuccess]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        localStorage.setItem('wedding_expo_leads_captured', 'true');
        setIsFinished(true);
        setTimeout(() => {
            setIsOpen(false);
            onSuccess();
        }, 1800);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-xs"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative w-full max-w-4xl bg-white rounded-[4px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-auto min-h-[450px] font-['expoSans',sans-serif]"
                    >
                        {/* Left Side: Visual/Branding */}
                        <div className="hidden md:block w-[40%] bg-[#191919] relative overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200" 
                                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                                alt="Wedding Expo"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <span className="text-[--gold] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Exclusive Access</span>
                                <h3 className="text-white text-2xl font-bold leading-tight uppercase tracking-wider">Join the World's Biggest Wedding Showcase</h3>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-1 p-8 md:p-12 bg-white relative">
                            {!isFinished ? (
                                <>
                                    <div className="mb-10">
                                        <h2 className="text-[28px] font-bold text-[#191919] mb-2 uppercase tracking-[0.1em]"> Please Fill Details</h2>
                                        <div className="w-12 h-1 bg-[--gold] mb-6" />
                                        {/* <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                                           
                                        </p> */}
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-1">
                                            <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Full Name *</label>
                                            <input 
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                className="w-full bg-transparent border-b border-gray-200 py-3 text-[14px] outline-none focus:border-[--gold] transition-all font-medium placeholder:text-gray-300"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Contact Number *</label>
                                                <input 
                                                    required
                                                    type="tel"
                                                    name="contact"
                                                    value={formData.contact}
                                                    onChange={handleChange}
                                                    placeholder="+91 00000 00000"
                                                    className="w-full bg-transparent border-b border-gray-200 py-3 text-[14px] outline-none focus:border-[--gold] transition-all font-medium placeholder:text-gray-300"
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Email Address *</label>
                                                <input 
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className="w-full bg-transparent border-b border-gray-200 py-3 text-[14px] outline-none focus:border-[--gold] transition-all font-medium placeholder:text-gray-300"
                                                />
                                            </div>
                                        </div>

                                        <button 
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full mt-8 bg-[#191919] hover:bg-black text-white font-bold tracking-[0.3em] uppercase py-5 text-[12px] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                    <span>Validating...</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <span>Submit</span>
                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    <p className="mt-8 text-[11px] text-gray-400 font-light tracking-wide italic">
                                        * Your privacy is our priority. We do not share your contact details.
                                    </p>
                                </>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-8"
                                >
                                    <div className="w-20 h-20 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#191919] mb-4 uppercase tracking-wider">Thank You</h3>
                                    <p className="text-gray-500 text-[18px] font-light max-w-sm mx-auto">
                                       You can now explore the full wedding showcase.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadCaptureModal;
