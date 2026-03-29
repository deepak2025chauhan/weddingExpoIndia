import AboutExpoSection from '@/components/AboutExpoSection';
import CollaborateSection from '@/components/CollaborateSection';
import ExpoCitySection from '@/components/ExpoCitySection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PartnerSection from '@/components/PartnerSection';
import StatsSection from '@/components/StatsSection';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function Welcome() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    return (
        <>
            <Head title="World's Biggest Destination Wedding Exhibition" />
            
            <LeadCaptureModal onSuccess={() => setIsUnlocked(true)} />

            <div className={`min-h-screen bg-white ${!isUnlocked ? 'blur-md pointer-events-none' : 'transition-all duration-1000'}`}>
                <Navbar />
                <main>
                    <Hero />
                    <StatsSection />
                    <ExpoCitySection />
                    <CollaborateSection />
                    <PartnerSection />
                    <AboutExpoSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
