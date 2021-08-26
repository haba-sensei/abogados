<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link type="image/x-icon" rel="icon" href="{{ asset('dist/images/icono.png') }}">
        <title>ABOGADOS | BIENVENIDO</title>


        <link rel="stylesheet" href="{{ mix('dist/css/main.min.css') }}">
        <link rel="stylesheet" href="{{ mix('dist/css/base_web.css') }}">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet">


        @livewireStyles
        @yield('css')
        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="{{ asset('dist/js/jquery.min.js') }}"></script>
        <script src="{{ asset('dist/js/main.min.js') }}" defer></script>
        <script src="{{ asset('dist/js/script.js') }}" defer></script>
        <script src="https://www.gstatic.com/firebasejs/7.23.0/firebase.js"></script>
    </head>

    @yield('body')

</html>
