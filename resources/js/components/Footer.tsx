import { Twitter, Instagram, Facebook, Youtube, Linkedin, ChevronDown } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-20 mb-16">
                    {/* Left Column: Business & Media */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-white hover:text-white/70 transition-colors cursor-pointer">
                                BUSINESS
                            </h4>
                        </div>
                        <div>
                            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-white hover:text-white/70 transition-colors cursor-pointer">
                                MEDIA SERVICES
                            </h4>
                        </div>
                    </div>

                    {/* Right Column: Support */}
                    <div>
                        <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase mb-6 text-white">
                            SUPPORT
                        </h4>
                        <ul className="space-y-4 text-[14px]">
                            <li><a href="#" className="hover:text-white/70 transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-white/70 transition-colors">Contact us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Copyright & Legal */}
                    <div className="flex items-center gap-8">
                        <span className="text-[13px] text-white/90">
                            © Wedding Expo India. All rights reserved, 2026
                        </span>
                        <a href="#" className="text-[13px] font-bold hover:text-white/70 transition-colors">
                            Legal
                        </a>
                    </div>

                    {/* Social Icons & Language */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Social Icons */}
                        <div className="flex items-center gap-5">
                            <a href="#" className="text-white hover:text-white/70 transition-colors"><Twitter size={18} fill="currentColor" /></a>
                            <a href="#" className="text-white hover:text-white/70 transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="text-white hover:text-white/70 transition-colors"><Facebook size={18} fill="currentColor" /></a>
                            <a href="#" className="text-white hover:text-white/70 transition-colors"><Youtube size={20} /></a>
                            <a href="#" className="text-white hover:text-white/70 transition-colors"><Linkedin size={18} fill="currentColor" /></a>
                        </div>

                        {/* Language Selector */}
                        <div className="flex items-center gap-3 text-[13px] cursor-pointer group">
                            {/* UK Flag Placeholder */}
                            <div className="w-[18px] h-[12px] bg-[#00247D] relative overflow-hidden flex items-center justify-center border border-white/20">
                                {/* Diagonal lines for Union Jack style */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[200%] h-[1px] bg-white rotate-35"></div>
                                    <div className="w-[200%] h-[1px] bg-white -rotate-35"></div>
                                    <div className="absolute w-full h-[3px] bg-white"></div>
                                    <div className="absolute w-[3px] h-full bg-white"></div>
                                    <div className="absolute w-full h-[1px] bg-[#CF142B]"></div>
                                    <div className="absolute w-[1px] h-full bg-[#CF142B]"></div>
                                </div>
                            </div>
                            <span className="group-hover:text-white/70 transition-colors">English</span>
                            <ChevronDown size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

