import { Twitter, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Business */}
                    <div>
                        <h4 className="text-[12px] font-bold tracking-[0.2em] uppercase mb-6 text-white/40">Business</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Business Opportunities</a></li>
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Vendor Registration</a></li>
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Licensing & Retail</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-[12px] font-bold tracking-[0.2em] uppercase mb-6 text-white/40">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">FAQs</a></li>
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Contact us</a></li>
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Accessibility</a></li>
                        </ul>
                    </div>

                    {/* Media Services */}
                    <div>
                        <h4 className="text-[12px] font-bold tracking-[0.2em] uppercase mb-6 text-white/40">Media Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Media Centre</a></li>
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Press Releases</a></li>
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Media Accreditation</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-[12px] font-bold tracking-[0.2em] uppercase mb-6 text-white/40">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-[14px] hover:text-[#F9D034] transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <span className="text-[12px] text-white/40 font-['expoSans']">
                            © WEDDING EXPO INDIA. All rights reserved, 2026
                        </span>
                        <div className="flex gap-6">
                            <a href="#" className="text-[12px] hover:text-[#F9D034] transition-colors uppercase tracking-widest font-bold">Legal</a>
                            <a href="#" className="text-[12px] hover:text-[#F9D034] transition-colors uppercase tracking-widest font-bold">Privacy</a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><Youtube size={20} /></a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>

                    {/* Language Selector */}
                    <div className="flex items-center gap-2 text-[12px] text-white/60 font-bold uppercase tracking-widest">
                        <div className="w-4 h-3 bg-blue-600 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute w-full h-px bg-red-600 rotate-45"></div>
                            <div className="absolute w-full h-px bg-red-600 -rotate-45"></div>
                        </div>
                        English
                    </div>
                </div>

                {/* Branding Sub-footer */}
                <div className="mt-12 flex justify-center opacity-40 hover:opacity-100 transition-opacity">
                    <img 
                        src="/logo.png" 
                        alt="Branding Logo" 
                        className="h-8 w-auto"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
