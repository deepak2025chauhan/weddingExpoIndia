import React, { useState } from 'react';
import { ChevronDown, X, Search } from 'lucide-react';
import { Link } from '@inertiajs/react';
import DownloadMapModal from './DownloadMapModal';

interface NavbarProps {
    visible?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ visible = true }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
    const [mobileExhibitorsOpen, setMobileExhibitorsOpen] = useState(false);


    const [mobileVisitorsOpen, setMobileVisitorsOpen] = useState(false);
    const [mobileUnderstandingOpen, setMobileUnderstandingOpen] = useState(false);
    const [mobileExperiencesOpen, setMobileExperiencesOpen] = useState(false);

    const understandingExpoLinks = [
        { label: "Benefits as an Exhibitor", href: "/understanding-expo/participants/benefits" },
        { label: "Exhibitor Application", href: "/understanding-expo/participants/application" },
        { label: "Individual Participation", href: "/understanding-expo/opportunity-district/individual-participation" },
        { label: "Request Free Stand Area", href: "/understanding-expo/opportunity-district/request-free-stand" },
        { label: "New Product Showcase", href: "/understanding-expo/opportunity-district/new-product-showcase" },
        { label: "Expo Initiatives", href: "/understanding-expo/expo-initiatives" },
        { label: "Sponsorship Plan", href: "/understanding-expo/sponsorship-plan" },
        { label: "Speaker Section", href: "/understanding-expo/sponsorship-plan/speaker-section" },
        { label: "Exhibitor & Visitor Profile", href: "/understanding-expo/sponsorship-plan/profiles" },
        { label: "Blog Page", href: "/understanding-expo/sponsorship-plan/blog" },
        { label: "Why Visit", href: "/understanding-expo/sponsorship-plan/why-visit" },
    ];

    const experiencesLinks = [
        { label: "Theme Weeks", href: "/experiences/theme-weeks" },
        { label: "Art & Culture", href: "/experiences/arts-culture" },
        { label: "Entertainment", href: "/experiences/entertainment" },
        { label: "Food & Livelihoods", href: "/experiences/food-and-livelihoods" },
        { label: "International Destination Pavilion", href: "/experiences/international-destination-pavilion" },
        { label: "India Destination Pavilion", href: "/experiences/india-destination-pavilion" },
        { label: "Luxury Resort & Hotel Pavilion", href: "/experiences/luxury-resort-hotel-pavilion" },
        { label: "Cultural Wedding Showcase Arena", href: "/experiences/cultural-wedding-showcase-arena" },
        { label: "Wedding Cuisine & Catering, Sweets", href: "/experiences/wedding-cuisine-catering-sweets-pavilion" },
        { label: "Honeymoon & Travel Zone", href: "/experiences/honeymoon-travel-zone" },
        { label: "Gifting & Showcase Area", href: "/experiences/gifting-showcase-area" },
    ];

    const weddingExhibitorLinks = [
        { label: "Exhibit With Us", href: "/register-now?type=exhibitor" },
        { label: "Expo Map & Pavilions", href: "/floor-plan" },
        { label: "Sponsorship Opportunities", href: "#" },
        { label: "B2B Matchmaking", href: "#" },
        { label: "Exhibitor Directory", href: route('discover.exhibitors') },
    ];

    const weddingVisitorLinks = [
        { label: "Plan Your Visit", href: "/register-now?type=visitor" },
        { label: "Attendee Rewards", href: "#" },
        { label: "Luxury Zone", href: "#" },
        { label: "Wedding Fashion Shows", href: "#" },
        { label: "Travel & Stay", href: "#" },
        { label: "Innovation Theatre", href: "#" },
    ];

    return (
        <>
            <nav className={`w-full bg-white border-gray-100 sticky top-0 z-[100] font-['expoSans',sans-serif] transition-transform duration-500 ease-in-out ${visible && !isMobileMenuOpen ? 'translate-y-0' : (isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full')}`}>
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
                                            className="w-full h-full "
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="h-6 w-px bg-gray-200" />

                            <span className="text-[13px] font-medium text-gray-800 tracking-wide">
                                7–9 August 2026
                            </span>
                            <div className="h-6 w-px bg-gray-200" />
                            <a href="tel:+919991856776" className="text-[13px] font-bold text-black hover:text-[--gold] transition-colors">
                                Call Us: +91 999-185-6776
                            </a>
                        </div>

                        <div className="flex items-center gap-6">
                            <Link
                                href={route('register.now')}
                                className="border-2 border-black rounded-sm px-6 py-2 text-[13px] font-bold hover:bg-black hover:text-white transition-all"
                            >
                                Register Now
                            </Link>
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
                                className="flex flex-col gap-[6px] items-end p-4 w-12 group"
                            >
                                <span className="w-8 h-[2px] bg-black transition-all" />
                                <span className="w-5 h-[2px] bg-black transition-all" />
                            </button>
                        </div>
                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-10 h-full">
                            <div className="relative group h-full flex items-center">
                                <button className="text-[15px] font-bold text-gray-900 flex items-center gap-1 group-hover:text-[#ED8B00] transition-colors relative py-1">
                                    Understanding
                                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                                    {/* Animated Line */}
                                    <div className="absolute -bottom-4 left-0 w-0 h-[3px] bg-[#ED8B00] transition-all duration-200 group-hover:w-full" />
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute top-full left-0 w-[240px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-sm border border-gray-50 py-4 transition-all duration-200 origin-top z-50 opacity-0 scale-y-0 pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto">
                                    {understandingExpoLinks.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            className="block px-8 py-3 text-[14px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#ED8B00] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="relative group h-full flex items-center">
                                <button className="text-[15px] font-bold text-gray-900 flex items-center gap-1 group-hover:text-[#ED8B00] transition-colors relative py-1">
                                    Experiences
                                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                                    {/* Animated Line */}
                                    <div className="absolute -bottom-4 left-0 w-0 h-[3px] bg-[#ED8B00] transition-all duration-200 group-hover:w-full" />
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute top-full left-0 w-[240px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-sm border border-gray-50 py-4 transition-all duration-200 origin-top z-50 opacity-0 scale-y-0 pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto">
                                    {experiencesLinks.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            className="block px-8 py-3 text-[14px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#ED8B00] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center">
                                <Link href="/floor-plan" className="text-[15px] font-bold text-gray-900 flex items-center gap-1 group-hover:text-[#ED8B00] transition-colors relative py-1">
                                    Expo Map
                                    <div className="absolute -bottom-4 left-0 w-0 h-[3px] bg-[#ED8B00] transition-all duration-200 group-hover:w-full" />
                                </Link>
                            </div>
                            <div className="relative group h-full flex items-center">
                                <Link href="/news" className="text-[15px] font-bold text-gray-900 flex items-center gap-1 group-hover:text-[#ED8B00] transition-colors relative py-1">
                                    News
                                    <div className="absolute -bottom-4 left-0 w-0 h-[3px] bg-[#ED8B00] transition-all duration-200 group-hover:w-full" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors hidden md:block">
                                <Search size={20} />
                            </button>

                            <Link
                                href={route('discover.exhibitors')}
                                className="border-2 border-black rounded-sm px-6 py-2 text-[14px] font-bold hover:bg-black hover:text-white transition-all hidden md:block"
                            >
                                Discover Destinations
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Placed outside of nav to prevent translate-y transform clipping */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex flex-col overflow-hidden"
                    style={{ backgroundColor: '#ffffff', opacity: 1, visibility: 'visible' }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100" style={{ backgroundColor: '#ffffff' }}>
                        <div className="w-[120px] h-auto relative">
                            <Link href="/">
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="w-full"
                                />
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 -mr-2 text-black hover:bg-gray-50 rounded-full transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={32} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="grow overflow-y-auto" style={{ backgroundColor: '#ffffff' }}>
                        <div className="flex flex-col">

                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => setMobileUnderstandingOpen(!mobileUnderstandingOpen)}
                                    className="w-full py-6 px-8 flex items-center justify-between text-[16px] font-bold text-black hover:text-[--gold] transition-colors"
                                >
                                    Understanding
                                    <ChevronDown size={20} className={`text-gray-400 transition-transform ${mobileUnderstandingOpen ? '' : '-rotate-90'}`} />
                                </button>
                                {mobileUnderstandingOpen && (
                                    <div className="bg-gray-50/50 pb-4 px-8 flex flex-col">
                                        {understandingExpoLinks.map((link, idx) => (
                                            <Link
                                                key={idx}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="py-3 text-[15px] font-medium text-gray-600 hover:text-[--gold] transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="border-b border-gray-100">
                                <button
                                    onClick={() => setMobileExperiencesOpen(!mobileExperiencesOpen)}
                                    className="w-full py-6 px-8 flex items-center justify-between text-[16px] font-bold text-black hover:text-[--gold] transition-colors"
                                >
                                    Experiences
                                    <ChevronDown size={20} className={`text-gray-400 transition-transform ${mobileExperiencesOpen ? '' : '-rotate-90'}`} />
                                </button>
                                {mobileExperiencesOpen && (
                                    <div className="bg-gray-50/50 pb-4 px-8 flex flex-col">
                                        {experiencesLinks.map((link, idx) => (
                                            <Link
                                                key={idx}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="py-3 text-[15px] font-medium text-gray-600 hover:text-[--gold] transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="border-b border-gray-100">
                                <Link
                                    href="/floor-plan"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full py-6 px-8 block text-[16px] font-bold text-black hover:text-[--gold] transition-colors border-b border-gray-100"
                                >
                                    Expo Map
                                </Link>
                                <Link
                                    href="/news"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full py-6 px-8 block text-[16px] font-bold text-black hover:text-[--gold] transition-colors border-b border-gray-100"
                                >
                                    News
                                </Link>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="p-8  pt-10">
                            <Link
                                href={route('register.now')}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full border border-black rounded-[4px] py-[14px] text-[16px] font-bold text-center text-black hover:bg-black hover:text-white transition-all"
                            >
                                Register Now
                            </Link>
                        </div>
                        <div className="p-8 pt-0">
                            <Link
                                href={route('discover.exhibitors')}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full border border-black rounded-[4px] py-[14px] text-[16px] font-bold text-center text-black hover:bg-black hover:text-white transition-all"
                            >
                                Discover Destinations
                            </Link>
                        </div>

                    </div>
                </div>
            )}

            <DownloadMapModal
                isOpen={isDownloadModalOpen}
                onClose={() => setIsDownloadModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
