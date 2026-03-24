import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const CorporatePolicies = () => {
    return (
        <SimplePageLayout 
            title="Corporate Policies" 
            subtitle="The fundamental principles guiding our operations and interactions."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Code of Conduct</h2>
                    <p>Our code of conduct outlines the ethical and professional standards expected of all employees, partners, and exhibitors at Wedding Expo India. We are committed to transparency, integrity, and respect in all our dealings.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Anti-Corruption and Bribery</h2>
                    <p>Wedding Expo India has a zero-tolerance policy towards any form of corruption or bribery. We are committed to conducting our business in an honest and transparent manner.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Whistleblower Policy</h2>
                    <p>We encourage anyone who has concerns about unethical behavior or violations of our policies to report them through our dedicated whistleblower channels. All reports will be handled confidentially and without fear of retaliation.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Sustainability Policy</h2>
                    <p>We are dedicated to minimizing the environmental impact of our events and promoting sustainable practices across the wedding industry.</p>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default CorporatePolicies;
