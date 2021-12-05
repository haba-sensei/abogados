<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\MenuContenidoController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::get('optimize', [AuthController::class, 'optimize']);

Route::group([
    'middleware' => 'jwt.verify',
    'prefix' => 'auth',
], function ($router) {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::put('updateUser', [AuthController::class, 'updateUser']);
    Route::put('updatePass', [AuthController::class, 'updatePass']);
    Route::get('getUser', [AuthController::class, 'getUser']);
});

Route::group([
    'middleware' => 'jwt.verify',
    'prefix' => 'cont',
], function ($router) {
    Route::get('areas', [MenuContenidoController::class, 'areas']); //? 1 nivel
    Route::get('areas_cont/{id}', [MenuContenidoController::class, 'areas_cont']); //? 2 nivel
    Route::get('areas_cont_det/{id}', [MenuContenidoController::class, 'areas_cont_det']); //? 3 nivel
    Route::get('mapas/{zona}/{det_id}', [MenuContenidoController::class, 'mapas']); //? 4 nivel
    Route::get('mapas_sub/{id}', [MenuContenidoController::class, 'mapas_sub']); //? 5 nivel
    Route::get('mapas_sub_det/{id}', [MenuContenidoController::class, 'mapas_sub_det']); //? 6 nivel
    Route::get('mapas_sub_det_extra/{id}', [MenuContenidoController::class, 'mapas_sub_det_extra']); //? 7 nivel
    Route::get('zonas_func', [MenuContenidoController::class, 'zonas_func']); //? listar zona distrito provincia
    Route::get('zona_filter/{zona}/{det_id}', [MenuContenidoController::class, 'zona_filter']); //? filtro por zona
    Route::get('imageables/{nivel}/{menu}', [MenuContenidoController::class, 'imageables']); //? imagenes
    Route::get('attacheable/{nivel}/{menu}', [MenuContenidoController::class, 'attacheable']); //? adjuntos
});
