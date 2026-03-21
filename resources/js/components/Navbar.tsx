import React, { useState } from 'react';
import { ChevronDown, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-gray-100 sticky top-0 z-[100] font-['expoSans',sans-serif]">
            {/* Top Tier */}
            <div className="border-b-[0.8px] max-w-7xl mx-auto border-[rgba(208,208,208,0.25)] py-3 px-6 lg:px-0 hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        {/* Logo Section */}
                        <div className="flex items-start gap-3 group cursor-pointer">
                            <div className="w-16 h-12 relative">
                                <img 
                                    src="/logo.png" 
                                    alt="Logo" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        
                        <div className="h-6 w-px bg-gray-200" />
                        
                        <span className="text-[13px] font-medium text-gray-800 tracking-wide">
                            1 October 2021 – 31 March 2022
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-[13px] font-semibold text-gray-900 hover:text-[--gold] transition-colors">
                            <img 
                                src="https://flagcdn.com/w20/gb.png" 
                                alt="English" 
                                width={18} 
                                height={12} 
                                className="rounded-[2px]" 
                            />
                            English
                            <ChevronDown size={12} className="text-gray-400 stroke-3" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Tier / Main Nav */}
            <div className="py-4 px-6 relative bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Mobile Header */}
                    <div className="md:hidden flex w-full items-center justify-between">
                        <div className="w-[92px] h-[51px] relative">
                            <img 
                                src="/logo.png" 
                                alt="Logo" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <button 
                            onClick={() => setIsMenuOpen(true)} 
                            className="flex flex-col gap-[6px] items-end p-2 group"
                        >
                            <span className="w-8 h-[2px] bg-black transition-all" />
                            <span className="w-5 h-[2px] bg-black transition-all" />
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
                        <NavLink href="#">Understanding Expo</NavLink>
                        <NavLink href="#">Experiences</NavLink>
                        <NavLink href="#">Expo Map</NavLink>
                        <NavLink href="#">News</NavLink>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-50 rounded-full transition-colors hidden md:block">
                            <Search size={20} />
                        </button>
                        <button className="border-2 border-black rounded-lg px-6 py-2 text-[14px] font-bold hover:bg-black hover:text-white transition-all hidden md:block">
                            Discover all countries
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-[200] flex flex-col animate-in fade-in duration-300">
                    <div className="py-4 px-6 flex items-center justify-between border-b border-gray-50">
                        <div className="w-[92px] h-[51px] relative">
                            <img 
                                src="/logo.png" 
                                alt="Logo" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2"
                        >
                            <X size={32} className="text-black stroke-1.5" />
                        </button>
                    </div>

                    <div className="grow overflow-y-auto py-4 px-6">
                        <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>Understanding Expo</MobileNavLink>
                        <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>Experiences</MobileNavLink>
                        <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>Expo Map</MobileNavLink>
                        <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>News</MobileNavLink>
                        
                        <div className="mt-8">
                            <button className="w-full border border-black rounded-lg py-4 text-[14px] font-bold text-center hover:bg-black hover:text-white transition-all">
                                Discover all countries
                            </button>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                        <div className="flex items-center justify-between">
                            <span className="text-[14px] font-bold">English</span>
                            <img 
                                src="https://flagcdn.com/w20/gb.png" 
                                alt="English" 
                                width={20} 
                                height={15} 
                                className="rounded-sm" 
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a 
        href={href} 
        className="text-[14px] font-bold text-gray-900 border-b-2 border-transparent hover:border-[#1A1A1A] py-1 transition-all"
    >
        {children}
    </a>
);

const MobileNavLink: React.FC<NavLinkProps & { onClick: () => void }> = ({ href, children, onClick }) => (
    <a 
        href={href} 
        onClick={onClick}
        className="flex items-center justify-between text-[16px] font-bold text-[#191919] py-5 border-b border-gray-100"
    >
        {children}
        <ChevronDown size={18} className="text-gray-400 -rotate-90" />
    </a>
);

export default Navbar;
