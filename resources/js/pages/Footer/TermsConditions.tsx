import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const TermsConditions = () => {
    return (
        <SimplePageLayout 
            title="Terms and Conditions" 
            subtitle="The rules and guidelines for using our website and services."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                    <p>By accessing or using the Wedding Expo India website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
                    <p>You may use our website for personal, non-commercial purposes only. You agree not to use the website for any unlawful purpose or in any way that could damage or disrupt our services.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                    <p>All content on this website, including text, graphics, logos, and images, is the property of Wedding Expo India and is protected by copyright and other intellectual property laws.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                    <p>Wedding Expo India shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of the website or participation in our events.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
                    <p>You agree to conduct yourself in a professional and respectful manner when interacting with our website and other users.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                    <p>We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website after any changes indicates your acceptance of the new terms.</p>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default TermsConditions;
