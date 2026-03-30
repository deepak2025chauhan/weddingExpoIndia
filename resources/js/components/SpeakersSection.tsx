import { motion } from 'framer-motion';
import React from 'react';

// Implementation based on exact GFF structure provided
interface Speaker {
    name: string;
    title: string;
    image: string;
    accentType: 1 | 2 | 3 | 4;
}

const speakerData: Speaker[] = [
    {
        name: "Smt. Nirmala Sitharaman",
        title: "Hon'ble Minister of Finance & Corporate Affairs, Government of India",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/GFF_25_Speakers_35_removebg_preview_e0400f1c46.png",
        accentType: 1
    },
    {
        name: "Shri Devendra Fadnavis",
        title: "Hon'ble Chief Minister of Maharashtra",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/Speakers_2_2025_09_22_T144529_092_6aea7005ae.png",
        accentType: 2
    },
    {
        name: "Shri Sanjay Malhotra",
        title: "Governor, Reserve Bank of India",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/GFF_25_Speakers_43_removebg_preview_abee2810af.png",
        accentType: 3
    },
    {
        name: "Shri Tuhin Kanta Pandey",
        title: "Chairman, Securities and Exchange Board of India",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/GFF_25_Speakers_28_removebg_preview_60f4844307.png",
        accentType: 4
    },
    {
        name: "Shri Kalyanaraman Rajaraman",
        title: "Chairperson, International Financial Services Centres Authority",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/Shri_Kalyanaraman_Rajaraman_b4180998c7.png",
        accentType: 1
    },
    {
        name: "Dr. Saurabh Garg",
        title: "Secretary, Ministry of Statistics and Programme Implementation, Government of India",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/GFF_25_Speakers_36_removebg_preview_66a5857555.png",
        accentType: 2
    },
    {
        name: "Shri M Nagaraju",
        title: "Secretary, Department of Financial Services, Ministry of Finance, Government of India",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/GFF_25_Speakers_38_removebg_preview_a4f5fa400c.png",
        accentType: 3
    },
    {
        name: "Mr. Francois Villeroy de Galhau",
        title: "Governor, Banque de France",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/Speakers_2_4_removebg_preview_f915ce7da9.png",
        accentType: 4
    },
    {
        name: "Mr. Burkhard Balz",
        title: "Member of the Executive Board of the Deutsche Bundesbank",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/Speakers_2_5_removebg_preview_66af29685e.png",
        accentType: 1
    },
    {
        name: "Ms. Débora Sztarcsevszky",
        title: "General Secretary Manager, Central Bank of Uruguay",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/Speakers_2_98_removebg_preview_fd054016cd.png",
        accentType: 2
    },
    {
        name: "Dr. Marlene Amstad",
        title: "Chairperson, FINMA - Swiss Financial Market Supervisory Authority",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/GFF_25_Speakers_55_removebg_preview_9bc283c1a9.png",
        accentType: 3
    },
    {
        name: "Mr. T Rabi Sankar",
        title: "Deputy Governor, Reserve Bank of India",
        image: "https://gff-strapi-media.s3.ap-south-1.amazonaws.com/GFF_25_Speakers_44_removebg_preview_1_bfd986bd72.png",
        accentType: 4
    }
];

const AccentSVG: React.FC<{ type: number }> = ({ type }) => {
    const colors = {
        1: '#4e67eb', // Blue
        2: '#00d1ff', // Cyan
        3: '#8a4fff', // Purple
        4: '#ff5c00'  // Orange
    };
    
    // Mapping 1-4 to specific paths or types
    const color = colors[type as keyof typeof colors] || colors[1];

    return (
        <div className="absolute top-0 right-0 w-[142px] h-[122px] pointer-events-none overflow-hidden">
            <svg width="142" height="122" viewBox="0 0 142 122" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0">
                <path d="M20 10 C 60 10, 80 60, 160 40" stroke={color} strokeWidth="3" strokeLinecap="round" />
                <path d="M10 30 C 55 30, 75 80, 160 60" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                <path d="M0 50 C 50 50, 70 100, 160 80" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.3" />
            </svg>
        </div>
    );
};

const SpeakerCard: React.FC<{ speaker: Speaker; index: number }> = ({ speaker, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
            viewport={{ once: true }}
            className={`bg-white p-[34px] pb-0 box-border mobile:w-[calc(50%-10px)] lg:w-[calc(25%-18px)] w-full flex flex-col justify-between relative overflow-hidden parent-content transition-all duration-200 speaker-bg-${speaker.accentType} cursor-pointer hover-effect group`}
        >
            <AccentSVG type={speaker.accentType} />
            
            <div className="flex flex-col z-10">
                <h2 className="m-0 text-black font-montserrat text-[18px] not-italic font-[800] leading-[100%] max-w-[7rem] w-full mobile:min-h-[54px] font-['Montserrat',sans-serif]">
                    {speaker.name.split(' ').map((part, i) => (
                        <React.Fragment key={i}>
                            {part}{' '}
                            {i === 0 && <br />}
                        </React.Fragment>
                    ))}
                </h2>
                <p className="text-black font-fira-sans text-[14px] not-italic font-[400] leading-[140%] m-0 mt-2 max-w-[204px] mobile:min-h-[60px] font-['Fira_Sans',sans-serif]">
                    {speaker.title}
                </p>
            </div>

            <div className="mt-8 relative h-[16rem] -mx-[34px] overflow-hidden">
                <img 
                    alt="speaker-Image" 
                    src={speaker.image}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
            </div>
        </motion.div>
    );
};

const SpeakersSection: React.FC = () => {
    return (
        <div className="bg-black overflow-hidden" style={{ backgroundColor: 'black' }}>
            <div className="lg:py-[100px] lg:px-[88px] px-5 py-10 speakers-bg relative">
                <div className="max-w-[1440px] mx-auto my-0">
                    <h2 className="lg:text-[2.5rem] text-2xl font-[700] font-montserratBold leading-[1.2] text-white m-0 mb-2 font-['Montserrat',sans-serif]">
                        GFF 2025 Speakers
                    </h2>
                    <p className="text-[1.125rem] text-white leading-[150%] max-w-[591px] tracking-[-0.36px] m-0 font-firaSansRegular font-['Fira_Sans',sans-serif]">
                        GFF 2025 featured the sharpest minds in fintech.
                    </p>

                    <section className="max-w-[1440px] mx-auto my-0">
                        <div className="flex sm:flex-row flex-wrap mt-8 flex-col h-full gap-4 lg:gap-x-6 lg:gap-y-[54px]">
                            {speakerData.map((speaker, index) => (
                                <SpeakerCard 
                                    key={index} 
                                    speaker={speaker} 
                                    index={index} 
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SpeakersSection;
