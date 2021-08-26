@extends('../layouts/web/cabezera')

@section('body')
    <body  class="full-page">

        @yield('content')
        @include('../layouts/web/loader')

        @livewireScripts

        @yield('script')
    </body>
@endsection
