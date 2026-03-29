import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[calc(100vh-140px)] w-full overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                    src="https://d4v6asj3r1y4m.cloudfront.net/hero/expohomeloopjan11.mp4"
                />
            </div>

            {/* Dotted Overlay */}
            <div className="c-video-intro__overlay" />

            {/* Content Overlay */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                <div className="max-w-xl animate-in fade-in slide-in-from-left duration-1000">
                    <h2 className="text-[16px] md:text-[22px] font-normal text-white mb-1 font-['expoSans'] opacity-90">
                      7-9 August 2026 | IICC Yashobhoomi, New Delhi
                    </h2>
                    {/* <h2 className="text-[16px] md:text-[22px] font-normal text-white mb-6 font-['expoSans'] opacity-90">
                        welcoming the world!
                    </h2> */}
                    <h1 className="text-[24px] md:text-[42px] font-bold text-white mb-10 font-['expoSans'] leading-tight">
                     India’s First International Destination Wedding Exhibition
                    </h1>
                    
                    <a 
                        href="#" 
                        className="inline-flex items-center gap-3 text-white text-[15px] md:text-[16px] font-bold hover:underline group pointer-events-auto"
                    >
                     
Where the World of Destination Weddings Meets India
                        {/* <ExternalLink size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
                    </a>
                </div>
            </div>

            {/* Scroll Indicator - Bottom of this section */}
            <div className="absolute bottom-8 left-6 md:bottom-12 md:left-6 z-10 flex flex-col items-start gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <div className="w-px h-10 md:h-12 bg-white/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[--gold] animate-scroll-line" />
                </div>
                <span className="text-white text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;