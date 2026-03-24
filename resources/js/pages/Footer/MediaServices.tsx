import SimplePageLayout from '@/components/SimplePageLayout';
import React from 'react';

const MediaServices = () => {
    return (
        <SimplePageLayout 
            title="Media Services" 
            subtitle="Resources and support for press and media professionals."
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold mb-6">Welcome to the Newsroom</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Stay up-to-date with the latest announcements, updates, and stories from Wedding Expo India. 
                        Our media services team is here to provide you with all the information and resources you need for your coverage.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-[#EAEAEA] p-8 rounded-sm hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-[#A38D56]">Press Releases</h3>
                        <p className="text-sm text-[#555555]">Access our library of official press releases and announcements.</p>
                    </div>
                    <div className="border border-[#EAEAEA] p-8 rounded-sm hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-[#A38D56]">Media Kit</h3>
                        <p className="text-sm text-[#555555]">Download high-resolution logos, images, and brand guidelines.</p>
                    </div>
                    <div className="border border-[#EAEAEA] p-8 rounded-sm hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-[#A38D56]">Accreditation</h3>
                        <p className="text-sm text-[#555555]">Register for media passes and access to our dedicated press center.</p>
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Media Contact</h2>
                    <p className="mb-4">For all media inquiries, interview requests, and press accreditation, please contact our PR team:</p>
                    <div className="bg-[#F6F6F6] p-6 rounded-sm inline-block">
                        <p className="font-bold">Media Relations</p>
                        <p>Email: media@weddingexpoindia.in</p>
                        <p>Phone: +91 (123) 456-7895</p>
                    </div>
                </section>
            </div>
        </SimplePageLayout>
    );
};

export default MediaServices;
