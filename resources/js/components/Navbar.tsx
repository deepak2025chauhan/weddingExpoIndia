import React, { useState } from 'react';
import { ChevronDown, X, Search } from 'lucide-react';
import { Link } from '@inertiajs/react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const understandingExpoLinks = [
        { label: "Participants", href: "/understanding-expo/participants" },
        { label: "Sustainability District", href: "/understanding-expo/sustainability-district" },
        { label: "Mobility District", href: "/understanding-expo/mobility-district" },
        { label: "Opportunity District", href: "/understanding-expo/opportunity-district" },
        { label: "Programme for People and Planet", href: "/understanding-expo/programme-for-people-and-planet" },
        { label: "Expo Initiatives", href: "/understanding-expo/expo-initiatives" },
        { label: "World Expos' history", href: "/understanding-expo/world-expos-history" },
        { label: "After Expo 2020", href: "/understanding-expo/after-expo-2020" },
    ];

    const experiencesLinks = [
        { label: "UAE Golden Jubilee", href: "/experiences/uae-golden-jubilee" },
        { label: "Theme Weeks", href: "/experiences/theme-weeks" },
        { label: "Innovation & technology", href: "/experiences/innovation-and-technology" },
        { label: "Entertainment", href: "/experiences/entertainment" },
        { label: "Arts & culture", href: "/experiences/arts-culture" },
        { label: "Food & livelihoods", href: "/experiences/food-and-livelihoods" },
        { label: "Sports, fitness & wellbeing", href: "/experiences/sports-fitness-wellbeing" },
        { label: "Architecture", href: "/experiences/architecture" },
        { label: "Business & entrepreneurship", href: "/experiences/business-entrepreneurship" },
        { label: "Education programmes", href: "/experiences/education-programmes" },
    ];

    return (
        <nav className="w-full bg-white border-gray-100 sticky top-0 z-[100] font-['expoSans',sans-serif]">
            {/* Top Tier */}
            <div className="border-b-[0.8px] max-w-7xl mx-auto border-[rgba(208,208,208,0.25)] py-3 px-6 lg:px-0 hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        {/* Logo Section */}
                        <div className="flex items-start gap-3 group cursor-pointer">
                            <div className="w-16 h-12 relative">
                                <Link href="/">
                                    <img 
                                        src="/logo.png" 
                                        alt="Logo" 
                                        className="w-full h-full object-contain"
                                    />
                                </Link>
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
                            <Link href="/">
                                <img 
                                    src="/logo.png" 
                                    alt="Logo" 
                                    className="w-full h-full object-contain"
                                />
                            </Link>
                        </div>
                        <button 
                            onClick={() => setIsMobileMenuOpen(true)} 
                            className="flex flex-col gap-[6px] items-end p-2 group"
                        >
                            <span className="w-8 h-[2px] bg-black transition-all" />
                            <span className="w-5 h-[2px] bg-black transition-all" />
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="relative group py-2">
                            <button className="text-[15px] font-bold text-gray-900 flex items-center gap-1 group-hover:text-[--gold] transition-colors">
                                Understanding Expo
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            
                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 w-[280px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-sm border border-gray-50 py-4 transition-all duration-200 origin-top z-50 opacity-0 scale-y-0 pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto">
                                {understandingExpoLinks.map((link, idx) => (
                                    <Link 
                                        key={idx}
                                        href={link.href}
                                        className="block px-8 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[--gold] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="relative group py-2">
                            <button className="text-[15px] font-bold text-gray-900 flex items-center gap-1 group-hover:text-[--gold] transition-colors">
                                Experiences
                                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            
                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 w-[280px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-sm border border-gray-50 py-4 transition-all duration-200 origin-top z-50 opacity-0 scale-y-0 pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto">
                                {experiencesLinks.map((link, idx) => (
                                    <Link 
                                        key={idx}
                                        href={link.href}
                                        className="block px-8 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[--gold] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
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
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-[200] flex flex-col animate-in fade-in duration-300">
                    <div className="py-4 px-6 flex items-center justify-between border-b border-gray-50">
                        <div className="w-[92px] h-[51px] relative">
                            <Link href="/">
                                <img 
                                    src="/logo.png" 
                                    alt="Logo" 
                                    className="w-full h-full object-contain"
                                />
                            </Link>
                        </div>
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2"
                        >
                            <X size={32} className="text-black stroke-1.5" />
                        </button>
                    </div>

                    <div className="grow overflow-y-auto py-4 px-6">
                        <div className="mb-4">
                            <div className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-4 mt-4">Understanding Expo</div>
                            {understandingExpoLinks.map((link, idx) => (
                                <Link 
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-4 text-[16px] font-bold text-[#191919] border-b border-gray-50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        
                        <div className="mb-4">
                            <div className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-4 mt-8">Experiences</div>
                            {experiencesLinks.map((link, idx) => (
                                <Link 
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-4 text-[16px] font-bold text-[#191919] border-b border-gray-50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Expo Map</MobileNavLink>
                        <MobileNavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>News</MobileNavLink>
                        
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
    <Link 
        href={href} 
        className="text-[15px] font-bold text-gray-900 border-b-2 border-transparent hover:border-[#1A1A1A] py-1 transition-all"
    >
        {children}
    </Link>
);

const MobileNavLink: React.FC<NavLinkProps & { onClick: () => void }> = ({ href, children, onClick }) => (
    <Link 
        href={href} 
        onClick={onClick}
        className="flex items-center justify-between text-[16px] font-bold text-[#191919] py-5 border-b border-gray-100"
    >
        {children}
        <ChevronDown size={18} className="text-gray-400 -rotate-90" />
    </Link>
);

export default Navbar;
