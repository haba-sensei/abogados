<?php
use App\Http\Controllers\Admin\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BotManController;

/* HOME DASHBOARD ROUTES PREFIX DASH */
Route::get('/', [HomeController::class, 'render'])->name('dash');


Route::post('save_token', [HomeController::class, 'saveToken'])->name('admin.save_token');
Route::post('send_notification', [HomeController::class, 'sendNotification'])->name('admin.send_notification');



Route::get('{pageName}', [HomeController::class, 'render'])->name('page');



