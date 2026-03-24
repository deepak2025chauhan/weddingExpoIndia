import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const CookiePolicy = () => {
    return (
        <SimplePageLayout 
            title="Cookie Policy" 
            subtitle="Details on how we use cookies to personalize your journey."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                    <p>Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your browsing experience.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                    <p>We use cookies for several purposes, including:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly.</li>
                        <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with our site.</li>
                        <li><strong>Personalization Cookies:</strong> Remember your choices and preferences.</li>
                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Managing Your Cookies</h2>
                    <p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline them if you prefer.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                    <p>Some cookies are placed by third-party services that appear on our pages. We do not have control over these cookies.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                    <p>We may update our Cookie Policy from time to time. Please check this page periodically for any changes.</p>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default CookiePolicy;
