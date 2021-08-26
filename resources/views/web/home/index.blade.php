@extends('../layouts/web/cuerpo')
@section('content')



<div class="app-layout">

    <section>
        <div class="gap no-bottom blackish low-opacity 60-vh">
            <div class="bg-image" style="background-image: url({{ asset('dist/images/login-bg.jpg') }})"></div>
            <!--<div class="content-bg-wrap" style="background: url(images/resources/login-bg.jpg)"></div> for animated bg-->
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="login-area">
                            <div class="logo"><img style="display: inline-block!important;" src="{{ asset('dist/images/icono.png') }}" width="55">
                            </div>
                            <div class="tabBox">
                                <ul class="tabs">
                                    <li><a href="#signin"><i class="lni lni-key"></i> Iniciar Session</a></li>
                                    <li><a href="#signup"><i class="lni lni-pencil"></i> Registrate</a></li>
                                </ul>
                                <div class="tabContainer">
                                    <div id="signin" class="tabContent">
                                        <h5>Proceda a iniciar session</h5>
                                        <h4><i class="lni lni-key"></i> Login</h4>
                                        <form class="form2" action="{{ route('login') }}" method="POST">
                                            @csrf

                                            <div>
                                                <input id="email" type="email" name="email" :value="old('email')" required
                                                    placeholder="EMAIL ">
                                                <label><i class="lni lni-user"></i></label>
                                            </div>
                                            <div>
                                                <input id="password" class="form-control" type="password" name="password" required
                                                    autocomplete="current-password" placeholder="PASSWORD">
                                                <label><i class="lni lni-lock"></i></label>
                                            </div>
                                            <x-jet-button class="main-btn color-background btnsend">
                                                {{ __('Iniciar Session') }}
                                            </x-jet-button>
                                        </form>
                                    </div>
                                    <div id="signup" class="tabContent">
                                        <h5>Proceda a registrarse</h5>
                                        <h4><i class="lni lni-lock"></i> Registrarme</h4>
                                        <form class="form2" action="{{ route('register') }}" method="POST">
                                            @csrf

                                            <div class="w-full">
                                                <select :value="old('tipo_documentos')" id="tipo_documentos"  name="tipo_documentos" style="width: inherit;
                                                background: #ff000000;
                                                color: #6b7280;
                                                border-left: none;
                                                border-right: none;
                                                border-top: none;padding-left: 0px;">
                                                    <option value="RUC">RUC</option>
                                                    <option value="CEDULA">CEDULA</option>
                                                </select>
                                                <label ><i style=" position: relative;
                                                    top: -12px;" class="lni lni-user"></i></label>
                                            </div>
                                            <div>
                                                <input type="text" id="documento_legal" :value="old('documento_legal')"  name="documento_legal"  placeholder="Numero de documento">
                                                <label><i class="lni lni-user"></i></label>
                                            </div>

                                            <div>
                                                <input id="name" class="form-control" type="text"  name="name" :value="old('name')" required
                                                    autocomplete="name" placeholder="Nombre Completo">
                                                <label><i class="lni lni-user"></i></label>
                                            </div>

                                            <div>
                                                <input id="documento_personal" name="documento_personal" :value="old('documento_personal')" type="text" placeholder="Dni / Pasaporte">
                                                <label><i class="lni lni-user"></i></label>
                                            </div>


                                            <div>
                                                <input id="email" class="form-control" type="email"   name="email" :value="old('email')" required
                                                    placeholder="Email ">
                                                <label><i class="lni lni-user"></i></label>
                                            </div>


                                            <div>
                                                <input id="celular" name="celular" type="text" :value="old('celular')" placeholder="Telefono / Celular">
                                                <label><i class="lni lni-user"></i></label>
                                            </div>

                                            <div>
                                                <input id="direccion" name="direccion" type="text" :value="old('direccion')" placeholder="Direccion">
                                                <label><i class="lni lni-user"></i></label>
                                            </div>

                                            <div>
                                                <input id="password" class="form-control" type="password" name="password" required
                                                    autocomplete="new-password" placeholder="Password ">
                                                <label><i class="lni lni-lock"></i></label>
                                            </div>
                                            <div>
                                                <input id="password_confirmation" class="form-control" type="password" name="password_confirmation"
                                                    required autocomplete="new-password" placeholder="Confirmar ">
                                                <label><i class="lni lni-lock"></i></label>
                                            </div>
                                            <x-jet-button class="ps-btn ps-btn--fullwidth">
                                                {{ __('Registrarme') }}
                                            </x-jet-button>

                                            <x-jet-validation-errors class="mb-4" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="col-lg-12">
        <div class="other-option">
            {{-- <h1></h1> --}}
            <h5>Ingresa con :</h5>
            <ul>
                <li><a class="facebook" href="#" title=""><i class="lni lni-facebook"></i></a></li>
                <li><a class="google" href="#" title=""><i class="lni lni-google"></i></a></li>
                <li><a class="twitter" href="#" title=""><i class="lni lni-twitter"></i></a></li>
            </ul>
        </div>
    </div>


</div>

@endsection
