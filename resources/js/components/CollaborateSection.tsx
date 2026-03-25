import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React, { useState } from "react";

const slides = [
    {
        title: "Showcasing the Future of Luxury Weddings",
        description: "Discover curated experiences, global wedding trends, and innovative concepts shaping the destination wedding industry.",
        linkText: "Explore Luxury Trends",
        cards: [
            "Bespoke Destination Experiences",
            "Sustainable Luxury Ceremonies"
        ]
    },
    {
        title: "Where Creativity Meets Celebration",
        description: "The Wedding Innovation programme spotlights the world's most creative designers, tech-forward planners, and sustainable artisans making a difference in the celebration industry.",
        linkText: "Meet the Wedding Innovators",
        cards: [
            "Digital Concierge Services",
            "Eco-Conscious Decor Solutions"
        ]
    },
    {
        title: "Unlocking Global Business Opportunities",
        description: "The Wedding Business Programme is a premium platform for networking, highlighting cutting-edge hospitality technologies, and forging partnerships between international brands and Indian wedding leaders.",
        linkText: "Explore B2B Opportunities",
        cards: [
            "Strategic Partner Meetups",
            "Hospitality Investment Forums"
        ]
    }
];

const CollaborateSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[currentSlide];

    return (
        <section className="w-full px-10 flex flex-col md:flex-row min-h-[600px] overflow-hidden">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col">
                {/* Top Section: Connect and Collaborate (Yellow Gradient) */}
                <div 
                    className="flex-1 p-10 md:p-24 relative overflow-hidden flex flex-col justify-center min-h-[400px] md:min-h-[450px]"
                    style={{
                        background: 'linear-gradient(135deg, #F9D034 0%, #F5AE2B 100%)',
                        // Using Logo-Pattern.svg for the "blob" organic shapes requested by the user
                        backgroundImage: `url('https://www.expo2020dubai.com/-/media/css-and-js/visitorportal/images/Logo-Pattern.svg'), linear-gradient(135deg, #F9D034 0%, #F5AE2B 100%)`,
                        backgroundSize: '150% auto, 100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed, scroll'
                    }}
                >
                    {/* Content */}
                    <div className="relative z-10 max-w-lg">
                        <h2 className="text-[32px] md:text-[48px] font-bold text-black mb-6 font-['expoSans'] leading-tight">
                            Connect and Collaborate
                        </h2>
                        <p className="text-[16px] md:text-[20px] text-black/95 font-['expoSans'] font-medium leading-relaxed">
                            Bringing together wedding planners, global venues, designers, and luxury brands to create meaningful partnerships and business opportunities. </p>
                    </div>
                </div>

                {/* Bottom Section: Programme (Image/Video) */}
                <div className="flex-1 relative group overflow-hidden min-h-[400px] md:min-h-[450px]">
                    <img 
                        src="https://www.expo2020dubai.com/-/media/expo2020/2021/home/homepage--connect-and-collaborate12.jpg" 
                        alt="Explore our Programme for People and Planet"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10 md:p-12 text-center text-white">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/50 flex items-center justify-center mb-6 md:mb-8 cursor-pointer hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                            <Play fill="currentColor" size={24} className="ml-1 md:w-7 md:h-7" />
                        </div>
                        <h3 className="text-[24px] md:text-[32px] font-bold font-['expoSans'] leading-tight max-w-sm">
                        Explore the World of Destination Weddings
                        </h3>
                    </div>
                </div>
            </div>

            {/* Right Column: Main Carousel (Dark) */}
            <div className="w-full md:w-1/2 bg-[#191919] text-white p-10 md:p-24 flex flex-col justify-between min-h-[700px] md:min-h-[900px]">
                {/* Top: Pagination */}
                <div className="flex items-center gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="flex gap-4">
                        <button 
                            onClick={prevSlide}
                            className="border border-white/20 rounded-full p-2 md:p-3 hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
                        >
                            <ChevronLeft size={20} className="md:w-6 md:h-6" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="border border-white/20 rounded-full p-2 md:p-3 hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
                        >
                            <ChevronRight size={20} className="md:w-6 md:h-6" />
                        </button>
                    </div>
                    <span className="text-[14px] md:text-[16px] font-medium tracking-[0.2em] text-white/70">
                        0{currentSlide + 1} / 0{slides.length}
                    </span>
                </div>

                {/* Content */}
                <div key={currentSlide} className="max-w-2xl mb-12 md:mb-20 animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-[32px] md:text-[64px] font-bold mb-8 md:mb-10 font-['expoSans'] leading-[1.1]">
                        {slide.title}
                    </h2>
                    <p className="text-[17px] md:text-[22px] text-white/80 font-['expoSans'] leading-relaxed mb-8 md:mb-10 max-w-xl">
                        {slide.description}
                    </p>
                    <a 
                        href="#" 
                        className="text-[16px] md:text-[20px] font-bold border-b-2 border-white/50 pb-1 hover:text-[#F9D034] hover:border-[#F9D034] transition-all inline-block uppercase tracking-wider"
                    >
                        {slide.linkText}
                    </a>
                </div>

                {/* Bottom: Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                    {slide.cards.map((card, index) => (
                        <div key={index} className="border border-white/15 p-10 rounded-sm hover:border-white/40 transition-all cursor-pointer group bg-white/5">
                            <h4 className="text-[22px] font-bold font-['expoSans'] leading-tight group-hover:text-[#F9D034] transition-colors">
                                {card}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollaborateSection;
