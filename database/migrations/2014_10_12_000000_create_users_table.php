<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('tipo_documentos', ['RUC','CEDULA']);
            $table->string('documento_legal', 15);
            $table->string('documento_personal', 15);
            $table->string('noveno_numero', 10);
            $table->string('celular', 15);
            $table->string('direccion', 191);
            $table->enum('estado', ['activo','inactivo']);
            $table->string('device_token')->nullable();
            $table->rememberToken();
            $table->string('profile_photo_path', 2048)->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
