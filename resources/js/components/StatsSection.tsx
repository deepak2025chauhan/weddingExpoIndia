import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface StatItemProps {
    number: string;
    label: string;
    suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState<string>("0");

    useEffect(() => {
        if (isInView) {
            const end = parseFloat(number.replace(/[^0-9.]/g, ''));
            const duration = 2000;
            const startTime = performance.now();

            const updateCount = (currentTime: number) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentCount = (easeProgress * end).toFixed(number.includes('.') ? 1 : 0);
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [isInView, number]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center px-4">
            <div className="text-[28px] md:text-[42px] font-bold text-white mb-2 font-['expoSans']">
                {count}{suffix}
            </div>
            <div className="text-[13px] md:text-[16px] text-white/80 font-normal font-['expoSans'] leading-tight max-w-[160px]">
                {label}
            </div>
        </div>
    );
};

const StatsSection: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    const stats = [
        { number: "75", label: "Indian wedding industry size", suffix: "B+" },
        { number: "25", label: "Annual growth in destination weddings", suffix: "%" },
        { number: "6000", label: "Premium exhibition space", suffix: "sqm" },
        { number: "150", label: "Curated luxury exhibitors", suffix: "+" },
        { number: "150", label: "High-intent wedding buyers & professionals", suffix: "+" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    } as any;

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    } as any;

    return (
        <section ref={containerRef} className="relative mt-24 md:mt-20 w-full h-screen min-h-[600px] md:min-h-[700px] overflow-hidden bg-black flex items-center">
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url('https://www.expo2020dubai.com/-/media/expo2020/2021/home/zoom/expo-site_dark_compressed_1.jpg')`,
                    transform: 'scale(1.05)' 
                }}
            />

            <div className="c-video-intro__overlay w-full! opacity-40!" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-[36px] md:text-[54px] font-bold text-white mb-4 font-['expoSans']">
                        WHAT WE ARE BUILDING
                    </h1>
                    <p className="text-[16px] md:text-[20px] text-white font-bold font-['expoSans'] uppercase tracking-[0.2em]">
                        The Scale of Opportunity <br />
                        India’s destination wedding market is evolving into a global luxury industry.

                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="stats-grid"
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="bg-white/3 backdrop-blur-[1px] border border-white/10 p-8 rounded-sm hover:bg-white/8 transition-colors duration-500"
                        >
                            <StatItem 
                                number={stat.number} 
                                label={stat.label} 
                                suffix={stat.suffix} 
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
