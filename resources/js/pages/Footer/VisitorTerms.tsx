import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const VisitorTerms = () => {
    return (
        <SimplePageLayout 
            title="Visitor Terms and Conditions" 
            subtitle="Essential information for everyone attending Wedding Expo India."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Entry Requirements</h2>
                    <p>All visitors must have a valid ticket or pass to enter the exhibition grounds. We reserve the right to refuse entry to any individual who does not comply with our entry requirements.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Security and Safety</h2>
                    <p>The safety of our visitors is our top priority. We implement various security measures, including bag checks and surveillance, to ensure a safe environment for everyone. Please follow the instructions of our security personnel at all times.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Photography and Filming</h2>
                    <p>By entering the expo, you consent to being photographed or filmed for promotional purposes. We may use these images and videos on our website, social media, and other marketing materials.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Prohibited Items</h2>
                    <p>The following items are prohibited within the exhibition grounds: weapons, illegal substances, and any other items that may pose a threat to the safety and security of others.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Liability</h2>
                    <p>Wedding Expo India is not responsible for any personal injury, loss, or damage to property that may occur during your visit to the expo.</p>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default VisitorTerms;
