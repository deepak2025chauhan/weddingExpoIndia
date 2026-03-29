import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, CheckCircle2, ArrowRight, Map as MapIcon, Building2, Mail, Phone, User } from 'lucide-react';

interface DownloadMapModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DownloadMapModal: React.FC<DownloadMapModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                const link = document.createElement('a');
                link.href = '/map.pdf';
                link.download = 'wedding-india-expo-map.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row md:min-h-[500px] max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible font-['expoSans',sans-serif]"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-white/10 md:bg-gray-100 rounded-full transition-colors text-white md:text-gray-400"
                        >
                            <X size={20} className="md:w-6 md:h-6" />
                        </button>

                        {/* Left Side: Preview & Branding */}
                        <div className="w-full md:w-[40%] bg-[#191919] relative overflow-hidden flex flex-col justify-end p-6 md:p-10 min-h-[200px] md:min-h-[auto]">
                            <div className="absolute inset-0 opacity-40">
                                <img 
                                    src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1200" 
                                    className="w-full h-full object-cover"
                                    alt="Expo Map Preview"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/50 to-transparent" />
                            </div>
                            
                            <div className="relative z-10">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[--gold] rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                    <MapIcon className="text-white" size={20} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4 leading-tight uppercase tracking-wider">
                                    Get the Official <span className="text-[--gold]">Expo Map</span>
                                </h2>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                    Plan your visit to Yashobhoomi with our high-resolution interactive map and pavilion directory.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-1 p-6 md:p-12 bg-white flex flex-col justify-center">
                            {!isSuccess ? (
                                <>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-[#191919] uppercase tracking-wide">Download Details</h3>
                                        <div className="w-12 h-1 bg-[--gold] mt-2" />
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="group">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-[--gold] transition-colors">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                <input 
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your name"
                                                    className="w-full bg-transparent border-b border-gray-200 py-3 pl-8 text-[14px] outline-none focus:border-[--gold] transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-[--gold] transition-colors">Email</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                    <input 
                                                        required
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@company.com"
                                                        className="w-full bg-transparent border-b border-gray-200 py-3 pl-8 text-[14px] outline-none focus:border-[--gold] transition-all font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div className="group">
                                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-[--gold] transition-colors">Phone</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                    <input 
                                                        required
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91 00000 00000"
                                                        className="w-full bg-transparent border-b border-gray-200 py-3 pl-8 text-[14px] outline-none focus:border-[--gold] transition-all font-medium"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-[--gold] transition-colors">Company / Organization</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                                                <input 
                                                    required
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Enter your company name"
                                                    className="w-full bg-transparent border-b border-gray-200 py-3 pl-8 text-[14px] outline-none focus:border-[--gold] transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <button 
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="w-full mt-8 bg-[#191919] hover:bg-black text-white font-bold tracking-[0.2em] uppercase py-5 text-[12px] transition-all flex items-center justify-center gap-3 group"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                    <span>Preparing Map...</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <span>Download High-Res Map</span>
                                                    <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#191919] mb-4 uppercase tracking-wider">Starting Download</h3>
                                    <p className="text-gray-500 text-[16px] max-w-xs mx-auto mb-8">
                                        Your Expo Map is being downloaded. Please check your browser's download folder.
                                    </p>
                                    <button 
                                        onClick={onClose}
                                        className="text-[--gold] font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto hover:gap-4 transition-all"
                                    >
                                        Return to Site <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DownloadMapModal;
