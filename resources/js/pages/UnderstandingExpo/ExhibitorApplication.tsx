import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Send, ShieldCheck, HelpCircle } from 'lucide-react';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const ExhibitorApplication = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    return (
        <div className="min-h-screen bg-white font-['expoSans',sans-serif]">
            <Head title="Exhibitor Application" />
            
            <LeadCaptureModal onSuccess={() => setIsUnlocked(true)} />

            <Navbar />

            <div className={`${!isUnlocked ? 'blur-md pointer-events-none select-none' : 'transition-all duration-1000'}`}>
                {/* Header */}
                <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-center">
                    <h1 className="text-[48px] md:text-[64px] font-bold text-[#191919] mb-6">Exhibitor Application</h1>
                    <p className="text-gray-500 text-[18px] max-w-2xl mx-auto leading-relaxed">
                        Join the league of elite wedding professionals. Complete the application form below to secure your space at Wedding India Expo 2025.
                    </p>
                </div>

                {/* Process Info */}
                <div className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 rounded-2xl text-center">
                            <FileText className="mx-auto mb-4 text-[--gold]" size={36} />
                            <h3 className="font-bold text-[20px] mb-2">1. Fill the Form</h3>
                            <p className="text-[14px] text-gray-500">Provide your brand details and pavilion preferences.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl text-center">
                            <ShieldCheck className="mx-auto mb-4 text-[--gold]" size={36} />
                            <h3 className="font-bold text-[20px] mb-2">2. Review & Approval</h3>
                            <p className="text-[14px] text-gray-500">Our team will review your application for eligibility.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl text-center">
                            <Send className="mx-auto mb-4 text-[--gold]" size={36} />
                            <h3 className="font-bold text-[20px] mb-2">3. Confirmation</h3>
                            <p className="text-[14px] text-gray-500">Once approved, receive your stall allocation and contract.</p>
                        </div>
                    </div>
                </div>

                {/* Application Form Section (Placeholder for actual complex form) */}
                <section className="bg-gray-50 py-24">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16 border border-gray-100">
                            <div className="text-center mb-12">
                                <h2 className="text-[32px] font-bold mb-4 text-black">Start Your Application</h2>
                                <p className="text-gray-500">Please fill out the information accurately to expedite the approval process.</p>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold uppercase tracking-wider text-gray-700">Company Name</label>
                                        <input type="text" className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[--gold]" placeholder="Enter company name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[13px] font-bold uppercase tracking-wider text-gray-700">Category</label>
                                        <select className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[--gold]">
                                            <option>Select Industry Category</option>
                                            <option>Destination Tourism</option>
                                            <option>Hospitality & Hotels</option>
                                            <option>Jewelry & Accessories</option>
                                            <option>Fashion & Apparel</option>
                                            <option>Planning & Decor</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="text-center pt-8">
                                    <Link 
                                        href="/register-now?type=exhibitor"
                                        className="inline-block bg-black text-white px-16 py-5 rounded-full font-bold text-[18px] hover:bg-[#191919] transition-all"
                                    >
                                        Proceed to Register
                                    </Link>
                                    <p className="mt-6 text-[14px] text-gray-400">Need help? <Link href="/contact-us" className="text-[--gold] font-bold">Contact our support team</Link></p>
                                </div>
                            </div>
                        </div>
                        
                        {/* FAQ Quick Link */}
                        <div className="mt-16 flex items-center justify-center gap-3 text-gray-500 italic">
                            <HelpCircle size={18} />
                            <span>Have questions about fees or stall sizes? <Link href="/faqs" className="text-[--gold] not-italic font-bold border-b border-[--gold]">Check our FAQs</Link></span>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default ExhibitorApplication;
