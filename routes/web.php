<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

Route::prefix('understanding-expo')->group(function () {
    Route::get('/participants', function () {
        return Inertia::render('UnderstandingExpo/Participants');
    })->name('understanding.participants');

    Route::prefix('participants')->group(function () {
        Route::get('/benefits', function () {
            return Inertia::render('UnderstandingExpo/ExhibitorBenefits');
        })->name('understanding.participants.benefits');
        Route::get('/application', function () {
            return Inertia::render('UnderstandingExpo/ExhibitorApplication');
        })->name('understanding.participants.application');
    });

    Route::prefix('opportunity-district')->group(function () {
        Route::get('/', function () {
            return Inertia::render('UnderstandingExpo/OpportunityDistrict');
        })->name('understanding.opportunity');
        Route::get('/individual-participation', function () {
            return Inertia::render('UnderstandingExpo/IndividualParticipation');
        })->name('understanding.opportunity.individual');
        Route::get('/request-free-stand', function () {
            return Inertia::render('UnderstandingExpo/FreeStandRequest');
        })->name('understanding.opportunity.request-free-stand');
        Route::get('/new-product-showcase', function () {
            return Inertia::render('UnderstandingExpo/ProductShowcase');
        })->name('understanding.opportunity.product-showcase');
    });

    Route::prefix('sponsorship-plan')->group(function () {
        Route::get('/', function () {
            return Inertia::render('UnderstandingExpo/SponsorshipPlan');
        })->name('understanding.sponsorship');
        Route::get('/speaker-section', function () {
            return Inertia::render('UnderstandingExpo/SpeakerSection');
        })->name('understanding.sponsorship.speaker');
        Route::get('/profiles', function () {
            return Inertia::render('UnderstandingExpo/Profiles');
        })->name('understanding.sponsorship.profiles');
        Route::get('/blog', function () {
            return Inertia::render('UnderstandingExpo/Blog');
        })->name('understanding.sponsorship.blog');
        Route::get('/why-visit', function () {
            return Inertia::render('UnderstandingExpo/WhyVisit');
        })->name('understanding.sponsorship.why-visit');
    });

    Route::get('/expo-initiatives', function () {
        return Inertia::render('UnderstandingExpo/ExpoInitiatives');
    })->name('understanding.initiatives');

    // Keep existing routes for completeness
    Route::get('/sustainability-district', function () {
        return Inertia::render('UnderstandingExpo/SustainabilityDistrict');
    })->name('understanding.sustainability');
    Route::get('/mobility-district', function () {
        return Inertia::render('UnderstandingExpo/MobilityDistrict');
    })->name('understanding.mobility');
    Route::get('/programme-for-people-and-planet', function () {
        return Inertia::render('UnderstandingExpo/ProgrammeForPeopleAndPlanet');
    })->name('understanding.programme');
    Route::get('/world-expos-history', function () {
        return Inertia::render('UnderstandingExpo/WorldExposHistory');
    })->name('understanding.history');
    Route::get('/after-expo-2020', function () {
        return Inertia::render('UnderstandingExpo/AfterExpo2020');
    })->name('understanding.after');
});

Route::prefix('experiences')->group(function () {
    Route::get('/theme-weeks', function () {
        return Inertia::render('Experiences/ThemeWeeks');
    })->name('experiences.theme-weeks');

    Route::get('/arts-culture', function () {
        return Inertia::render('Experiences/ArtsCulture');
    })->name('experiences.arts');

    Route::get('/entertainment', function () {
        return Inertia::render('Experiences/Entertainment');
    })->name('experiences.entertainment');

    Route::get('/food-and-livelihoods', function () {
        return Inertia::render('Experiences/FoodLivelihoods');
    })->name('experiences.food');

    Route::get('/international-destination-pavilion', function () {
        return Inertia::render('Experiences/InternationalPavilion');
    })->name('experiences.international-pavilion');

    Route::get('/india-destination-pavilion', function () {
        return Inertia::render('Experiences/IndiaPavilion');
    })->name('experiences.india-pavilion');

    Route::get('/luxury-resort-hotel-pavilion', function () {
        return Inertia::render('Experiences/LuxuryResort');
    })->name('experiences.luxury-resort');

    Route::get('/cultural-wedding-showcase-arena', function () {
        return Inertia::render('Experiences/CulturalWedding');
    })->name('experiences.cultural-wedding');

    Route::get('/wedding-cuisine-catering-sweets-pavilion', function () {
        return Inertia::render('Experiences/WeddingCuisine');
    })->name('experiences.wedding-cuisine');

    Route::get('/honeymoon-travel-zone', function () {
        return Inertia::render('Experiences/HoneymoonTravel');
    })->name('experiences.honeymoon');

    Route::get('/gifting-showcase-area', function () {
        return Inertia::render('Experiences/GiftingShowcase');
    })->name('experiences.gifting');

    // Keep others
    Route::get('/uae-golden-jubilee', function () {
        return Inertia::render('Experiences/UAEGoldenJubilee');
    })->name('experiences.jubilee');
    Route::get('/innovation-and-technology', function () {
        return Inertia::render('Experiences/InnovationTechnology');
    })->name('experiences.innovation');
    Route::get('/sports-fitness-wellbeing', function () {
        return Inertia::render('Experiences/SportsFitnessWellbeing');
    })->name('experiences.sports');
    Route::get('/architecture', function () {
        return Inertia::render('Experiences/Architecture');
    })->name('experiences.architecture');
    Route::get('/business-entrepreneurship', function () {
        return Inertia::render('Experiences/BusinessEntrepreneurship');
    })->name('experiences.business');
    Route::get('/education-programmes', function () {
        return Inertia::render('Experiences/EducationProgrammes');
    })->name('experiences.education');
});

Route::prefix('footer')->group(function () {
    Route::get('/privacy-policy', function () {
        return Inertia::render('Footer/PrivacyPolicy');
    })->name('footer.privacy');

    Route::get('/terms-conditions', function () {
        return Inertia::render('Footer/TermsConditions');
    })->name('footer.terms');

    Route::get('/cookie-policy', function () {
        return Inertia::render('Footer/CookiePolicy');
    })->name('footer.cookies');

    Route::get('/contact-us', function () {
        return Inertia::render('Footer/ContactUs');
    })->name('footer.contact');

    Route::get('/business', function () {
        return Inertia::render('Footer/Business');
    })->name('footer.business');

    Route::get('/media-services', function () {
        return Inertia::render('Footer/MediaServices');
    })->name('footer.media');

    Route::get('/faqs', function () {
        return Inertia::render('Footer/FAQs');
    })->name('footer.faqs');

    Route::get('/disclaimer', function () {
        return Inertia::render('Footer/Disclaimer');
    })->name('footer.disclaimer');

    Route::get('/corporate-policies', function () {
        return Inertia::render('Footer/CorporatePolicies');
    })->name('footer.corporate');

    Route::get('/visitor-terms', function () {
        return Inertia::render('Footer/VisitorTerms');
    })->name('footer.visitor');

    Route::get('/worker-welfare', function () {
        return Inertia::render('Footer/WorkerWelfare');
    })->name('footer.worker');
});

Route::prefix('discover')->group(function () {
    Route::get('/exhibitors', function () {
        return Inertia::render('Discovery/Exhibitors');
    })->name('discover.exhibitors');

    Route::get('/exhibitors/{slug}', function ($slug) {
        // In a real app, you'd fetch the exhibitor from the DB
        return Inertia::render('Discovery/ExhibitorDetail', [
            'exhibitor' => null // Passing null to use demo data in component
        ]);
    })->name('discover.exhibitor-detail');
});

Route::get('/register-now', function () {
    return Inertia::render('RegisterNow');
})->name('register.now');

Route::get('/floor-plan', function () {
    return Inertia::render('FloorPlan');
})->name('floor-plan');

Route::get('/expo-map', function () {
    return Inertia::render('ExpoMap');
})->name('expo-map');

Route::get('/news', function () {
    return Inertia::render('News');
})->name('news');
