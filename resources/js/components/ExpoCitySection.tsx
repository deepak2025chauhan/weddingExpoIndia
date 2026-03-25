import { ExternalLink } from 'lucide-react';
import React from 'react';

const ExpoCitySection: React.FC = () => {
    return (
        <section className="bg-white py-12 md:py-20 px-4 md:px-6">
            <div className="max-w-7xl mx-auto overflow-hidden rounded-sm shadow-sm flex flex-col md:flex-row bg-[#F8F8F8]">
                {/* Left Side: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <h2 className="text-[24px] md:text-[36px] font-bold text-black mb-6 md:mb-8 font-['expoSans'] leading-tight">
                        <span className="heading-underline">Beyond the Expo:</span> <br className="hidden md:block" />
                       Shaping the Future of Destination Weddings
{/* <ExternalLink size={20} className="inline-block ml-2 text-black/70 translate-y-[-2px] md:w-6 md:h-6" /> */}
                    </h2>
                    
                    <p className="text-[15px] md:text-[18px] text-black/80 text-justify font-normal font-['expoSans'] leading-relaxed">
                       Wedding India Expo is not just a two-day exhibition — it is a platform designed to build long-term value for the destination wedding industry.

As the industry evolves globally, the expo creates an ecosystem where venues, planners, designers, and service providers continue to connect, collaborate, and grow beyond the event itself.

From international partnerships to new business opportunities, Wedding India Expo is where the future of luxury weddings begins.
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
