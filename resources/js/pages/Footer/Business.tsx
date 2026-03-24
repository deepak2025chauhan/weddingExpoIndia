import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const Business = () => {
    return (
        <SimplePageLayout 
            title="Business" 
            subtitle="Explore partnership and commercial opportunities at Wedding Expo India."
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold mb-6">Partnering with Us</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Wedding Expo India offers a unique platform for businesses to showcase their products and services to a highly targeted audience of wedding professionals and couples. 
                        Whether you're a large corporation or a boutique brand, we have partnership opportunities tailored to your needs.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#F6F6F6] p-8 rounded-sm">
                        <h3 className="text-xl font-bold mb-4">Sponsorship Opportunities</h3>
                        <p className="mb-6">Gain maximum brand exposure through our various sponsorship tiers, including Title, Platinum, and Gold sponsorship.</p>
                        <button className="font-bold border-b-2 border-black pb-1 hover:text-black/70 transition-colors uppercase text-sm">Download Prospectus</button>
                    </div>
                    <div className="bg-[#F6F6F6] p-8 rounded-sm">
                        <h3 className="text-xl font-bold mb-4">Exhibitor Bookings</h3>
                        <p className="mb-6">Secure your space at the upcoming expo. We offer various stall sizes and premium locations to suit your requirements.</p>
                        <button className="font-bold border-b-2 border-black pb-1 hover:text-black/70 transition-colors uppercase text-sm">Request Quote</button>
                    </div>
                </div>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Commercial Benefits</h2>
                    <ul className="list-disc pl-6 space-y-4">
                        <li><strong>Brand Visibility:</strong> Reach thousands of potential clients and partners.</li>
                        <li><strong>Networking:</strong> Connect with key players in the wedding industry.</li>
                        <li><strong>Direct Sales:</strong> Generate leads and close deals on the spot.</li>
                        <li><strong>Market Research:</strong> Gain insights into the latest trends and consumer behavior.</li>
                    </ul>
                </section>

                <section className="bg-black text-white p-12 text-center rounded-sm">
                    <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
                    <p className="mb-8 max-w-2xl mx-auto opacity-80">Our dedicated business development team is ready to help you find the perfect partnership opportunity.</p>
                    <a href="mailto:business@weddingexpoindia.in" className="inline-block bg-[#A38D56] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#8D7946] transition-all">
                        Get in Touch
                    </a>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default Business;
