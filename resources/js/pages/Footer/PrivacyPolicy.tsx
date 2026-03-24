import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <SimplePageLayout 
            title="Privacy and Cookies" 
            subtitle="How we handle your data and use cookies to improve your experience."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p>Wedding Expo India is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and attend our events.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you register for an event, sign up for our newsletter, or contact us for support. This may include your name, email address, phone number, and professional details.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
                    <p>We use the information we collect to provide and improve our services, communicate with you about events and updates, and comply with legal obligations.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Cookies and Similar Technologies</h2>
                    <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or destruction.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal information. If you have any questions or concerns about our privacy practices, please contact us.</p>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default PrivacyPolicy;
