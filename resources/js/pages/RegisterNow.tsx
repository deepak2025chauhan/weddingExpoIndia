import { Head, Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type VisitorData = {
    name: string;
    mobile: string;
    email: string;
    weddingTimeline: string;
    weddingType: string;
    budget: string;
    visitIntent: string;
    // B2B Mini Form fields:
    companyName?: string;
    businessType?: string;
    b2bInterest?: string;
};

type ExhibitorData = {
    companyName: string;
    category: string;
    pavilion: string;
    space: string;
    budget: string;
    outcome: string;
};

export default function RegisterNow() {
    const [registrationType, setRegistrationType] = useState<'visitor' | 'exhibitor'>('visitor');

    // Steps state (1 to 3)
    const [step, setStep] = useState(1);

    // Form data states
    const [visitorData, setVisitorData] = useState<VisitorData>({
        name: '', mobile: '', email: '', weddingTimeline: '', weddingType: '', budget: '', visitIntent: ''
    });
    const [exhibitorData, setExhibitorData] = useState<ExhibitorData>({
        companyName: '', category: '', pavilion: '', space: '', budget: '', outcome: ''
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('type') === 'exhibitor') {
                setRegistrationType('exhibitor');
            } else {
                setRegistrationType('visitor');
            }
        }
    }, []);

    const handleTypeChange = (type: 'visitor' | 'exhibitor') => {
        setRegistrationType(type);
        setStep(1); // reset step when switching
    };

    const handleVisitorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setVisitorData({ ...visitorData, [e.target.name]: e.target.value });
    };

    const handleExhibitorChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setExhibitorData({ ...exhibitorData, [e.target.name]: e.target.value });
    };

    const totalSteps = registrationType === 'visitor' ? 4 : 3;

    const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const finalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Your registration has been submitted successfully.');
        setStep(1);
    };

    const renderProgressBar = () => {
        return (
            <div className="w-full bg-[var(--text-main)]/10 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                    className="h-full bg-[var(--gold)] transition-all duration-500 rounded-full"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                />
            </div>
        );
    };

    // --- VISITOR FUNNEL ---
    const renderVisitorStep1 = () => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
            <div className="mb-2">
                <h3 className="text-xl font-['expoSans'] font-semibold text-[var(--gold-dark)] mb-1">Step 1: Your Details</h3>
                <p className="text-sm text-[var(--text-muted)]">Please provide your basic contact information to get started.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Full Name *</label>
                    <input name="name" onChange={handleVisitorChange} value={visitorData.name} required className="input-couture" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Mobile Number (OTP required later) *</label>
                    <input name="mobile" type="tel" onChange={handleVisitorChange} value={visitorData.mobile} required className="input-couture" placeholder="+91 98765 43210" />
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Email Address *</label>
                <input name="email" type="email" onChange={handleVisitorChange} value={visitorData.email} required className="input-couture" placeholder="john@example.com" />
            </div>

            <button type="button" onClick={nextStep} className="w-full mt-6 bg-[var(--text-main)] hover:bg-black text-white font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all rounded-sm">
                Next Step
            </button>
        </div>
    );

    const renderVisitorStep2 = () => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
            <div className="mb-2">
                <h3 className="text-xl font-['expoSans'] font-semibold text-[var(--gold-dark)] mb-1">Step 2: Wedding Details</h3>
                <p className="text-sm text-[var(--text-muted)]">Help us personalize your exhibition experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">When are you planning to marry? *</label>
                    <select name="weddingTimeline" onChange={handleVisitorChange} value={visitorData.weddingTimeline} required className="input-couture cursor-pointer bg-transparent">
                        <option value="" disabled>Select timeline</option>
                        <option value="0-3">0–3 months</option>
                        <option value="3-6">3–6 months</option>
                        <option value="6-12">6–12 months</option>
                        <option value="exploring">Just exploring</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Preferred Wedding Type *</label>
                    <select name="weddingType" onChange={handleVisitorChange} value={visitorData.weddingType} required className="input-couture cursor-pointer bg-transparent">
                        <option value="" disabled>Select type</option>
                        <option value="destination">Destination</option>
                        <option value="local">Local</option>
                        <option value="luxury">Luxury</option>
                        <option value="budget">Budget</option>
                    </select>
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Estimated Budget *</label>
                <select name="budget" onChange={handleVisitorChange} value={visitorData.budget} required className="input-couture cursor-pointer bg-transparent">
                    <option value="" disabled>Select budget range</option>
                    <option value="5-10L">₹5–10L</option>
                    <option value="10-25L">₹10–25L</option>
                    <option value="25L+">₹25L+</option>
                </select>
            </div>

            <div className="flex gap-4 mt-6">
                <button type="button" onClick={prevStep} className="w-1/3 bg-transparent border border-[var(--text-main)]/20 text-[var(--text-main)] font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all hover:bg-gray-50 rounded-sm">
                    Back
                </button>
                <button type="button" onClick={nextStep} className="w-2/3 bg-[var(--text-main)] hover:bg-black text-white font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all rounded-sm">
                    Next Step
                </button>
            </div>
        </div>
    );

    const renderVisitorStep3 = () => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center space-y-8 py-4">
            <h3 className="text-2xl font-['expoSans'] font-bold text-[var(--gold-dark)]">Congratulations! You are eligible for:</h3>

            <div className="grid grid-cols-2 gap-4 text-left max-w-sm mx-auto">
                <div className="p-4 bg-[var(--bg-offwhite)] border border-[var(--gold-light)] rounded-lg flex items-center gap-3 shadow-sm">
                    <span className="text-2xl">🎟</span>
                    <span className="text-sm font-bold text-[var(--text-main)]">Free / Discounted Entry</span>
                </div>
                <div className="p-4 bg-[var(--bg-offwhite)] border border-[var(--gold-light)] rounded-lg flex items-center gap-3 shadow-sm">
                    <span className="text-2xl">🎁</span>
                    <span className="text-sm font-bold text-[var(--text-main)]">Wedding Gift Hampers</span>
                </div>
                <div className="p-4 bg-[var(--bg-offwhite)] border border-[var(--gold-light)] rounded-lg flex items-center gap-3 shadow-sm">
                    <span className="text-2xl">💸</span>
                    <span className="text-sm font-bold text-[var(--text-main)]">Vendor Discount Coupons</span>
                </div>
                <div className="p-4 bg-[var(--bg-offwhite)] border border-[var(--gold-light)] rounded-lg flex items-center gap-3 shadow-sm">
                    <span className="text-2xl">🎉</span>
                    <span className="text-sm font-bold text-[var(--text-main)]">Lucky Draw Entry</span>
                </div>
            </div>

            <p className="text-[var(--text-muted)] text-sm">Win a Honeymoon or Destination Wedding Deal!</p>

            <div className="flex gap-4 mt-8">
                <button type="button" onClick={prevStep} className="w-1/3 bg-transparent border border-[var(--text-main)]/20 text-[var(--text-main)] font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all hover:bg-gray-50 rounded-sm">
                    Back
                </button>
                <button type="button" onClick={nextStep} className="w-2/3 bg-[var(--text-main)] hover:bg-black text-white font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all rounded-sm shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]">
                    Claim Offers & Continue
                </button>
            </div>
        </div>
    );

    const renderVisitorStep4 = () => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
            <h3 className="text-xl font-['expoSans'] font-semibold text-[var(--gold-dark)] mb-4">Step 4: Final Details</h3>

            <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Why are you visiting? *</label>
                <select name="visitIntent" onChange={handleVisitorChange} value={visitorData.visitIntent} required className="input-couture cursor-pointer bg-transparent">
                    <option value="" disabled>Select your intent</option>
                    <option value="planning">💍 Planning My Wedding</option>
                    <option value="exploring">🔍 Exploring Ideas</option>
                    <option value="business">🤝 Looking for Business Collaboration</option>
                </select>
            </div>

            {/* Smart Split: Mini B2B Form */}
            {visitorData.visitIntent === 'business' && (
                <div className="mt-6 p-6 bg-[var(--gold-light)]/20 border border-[var(--gold)]/30 rounded-xl space-y-6 animate-in fade-in slide-in-from-top-4">
                    <h4 className="text-sm font-bold text-[var(--gold-dark)] uppercase tracking-wide">Business Collaboration Details</h4>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-[var(--text-main)] font-bold">Company Name *</label>
                        <input name="companyName" onChange={handleVisitorChange} value={visitorData.companyName || ''} required className="input-couture bg-transparent border-[var(--gold)]/30" placeholder="Your Business" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-[var(--text-main)] font-bold">Business Type *</label>
                            <input name="businessType" onChange={handleVisitorChange} value={visitorData.businessType || ''} required className="input-couture bg-transparent border-[var(--gold)]/30" placeholder="e.g. Agency, Vendor" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-[var(--text-main)] font-bold">Primary Interest *</label>
                            <select name="b2bInterest" onChange={handleVisitorChange} value={visitorData.b2bInterest || ''} required className="input-couture cursor-pointer bg-transparent border-[var(--gold)]/30">
                                <option value="" disabled>Select interest...</option>
                                <option value="partnership">Partnership</option>
                                <option value="vendor">Vendor tie-up</option>
                                <option value="franchise">Franchise / expansion</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex gap-4 mt-8 pt-6">
                <button type="button" onClick={prevStep} className="w-1/3 bg-transparent border border-[var(--text-main)]/20 text-[var(--text-main)] font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all hover:bg-gray-50 rounded-sm">
                    Back
                </button>
                <button type="submit" className="w-2/3 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all rounded-sm shadow-[0_10px_30px_-10px_rgba(197,168,128,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(197,168,128,0.7)] hover:-translate-y-1">
                    Submit Registration
                </button>
            </div>
        </div>
    );


    // --- EXHIBITOR FUNNEL ---
    const renderExhibitorStep1 = () => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
            <h3 className="text-xl font-['expoSans'] font-semibold text-[var(--gold-dark)] mb-4">Step 1: Business Details & Pavilion</h3>
            <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Company / Brand Name *</label>
                <input name="companyName" onChange={handleExhibitorChange} value={exhibitorData.companyName} required className="input-couture" placeholder="Your Wedding Co." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Business Category *</label>
                    <select name="category" onChange={handleExhibitorChange} value={exhibitorData.category} required className="input-couture cursor-pointer bg-transparent">
                        <option value="" disabled>Select category</option>
                        <option value="hotel">Hotel / Resort</option>
                        <option value="planner">Wedding Planner</option>
                        <option value="caterer">Caterer</option>
                        <option value="travel">Travel & Tourism</option>
                        <option value="gifting">Gifting & Trousseau</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Preferred Pavilion *</label>
                    <select name="pavilion" onChange={handleExhibitorChange} value={exhibitorData.pavilion} required className="input-couture cursor-pointer bg-transparent">
                        <option value="" disabled>Select pavilion</option>
                        <option value="india">India Destination Zone</option>
                        <option value="international">International Zone</option>
                        <option value="luxury">Luxury Hotel Pavilion</option>
                        <option value="catering">Catering Zone</option>
                        <option value="honeymoon">Honeymoon Zone</option>
                        <option value="gifting">Gifting Zone</option>
                    </select>
                </div>
            </div>

            <button type="button" onClick={nextStep} className="w-full mt-6 bg-[var(--text-main)] hover:bg-black text-white font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all rounded-sm">
                Next Step
            </button>
        </div>
    );

    const renderExhibitorStep2 = () => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
            <h3 className="text-xl font-['expoSans'] font-semibold text-[var(--gold-dark)] mb-4">Step 2: Space Requirement & Budget</h3>

            <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-2">Space Requirement *</label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {['12 sqm (Shell)', '21 sqm (Bare)', '36 sqm', '50+ sqm'].map((size) => (
                        <div
                            key={size}
                            onClick={() => setExhibitorData({ ...exhibitorData, space: size })}
                            className={`p-4 border rounded-lg cursor-pointer text-center transition-all ${exhibitorData.space === size
                                    ? 'border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--text-main)] shadow-sm'
                                    : 'border-gray-200 hover:border-[var(--gold)]/50 text-[var(--text-muted)]'
                                }`}
                        >
                            <p className="text-sm font-bold font-['expoSans']">{size}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4 pt-4">
                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-2">Budget Range *</label>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { v: '3-5L', l: '₹3–5 Lakh' },
                        { v: '5-10L', l: '₹5–10 Lakh' },
                        { v: '10-25L', l: '₹10–25 Lakh' },
                        { v: '25L+', l: '₹25L+ (Sponsorship)' }
                    ].map((rng) => (
                        <div
                            key={rng.v}
                            onClick={() => setExhibitorData({ ...exhibitorData, budget: rng.v })}
                            className={`p-4 border rounded-lg cursor-pointer text-center transition-all ${exhibitorData.budget === rng.v
                                    ? 'border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--text-main)] shadow-sm'
                                    : 'border-gray-200 hover:border-[var(--gold)]/50 text-[var(--text-muted)]'
                                }`}
                        >
                            <p className="text-sm font-bold font-['expoSans']">{rng.l}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 mt-8 pt-4">
                <button type="button" onClick={prevStep} className="w-1/3 bg-transparent border border-[var(--text-main)]/20 text-[var(--text-main)] font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all hover:bg-gray-50 rounded-sm">
                    Back
                </button>
                <button type="button" onClick={nextStep} className="w-2/3 bg-[var(--text-main)] hover:bg-black text-white font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all rounded-sm shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]">
                    Next Step
                </button>
            </div>
        </div>
    );

    const renderExhibitorStep3 = () => (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
            <h3 className="text-xl font-['expoSans'] font-semibold text-[var(--gold-dark)] mb-4">Step 3: Outcome & Submission</h3>

            <div className="space-y-1 pb-6 border-b border-gray-100">
                <label className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">Primary Expected Outcome *</label>
                <select name="outcome" onChange={handleExhibitorChange} value={exhibitorData.outcome} required className="input-couture cursor-pointer bg-transparent">
                    <option value="" disabled>Select expected outcome</option>
                    <option value="leads">Lead generation</option>
                    <option value="awareness">Brand awareness</option>
                    <option value="sales">Direct sales</option>
                    <option value="partnerships">Partnerships</option>
                </select>
            </div>

            <div className="space-y-4 text-center pt-2">
                <h4 className="text-sm tracking-widest uppercase font-bold text-[var(--text-main)]">Submit & Action</h4>
                <p className="text-[12px] text-[var(--text-muted)] pb-4">Select how you'd like to proceed after submitting your enquiry.</p>
                <div className="grid grid-cols-2 gap-4">
                    <button type="submit" className="flex flex-col items-center justify-center p-4 border border-[var(--gold-light)] bg-white hover:bg-[var(--gold)]/5 hover:border-[var(--gold)] transition-all rounded-lg gap-2 group">
                        <span className="text-2xl opacity-70 group-hover:opacity-100">📄</span>
                        <span className="text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider">Download Brochure</span>
                    </button>
                    <button type="submit" className="flex flex-col items-center justify-center p-4 border border-[var(--gold-light)] bg-white hover:bg-[var(--gold)]/5 hover:border-[var(--gold)] transition-all rounded-lg gap-2 group">
                        <span className="text-2xl opacity-70 group-hover:opacity-100">📞</span>
                        <span className="text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider">Book a Call</span>
                    </button>
                    <button type="submit" className="flex flex-col items-center justify-center p-4 border border-green-200 bg-white hover:bg-green-50 hover:border-green-400 transition-all rounded-lg gap-2 group">
                        <span className="text-2xl opacity-70 group-hover:opacity-100">💬</span>
                        <span className="text-[11px] font-bold text-[var(--text-main)] uppercase tracking-wider">WhatsApp Connect</span>
                    </button>
                    <button type="submit" className="flex flex-col items-center justify-center p-4 border border-[var(--text-main)]/20 bg-white hover:bg-[var(--text-main)] hover:text-white transition-all rounded-lg gap-2 group">
                        <span className="text-2xl opacity-70 group-hover:opacity-100">✨</span>
                        <span className="text-[11px] font-bold uppercase tracking-wider group-hover:text-white text-[var(--text-main)] transition-colors">Custom Proposal</span>
                    </button>
                </div>
            </div>

            <div className="flex gap-4 mt-8 pt-4">
                <button type="button" onClick={prevStep} className="w-full bg-transparent border border-[var(--text-main)]/20 text-[var(--text-main)] font-bold tracking-[0.2em] uppercase py-4 text-[12px] transition-all hover:bg-gray-50 rounded-sm">
                    Back to Edit Details
                </button>
            </div>
        </div>
    );

    return (
        <>
            <Head title="Register Now | Plan Your Visit & Exhibit" />
            <div className="min-h-screen flex flex-col bg-[var(--bg-offwhite)] text-[var(--text-main)] selection:bg-[var(--gold)] selection:text-white">
                <Navbar />

                <main className="flex-grow relative flex flex-col items-center justify-start pt-5 pb-20 px-4 md:px-8">
                    {/* Background subtle styling */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <img
                            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1920"
                            alt="Wedding Background"
                            className="w-full h-full object-cover opacity-10 grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-offwhite)] via-transparent to-[var(--bg-white)]" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full mb-8">
                        {step === 1 && (
                            <>
                                <span className="text-[var(--gold-dark)] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
                                    Primary Registration
                                </span>
                                <h1 className="text-[32px] md:text-[48px] font-bold text-[var(--text-main)] mb-6 font-['expoSans'] leading-tight">
                                    Join the World of Destination Weddings
                                </h1>
                                <p className="text-[16px] md:text-[18px] text-[var(--text-muted)] mb-8 max-w-2xl font-light">
                                    India's biggest convergence of luxury brands, wedding planners, and couples.
                                </p>
                            </>
                        )}

                        {/* TOGGLE BUTTONS - Adjusted text per user instruction */}
                        {step === 1 && (
                            <div className="flex flex-col sm:flex-row gap-5 w-full md:w-fit px-4 md:px-0 mt-2">
                                <Link
                                    href="/register-now?type=visitor"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleTypeChange('visitor');
                                        window.history.pushState({}, '', '/register-now?type=visitor');
                                    }}
                                    className={`px-6 md:px-8 py-4 font-bold uppercase tracking-[0.1em] text-[11px] md:text-[12px] rounded-sm border-2 transition-all duration-300 text-center w-full sm:w-auto ${registrationType === 'visitor'
                                            ? 'bg-[var(--text-main)] text-white border-[var(--text-main)] shadow-lg scale-105'
                                            : 'bg-white text-[var(--text-main)] border-[var(--text-main)]/20 hover:border-[var(--text-main)] hover:bg-[var(--text-main)] hover:text-white'
                                        }`}
                                >
                                    💍 Plan Your Wedding Visit & Unlock Offers
                                    <span className="block text-[9px] opacity-70 mt-1 uppercase tracking-widest font-normal">(For Couples / Families / Visitors)</span>
                                </Link>
                                <Link
                                    href="/register-now?type=exhibitor"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleTypeChange('exhibitor');
                                        window.history.pushState({}, '', '/register-now?type=exhibitor');
                                    }}
                                    className={`px-6 md:px-8 py-4 font-bold uppercase tracking-[0.1em] text-[11px] md:text-[12px] rounded-sm border-2 transition-all duration-300 text-center w-full sm:w-auto ${registrationType === 'exhibitor'
                                            ? 'bg-[var(--text-main)] text-white border-[var(--text-main)] shadow-lg scale-105'
                                            : 'bg-white text-[var(--text-main)] border-[var(--text-main)]/20 hover:border-[var(--text-main)] hover:bg-[var(--text-main)] hover:text-white'
                                        }`}
                                >
                                    🏢 Showcase Your Brand at India's Biggest Expo
                                    <span className="block text-[9px] opacity-70 mt-1 uppercase tracking-widest font-normal">(For Brands / Businesses / Exhibitors)</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* MULTI-STEP REGISTRATION FORM CONTAINER */}
                    <div className="relative z-10 w-full max-w-3xl editorial-card bg-white rounded-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {renderProgressBar()}

                        <div className="mb-8 text-center flex justify-between items-center bg-[var(--bg-offwhite)] p-4 rounded-lg px-6">
                            <h2 className="text-xl font-['expoSans'] font-medium text-[var(--text-main)] relative inline-block">
                                {registrationType === 'visitor' ? 'Visitor Funnel' : 'Exhibitor Funnel'}
                            </h2>
                            <span className="bg-[var(--gold)] text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                                Step {step} of {totalSteps}
                            </span>
                        </div>

                        <form onSubmit={finalSubmit}>
                            {registrationType === 'visitor' && step === 1 && renderVisitorStep1()}
                            {registrationType === 'visitor' && step === 2 && renderVisitorStep2()}
                            {registrationType === 'visitor' && step === 3 && renderVisitorStep3()}
                            {registrationType === 'visitor' && step === 4 && renderVisitorStep4()}

                            {registrationType === 'exhibitor' && step === 1 && renderExhibitorStep1()}
                            {registrationType === 'exhibitor' && step === 2 && renderExhibitorStep2()}
                            {registrationType === 'exhibitor' && step === 3 && renderExhibitorStep3()}
                        </form>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
