import { ExternalLink } from 'lucide-react';
import React from 'react';

const ExpoCitySection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto overflow-hidden rounded-sm shadow-sm flex flex-col md:flex-row bg-[#F8F8F8]">
                {/* Left Side: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <h2 className="text-[24px] md:text-[36px] font-bold text-black mb-6 md:mb-8 font-['expoSans'] leading-tight">
                        <span className="heading-underline">After Expo, a human-centric</span> <br className="hidden md:block" />
                        smart city rises: Expo City <ExternalLink size={20} className="inline-block ml-2 text-black/70 translate-y-[-2px] md:w-6 md:h-6" />
                    </h2>
                    
                    <p className="text-[15px] md:text-[18px] text-black/80 font-normal font-['expoSans'] leading-relaxed">
                        Transitioning into Expo City, the Expo 2020 Dubai site will live long 
                        after we close our doors at the end of March 2022. As an integrated 
                        mixed-use community, it will carry on and fulfill Expo&apos;s founding 
                        vision to be an ecosystem to connect, create and innovate.
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-full overflow-hidden bg-gray-200">
                    <img 
                        src="https://www.expo2020dubai.com/-/media/expo2020/2021/home/homepage_district2020_800x450.jpg" 
                        alt="Expo City Dubai Community"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ExpoCitySection;
