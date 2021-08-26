<?php
 
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\WebController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/* RUTAS HOME  */
 Route::get('/', [WebController::class, 'index'])->name('web.home');

Route::view('/web', 'web.home');


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
