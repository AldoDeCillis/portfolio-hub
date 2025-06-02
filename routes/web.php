<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CVController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;

Route::get('/test-error', function () {
    abort(500, 'Test Error');
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/projects', [HomeController::class, 'projects'])->name('projects');

Route::get('/blog', [ArticleController::class, 'index'])
     ->name('blog.index');

Route::get('/blog/{slug}', [ArticleController::class, 'show'])
     ->name('blog.show');

     Route::post('/contact', [ContactController::class, 'store'])
     ->name('contact.store');
Route::post('/cv/generate',   [CVController::class, 'generate'])->name('cv.generate');
Route::get('/cv/{id}/preview',[CVController::class, 'preview'])->name('cv.preview');
Route::get('/cv/{id}/download', [CVController::class, 'downloadPdf'])->name('cv.download');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
