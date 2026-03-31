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

// GFF uses background images for card accents
const getSpeakerBg = (type: number) => {
    const bgs = {
        1: 'https://www.globalfintechfest.com/images/speaker-bg01.webp',
        2: 'https://www.globalfintechfest.com/images/speaker-bg02.webp',
        3: 'https://www.globalfintechfest.com/images/speaker-bg03.webp',
        4: 'https://www.globalfintechfest.com/images/speaker-bg04.webp'
    };
    return bgs[type as keyof typeof bgs] || bgs[1];
};

const SpeakerCard: React.FC<{ speaker: Speaker; index: number }> = ({ speaker, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
            viewport={{ once: true }}
            className="bg-white  pb-0 box-border mobile:w-[calc(50%-10px)] lg:w-[calc(25%-18px)] w-full flex flex-col justify-between relative overflow-hidden parent-content transition-all duration-300 cursor-pointer group"
        >
            {/* 3-Line Accent Image (Top Right) */}
            <div className="absolute top-0 right-0 z-0 w-[160px] h-[140px] overflow-hidden pointer-events-none select-none">
                <img 
                    src={getSpeakerBg(speaker.accentType)} 
                    alt="accent lines" 
                    className="absolute top-0 right-0 w-full h-full object-contain object-right-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>
            
            <div className="flex flex-col px-[34px] pt-[34px] z-10 relative">
                <h2 className="m-0 text-black font-montserrat text-[22px] not-italic font-[900] leading-[1.1] max-w-[200px] w-full font-['Montserrat',sans-serif]">
                    {speaker.name.split(' ').map((word, i) => (
                        <div key={i} className="whitespace-nowrap">{word}</div>
                    ))}
                </h2>
                <p className="text-[#1A1A1A] font-fira-sans text-[15px] not-italic font-[400] leading-[1.3] m-0 mt-4 max-w-[210px] font-['Fira_Sans',sans-serif]">
                    {speaker.title}
                </p>
            </div>

            <div className=" relative h-[18rem] -mx-[34px] overflow-hidden z-10">
                <img 
                    alt={speaker.name} 
                    src={speaker.image}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
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
