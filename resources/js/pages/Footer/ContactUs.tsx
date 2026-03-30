import SimplePageLayout from '@/components/SimplePageLayout';
import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

const ContactUs = () => {
    return (
        <SimplePageLayout
            title="Contact Us"
            subtitle="We're here to help. Reach out to us for any inquiries or support."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-lg text-[#555555] mb-8">
                            Whether you're an exhibitor, visitor, or partner, we'd love to hear from you.
                            Our team is dedicated to making your experience at Wedding Expo India exceptional.
                        </p>
                    </section>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email Us</h3>
                                <p className="text-[#555555]">team@exhibition.org.in</p>
                                <p className="text-[#555555]">business@weddingindiaexpo.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Call Us</h3>
                                <p className="text-[#555555]">+91 999-185-6776</p>

                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Our Location</h3>
                                <p className="text-[#555555]">Exhibition Grounds, Pragati Maidan</p>
                                <p className="text-[#555555]">New Delhi, India, 110001</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F6F6F6] p-8 md:p-12 rounded-sm">
                    <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider">First Name</label>
                                <input type="text" className="w-full bg-white border border-[#EAEAEA] px-4 py-3 focus:border-black outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider">Last Name</label>
                                <input type="text" className="w-full bg-white border border-[#EAEAEA] px-4 py-3 focus:border-black outline-none transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider">Email Address</label>
                            <input type="email" className="w-full bg-white border border-[#EAEAEA] px-4 py-3 focus:border-black outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
                            <input type="text" className="w-full bg-white border border-[#EAEAEA] px-4 py-3 focus:border-black outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                            <textarea rows={5} className="w-full bg-white border border-[#EAEAEA] px-4 py-3 focus:border-black outline-none transition-colors resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-black/90 transition-all">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </SimplePageLayout>
    );
};

export default ContactUs;
