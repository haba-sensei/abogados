@extends('../layouts/web/cuerpo')
@section('content')

<div class="app-layout theme-black">

    <header class="topbar">
        <div class="back-btn ico-hover" title="Back"><i class="lni lni-angle-double-left"></i></div>

        <div class="logo-place"><a href="#" title=""><img src="{{ asset('dist/images/icono.png') }}" width="40"></a></div>
        <div class="ac-settings ico-hover" title="Settings"><i class="lni lni-radio-button"></i></div>
    </header>

    <div class="bottom-header">
        <ul class="menu-left">
            <li><a class="ico-hover" href="newsfeed.html" title=""><i class="lni lni-home"></i></a></li>
            <li><a class="ico-hover" href="notifications.html" title=""><i class="lni lni-alarm"></i></a><span>3</span></li>
        </ul>
        <div id="nav-icon2" class="menu-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="menu-right">
            <li><a class="ico-hover" href="messages.html" title=""><i class="lni lni-comments"></i></a></li>
            <li class=""><a class="ico-hover" href="timeline.html" title=""><i class="lni lni-user"></i></a></li>
        </ul>
    </div>

    <nav>

                <section>
                    <div class="gap no-top" style="top: 90px;">
                        <div class="height-100vh">

                            <div class="conversation">
                                <div class="bg-image" style="background:url()"></div>
                                <div class="time">Hoy</div>
                                <ul class="chat-desc">
                                    <li class="you">
                                        <span>Asistente (Bot)</span>
                                        <p>Hola! para ayudarte debes elegir una de las siguientes opciones: </p>
                                        <p>1: Elemento  1</p>
                                        <p>2: Elemento  2</p>
                                        <p>3: Elemento  3</p>
                                        <p>4: Elemento  4</p>
                                        <em>11:54PM</em>
                                    </li>
                                    <li class="me">
                                        <span>Cliente</span>
                                        <p>1</p>
                                        <em>11:54PM</em>
                                    </li>

                                    <li class="you">
                                        <span>Asistente (Bot)</span>
                                        <p>Para continuar: </p><br>
                                        <p>1: Elemento  1</p>
                                        <p>2: Elemento  2</p>
                                        <em>11:54PM</em>
                                    </li>

                                    <li class="me">
                                        <span>Cliente</span>
                                        <p>2</p>
                                        <em>11:54PM</em>
                                    </li>


                                </ul>
                                <div class="mesg-write-box">
                                    <form method="post">
                                        <input type="text" placeholder="Type a Message">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


    </nav><!-- compact nav menu -->
    <section>
        <div class="gap redish high-opacity">
            <div class="content-bg-wrap" style="background: url({{ asset('images/resources/animate-bg.png') }})"></div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="head-meta">
                            <h5>Notificaciones </h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="gap">
            <div class="container">
                <div class="row">
                    <div class="col-12">


                    </div>
                </div>
            </div>
        </div>
    </section>




</div>

@endsection


@section('script')

<script>


var firebaseConfig = {
    apiKey: "AIzaSyCmF3I02OcesAK2dCmI01HS13FjU2QJQB0",
    authDomain: "abogadosfcm.firebaseapp.com",
    databaseURL: "https://abogadosfcm-default-rtdb.firebaseio.com",
    projectId: "abogadosfcm",
    storageBucket: "abogadosfcm.appspot.com",
    messagingSenderId: "891936953167",
    appId: "1:891936953167:web:39beeac3ae23e5942d2b3a",
    measurementId: "G-R6WYB6DZMY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    function initFirebaseMessagingRegistration() {
            messaging
            .requestPermission()
            .then(function () {
                return messaging.getToken()
            })
            .then(function(token) {
                console.log(token);
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    url: '{{ route("admin.save_token") }}',
                    type: 'POST',
                    data: {
                        token: token
                    },
                    dataType: 'JSON',
                    success: function (response) {
                        console.log(response);

                    },
                    error: function (err) {
                        console.log('User Chat Token Error'+ err);
                    },
                });
            }).catch(function (err) {
                console.log('User Chat Token Error'+ err);
            });
     }
    messaging.onMessage(function(payload) {
        const noteTitle = payload.notification.title;
        const noteOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon,
        };
        new Notification(noteTitle, noteOptions);
    });

    initFirebaseMessagingRegistration();
</script>

@endsection
