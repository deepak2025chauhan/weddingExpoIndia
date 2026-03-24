import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const FAQs = () => {
    const faqData = [
        {
            category: "General Information",
            questions: [
                { q: "What is Wedding Expo India?", a: "Wedding Expo India is the premier event for the wedding industry, connecting couples with top-tier vendors, planners, and designers." },
                { q: "When and where is the next expo?", a: "The next expo is scheduled for October 2026 at Pragati Maidan, New Delhi." },
                { q: "Is the expo open to the public?", a: "Yes, the expo is open to both industry professionals and members of the public interested in wedding planning." }
            ]
        },
        {
            category: "Tickets & Registration",
            questions: [
                { q: "How can I purchase tickets?", a: "Tickets can be purchased online through our website or at the venue on the day of the event." },
                { q: "Are there group discounts?", a: "Yes, we offer special rates for groups of 10 or more. Please contact our ticketing team for more details." }
            ]
        },
        {
            category: "Exhibitors",
            questions: [
                { q: "How can I become an exhibitor?", a: "You can apply to be an exhibitor by filling out the form on our Business page." },
                { q: "What is included in the booth package?", a: "Our standard booth package includes floor space, basic lighting, power supply, and listing in the official expo guide." }
            ]
        }
    ];

    return (
        <SimplePageLayout 
            title="FAQs" 
            subtitle="Answers to common questions about Wedding Expo India."
        >
            <div className="space-y-16">
                {faqData.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">
                            {section.category}
                        </h2>
                        <div className="space-y-8 mt-8">
                            {section.questions.map((faq, fIdx) => (
                                <div key={fIdx} className="border-b border-[#EAEAEA] pb-6">
                                    <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                                    <p className="text-[#555555] leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SimplePageLayout>
    );
};

export default FAQs;
