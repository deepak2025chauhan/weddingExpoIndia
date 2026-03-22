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
