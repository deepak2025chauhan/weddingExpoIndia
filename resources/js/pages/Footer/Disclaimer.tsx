import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const Disclaimer = () => {
    return (
        <SimplePageLayout 
            title="Disclaimer" 
            subtitle="Important legal notices and liability statements."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Accuracy of Information</h2>
                    <p>While we strive to provide accurate and up-to-date information on this website, Wedding Expo India makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">No Endorsement</h2>
                    <p>Reference to any third-party products, services, or events on this website does not constitute an endorsement or recommendation by Wedding Expo India. We are not responsible for the content or practices of any linked websites.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                    <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Changes to Content</h2>
                    <p>We reserve the right to modify, add, or remove content from this website at any time without prior notice.</p>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default Disclaimer;
