import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface StatItemProps {
    number: string;
    label: string;
    suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix = "+" }) => {
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
                const currentCount = (easeProgress * end).toLocaleString('en-IN', {
                     maximumFractionDigits: 0 
                });
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [isInView, number]);

    return (
        <div ref={ref} className="flex flex-col items-start text-left">
            <div className="text-[24px] md:text-[32px] font-bold text-white mb-2 font-['expoSans'] leading-none">
                {count}{suffix}
            </div>
            <div className="text-[14px] md:text-[18px] text-white font-medium font-['expoSans'] leading-tight opacity-90">
                {label}
            </div>
        </div>
    );
};

const StatsSection: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);

    const stats = [
        { number: "100000", label: "Footfall" },
        { number: "8000", label: "Participating Companies" },
        { number: "1000", label: "Speakers" },
        { number: "500", label: "Investors" },
        { number: "400", label: "Exhibitors" },
        { number: "400", label: "Sessions" },
        { number: "90", label: "Participating Countries" },
        { number: "50", label: "Product Launches & Showcases" },
        { number: "40", label: "Workshops, Masterclasses" },
        { number: "40", label: "Networking Sessions" },
        { number: "25", label: "Closed Room Sessions" },
        { number: "30", label: "Report Launches" },
    ];

    return (
        <section 
            ref={containerRef} 
            className="relative w-full py-16 md:py-32 bg-[#1b11ec] border-t-[8px] border-[#ff4e00] overflow-hidden"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-24">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <StatItem 
                                number={stat.number} 
                                label={stat.label} 
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
