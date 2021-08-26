<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        // Validator::make($input, [
        //     'name' => ['required', 'string', 'max:255'],
        //     'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        //     'password' => $this->passwordRules(),
        //     'tipo_documentos' => ['required'],
        //     'documento_legal' => ['required'],
        //     'documento_personal' => ['required'],
        //     'celular' => ['required', 'string'],
        //     'direccion' => ['required', 'string'],
        // ])->validate();
        ;


        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'tipo_documentos' => $input['tipo_documentos'],
            'documento_legal' => $input['documento_legal'],
            'documento_personal' => $input['documento_personal'],
            'noveno_numero' => substr($input['documento_legal'], -2, 1),
            'celular' => $input['celular'],
            'direccion' => $input['direccion'],
            'estado' => 'activo',
        ]);
    }
}
