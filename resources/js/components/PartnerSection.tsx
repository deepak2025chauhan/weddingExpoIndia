import React from "react";

const partners = [
    { name: "Accenture", logo: "https://www.expo2020dubai.com/-/media/expo2020/logos/partners/logo-accenture-v4.svg" },
    { name: "Cisco", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-cisco.svg" },
    { name: "DP World", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-dp-world-new-03.svg" },
    { name: "Emirates", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-emirates.svg" },
    { name: "Etisalat", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-etisalat.svg" },
    { name: "G42", logo: "https://www.expo2020dubai.com/-/media/expo2020/logos/partners/v3/g42_logo.svg" },
    { name: "Mastercard", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-mastercard.svg" },
    { name: "Nissan", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-nissan-new.svg" },
    { name: "PepsiCo", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-pepsico.svg" },
    { name: "SAP", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-sap.svg" },
    { name: "Siemens", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/siemens-v4.svg" },
    { name: "Terminus", logo: "https://www.expo2020dubai.com/-/media/expo2020/partners/logos-svg/logo-terminus.svg" },
];

const PartnerSection: React.FC = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-[14px] font-bold tracking-[0.2em] text-black/40 mb-12 uppercase font-['expoSans']">
                    Official Premier Partners
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center place-items-center">
                    {partners.map((partner) => (
                        <div key={partner.name} className="w-full flex items-center justify-center group cursor-pointer">
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="max-h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <a 
                        href="#" 
                        className="text-[14px] font-bold border-b border-black/20 pb-1 hover:border-black transition-all font-['expoSans'] uppercase tracking-wider"
                    >
                        View all partners
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
