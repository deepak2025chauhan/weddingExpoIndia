import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const WorkerWelfare = () => {
    return (
        <SimplePageLayout 
            title="Worker Welfare" 
            subtitle="Our commitment to ethical labor standards and the well-being of all workers."
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                    <p>At Wedding Expo India, we believe that every worker should be treated with dignity and respect. We are committed to upholding the highest standards of worker welfare across all our operations and among our partners and vendors.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Fair Wages and Benefits</h2>
                    <p>We ensure that all our workers receive fair wages and benefits that comply with or exceed local labor laws. We also encourage our partners to adopt similar practices.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Health and Safety</h2>
                    <p>We are dedicated to providing a safe and healthy working environment for all our workers. We implement rigorous health and safety protocols and provide the necessary training and equipment.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Ethical Recruitment</h2>
                    <p>We are committed to ethical recruitment practices and do not tolerate any form of forced labor, human trafficking, or child labor within our supply chain.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Diversity and Inclusion</h2>
                    <p>We celebrate diversity and are committed to creating an inclusive work environment where everyone has equal opportunities for growth and development.</p>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default WorkerWelfare;
