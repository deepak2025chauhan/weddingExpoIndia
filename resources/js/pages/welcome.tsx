import AboutExpoSection from '@/components/AboutExpoSection';
import CollaborateSection from '@/components/CollaborateSection';
import ExpoCitySection from '@/components/ExpoCitySection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PartnerSection from '@/components/PartnerSection';
import StatsSection from '@/components/StatsSection';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function Welcome() {
    return (
        <>
            <Head title="World's Biggest Destination Wedding Exhibition" />
            
            <div className="min-h-screen bg-white">
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
