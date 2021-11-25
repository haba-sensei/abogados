<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'App\Http\Controllers\Api\AuthController@login');
Route::post('register', 'App\Http\Controllers\Api\AuthController@register');
Route::get('optimize', 'App\Http\Controllers\Api\AuthController@optimize');

Route::group([
    'middleware' => 'jwt.verify',
    'prefix' => 'auth',
], function ($router) {
    Route::post('logout', 'App\Http\Controllers\Api\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\Api\AuthController@refresh');
    Route::put('updateUser', 'App\Http\Controllers\Api\AuthController@updateUser');
    Route::put('updatePass', 'App\Http\Controllers\Api\AuthController@updatePass');
    Route::get('getUser', 'App\Http\Controllers\Api\AuthController@getUser');
    Route::post('me', 'App\Http\Controllers\Api\AuthController@me');
});

