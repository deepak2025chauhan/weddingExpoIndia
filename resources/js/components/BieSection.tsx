import React from "react";

const BieSection: React.FC = () => {
    return (
        <section className="bg-white py-20 px-6 border-t border-black/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                {/* Logo */}
                <div className="w-48 md:w-64">
                    <img 
                        src="https://www.expo2020dubai.com/-/media/devsamplemedia/feature/banner/bie_logo.svg" 
                        alt="Bureau International des Expositions" 
                        className="w-full h-auto"
                    />
                </div>

                {/* Text */}
                <div className="max-w-xl text-center md:text-left">
                    <p className="text-[14px] md:text-[16px] text-black/70 font-['expoSans'] leading-relaxed mb-4">
                        Created by the 1928 Paris Convention, the Bureau International des Expositions (BIE) is the Paris-based intergovernmental organisation in charge of overseeing and regulating World Expos.
                    </p>
                    <a 
                        href="http://www.bie-paris.org/site/en/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-bold border-b border-black/20 pb-1 hover:border-black transition-all font-['expoSans'] uppercase tracking-wider"
                    >
                        Learn more about BIE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BieSection;
