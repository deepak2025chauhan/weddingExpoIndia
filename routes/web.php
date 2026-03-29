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

    Route::get('/participants/benefits', function () {
        return Inertia::render('UnderstandingExpo/ExhibitorBenefits');
    })->name('understanding.participants.benefits');

    Route::get('/participants/application', function () {
        return Inertia::render('UnderstandingExpo/ExhibitorApplication');
    })->name('understanding.participants.application');

    Route::get('/opportunity-district', function () {
        return Inertia::render('UnderstandingExpo/OpportunityDistrict');
    })->name('understanding.opportunity');

    Route::get('/opportunity-district/individual-participation', function () {
        return Inertia::render('UnderstandingExpo/IndividualParticipation');
    })->name('understanding.opportunity.individual');

    Route::get('/opportunity-district/request-free-stand', function () {
        return Inertia::render('UnderstandingExpo/FreeStandRequest');
    })->name('understanding.opportunity.free-stand');

    Route::get('/opportunity-district/new-product-showcase', function () {
        return Inertia::render('UnderstandingExpo/ProductShowcase');
    })->name('understanding.opportunity.product-showcase');

    Route::get('/expo-initiatives', function () {
        return Inertia::render('UnderstandingExpo/ExpoInitiatives');
    })->name('understanding.initiatives');

    Route::get('/sponsorship-plan', function () {
        return Inertia::render('UnderstandingExpo/SponsorshipPlan');
    })->name('understanding.sponsorship');

    Route::get('/sponsorship-plan/speaker-section', function () {
        return Inertia::render('UnderstandingExpo/SpeakerSection');
    })->name('understanding.sponsorship.speaker');

    Route::get('/sponsorship-plan/profiles', function () {
        return Inertia::render('UnderstandingExpo/Profiles');
    })->name('understanding.sponsorship.profiles');

    Route::get('/sponsorship-plan/blog', function () {
        return Inertia::render('UnderstandingExpo/Blog');
    })->name('understanding.sponsorship.blog');

    Route::get('/sponsorship-plan/why-visit', function () {
        return Inertia::render('UnderstandingExpo/WhyVisit');
    })->name('understanding.sponsorship.why-visit');

    Route::get('/sustainability-district', function () {
        return Inertia::render('UnderstandingExpo/SustainabilityDistrict');
    })->name('understanding.sustainability');

    Route::get('/mobility-district', function () {
        return Inertia::render('UnderstandingExpo/MobilityDistrict');
    })->name('understanding.mobility');

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

    Route::get('/international-destination-pavillion', function () {
        return Inertia::render('Experiences/InternationalPavilion');
    })->name('experiences.international');

    Route::get('/india-destination-pavillion', function () {
        return Inertia::render('Experiences/IndiaPavilion');
    })->name('experiences.india');

    Route::get('/luxury-resort-hotel-pavilion', function () {
        return Inertia::render('Experiences/LuxuryResort');
    })->name('experiences.luxury');

    Route::get('/cultural-wedding-showcase-arena', function () {
        return Inertia::render('Experiences/CulturalWedding');
    })->name('experiences.cultural');

    Route::get('/wedding-cuisine-catering-sweets-pavillion', function () {
        return Inertia::render('Experiences/WeddingCuisine');
    })->name('experiences.cuisine');

    Route::get('/honeymoon-travel-zone', function () {
        return Inertia::render('Experiences/HoneymoonTravel');
    })->name('experiences.honeymoon');

    Route::get('/gifting-showcase-area', function () {
        return Inertia::render('Experiences/GiftingShowcase');
    })->name('experiences.gifting');
});

Route::get('/floor-plan', function () {
    return Inertia::render('FloorPlan');
})->name('floor.plan');

Route::get('/expo-map', function () {
    return Inertia::render('ExpoMap');
})->name('expo.map');

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
