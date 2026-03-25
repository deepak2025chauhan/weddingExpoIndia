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

    Route::get('/sustainability-district', function () {
        return Inertia::render('UnderstandingExpo/SustainabilityDistrict');
    })->name('understanding.sustainability');

    Route::get('/mobility-district', function () {
        return Inertia::render('UnderstandingExpo/MobilityDistrict');
    })->name('understanding.mobility');

    Route::get('/opportunity-district', function () {
        return Inertia::render('UnderstandingExpo/OpportunityDistrict');
    })->name('understanding.opportunity');

    Route::get('/programme-for-people-and-planet', function () {
        return Inertia::render('UnderstandingExpo/ProgrammeForPeopleAndPlanet');
    })->name('understanding.programme');

    Route::get('/expo-initiatives', function () {
        return Inertia::render('UnderstandingExpo/ExpoInitiatives');
    })->name('understanding.initiatives');

    Route::get('/world-expos-history', function () {
        return Inertia::render('UnderstandingExpo/WorldExposHistory');
    })->name('understanding.history');

    Route::get('/after-expo-2020', function () {
        return Inertia::render('UnderstandingExpo/AfterExpo2020');
    })->name('understanding.after');
});

Route::prefix('experiences')->group(function () {
    Route::get('/uae-golden-jubilee', function () {
        return Inertia::render('Experiences/UAEGoldenJubilee');
    })->name('experiences.jubilee');

    Route::get('/theme-weeks', function () {
        return Inertia::render('Experiences/ThemeWeeks');
    })->name('experiences.theme-weeks');

    Route::get('/innovation-and-technology', function () {
        return Inertia::render('Experiences/InnovationTechnology');
    })->name('experiences.innovation');

    Route::get('/entertainment', function () {
        return Inertia::render('Experiences/Entertainment');
    })->name('experiences.entertainment');

    Route::get('/arts-culture', function () {
        return Inertia::render('Experiences/ArtsCulture');
    })->name('experiences.arts');

    Route::get('/food-and-livelihoods', function () {
        return Inertia::render('Experiences/FoodLivelihoods');
    })->name('experiences.food');

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
