import React from "react";
import { Link } from "@inertiajs/react";

const AboutExpoSection: React.FC = () => {
    return (
        <section className="bg-white py-20 px-6 border-t border-black/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                {/* Logo */}
                <div className="w-48 md:w-64">
                    <img 
                        src="/logo.png" 
                        alt="Wedding India Expo" 
                        className="w-full h-auto opacity-90"
                    />
                </div>

                {/* Text */}
                <div className="max-w-xl text-center md:text-left">
                    <p className="text-[14px] md:text-[18px] text-black/70 font-['expoSans'] leading-relaxed mb-6">
                        The Wedding India Expo is the nation's most prestigious gathering of luxury wedding professionals, venue partners, and visionary designers. We host over 500+ premium exhibitors, creating a one-stop destination for couples to curate their dream wedding with unparalleled elegance and scale.
                    </p>
                    <Link 
                        href="/understanding-expo/expo-initiatives" 
                        className="text-[14px] font-bold border-b-2 border-black/20 pb-1 hover:border-black transition-all font-['expoSans'] uppercase tracking-widest inline-block"
                    >
                        Learn more about Expo
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutExpoSection;
